<template>
  <div class="respondents">
    <div class="respondents__forms">
      <FormAge />
      <div class="respondents__forms__separator">
        <FormLabel class="respondents__forms__label" color="#c3ccd5" text="и"/>
      </div>
      <FormCardType />
      <div class="respondents__forms__separator">
        <FormLabel class="respondents__forms__label" color="#e7f6db" text="и"/>
      </div>
      <FormCardStatus />
      <div class="respondents__send">
        <BaseButton type="send" @click="handlerSend"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'IndexPage',
  methods: {
    ...mapActions(['postForm']),
    handlerSend() {
      this.postForm()
    }
  }
}
</script>
<style scoped lang="scss">
.respondents {
  display: flex;
  justify-content: center;
  padding: 64px 0;
  &__forms {
    max-width: 1020px;
    width: 100%;
    margin: 0 16px;
    border-radius: 6px;
    overflow: hidden;
    box-shadow: 0 0 10px $secondary-grey;
    &__separator {
      position: relative;
      height: 1px;
      background-color: $primary-grey;
    }
    &__label {
      position: absolute;
      bottom: -25px;
      left: 40px;
    }
  }
  &__send {
    display: flex;
    align-items: center;
    justify-content: center;
    height:90px;
  }
}
</style>
