<template>
<button class="base-button" :style="{outlineColor: colorBorder, color: colorText}" @click="handlerClick">
  {{text}}
</button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    type: {
      type: String,
      required: true
    }
  },
  computed: {
    colorText() {
      if(this.type=='add' || this.type=='send') {
        return '#96b429'
      }
      if(this.type=='delete') {
        return '#ff0f00'
      }
    },
    colorBorder() {
      if(this.type=='add' || this.type=='send') {
        return '#dbf28b'
      }
      if(this.type=='delete') {
        return '#ffd2d2'
      }
    },
    text() {
      if(this.type=='add') {
        return 'Добавить тип'
      }
      if(this.type=='delete') {
        return 'Удалить условие'
      }
      if(this.type=='send') {
        return 'Отправить'
      }
    }
  },
  methods: {
    handlerClick() {
      this.$emit('click')
    }
  }
}
</script>
<style scoped lang="scss">

.base-button {
  height: 50px;
  padding: 0 12px;
  border-radius: 8px;
  outline: 2px solid $primary-grey;
  line-height: 50px;
  border: none;
  background-color: white;
  cursor: pointer;
}
</style>
