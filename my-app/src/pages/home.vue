<template>
  <f7-page>
    <f7-navbar>
      <f7-nav-title>我的地址</f7-nav-title>
      <f7-nav-right>
        <f7-button color="green" @click="addAddress">+ 添加收货地址</f7-button>
      </f7-nav-right>
    </f7-navbar>
    <f7-list v-model="myAddress">
      <f7-list-item v-for="(items,index) in myAddress" :key="index">
        <div class="leftData">
          <div class="userMessage">{{items.name}}<span class="phoneNumber">{{items.phone}}</span></div>
          <div class="address">{{items.address}}{{items.detailAddress}}</div>
        </div>
        <div class="edit">
          <f7-list-item title="编辑" @click="edits(items,index)"></f7-list-item>
        </div>
      </f7-list-item>
      <f7-list-item></f7-list-item>
    </f7-list>
  </f7-page>
</template>
<script>
  export default {
    name: 'Home',
    data () {
      return {
        msg: '我的收货地址',
        showArrow: true,
        myAddress: [
          // {
          //   name: '阮律智',
          //   phone: '15868177611',
          //   address: '浙江省杭州市浙江省杭州市浙江省杭州市浙江省',
          //   detailAddress: '滨江'
          // }
        ]
      }
    },
    mounted() {
      this.updateData()
    },
    methods : {
      edits(data,index) {
        this.$f7router.navigate(`/form/?name=${data.name}&phone=${data.phone}&address=${data.address}&index=${index}&detailAddress=${data.detailAddress}`)
      },
      addAddress () {
        this.$f7router.navigate(`/form/`)
      },
      updateData() {
        if (JSON.parse(localStorage.getItem('indexUrl'))) {
          this.myAddress = JSON.parse(localStorage.getItem('indexUrl'))
        } else {
          this.myAddress = []
        }
        if (this.$f7route.query.index>=0) {
            if (this.$f7route.query.delete === 'true') {
              this.myAddress.splice(this.$f7route.query.index,1)
          } else {
          this.myAddress[this.$f7route.query.index].name = this.$f7route.query.name
          this.myAddress[this.$f7route.query.index].phone = this.$f7route.query.phone
          this.myAddress[this.$f7route.query.index].address = this.$f7route.query.address
          this.myAddress[this.$f7route.query.index].detailAddress = this.$f7route.query.detailAddress
        }
          localStorage.setItem('indexUrl',JSON.stringify(this.myAddress))
        } else if (this.$f7route.query.index === '-1') {
          // this.myAddress = JSON.parse(localStorage.getItem('indexUrl'))
          this.myAddress.push({
            name:this.$f7route.query.name,
            phone:this.$f7route.query.phone,
            address:this.$f7route.query.address,
            detailAddress:this.$f7route.query.detailAddress
          })
          localStorage.setItem('indexUrl',JSON.stringify(this.myAddress))
        }
        this.myAddress = JSON.parse(localStorage.getItem('indexUrl'))
      }
    }
  }
</script>
<style>
.navbar .title{
  font-weight: normal;
}
  .list .addAddress .item-inner .item-title{
    font-size: 3vw;
    color: #4d9fe0;
  }
  .leftData{
    width: 70%;
  }
  .leftData .userMessage{
    font-size: 4vw;
  }
  .userMessage .phoneNumber{
    padding-left: 5%;
    font-size: 3vw;
    color: #888888;
  }
  .leftData .address{
    font-size: 3vw;
  }
  .edit{
    font-size: 3vw;
    color: #888888;
    border-left: 1px solid #eeeef3;
  }
</style>
