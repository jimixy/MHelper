<template>
  <div class="container tradGuide">
    <van-nav-bar
      class="j-nav-bar"
      fixed
      left-arrow
      left-text="返回"
      @click-left="back"
      :title="$route.meta.title"
    ></van-nav-bar>
    <div class="contain">
      <div class="main-contian">
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
              <v-table
                :title-rows="titleRows"
                :columns="columns"
                :table-data="tableData"
                is-horizontal-resize
                class="w100"
              ></v-table>
            </div>
          </van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tradGuide',
  data() {
    return {
      titleAll: ['我的委托', '跟进中', '已结束', '综合'],
      currentInfo: '',
      multipleSort: false,
      tableData: [
        {
          name: '赵伟',
          gender: '男',
          height: '183',
          email: 'zhao@gmail.com',
          tel: '156*****1987',
          hobby: '钢琴、书法、唱歌',
          address: '上海市黄浦区金陵东路569号17楼'
        },
        {
          name: '李伟',
          gender: '男',
          height: '166',
          email: 'li@gmail.com',
          tel: '182*****1538',
          hobby: '钢琴、书法、唱歌',
          address: '上海市奉贤区南桥镇立新路12号2楼'
        },
        {
          name: '孙伟',
          gender: '女',
          height: '186',
          email: 'sun@gmail.com',
          tel: '161*****0097',
          hobby: '钢琴、书法、唱歌',
          address: '上海市崇明县城桥镇八一路739号'
        },
        {
          name: '周伟',
          gender: '女',
          height: '188',
          email: 'zhou@gmail.com',
          tel: '197*****1123',
          hobby: '钢琴、书法、唱歌',
          address: '上海市青浦区青浦镇章浜路24号'
        },
        {
          name: '吴伟',
          gender: '男',
          height: '160',
          email: 'wu@gmail.com',
          tel: '183*****6678',
          hobby: '钢琴、书法、唱歌',
          address: '上海市松江区乐都西路867-871号'
        },
        {
          name: '冯伟',
          gender: '女',
          height: '168',
          email: 'feng@gmail.com',
          tel: '133*****3793',
          hobby: '钢琴、书法、唱歌',
          address: '上海市金山区龙胜路143号一层'
        }
      ],
      columns: [
        {
          field: 'custome',
          width: 60,
          titleAlign: 'center',
          columnAlign: 'center',
          formatter: function(rowData, index) {
            return index < 3
              ? '<span style="color:red;font-weight: bold;">' +
                  (index + 1) +
                  '</span>'
              : index + 1
          },
          isFrozen: true,
          isResize: true
        },
        { field: 'name', width: 40, columnAlign: 'center', isResize: true },
        { field: 'gender', width: 40, columnAlign: 'center', isResize: true },
        { field: 'height', width: 40, columnAlign: 'center', isResize: true },
        { field: 'tel', width: 40, columnAlign: 'center', isResize: true },
        { field: 'email', width: 40, columnAlign: 'center', isResize: true },
        { field: 'hobby', width: 40, columnAlign: 'center', isResize: true },
        { field: 'address', width: 40, columnAlign: 'left', isResize: true }
      ],

      titleRows: [
        [
          {
            fields: ['custome'],
            title: '平台/钱币',
            titleAlign: 'center',
            rowspan: 2
          },
          {
            fields: ['name'],
            title: '币种',
            titleAlign: 'center',
            rowspan: 2
          },
          {
            fields: ['gender'],
            title: '数量',
            titleAlign: 'center',
            rowspan: 2
          },
          {
            fields: ['height', 'tel', 'email'],
            title: '价格',
            titleAlign: 'center',
            colspan: 3
          },
          {
            fields: ['hobby'],
            title: '委托时间',
            titleAlign: 'center',
            rowspan: 2
          },
          {
            fields: ['address'],
            title: '成交时间',
            titleAlign: 'center',
            rowspan: 2
          }
        ],

        [
          { fields: ['height'], title: '委托', titleAlign: 'center' },
          { fields: ['tel'], title: '当前', titleAlign: 'center' },
          { fields: ['email'], title: '价差', titleAlign: 'center' }
        ]
      ]
    }
  },
  methods: {
    changeInfo(index, title) {
      console.log('changeInfo', index, title)
    }
  }
}
</script>

<style lang='stylus' scoped>
.tradGuide {
}
</style>
