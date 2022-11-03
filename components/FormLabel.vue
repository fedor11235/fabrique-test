<template>
<div class="base-label" :style="{backgroundColor: color}">
  {{text}}
</div>
</template>

<script>
export default {
  name: 'IndexPage',
  props: {
    text: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    }
  }
}
</script>
<style scoped>
.base-label {
  height: 50px;
  width: 60px;
  border-radius: 8px;
  line-height: 50px;
  text-align: center;
}
</style>