<template>
  <div class="container">
    <van-nav-bar
      class="j-nav-bar"
      fixed
      left-arrow
      left-text="返回"
      @click-left="back"
      :title="$route.meta.title"
    ></van-nav-bar>
    <div class="settlement">
      <van-row>
        <van-col class="settlement-item" span="24">
          <span class="label">共提现金额1,205.67 元人民币。</span>
        </van-col>
        <van-col class="settlement-item item2" span="24">
          <span class="label">
            还有
            <span class="value">35分</span>贡献值待结算
          </span>
        </van-col>
        <van-col class="settlement-item item3" span="24">
          <span class="label">
            还有
            <span class="value">528元</span>待提现
          </span>
        </van-col>
      </van-row>
    </div>
    <div class="main">
      <van-tabs
        class="j-tabs__card"
        color="#1989fa"
        v-model="currentInfo"
        :swipeable="true"
        animated
        @change="changeInfo"
        :ellipsis="false"
      >
        <van-tab v-for="item in titleAll" :key="item" :title="item">
          <div class="info f14">

            <div v-if="currentInfo === 0">
              <v-table
                :columns="columns"
                :table-data="tableData"
                is-horizontal-resize
                class="w100 mt10"
                @on-custom-comp="customCompFunc"
              ></v-table>
              <van-button type="info" class="fr mt20 mr20" @click="settleAll">全部结算</van-button>
            </div>
            <div v-if="currentInfo === 1">
              <v-table
                :columns="columns2"
                :table-data="tableData"
                is-horizontal-resize
                class="w100 mt10"
                @on-custom-comp="customCompFunc"
              ></v-table>
              <van-button type="info" class="fr mt20 mr20" @click="drawAll">全部提现</van-button>
            </div>
            <div v-if="currentInfo === 2">
              <v-table
                :columns="columns3"
                :table-data="tableData"
                is-horizontal-resize
                class="w100 mt10"
              ></v-table>
              <div class="p10 pl20">总结算金额: 5,3870 元</div>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>

import tableEdit from './components/tableEdit'
import tableEdit2 from './components/tableEdit2'

import Vue from 'vue'
Vue.component('table-edit', tableEdit)
Vue.component('table-edit2', tableEdit2)

export default {
  name: 'settlement',
  data() {
    return {
      titleAll: ['未结算', '待结算', '已结算'],
      currentInfo: 0,
      tableData: [
        {
          name: '赵伟',
          gender: '男',
          height: '183',
          email: 'zhao@gmail.com',
          tel: '156*****1987',
          hobby: '钢琴、书法、唱歌',
          address: '上海市黄浦区金陵东路569号17楼',
          _checked: true,
          _disabled: true
        },
        {
          name: '李伟',
          gender: '男',
          height: '166',
          email: 'li@gmail.com',
          tel: '182*****1538',
          hobby: '钢琴、书法、唱歌',
          address: '上海市奉贤区南桥镇立新路12号2楼',
          _checked: true,
          _disabled: true
        }
      ],
      columns: [
        {
          field: 'height',
          title: '类型',
          width: 60,
          titleAlign: 'center',
          columnAlign: 'center',
          isResize: true
        },
        {
          field: 'name',
          title: '贡献值',
          width: 40,
          titleAlign: 'center',
          columnAlign: 'center',
          isResize: true
        },
        {
          field: 'gender',
          title: '操作',
          width: 40,
          titleAlign: 'center',
          columnAlign: 'center',
          componentName: 'table-edit',
          isResize: true
        }
      ],
      columns2: [
        {
          field: 'height',
          title: '申请日期',
          width: 60,
          titleAlign: 'center',
          columnAlign: 'center',
          isResize: true
        },
        {
          field: 'name',
          title: '类型',
          width: 40,
          titleAlign: 'center',
          columnAlign: 'center',
          isResize: true
        },
        {
          field: 'name',
          title: '贡献值',
          width: 40,
          titleAlign: 'center',
          columnAlign: 'center',
          isResize: true
        },
        {
          field: 'name',
          title: '状态',
          width: 40,
          titleAlign: 'center',
          columnAlign: 'center',
          isResize: true
        },
        {
          field: 'name',
          title: '金额',
          width: 40,
          titleAlign: 'center',
          columnAlign: 'center',
          isResize: true
        },
        {
          field: 'gender',
          title: '操作',
          width: 40,
          titleAlign: 'center',
          columnAlign: 'center',
          componentName: 'table-edit2',
          isResize: true
        }
      ],
      columns3: [
        {
          field: 'height',
          title: '付款日期',
          width: 60,
          titleAlign: 'center',
          columnAlign: 'center',
          isResize: true
        },
        {
          field: 'name',
          title: '类型',
          width: 40,
          titleAlign: 'center',
          columnAlign: 'center',
          isResize: true
        },
        {
          field: 'name',
          title: '贡献值',
          width: 40,
          titleAlign: 'center',
          columnAlign: 'center',
          isResize: true
        },
        {
          field: 'name',
          title: '金额',
          width: 40,
          titleAlign: 'center',
          columnAlign: 'center',
          isResize: true
        }
      ]
    }
  },
  methods: {
    // 全部提现
    settleAll() {

    },
    // 全部结算
    drawAll() {

    },
    customCompFunc(params) {
      console.log(params)
      if (params.type === 'edit') {

      } else if (params.type === 'edit2') {

      }
    },
    changeInfo(index, title) {
      console.log('changeInfo', index, title, this.currentInfo)
    },
    selectChange(selection, rowData) {
      console.log('select-change', selection, rowData)
    }
  }
}
</script>

<style lang='stylus' scoped>
.settlement {
  padding: 10Px 20Px;
  font-size: 14px;

  .settlement-item {
    &+.settlement-item {
      margin-top: 10Px;
    }
  }

  .item2 {
    .value {
      color: $link-color;
      margin:0 5Px;
      font-size: 18px;
    }
  }

  .item3 {
    .value {
      color: $error-color;
      margin:0 5Px;
      font-size: 18px;
    }
  }
}

.main {
  .screen {
    text-align: center;
    height: 40Px;
    line-height: 40Px;

    .level {
      color: $warning-color;
    }

    .residue {
    }
  }
}
</style>
