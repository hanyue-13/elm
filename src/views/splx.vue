<template>
  <div id="app">
    <div class="div-1">
      <div class="div-img"></div>
      <div class="ul-2">
        <el-popover placement="top-start" width="354px" visible-arrow="false" trigger="hover">
          <div class="div-popover">
            <div class="div-popover-2">
              <h1 class="h-1">
                账户信息
                <span class="xgmm">修改密码</span>
              </h1>
            </div>
            <ul class="ul-3">
              <li>登录用户:&nbsp;{{Admin}}</li>
              <li>上次登录:&nbsp;{{date}}</li>
              <li>IP地址:&nbsp;{{diz}}</li>
            </ul>
          </div>
          <el-button slot="reference">
            <i class="el-icon-user-solid"></i>
            {{Admin}}
          </el-button>
        </el-popover>
        <el-popover placement="top-start" trigger="hover">
          <div class="div-tz">
            <h1 class="h-2">
              <span @click="tabqh(0)">业务消息</span>
              <span @click="tabqh(1)">系统公告</span>
              <span @click="tabqh(2)">升级公告</span>
            </h1>
            <div class="div-tab1" v-show="tabval==0">
              <ul class="ul-5">
                <li>
                  <h4 style=" margin: 0px; padding: 0px;">【审核信息】你有一笔采购单待审核</h4>
                  <span style="font-size:8px">2018-10-26 09:18:00</span>
                </li>
                <li>
                  <h4 style=" margin: 0px; padding: 0px;">【审核信息】你有一笔采购单待审核</h4>
                  <span style="font-size:8px">2018-10-26 09:18:00</span>
                </li>
                <li>
                  <h4 style=" margin: 0px; padding: 0px;">【审核信息】你有一笔采购单待审核</h4>
                  <span style="font-size:8px">2018-10-26 09:18:00</span>
                </li>
                <li>
                  <h4 style=" margin: 0px; padding: 0px;">【审核信息】你有一笔采购单待审核</h4>
                  <span style="font-size:8px">2018-10-26 09:18:00</span>
                </li>
                <li>
                  <h4 style=" margin: 0px; padding: 0px;">【审核信息】你有一笔采购单待审核</h4>
                  <span style="font-size:8px">2018-10-26 09:18:00</span>
                </li>
                <span class="span-3">查看全部</span>
              </ul>
            </div>
            <div class="div-tab1" v-show="tabval==1">
              <ul class="ul-5">
                <li>
                  <h4 style=" margin: 0px; padding: 0px;">花生米:商品管理功能培训</h4>
                  <span style="font-size:8px">2018-10-26 09:18:00</span>
                </li>
                <li>
                  <h4 style=" margin: 0px; padding: 0px;">花生米:商品管理功能培训</h4>
                  <span style="font-size:8px">2018-10-26 09:18:00</span>
                </li>
                <li>
                  <h4 style=" margin: 0px; padding: 0px;">花生米:商品管理功能培训</h4>
                  <span style="font-size:8px">2018-10-26 09:18:00</span>
                </li>
                <li>
                  <h4 style=" margin: 0px; padding: 0px;">花生米:商品管理功能培训</h4>
                  <span style="font-size:8px">2018-10-26 09:18:00</span>
                </li>
                <li>
                  <h4 style=" margin: 0px; padding: 0px;">花生米:商品管理功能培训</h4>
                  <span style="font-size:8px">2018-10-26 09:18:00</span>
                </li>
                <span class="span-3">查看全部</span>
              </ul>
            </div>
            <div class="div-tab1" v-show="tabval==2">
              <ul class="ul-5">
                <li>
                  <h4 style=" margin: 0px; padding: 0px;">花生米(2019-8-6 08:30:00)升级</h4>
                  <span style="font-size:8px">2018-10-26 09:18:00</span>
                </li>
                <li>
                  <h4 style=" margin: 0px; padding: 0px;">花生米(2019-8-6 08:30:00)升级</h4>
                  <span style="font-size:8px">2018-10-26 09:18:00</span>
                </li>
                <li>
                  <h4 style=" margin: 0px; padding: 0px;">花生米(2019-8-6 08:30:00)升级</h4>
                  <span style="font-size:8px">2018-10-26 09:18:00</span>
                </li>
                <li>
                  <h4 style=" margin: 0px; padding: 0px;">花生米(2019-8-6 08:30:00)升级</h4>
                  <span style="font-size:8px">2018-10-26 09:18:00</span>
                </li>
                <li>
                  <h4 style=" margin: 0px; padding: 0px;">花生米(2019-8-6 08:30:00)升级</h4>
                  <span style="font-size:8px">2018-10-26 09:18:00</span>
                </li>
                <span class="span-3">查看全部</span>
              </ul>
            </div>
          </div>
          <el-button slot="reference">
            <el-badge :value="4" class="item">
              <i class="el-icon-message-solid"></i>
            </el-badge>
          </el-button>
        </el-popover>
        <el-popover trigger="hover">
          <div class="div-popover">
            <div class="div-popover-2">
              <h1 class="h-1">
                快捷菜单
                <span class="xgmm">添加/设置</span>
              </h1>
            </div>
            <ul class="ul-4">
              <li>
                <span>商品档案</span>
                <span>商品库存</span>
                <span>商品库存明细</span>
              </li>
              <li>
                <span>终端销售交易明细</span>
                <span>终端财务收银明细</span>
                <span>终端销售交易汇总</span>
              </li>
              <li>
                <span>终端销售交易汇总</span>
                <span>----</span>
                <span>----</span>
              </li>
            </ul>
          </div>
          <el-button slot="reference">
            <i class="el-icon-star-on"></i>
          </el-button>
        </el-popover>
        <el-popover trigger="click">
          <el-button slot="reference">
            <i class="el-icon-house"></i>
          </el-button>
        </el-popover>
        <el-popover trigger="click">
          <el-button slot="reference" @click="zc()">
            <i class="el-icon-switch-button"></i>
          </el-button>
        </el-popover>
      </div>
      <el-tabs v-model="activeName" @tab-click="handleClick" class="tabs">
        <el-tab-pane label="内容管理" @click="nrgl()" name="first">
          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="商品" name="1">
              <ul class="ul-1">
                <li>● 商品类别</li>
                <li>● 商品品牌</li>
                <li>● 商品单位</li>
                <li>● 商品编码设置</li>
                <li>● 商品档案</li>
                <li>● 图片库管理</li>
              </ul>
            </el-collapse-item>
            <el-collapse-item title="采购" name="2">
              <ul class="ul-1">
                <li>● 供应商管理</li>
                <li>● 采购单</li>
                <li>● 商品单位</li>
                <li>● 采购退货单</li>
              </ul>
            </el-collapse-item>
            <el-collapse-item title="库存" name="3">
              <ul class="ul-1">
                <li>● 商品入库</li>
                <li>● 库存调拨</li>
                <li>● 商品出库</li>
                <li>● 库存盘点</li>
                <li>● 商品库存</li>
                <li>● 商品库存明细</li>
              </ul>
            </el-collapse-item>
            <el-collapse-item title="促销" name="4">
              <ul class="ul-1">
                <li>● 订单促销</li>
                <li>● 商品促销</li>
              </ul>
            </el-collapse-item>
            <el-collapse-item title="零售" name="5">
              <ul class="ul-1">
                <li>● 终端销售单</li>
                <li>● 终端退货单</li>
                <li>● 商城销售单</li>
                <li>● 终端销售交易明细</li>
                <li>● 终端财务收银明细</li>
                <li>● 终端销售交易汇总</li>
                <li>● 终端财务收银汇总</li>
                <li>● 终端财务退款汇总</li>
              </ul>
            </el-collapse-item>
            <el-collapse-item title="会员" name="6">
              <ul class="ul-1">
                <li>● 会员类别</li>
                <li>● 会员列表</li>
              </ul>
            </el-collapse-item>
          </el-collapse>
          <div class="div-101">
            <div class="div-102">
              <div class="div-103">商品类别</div>
            </div>
            <div class="div-104">
              <div class="div-105">
                <div class="div-106">
                  <el-input v-model="input" placeholder="请输入类型名称/编码"></el-input>
                </div>
                <el-button type="primary" icon="el-icon-search" id="erchi" @click="ss()"></el-button>
                <div class="div-108">
                  <el-button type="primary" class="erchi2">导出</el-button>
                  <el-button type="text" @click="dialogFormVisible = true" class="erchi2">新增</el-button>

                  <el-dialog title="商品类别-新增/编辑" :visible.sync="dialogFormVisible">
                    <el-form :model="form">
                      <el-form-item label="编码" :label-width="formLabelWidth">
                        <el-input v-model="form.name" autocomplete="off"></el-input>
                      </el-form-item>
                       <el-form-item label="类名" :label-width="formLabelWidth">
                        <el-input v-model="form.toge" autocomplete="off"></el-input>
                      </el-form-item>
                       <el-form-item label="排序" :label-width="formLabelWidth">
                        <el-input v-model="form.arr" autocomplete="off"></el-input>
                      </el-form-item>
                      <!-- <el-form-item label="活动区域" :label-width="formLabelWidth">
                        <el-select v-model="form.region" placeholder="请选择活动区域">
                          <el-option label="区域一" value="shanghai"></el-option>
                          <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                      </el-form-item> -->
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                      <el-button @click="dialogFormVisible = false">取 消</el-button>
                      <el-button type="primary" @click="add">确 定</el-button>
                    </div>
                  </el-dialog>
                     <el-dialog title="商品类别-新增/编辑11" :visible.sync="bianji">
                    <el-form :model="form">
                      <el-form-item label="编码" :label-width="formLabelWidth">
                        <el-input v-model="form.name" autocomplete="off"></el-input>
                      </el-form-item>
                       <el-form-item label="类名" :label-width="formLabelWidth">
                        <el-input v-model="form.toge" autocomplete="off"></el-input>
                      </el-form-item>
                       <el-form-item label="排序" :label-width="formLabelWidth">
                        <el-input v-model="form.arr" autocomplete="off"></el-input>
                      </el-form-item>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                      <el-button @click="bianji = false">取 消</el-button>
                      <el-button type="primary" @click="gg">确 定</el-button>
                    </div>
                  </el-dialog>
                </div>
              </div>
              
              <el-table :data="zhong" border style="width: 100%">
                <el-table-column prop="date" label="序号" width="100"></el-table-column>
                <el-table-column prop="name" label="编码" width="200"></el-table-column>
                <el-table-column prop="address" label="类别名称" width="300"></el-table-column>
                <el-table-column prop="paixu" label="排序" width="200"></el-table-column>
                <el-table-column prop="caoz" label="操作">
                  <template slot-scope="scope">
                    <el-button type="text" @click="gengai(scope.$index)" >编辑</el-button>
                    <el-button
                      size="mini"
                      type="danger"
                      @click="handleDelete(scope.$index)"
                    >删除</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="系统设置" name="second">
          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="账号管理" name="1">
              <ul class="ul-1">
                <li>● 个人信息</li>
                <li>● 修改密码</li>
                <li>● 部门设置</li>
                <li>● 员工账号</li>
                <li>● 角色管理</li>
              </ul>
            </el-collapse-item>
            <el-collapse-item title="商户门店" name="2">
              <ul class="ul-1">
                <li>● 商户资料</li>
                <li>● 门店管理</li>
                <li>● 终端管理</li>
              </ul>
            </el-collapse-item>
            <el-collapse-item title="平台租用" name="3">
              <ul class="ul-1">
                <li>● 购买服务</li>
                <li>● 购买记录</li>
                <li>● 申请发票</li>
                <li>● 票务记录</li>
              </ul>
            </el-collapse-item>
            <el-collapse-item title="消息管理" name="4">
              <ul class="ul-1">
                <li>● 业务消息</li>
                <li>● 系统公告</li>
                <li>● 升级公告</li>
              </ul>
            </el-collapse-item>
            <el-collapse-item title="系统日志" name="5">
              <ul class="ul-1">
                <li>● 登录日志</li>
                <li>● 操作日志</li>
              </ul>
            </el-collapse-item>
          </el-collapse>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      handleClick:'',
      tabval:'',
      formLabelWidth:'',
      activeNames:'',
      activeName: "first",
      Admin: "Admin",
      diz: "广东省 广州市（IP：183.18.18.31）",
      date: "2018-04-28 18:00:00",
      wdnmd: "first",
      input: "",
      index: "",
        xg1:'',
        xg2:'',
        xg3:'',
        bianji:false,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
          toge:'',
          arr:'', 
          xb:''    
        },
        obj:{

        },
      tableData: [
        {
          date: "1",
          name: "0101",
          address: "烟",
          paixu: "5",
        },
        {
          date: "2",
          name: "0102",
          address: "酒",
          paixu: "4",
        },
        {
          date: "3",
          name: "0103",
          address: "糖",
          paixu: "1",
        },
        {
          date: "4",
          name: "0104",
          address: "茶",
          paixu: "2",
        },
        {
          date: "5",
          name: "0105",
          address: "家居家纺",
          paixu: "7",
        },
        {
          date: "6",
          name: "0106",
          address: "服装鞋帽",
          paixu: "3",
        },
        {
          date: "7",
          name: "0107",
          address: "办公用品",
          paixu: "6",
        },
      ],
      table:[],
      zhong: [
        {
          date: "1",
          name: "0101",
          address: "烟",
          paixu: "5",
        },
        {
          date: "2",
          name: "0102",
          address: "酒",
          paixu: "4",
        },
        {
          date: "3",
          name: "0103",
          address: "糖",
          paixu: "1",
        },
        {
          date: "4",
          name: "0104",
          address: "茶",
          paixu: "2",
        },
        {
          date: "5",
          name: "0105",
          address: "家居家纺",
          paixu: "7",
        },
        {
          date: "6",
          name: "0106",
          address: "服装鞋帽",
          paixu: "3",
        },
        {
          date: "7",
          name: "0107",
          address: "办公用品",
          paixu: "6",
        },
      ],
    };
  },
  methods: {
    handleChange(val) {
      console.log(val);
    },
    ss() {
     for(let i=0;i<this.tableData.length;i++){
          console.log(this.input)
           if(this.input==this.tableData[i].name){
             this.table.push(this.tableData[i]);
             this.zhong=this.table;
             return;
           }
             if(this.input!=this.tableData[i].name&&this.input!=null){
             this.open13();
           }
      }
      if(this.input==null||this.input==''){
        this.zhong=this.tableData;
      }
    },
    tabqh(tabval) {
      this.tabval = tabval;
    },
    zc() {
      this.$router.replace("/home");
    },
    gengai(index){
      this.xb=index;
      this.bianji = true;
      this.form.name='';
      this.form.toge='';
      this.form.arr='';
    },
    gg(){
       this.tableData[this.xb].name=this.form.name;
      this.tableData[this.xb].address=this.form.toge;
    this.tableData[this.xb].paixu=this.form.arr;
      this.zhong[this.xb].name=this.form.name;
      this.zhong[this.xb].address=this.form.toge;
    this.zhong[this.xb].paixu=this.form.arr;
    this.bianji=false;
    },
    nrgl() {
      this.$router.replace("/table-1");
    },
    //  handleEdit(index, row) {
    //     console.log(index, row);
    //   },
    handleDelete(index) {
      // console.log(index, row);
      this.zhong .splice(index, 1);
      this.tableData .splice(index, 1);
    },
    add(){
    this.obj.date=this.tableData.length+1;
    this.obj.name=this.form.name;
    this.obj.address=this.form.toge;
    this.obj.paixu=this.form.arr;
    this.zhong.push(this.obj);
    this.tableData.push(this.obj);
    this.dialogFormVisible = false;
    console.log(this.tableData)
    },
       open13() {
        this.$alert('无此商品编码', '提示', {
          confirmButtonText: '确定',
          // callback: action => {
          //   this.$message({
          //     type: 'info',
          //     message: `找不到: ${ this.input }`
          //   });
          // }
        });
      }
  },
};
</script>
<style scope>
.div-1 {
  background: #0066ff;
  width: 100%;
  height: 50px;
}
.el-dialog{
  width: 30%;
}
.el-input{
  width: 60%;
}
.pos {
  top: 0px;
  right: 0px;
}
#xz {
  width: 50px;
  height: 35px;
  padding: 0px !important;
  margin: 0px 10px !important;
  text-align: center;
  line-height: 35px !important;
}

