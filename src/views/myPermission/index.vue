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
    <div class="my-permission">
      <van-row>
        <van-col class="permission-item item1" span="24">
          <span class="label f20">快乐风</span>
          <span class="value f14 ml10">白金会员</span>
        </van-col>
        <van-col class="permission-item f14" span="24">
          <span class="label">最近一次购买时间：</span>
          <span v-if="true" class="value">2018年12月28日 10:30</span>
          <span v-else class="value">尚未购买</span>
        </van-col>
        <van-col class="permission-item f14" span="24">
          <span class="label">即将过期的套餐：</span>
          <span v-if="true" class="value">M信鸽黄金会员，剩余时间3天</span>
          <span v-else class="value">尚未购买</span>
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
            <div class="screen">
              <span class="level f20">黄金会员</span>
              <span class="residue f14 ml10">剩余时间3天</span>
            </div>
            <v-table :columns="columns" :select-change="selectChange" :table-data="tableData" is-horizontal-resize class="w100"></v-table>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: 'myPermission',
  data() {
    return {
      titleAll: ['M信鸽', 'M指南针', 'M沃', 'MFC管理专家'],
      currentInfo: '',
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
          field: 'custome',
          title: '序号',
          width: 60,
          titleAlign: 'center',
          columnAlign: 'center',
          formatter: function(rowData, index) {
            return index + 1
          },
          isResize: true
        },
        {
          field: 'name',
          title: '功能模块',
          width: 40,
          titleAlign: 'center',
          columnAlign: 'center',
          isResize: true
        },
        {
          field: 'gender',
          type: 'selection',
          title: '权限',
          width: 40,
          titleAlign: 'center',
          columnAlign: 'center',
          isResize: true
        }
      ]
    }
  },
  methods: {
    changeInfo(index, title) {
      console.log('changeInfo', index, title)
    },
    selectChange(selection, rowData) {
      console.log('select-change', selection, rowData)
    }
  }
}
</script>

<style lang='stylus' scoped>
.my-permission {
  padding: 10Px 20Px;

  .permission-item {
    &+.permission-item {
      margin-top: 10Px;
    }
  }

  .item1 {
    .label {
      color: #000;
    }

    .value {
      background: $success-color;
      color: #fff;
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
