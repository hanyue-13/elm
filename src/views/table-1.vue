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
        <el-tab-pane label="内容管理" name="first">
          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="商品" name="1">
              <ul class="ul-1">
                <li @click="splx()">● 商品类别</li>
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
<div class="souye">
            <div class="tou">
              <div class="h1-1">
                <span style="width: 13px;height: 10px;display: inline-block;"></span>首页
              </div>
            </div>
            <div class="souye2">
              <div class="div-wid1100">
                <div class="div-wid060">
                  <img src="@/assets/img/u322.png" class="img-1" />
                  <ul class="ul-6">
                    <li>
                      <span class="flo-l">欢迎您</span>
                      <span>商户ID</span>
                      <span>有效期至</span>
                      <span>操作门店</span>
                    </li>
                    <li>
                      <span class="flo-l">十月大神</span>
                      <span>66668888</span>
                      <span>2018-05-18</span>
                      <span>产品大神（幸福店）</span>
                    </li>
                  </ul>
                </div>
                <div class="div-yi">
                  <div class="div-er">
                    <span class="span-yi">待处理事务</span>
                    <ul class="ul-yi">
                      <li>
                        <el-badge :value="4" class="item thiscss">
                          <span size="small">采购待审核</span>
                        </el-badge>
                        <el-badge class="item thiscss">
                          <span size="small">采购退货待审核</span>
                        </el-badge>
                        <el-badge class="item thiscss">
                          <span size="small">入库待审核</span>
                        </el-badge>
                      </li>
                      <li>
                        <el-badge :value="1" class="item thiscss">
                          <span size="small">出库待审核</span>
                        </el-badge>
                        <el-badge :value="1" class="item thiscss">
                          <span size="small">调拨待审核</span>
                        </el-badge>
                        <el-badge class="item thiscss">
                          <span size="small">盘点待审核</span>
                        </el-badge>
                      </li>
                      <li>
                        <el-badge class="item thiscss">
                          <span size="small">订单促销待审核</span>
                        </el-badge>
                        <el-badge class="item thiscss">
                          <span size="small">商品促销待审核</span>
                        </el-badge>
                        <el-badge class="item thiscss">
                          <span size="small">— —</span>
                        </el-badge>
                      </li>
                    </ul>
                  </div>
                  <div class="div-san">
                    <span class="span-yi">
                      快捷菜单
                      <span class="span-tj">添加/设置</span>
                    </span>
                    <ul class="ul-yi">
                      <li>
                        <el-badge class="item thiscss">
                          <span size="small">商品档案</span>
                        </el-badge>
                        <el-badge class="item thiscss">
                          <span size="small">商品库存</span>
                        </el-badge>
                        <el-badge class="item thiscss">
                          <span size="small">商品库存明细</span>
                        </el-badge>
                      </li>
                      <li>
                        <el-badge class="item thiscss">
                          <span size="small">终端销售交易明细</span>
                        </el-badge>
                        <el-badge class="item thiscss">
                          <span size="small">终端财务收银明细</span>
                        </el-badge>
                        <el-badge class="item thiscss">
                          <span size="small">终端销售交易汇总</span>
                        </el-badge>
                      </li>
                      <li>
                        <el-badge class="item thiscss">
                          <span size="small">终端财务收银汇总</span>
                        </el-badge>
                        <el-badge class="item thiscss">
                          <span size="small">— —</span>
                        </el-badge>
                        <el-badge class="item thiscss">
                          <span size="small">— —</span>
                        </el-badge>
                      </li>
                    </ul>
                  </div>
                </div>
            <div class="div-he245">
                  <span class="span-yi">门店数据汇总</span>
                  <ul class="ul-wu">
                    <li>
                      <span>
                        <div class="div-tezhi col-1">
                          <img src="@/assets/img/01.png" />
                        </div>
                        <div class="dv-1 font">
                          <p>今日销售总额</p>
                          <p>人民币：68978.00</p>
                        </div>
                      </span>
                      <span>
                        <div class="div-tezhi col-2">
                          <img src="@/assets/img/02.png" />
                        </div>
                        <div class="dv-1 font">
                          <p>今日销售总额</p>
                          <p>人民币：68978.00</p>
                        </div>
                      </span>
                      <span>
                        <div class="div-tezhi col-3">
                          <img src="@/assets/img/03.png" />
                        </div>
                        <div class="dv-1 font">
                          <p>今日销售总额</p>
                          <p>人民币：68978.00</p>
                        </div>
                      </span>
                      <span>
                        <div class="div-tezhi col-4">
                          <img src="@/assets/img/04.png" />
                        </div>
                        <div class="dv-1 font">
                          <p>今日销售总额</p>
                          <p>人民币：68978.00</p>
                        </div>
                      </span>
                      <span>
                        <div class="div-tezhi col-5">
                          <img src="@/assets/img/05.png" />
                        </div>
                        <div class="dv-1 font">
                          <p>今日销售总额</p>
                          <p>人民币：68978.00</p>
                        </div>
                      </span>
                    </li>
                    <li>
                      <span>
                        <div class="div-tezhi col-6">
                          <img src="@/assets/img/06.png" />
                        </div>
                        <div class="dv-1 font">
                          <p>今日销售总额</p>
                          <p>人民币：68978.00</p>
                        </div>
                      </span>
                      <span>
                        <div class="div-tezhi col-7">
                          <img src="@/assets/img/07.png" />
                        </div>
                        <div class="dv-1 font">
                          <p>今日销售总额</p>
                          <p>人民币：68978.00</p>
                        </div>
                      </span>
                      <span>
                        <div class="div-tezhi col-8">
                          <img src="@/assets/img/08.png" />
                        </div>
                        <div class="dv-1 font">
                          <p>今日销售总额</p>
                          <p>人民币：68978.00</p>
                        </div>
                      </span>
                      <span>
                        <div class="div-tezhi col-9">
                          <img src="@/assets/img/09.png" />
                        </div>
                        <div class="dv-1 font">
                          <p>今日销售总额</p>
                          <p>人民币：68978.00</p>
                        </div>
                      </span>
                      <span>
                        <div class="div-tezhi col-10">
                          <img src="@/assets/img/10.png" />
                        </div>
                        <div class="dv-1 font">
                          <p>今日销售总额</p>
                          <p>人民币：68978.00</p>
                        </div>
                      </span>
                    </li>
                  </ul>
                </div>
                <div class="div-he300">
                  <div class="div-he300-l">
                    <span class="span-yi">
                      采购单汇总
                      <div class="jqt">
                        <span class="font">近7天</span>
                        <span class="font">近30天</span>
                        <span class="font">自定义</span>
                        <div class="block">
                          <span class="demonstration"></span>
                          <el-date-picker v-model="value1" type="date" placeholder="选择日期" size="large"></el-date-picker>
                        </div>
                      </div>
                    </span>
                    <div id="tb" class="echa">

                    </div>
                  </div>
                  <div class="div-he300-r">
                    <span class="span-yi">
                      采购退款单汇总
                      <div class="jqt">
                        <span class="font">近7天</span>
                        <span class="font">近30天</span>
                        <span class="font">自定义</span>
                        <div class="block">
                          <span class="demonstration"></span>
                          <el-date-picker v-model="value1" type="date" placeholder="选择日期" size="large"></el-date-picker>
                        </div>
                      </div>
                    </span>
                     <div id="tb2" class="echa">

                    </div>
                  </div>
                </div>
                <div class="div-jj">
                    <span class="span-yi">
                      交易订单统计
                      <div class="jqt">
                        <span class="font">近7天</span>
                        <span class="font">近30天</span>
                        <span class="font">自定义</span>
                        <div class="block">
                          <span class="demonstration"></span>
                          <el-date-picker v-model="value1" type="date" placeholder="选择日期" size="large"></el-date-picker>
                        </div>
                      </div>
                    </span>
                    <div class="div-p">
                      <p class="p-1">本周收入统计【终端销售收入】</p>
                        <p class="p-2">19822 元</p>
                        <p class="p-1 p-b"><span style="color:red"><i class="el-icon-caret-bottom"></i>6.9% </span>同比上周</p>
                          <p class="p-1">本周收入统计【商城销售收入】</p>
                        <p class="p-2">23017 元</p>
                        <p class="p-1"><span style="color:green"><i class="el-icon-caret-bottom"></i>2.1%  </span>同比上周</p>
                    </div>
                    <div id="zxt">
                    </div>
                </div>
                    <div class="div-jj">
                      <div class="div-wid30">
                      </div>
                   <span class="span-yi">
                      销售金额统计
                      <div class="jqt">
                        <span class="font">近7天</span>
                        <span class="font">近30天</span>
                        <span class="font">自定义</span>
                        <div class="block">
                          <span class="demonstration"></span>
                          <el-date-picker v-model="value1" type="date" placeholder="选择日期" size="large"></el-date-picker>
                        </div>
                      </div>
                    </span>
                        <div class="div-p">
                      <p class="p-1">本周订单统计【终端销售】</p>
                        <p class="p-2">6899 笔</p>
                        <p class="p-1 p-b"><span style="color:red"><i class="el-icon-caret-bottom"></i>8% </span>同比上周</p>
                          <p class="p-1">本周订单统计【商城销售】</p>
                        <p class="p-2">3167 笔</p>
                        <p class="p-1"><span style="color:green"><i class="el-icon-caret-bottom"></i>4.8%  </span>同比上周</p>
                    </div>
                     <div id="zxt2"></div>
                </div>
              </div>
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
          <div class="souye">
            <div class="tou">
              <div class="h1-1">
                <span style="width: 13px;height: 10px;display: inline-block;"></span>首页
              </div>
            </div>
            <div class="souye2">
              <div class="div-wid1100">
                <div class="div-wid060">
                  <img src="@/assets/img/u322.png" class="img-1" />
                  <ul class="ul-6">
                    <li>
                      <span class="flo-l">欢迎您</span>
                      <span>商户ID</span>
                      <span>有效期至</span>
                      <span>操作门店</span>
                    </li>
                    <li>
                      <span class="flo-l">十月大神</span>
                      <span>66668888</span>
                      <span>2018-05-18</span>
                      <span>产品大神（幸福店）</span>
                    </li>
                  </ul>
                </div>
                <router-view></router-view>
                <div class="div-yi">
                  <div class="div-er">
                    <span class="span-yi">待处理事务</span>
                    <ul class="ul-yi">
                      <li>
                        <el-badge :value="4" class="item thiscss">
                          <span size="small">采购待审核</span>
                        </el-badge>
                        <el-badge class="item thiscss">
                          <span size="small">采购退货待审核</span>
                        </el-badge>
                        <el-badge class="item thiscss">
                          <span size="small">入库待审核</span>
                        </el-badge>
                      </li>
                      <li>
                        <el-badge :value="1" class="item thiscss">
                          <span size="small">出库待审核</span>
                        </el-badge>
                        <el-badge :value="1" class="item thiscss">
                          <span size="small">调拨待审核</span>
                        </el-badge>
                        <el-badge class="item thiscss">
                          <span size="small">盘点待审核</span>
                        </el-badge>
                      </li>
                      <li>
                        <el-badge class="item thiscss">
                          <span size="small">订单促销待审核</span>
                        </el-badge>
                        <el-badge class="item thiscss">
                          <span size="small">商品促销待审核</span>
                        </el-badge>
                        <el-badge class="item thiscss">
                          <span size="small">— —</span>
                        </el-badge>
                      </li>
                    </ul>
                  </div>
                  <div class="div-san">
                    <span class="span-yi">
                      快捷菜单
                      <span class="span-tj">添加/设置</span>
                    </span>
                    <ul class="ul-yi">
                      <li>
                        <el-badge class="item thiscss">
                          <span size="small">商品档案</span>
                        </el-badge>
                        <el-badge class="item thiscss">
                          <span size="small">商品库存</span>
                        </el-badge>
                        <el-badge class="item thiscss">
                          <span size="small">商品库存明细</span>
                        </el-badge>
                      </li>
                      <li>
                        <el-badge class="item thiscss">
                          <span size="small">终端销售交易明细</span>
                        </el-badge>
                        <el-badge class="item thiscss">
                          <span size="small">终端财务收银明细</span>
                        </el-badge>
                        <el-badge class="item thiscss">
                          <span size="small">终端销售交易汇总</span>
                        </el-badge>
                      </li>
                      <li>
                        <el-badge class="item thiscss">
                          <span size="small">终端财务收银汇总</span>
                        </el-badge>
                        <el-badge class="item thiscss">
                          <span size="small">— —</span>
                        </el-badge>
                        <el-badge class="item thiscss">
                          <span size="small">— —</span>
                        </el-badge>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="div-he245">
                  <span class="span-yi">门店数据汇总</span>
                  <ul class="ul-wu">
                    <li>
                      <span>
                        <div class="div-tezhi col-1">
                          <img src="@/assets/img/01.png" />
                        </div>
                        <div class="dv-1 font">
                          <p>今日销售总额</p>
                          <p>人民币：68978.00</p>
                        </div>
                      </span>
                      <span>
                        <div class="div-tezhi col-2">
                          <img src="@/assets/img/02.png" />
                        </div>
                        <div class="dv-1 font">
                          <p>今日销售总额</p>
                          <p>人民币：68978.00</p>
                        </div>
                      </span>
                      <span>
                        <div class="div-tezhi col-3">
                          <img src="@/assets/img/03.png" />
                        </div>
                        <div class="dv-1 font">
                          <p>今日销售总额</p>
                          <p>人民币：68978.00</p>
                        </div>
                      </span>
                      <span>
                        <div class="div-tezhi col-4">
                          <img src="@/assets/img/04.png" />
                        </div>
                        <div class="dv-1 font">
                          <p>今日销售总额</p>
                          <p>人民币：68978.00</p>
                        </div>
                      </span>
                      <span>
                        <div class="div-tezhi col-5">
                          <img src="@/assets/img/05.png" />
                        </div>
                        <div class="dv-1 font">
                          <p>今日销售总额</p>
                          <p>人民币：68978.00</p>
                        </div>
                      </span>
                    </li>
                    <li>
                      <span>
                        <div class="div-tezhi col-6">
                          <img src="@/assets/img/06.png" />
                        </div>
                        <div class="dv-1 font">
                          <p>今日销售总额</p>
                          <p>人民币：68978.00</p>
                        </div>
                      </span>
                      <span>
                        <div class="div-tezhi col-7">
                          <img src="@/assets/img/07.png" />
                        </div>
                        <div class="dv-1 font">
                          <p>今日销售总额</p>
                          <p>人民币：68978.00</p>
                        </div>
                      </span>
                      <span>
                        <div class="div-tezhi col-8">
                          <img src="@/assets/img/08.png" />
                        </div>
                        <div class="dv-1 font">
                          <p>今日销售总额</p>
                          <p>人民币：68978.00</p>
                        </div>
                      </span>
                      <span>
                        <div class="div-tezhi col-9">
                          <img src="@/assets/img/09.png" />
                        </div>
                        <div class="dv-1 font">
                          <p>今日销售总额</p>
                          <p>人民币：68978.00</p>
                        </div>
                      </span>
                      <span>
                        <div class="div-tezhi col-10">
                          <img src="@/assets/img/10.png" />
                        </div>
                        <div class="dv-1 font">
                          <p>今日销售总额</p>
                          <p>人民币：68978.00</p>
                        </div>
                      </span>
                    </li>
                  </ul>
                </div>
                <div class="div-he300">
                  <div class="div-he300-l">
                    <span class="span-yi">
                      采购单汇总
                      <div class="jqt">
                        <span class="font">近7天</span>
                        <span class="font">近30天</span>
                        <span class="font">自定义</span>
                        <div class="block">
                          <span class="demonstration"></span>
                          <el-date-picker v-model="value1" type="date" placeholder="选择日期" size="large"></el-date-picker>
                        </div>
                      </div>
                    </span>
                    <div id="tb" class="echa">

                    </div>
                  </div>
                  <div class="div-he300-r">
                    <span class="span-yi">
                      采购退款单汇总
                      <div class="jqt">
                        <span class="font">近7天</span>
                        <span class="font">近30天</span>
                        <span class="font">自定义</span>
                        <div class="block">
                          <span class="demonstration"></span>
                          <el-date-picker v-model="value1" type="date" placeholder="选择日期" size="large"></el-date-picker>
                        </div>
                      </div>
                    </span>
                     <div id="tb2" class="echa">

                    </div>
                  </div>
                </div>
                <div class="div-jj">
                    <span class="span-yi">
                      交易订单统计
                      <div class="jqt">
                        <span class="font">近7天</span>
                        <span class="font">近30天</span>
                        <span class="font">自定义</span>
                        <div class="block">
                          <span class="demonstration"></span>
                          <el-date-picker v-model="value1" type="date" placeholder="选择日期" size="large"></el-date-picker>
                        </div>
                      </div>
                    </span>
                    <div class="div-p">
                      <p class="p-1">本周收入统计【终端销售收入】</p>
                        <p class="p-2">19822 元</p>
                        <p class="p-1 p-b"><span style="color:red"><i class="el-icon-caret-bottom"></i>6.9% </span>同比上周</p>
                          <p class="p-1">本周收入统计【商城销售收入】</p>
                        <p class="p-2">23017 元</p>
                        <p class="p-1"><span style="color:green"><i class="el-icon-caret-bottom"></i>2.1%  </span>同比上周</p>
                    </div>
                    <div id="zxt">
                    </div>
                </div>
                    <div class="div-jj">
                      <div class="div-wid30">
                      </div>
                   <span class="span-yi">
                      销售金额统计
                      <div class="jqt">
                        <span class="font">近7天</span>
                        <span class="font">近30天</span>
                        <span class="font">自定义</span>
                        <div class="block">
                          <span class="demonstration"></span>
                          <el-date-picker v-model="value1" type="date" placeholder="选择日期" size="large"></el-date-picker>
                        </div>
                      </div>
                    </span>
                        <div class="div-p">
                      <p class="p-1">本周订单统计【终端销售】</p>
                        <p class="p-2">6899 笔</p>
                        <p class="p-1 p-b"><span style="color:red"><i class="el-icon-caret-bottom"></i>8% </span>同比上周</p>
                          <p class="p-1">本周订单统计【商城销售】</p>
                        <p class="p-2">3167 笔</p>
                        <p class="p-1"><span style="color:green"><i class="el-icon-caret-bottom"></i>4.8%  </span>同比上周</p>
                    </div>
                     <div id="zxt2"></div>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import echarts from 'echarts'