#erchi {
  width: 30px;
  height: 32px;
  line-height: 32px;
  margin: 0px auto;
  text-align: center;
  padding: 2px 0 0 0;
}
.div-108 {
  /* display: inline-block; */
  float: right;
  margin-right: 20px;
}
.div-106 .el-input{
  width: 100%;
}
.erchi2 {
  width: 50px;
  height: 35px;
  padding: 0px !important;
  margin: 0px 10px !important;
  text-align: center;
  line-height: 35px !important;
}
.div-106 {
  width: 180px;
  height: 35px;
  display: inline-block;
  position: relative;
}
.div-105 {
  width: 100%;
  height: 50px;
}
.div-104 {
  width: 1100px;
  background: #ffffff;
  margin: 20px auto;
  padding: 30px;
  box-sizing: border-box;
}
.el-input__inner {
  height: 35px;
  line-height: 35px;
}
.div-103 {
  border-width: 0px;
  width: 550px;
  height: 16px;
  background: inherit;
  background-color: rgba(255, 255, 255, 0);
  box-sizing: border-box;
  border-width: 3px;
  border-style: solid;
  border-color: rgba(0, 102, 255, 1);
  border-top: 0px;
  border-right: 0px;
  border-bottom: 0px;
  border-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  font-size: 16px;
  line-height: 16px;
  width: 1100px;
  height: 16px;
  margin: 0px auto;
  font-family: "微软雅黑";
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  color: #666666;
  text-align: left;
  position: absolute;
  top: 17px;
  left: 307px;
}
.div-101 {
  width: 89%;
  float: right;
  background: #f2f2f2;
  height: 882px;
}
.div-102 {
  width: 100%;
  height: 50px;
  background: #ffffff;
  position: relative;
}
.el-tabs__content {
  background:#274461 ;
}
.ul-5 {
  margin: 0px;
  padding: 0px;
}
.span-3 {
  text-align: center;
  display: inline-block;
  font-size: 12px;
  color: #999999;
  width: 100%;
  cursor: pointer;
}
.span-3:hover {
  color: #0066ff;
}
.ul-5 li {
  list-style: none;
  text-align: left;
  padding-left: 40px;
  box-sizing: border-box;
  cursor: pointer;
  margin: 17px 0px;
}
.ul-5 li:hover {
  color: #0066ff;
}
.h-2 {
  width: 100%;
  height: 50px;
  border-bottom: 2px solid #999999;
}
.h-2 span {
  width: 33%;
  display: inline-block;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border-bottom: 2px solid blue;
  font-size: 15px;
  cursor: pointer;
}
.el-badge__content.is-fixed {
  top: 10px;
}
.ul-4 {
  padding: 0px;
}
.tabs-2 .el-tabs__nav {
  width: 100%;
}
.tabs-2 .el-tabs__item {
  width: 33%;
}
.tabs-2 .el-tabs__nav-wrap is-top {
  width: 100%;
}
.tabs-2 .el-tabs__header is-top {
  width: 100%;
}
.ul-4 li {
  list-style: none;
  text-align: center;
}
.ul-4 li span:hover {
  color: #0066ff;
  cursor: pointer;
}
.ul-4 li span {
  width: 33%;
  display: inline-block;
  font-size: 12px;
  text-align: center;
  line-height: 25px;
  height: 25px;
}
.div-tz {
  width: 354px;
  height: 380px;
}
.div-popover {
  width: 354px;
  height: 170px;
  padding: 0px;
  margin: 0px;
}
.div-popover-2 {
  width: 100%;
  height: 50px;
  background: #e8f2ff;
}
.ul-3 li {
  list-style: none;
  font-size: 12px;
  line-height: 30px;
}
.ul-3 li:hover {
  color: #0066ff;
  cursor: pointer;
}
.el-popover {
  padding: 0px;
  margin: 0px;
}
.xgmm {
  float: right;
  color: blue;
  cursor: pointer;
}
[class*=" el-icon-"],
[class^="el-icon-"] {
  font-size: 20px;
}
.h-1 {
  font-size: 12px;
  width: 100%;
  line-height: 50px;
  height: 50px;
  padding: 0px 20px;
  box-sizing: border-box;
  margin: 0px;
}
.ul-2 span {
  line-height: 55px;
  height: 50px;
  display: inline-block;
}
.el-tabs__nav {
  background: #0066ff;
  font-size: 30px;
}
.ul-2 {
  float: right;
  width: 370px;
  height: 55px;
  margin: 0px;
  padding: 0px;
  overflow: hidden;
}
.el-tabs--bottom .el-tabs--left > .el-tabs__header .el-tabs__item:nth-child(2),
.el-tabs--bottom .el-tabs--right > .el-tabs__header .el-tabs__item:nth-child(2),
.el-tabs--bottom.el-tabs--border-card
  > .el-tabs__header
  .el-tabs__item:nth-child(2),
