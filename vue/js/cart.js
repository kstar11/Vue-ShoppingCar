var vm = new Vue({
    el: '#app',
    data() {
        return {
            proList: '',
            totalMoney: 0,
            allselect: false,
            delShow : false,
            delindex : ''
        }
    },
    created() {
        this.getProList()
    },
    filters: {
        moneyFilter: function (input, type) {
            return '￥' + input.toFixed(2) + type
        }
    },
    methods: {
        getProList: function () {
            this.$http.get('./data/cartData.json').then(
                res => {
                    console.log(res.data.result.list)
                    this.proList = res.data.result.list
                }
            )
        },
        changeMoney: function (item, num) {
            if (num > 0) {
                item.productQuantity++
            } else {
                item.productQuantity--
                if (item.productQuantity < 1) {
                    item.productQuantity = 1
                }
            }
            this.calcTotalMoney()
        },
        checkPro: function (item) {
            if (typeof item.checkd == 'undefined') {
                this.$set(item, 'checkd', true)
            } else {
                item.checkd = !item.checkd
            }
			var checkAllFlags = true;
            this.proList.forEach((v,i) => {
                checkAllFlags = v.checkd && checkAllFlags
            })
            this.allselect = checkAllFlags
            this.calcTotalMoney()
        },
        calcTotalMoney: function () {
            this.totalMoney = 0;
            this.proList.forEach((v, i) => {
                if (v.checkd) {
                    this.totalMoney += v.productPrice * v.productQuantity
                }
            })
        },
        selectAll: function (flag) {
            this.allselect = flag;
            this.proList.forEach((v, i) => {
                if (typeof v.checkd == 'undefined') {
                    this.$set(v, 'checkd', this.allselect)
                } else {
					v.checkd = this.allselect;
                }
            })
            this.calcTotalMoney()
        },
        delBtn:function(index){
            this.delShow = true
            this.delindex = index
        },
        delPro:function(){
            var index = this.delindex
            this.proList.splice(index,1)
            this.calcTotalMoney()
            this.delShow = false
        }
    }
})