<template>
  <div class='tableEdit'>
    <span>
      <a href="" @click.stop.prevent="undo(rowData,index)">提现</a>
    </span>
  </div>
</template>

<script>

export default {
  name: 'tableEdit',
  data () {
    return {

    }
  },
  props: {
    rowData: {
      type: Object
    },
    field: {
      type: String
    },
    index: {
      type: Number
    }
  },
  methods: {
    undo() {
      let params = { type: 'edit2', index: this.index, rowData: this.rowData }
      this.$emit('on-custom-comp', params)
    }
  }
}
</script>