.el-tabs--bottom.el-tabs--card > .el-tabs__header .el-tabs__item:nth-child(2),
.el-tabs--top .el-tabs--left > .el-tabs__header .el-tabs__item:nth-child(2),
.el-tabs--top .el-tabs--right > .el-tabs__header .el-tabs__item:nth-child(2),
.el-tabs--top.el-tabs--border-card
  > .el-tabs__header
  .el-tabs__item:nth-child(2),
.el-tabs--top.el-tabs--card > .el-tabs__header .el-tabs__item:nth-child(2) {
  padding: 0px;
}
.el-tabs--bottom .el-tabs--left > .el-tabs__header .el-tabs__item:last-child,
.el-tabs--bottom .el-tabs--right > .el-tabs__header .el-tabs__item:last-child,
.el-tabs--bottom.el-tabs--border-card
  > .el-tabs__header
  .el-tabs__item:last-child,
.el-tabs--bottom.el-tabs--card > .el-tabs__header .el-tabs__item:last-child,
.el-tabs--top .el-tabs--left > .el-tabs__header .el-tabs__item:last-child,
.el-tabs--top .el-tabs--right > .el-tabs__header .el-tabs__item:last-child,
.el-tabs--top.el-tabs--border-card > .el-tabs__header .el-tabs__item:last-child,
.el-tabs--top.el-tabs--card > .el-tabs__header .el-tabs__item:last-child {
  padding: 0px;
}
.el-icon-user-solid {
  font-size: 30px;
}
.el-tabs__nav div i {
  color: #ffffff;
  font-size: 20px;
}
.el-tabs__nav div {
  text-align: center;
  /* line-height: 50px; */
  padding: 0px;
}
.el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active {
  background: #3f8cff;
  color: #ffffff;
  border: none;
}
.el-tabs--border-card > .el-tabs__header .el-tabs__item {
  color: #ffffff;
  border: none;
}
.el-tabs--border-card {
  border: none;
}
.admin {
  float: right;
}
.el-tabs__nav-wrap {
  display: inline-block;
}
.el-tabs__header {
  margin: 0 0 0px;
  display: inline-block;
}
.el-button {
  background: #0066ff;
  padding: 0px 20px;
  margin: 0px;
  line-height: 50px;
  border: none;
  color: #ffffff;
}
.el-icon-user {
  font-size: 30px;
  border: none;
}
.div-99 {
  float: right;
  z-index: 2;
  width: 355px;
  height: 170px;
}
.ul-1 {
  margin: 0px;
  padding: 0px;
}
.ul-1 li {
  color: #ffffff;
  width: 100%;
  height: 50px;
  line-height: 50px;
  padding-left: 25px;
}
.ul-1 li:hover {
  background: #ffffff;
  color: #0066ff;
  cursor: pointer;
}
.tabs {
  border: none;
  background: #0066ff;
}
#elm-1 {
  float: left;
}
.tabs el-tab-pane {
  color: #ffffff;
  text-align: center;
}
.tabs el-tab-pane:hover {
  color: #bfd9ff;
}
.el-tabs__nav-wrap::after {
  border: none;
  opacity: 0;
}
.el-tabs__active-bar {
  opacity: 0;
}
.el-tabs__item.is-active {
  color: #ffffff;
  background: #3f8cff;
}
.el-tabs__item {
  color: #ffffff;
  height: 50px;
  line-height: 50px;
  font-size: 12px;
  text-align: center;
  padding: 0px;
  display: inline-block;
  width: 75px;
}
.el-tabs__item:hover {
  color: #cce0ff;
}
.el-tabs__item.is-active:hover {
  color: #ffffff;
}
.span-1,
.span-2 {
  line-height: 50px;
  text-align: center;
  margin: 0px 15px;
  display: inline-block;
  color: #ffffff;
  cursor: pointer;
  font-size: 12px;
}
.div-img {
  width: 131px;
  height: 36px;
  background: url("../assets/img/cpds.png");
  display: inline-block;
  background-size: 100% 100%;
  margin: 7px 35px;
  float: left;
}
.el-collapse {
  width: 11%;
  display: inline-block;
  border-top: 1px solid #ebeef5;
  border-bottom: 1px solid #ebeef5;
}
.el-collapse {
  width: 11%;
  display: inline-block;
  background: #274461;
}
.el-collapse-item__header {
  background: #3b495c;
  color: #ffffff;
  border: none;
  padding-left: 25px;
}
.el-collapse-item__header:hover {
  background-color: #274461;
}
.el-collapse-item__wrap {
  background-color: #3b495c;
  border: none;
}
</style>
   
  