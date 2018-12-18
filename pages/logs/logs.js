//logs.js
const util = require('../../utils/util.js')

Page({
  data:{
    list:[
      {
        details:'',
        status:''
      }
    ],
    itemval:''
  },
  fn(event){
    this.data.itemval = event.detail.value;
    this.data.list.push(
      {
        details:this.data.itemval,
        status:false
      }
    );
    var list = this.data.list;
    if(event.detail.value){
      this.setData({
        list:list,
        itemval:''
      })
    }
  },
  move(event){
    // console.log(index)
    var index = event.currentTarget.dataset.index;
    this.data.list[index].status = !(this.data.list[index].status);
    var newlist = this.data.list;
    this.setData({
      list:newlist
    }) 
  }
})
