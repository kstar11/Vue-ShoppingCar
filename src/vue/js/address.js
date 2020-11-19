var vm = new Vue({
    el: '.container',
    data() {
        return {
            addressList: [],
            listnum: 3,
            currentIndex : 0,
            delShow:false,
            delIndex : "",
            sendtype:1,
            modShow:false,
            modAddName:'',
            modAddStreet:'',
            modAddTel:'',
            modIndex:''

        }
    },
    created() {
        this.getAddress()
    },
    computed: {
        compAddress: function () {
            return this.addressList.slice(0, this.listnum)
        }
    },
    methods: {
        getAddress: function () {
            this.$http.get('./data/address.json').then(res => {
                this.addressList = res.data.result
            })
        },
        delBtn:function(index){
            this.delIndex = index
            this.delShow = true
        },
        delAddress:function(){
            var index = this.delIndex
            this.addressList.splice(index,1)
            this.delShow = false
        },
        defAddress:function(index){
            this.addressList.forEach((v,i) => {
                if(index == i){
                    v.isDefault = true
                } else {
                    v.isDefault = false
                }
            })
        },
        modAddress:function(item,index){
            this.modShow = true
            this.modAddName = item.userName
            this.modAddStreet = item.streetName
            this.modAddTel = item.tel
            this.modIndex = index
        },
        saveAddress:function(){
            var index = this.modIndex
            this.addressList[index].userName = this.modAddName
            this.addressList[index].streetName = this.modAddStreet
            this.addressList[index].tel = this.modAddTel
            this.modShow = false
        }
    }
})