<template>
  <f7-page>
    <f7-navbar :title=title back-link="Back">
      <f7-nav-right class="deleteAddress">
        <f7-link v-if="deletes" @click="deleteAddress">删除</f7-link>
      </f7-nav-right>
    </f7-navbar>
    <f7-list form class="editUserMessage" v-model="userMessage">
      <f7-list-input
        :value="userMessage.name"
        @input="userMessage.name = $event.target.value"
        label="收货人"
        type="text"
        placeholder="请输入收货人"
      />
      <f7-list-input
        :value="userMessage.phone"
        @input="userMessage.phone = $event.target.value"
        label="手机号码"
        type="tel"
        maxlength="11"
        placeholder="请输入手机号码"
      />
      <f7-list-input
        raised @focus="openPop"
        :value="userMessage.address"
        @input="userMessage.address = $event.target.value"
        label="地址"
        type="text"
        :readonly="readonly"
        placeholder="请选择地址"
      />
      <f7-list-input
        :value="userMessage.detailAddress"
        @input="userMessage.detailAddress = $event.target.value"
        label="详细地址"
        type="text"
        placeholder="请输入详细地址"
      />
    </f7-list>
    <f7-button fill class="submitBtn" @click="submitChange">确认</f7-button>
    <f7-popup class="demo-popup" :opened="popupOpened" @popup:closed="popupOpened = false">
      <f7-page>
        <div class="left navbar">
          <div class="navbar-inner sliding">
            <a href="#" class="link back bbb">
              <f7-link popup-close><i class="icon icon-back"></i>Back</f7-link>
            </a>
          </div>
        </div>
        <f7-list v-if="show === 'provinces'">
          <f7-list-item v-for="(item,index) in regionsData.provincesArr" :key="index" :title="item"
                        @click="chooseProvince(item)"></f7-list-item>
        </f7-list>
        <f7-list v-if="show === 'city'">
          <f7-list-item v-for="(item,index) in regionsData.citiesArr" :key="index" :title="item"
                        @click="chooseCity(item)"></f7-list-item>
        </f7-list>
        <f7-list v-if="show === 'area'">
          <f7-list-item v-for="(item,index) in regionsData.areasArr" :key="index" :title="item"
                        @click="chooseArea(item)"></f7-list-item>
        </f7-list>
      </f7-page>
    </f7-popup>
  </f7-page>
</template>

<script>
  import {regions} from '../js/regionsObject2'
  export default {
    name: 'Form',
    data() {
      return {
        userMessage: {},
        title: '',
        deletes: false,
        popupOpened: false,
        regionsData: regions,
        show: 'provinces',
        areas: {},
        readonly: true
      }
    },
    mounted() {
      this.getData()
    },
    methods: {
      getData() {
        this.userMessage = this.$f7route.query
        if (this.$f7route.query.index >= 0) {
          this.title = '编辑收货地址'
          this.deletes = true
        } else {
          this.title = '添加收货地址'
          this.userMessage.index = -1
          this.deletes = false
        }
      },
      submitChange() {
        if (Object.keys(this.userMessage).length < 5) {
          this.$f7.dialog.alert('', '请完善信息!')
          return false
        }
        for (let i in this.userMessage) {
          if (this.userMessage[i] === 'undefined'||this.userMessage[i] === '') {
            this.$f7.dialog.alert('','请完善信息!')
            return false
          }
        }
        this.$f7router.navigate(`/?name=${this.userMessage.name}&phone=${this.userMessage.phone}&address=${this.userMessage.address}&index=${this.userMessage.index}&detailAddress=${this.userMessage.detailAddress}`)
      },
      deleteAddress() {
        let _this = this
        _this.$f7.dialog.confirm('', '确定删除该信息', function () {
          _this.$f7router.navigate(`/?name=${_this.userMessage.name}&phone=${_this.userMessage.phone}&address=${_this.userMessage.address}&index=${_this.userMessage.index}&delete=true&detailAddress=${_this.userMessage.detailAddress}`)
        });
      },
      chooseProvince(items) {
        this.regionsData = regions.provinces[items]
        this.show = 'city'
        this.areas.province = items
      },
      chooseCity(items) {
        this.regionsData = this.regionsData.cities[items]
        this.show = 'area'
        this.areas.city = items
      },
      chooseArea(item) {
        this.areas.area = item
        this.userMessage.address = `${this.areas.province}-${this.areas.city}-${this.areas.area}`
        this.popupOpened = false
      },
      openPop() {
        this.regionsData = regions
        this.show = 'provinces'
        this.popupOpened = true
        this.areas = {}
      }
    }
  }
</script>
<style>
  .demo-popup .page-content a {
    float: right;
    line-height: var(--f7-list-margin-vertical);
    margin-right: var(--f7-list-margin-vertical);
  }

  .editUserMessage .item-content .item-inner .input-with-value {
    font-size: 4vw;
  }

  .editUserMessage .item-content .item-inner input {
    font-size: 4vw;
  }

  .editUserMessage .item-content .item-input-wrap input {
    color: #838383;
  }

  .editUserMessage .item-content .item-inner .item-label {
    font-size: 4vw;
  }

  .submitBtn {
    width: 90%;
    margin: 0 auto;
    font-size: 4vw;
    line-height: 2.5;
    height: auto;
  }

  .deleteAddress .link {
    color: red;
    font-size: 4vw;
  }

  .closeChoose {
    position: fixed;
    top: 0;
    right: 0;
  }

  .demo-popup .left {
    display: block;
    overflow: hidden;
    padding: 2vw 0;
    padding-left: 2vw;
    border-bottom: 1px solid #eeeeee;
    background-color: #eeeeee;
  }

  .demo-popup .page-content .link {
    float: left;
  }

  .md .navbar a.link.bbb {
    padding: 0;
  }
</style>