export default {
  data() {
    return {
      activeName: "first",
      Admin: "Admin",
      diz: "广东省 广州市（IP：183.18.18.31）",
      date: "2018-04-28 18:00:00",
      wdnmd: "first",
      tabval: "0",
       pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
       }
    };
  },
  methods: {
    handleChange(val) {
      console.log(val);
    },
    tabqh(tabval) {
      this.tabval = tabval;
    },
    zc() {
      this.$router.replace("/home");
    }, 
    splx(){
      this.$router.replace('/splx');
    },
fffffmg(){
    
    // eslint-disable-next-line prefer-const
    let Cha=this.$echarts.init(document.getElementById("zxt"));
    Cha.setOption({
       title: {
        text: ''
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    
    legend: {
        data: ['终端销售', '商城销售']
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '终端销售',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '商城销售',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [220, 182, 191, 234, 290, 330, 310]
        },
    ]
    })
    },
fffffmg2(){
    
    // eslint-disable-next-line prefer-const
    let Cha=this.$echarts.init(document.getElementById("zxt2"));
    Cha.setOption({
       title: {
        text: ''
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data: ['终端销售', '商城销售']
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '终端销售',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '商城销售',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [220, 182, 191, 234, 290, 330, 310]
        },
    ]
    })
    },
drawLine() {
      // eslint-disable-next-line prefer-const
      let Chart = this.$echarts.init(document.getElementById("tb"));
  
      Chart.setOption({
           title: {
        text: '',
        subtext: '',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['已入库【审核成功】', '待审核', '审核失败', '待入库【审核成功】', '已作废【审核成功】','部分入库【审核成功】']
    },
    series: [
        {
            name: '审核',
            type: 'pie',
            radius: '55%',
            center: ['70%', '50%'],
            data: [
                {value: 38, name: '已入库【审核成功】'},
                {value: 16, name: '待审核'},
                {value: 5, name: '审核失败'},
                {value: 10, name: '待入库【审核成功】'},
                {value: 2, name: '已作废【审核成功】'},
                {value: 13,name:'部分入库【审核成功】'}
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
      });
    },
drawLine2() {
      // eslint-disable-next-line prefer-const
      let Chart = this.$echarts.init(document.getElementById("tb2"));
  
      Chart.setOption({
           title: {
        text: '',
        subtext: '',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['已入库【审核成功】', '待审核', '审核失败', '待入库【审核成功】', '已作废【审核成功】','部分入库【审核成功】']
    },
    series: [
        {
            name: '审核',
            type: 'pie',
            radius: '55%',
            center: ['70%', '50%'],
            data: [
                {value: 38, name: '已入库【审核成功】'},
                {value: 16, name: '待审核'},
                {value: 5, name: '审核失败'},
                {value: 10, name: '待入库【审核成功】'},
                {value: 2, name: '已作废【审核成功】'},
                {value: 13,name:'部分入库【审核成功】'}
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
      });
    },
  },
  mounted(){
     this.drawLine();
      this.drawLine2();
      this.fffffmg();
       this.fffffmg2();
  }
};
</script>
<style scope>
.dv-1 {
  width: 75%;
  height: 50px;
  float: right;
}
.el-tabs__content{
  background-color: rgba(39, 68, 97, 1);
}
.div-p{
    width: 30%;
    position: absolute;
    left: 50px;
    top: 85px;
}
.p-b{
  margin-bottom: 20px!important;
}
.p-1{
      font-family: '微软雅黑';
    font-weight: 400;
    font-style: normal;
    font-size: 12px;
    color: #666666;
    text-align: left;
    line-height: 20px;
    display: inline-block;
    width: 100%;
    margin: 5px 0px;
}
.p-2{
      font-family: '微软雅黑';
    font-weight: 400;
    font-style: normal;
    text-align: left;
    display: inline-block;
    margin: 10px 0px;
    width: 100%;
}
#zxt{
  width: 70%;
  height: 380px;
  float: right;
    margin-right: 20px;
}#zxt2{
  width: 70%;
  height: 380px;
  float: right;
    margin-right: 20px;
}
.div-jj{
  width: 1060px;
  position: relative;
      height: 420px;
    border: 1px solid;
    border-color: rgba(228, 228, 228, 1);
    margin: 20px auto;
    padding-left: 15px;
    box-sizing: border-box;
}
.echa{
  width: 100%;
  height: 230px;
}
.jqt span:hover {
  color: #0066ff;
  cursor: pointer;
}
.jqt span {
  margin: 0px 5px;
}
.jqt {
  float: right;
}
.el-input--prefix .el-input__inner {
    padding-left: 45px;
}
.block{
  display: inline-block;
}
.div-he300 {
  width: 100%;
  height: 300px;
  box-sizing: border-box;
  padding: 15px;
}
.div-he300-l {
  width: 49%;
  height: 100%;
  border: 1px solid;
  border-color: rgba(228, 228, 228, 1);
  float: left;
  padding-left: 15px;
  box-sizing: border-box;
}
.div-he300-r {
  width: 49%;
  height: 100%;
  border: 1px solid;
  border-color: rgba(228, 228, 228, 1);
  float: right;
  padding-left: 15px;
  box-sizing: border-box;
}
.dv-1 p {
  margin: 10px 0px;
}
.col-2 {
  background: #df6f46 !important;
}
.col-3 {
  background: #df6f46 !important;
}
.col-4 {
  background: #da70d6 !important;
}
.col-5 {
  background: #6495ed !important;
}
.col-6 {
  background: #87cefa !important;
}
.col-7 {
  background: #4f9bd1 !important;
}
.col-8 {
  background: #2ec7c9 !important;
}
.col-9 {
  background: #0066ff !important;
}
P {
  margin: 0px;
  padding: 0px;
}
.font {
  font-family: "微软雅黑";
  font-weight: 400;
  font-style: normal;
  font-size: 12px;
  text-align: left;
  color: #333333;
  line-height: normal;
}
.ul-wu {
  margin: 0px;
  padding: 0px;
  width: 100%;
}
.div-tezhi img {
  text-align: center;
  margin: auto;
  display: block;
  margin-top: 17%;
  font-family: "Arial Normal", "Arial";
  font-weight: 400;
  font-style: normal;
  font-size: 13px;
  color: #333333;
  text-align: center;
  line-height: normal;
}
.ul-wu li {
  width: 100%;
  list-style: none;
  margin: 30px 0px;
}
.ul-wu li span {
  width: 20%;
  display: inline-block;
  height: 50px;
  position: relative;
}
.div-tezhi {
  border-width: 0px;
  position: absolute;
  left: 0px;
  top: 5px;
  width: 50px;
  height: 50px;
  background: inherit;
  background-color: rgba(255, 0, 51, 1);
  border: none;
  border-radius: 50px;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
}
.div-1 {
  background: #0066ff;
  width: 100%;
  height: 50px;
}
.span-tj {
  color: #0066ff;
  cursor: pointer;
  float: right;
}
.thiscss > .el-badge__content.is-fixed {
  right: 45px;
  top: 12px;
  background: red;
}
.thiscss {
  width: 33%;
  text-align: center;
}
.span-yi {
  font-family: "微软雅黑 Bold", "微软雅黑 Regular", "微软雅黑";
  font-weight: 700;
  font-style: normal;
  text-align: left;
  line-height: 36px;
  font-size: 13px;
  color: #333333;
  font-kerning: normal;
}
.ul-yi li span {
  font-family: "微软雅黑";
  font-weight: 400;
  font-style: normal;
  font-size: 12px;
  text-align: left;
  line-height: normal;
  width: 33%;
  cursor: pointer;
}
.ul-yi li span:hover {
  color: #0066ff;
}
.ul-yi {
  margin: 0px;
  padding: 0px;
}
.ul-yi li {
  list-style: none;
  width: 100%;
  margin: 10px 0px !important;
}
.div-yi > div {
  margin: 10px 0px;
}
.div-yi {
  width: 100%;
  height: 180px;
}
.div-he245 {
  width: 1060px;
  height: 245px;
  border: 1px solid;
  border-color: rgba(228, 228, 228, 1);
  margin: 20px auto;
  padding-left: 15px;
  box-sizing: border-box;
}
.div-er {
  width: 49%;
  border: 1px solid;
  border-color: rgba(228, 228, 228, 1);
  height: 100%;
  float: left;
  padding: 0px 15px;
  box-sizing: border-box;
}
.div-san {
  width: 49%;
  border: 1px solid;
  border-color: rgba(228, 228, 228, 1);
  height: 100%;
  float: right;
  padding: 0px 15px;
  box-sizing: border-box;
}
.ul-6 li span {
  font-family: "微软雅黑";
  font-weight: 400;
  font-style: normal;
  font-size: 12px;
  width: 25%;
  text-align: center;
  display: inline-block;
}
.flo-l {
  text-align: left !important;
}
.img-1 {
  margin-top: 20px;
  margin-left: 90px;
}
.div-wid060 {
  width: 1060px;
  height: 100px;
  border: 1px solid;
  border-color: rgba(228, 228, 228, 1);
  margin: 0px auto;
}
.ul-6 li {
  list-style: none;
  width: 85%;
  margin: 15px 0px;
}
.ul-6 {
  margin: 0px;
  padding: 0px;
  float: right;
  width: 80%;
}
.souye2 {
  width: 100%;
  float: right;
  background: #f2f2f2;
}
.div-wid1100 {
  width: 1100px;
  margin: 20px auto;
  background: #ffffff;
  padding: 10px 20px;
  box-sizing: border-box;
}
.h1-1 {
  border-width: 0px;
  position: absolute;
  left: 0px;
  top: 16px;
  width: 550px;
  height: 20px;
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
  box-shadow: none;
  font-size: 16px;
}
.tou {
  width: 1100px;
  height: 55px;
  margin: 0px auto;
  position: relative;
}
.souye {
  width: 89%;
  float: right;
  background: #ffffff;
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
  height: 50px;
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
  height: 47px;
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
   
  