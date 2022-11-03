<template>
<div class="form">

  <div class="form__container">
    <div class="form__condition">
      <div class="form__title">
        Условие 1
      </div>
    </div>
    <div class="form__options">
      <select class="form__select">
        <option>Тип карты лояльности</option>
      </select>
    </div>
  </div>

  <div class="form__container">
    <div class="form__condition">
      <div class="form__condition__title">
        Тип 1
      </div>
    </div>
    <div class="form__options">
      <select v-model="conditionDefault.type" class="form__options__select">
        <option>Gold</option>
        <option>Platinum</option>
      </select>
    </div>
  </div>

  <div v-for="(item, index) in conditions" :key="index" class="form__container">
    <div class="form__condition">
      <div class="form__condition__title">
        Тип {{index+2}}
      </div>
    </div>

    <div class="form__options">
      <select v-model="item.type" class="form__options__select">
        <option>Gold</option>
        <option>Platinum</option>
      </select>
    </div>
  </div>

  <div class="form__container">
    <div class="form__condition"></div>
    <div class="form__options form__buttons">
      <BaseButton type="delete" @click="handlerDelete"/>
      <BaseButton type="add"  @click="handlerAdd"/>
    </div>
  </div>
</div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'FormLabel',
  data() {
    return {
      conditionDefault: {
        type: ''
      },
      conditions: []
    }
  },
  watch: {
    conditionDefault: {
      deep: true,
      handler(){
        this.setFormStore()
      }
    },
    conditions: {
      deep: true,
      handler(){
        this.setFormStore()
      }
    }
  },
  methods: {
    ...mapMutations({
      setCardType: 'SET_CARD_TYPE'
    }),
    setFormStore() {
      const form = []
      form.push(Object.assign({}, this.conditionDefault))
      for (const condition of this.conditions) {
        form.push(Object.assign({}, condition))
      }
      this.setCardType(form)
    },
    handlerAdd() {
      this.conditions.push({
        type: ''
      })
    },
    handlerDelete() {
      this.conditions.pop()
    }
  }
}
</script>
<style scoped lang="scss">
.form {
  background-color:$primary-blue;
  padding-top: 20px;
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 49px;
  &__container {
    display: flex;
    height: 90px;
  }

  &__title {
    display: flex;
    font-size: 14px;
    font-weight: 600;
    color:$secondary-blue;
    &__title {
      display: flex;
      font-size: 14px;
      font-weight: 500;
    }
  }
  &__condition {
    display: flex;
    align-items: center;
    width: 30%;
  }
  &__options {
    display: flex;
    align-items: center;
    width: 70%;
    &__select {
      width: 90%;
      height: 50px;
      border-radius: 8px;
      outline: 2px solid $primary-grey;
      padding: 14px;
      cursor: pointer;
      border: none;
    }
  }
  &__select {
    width: 100%;
    height: 50px;
    border-radius: 8px;
    outline: 2px solid $primary-grey;
    padding: 14px;
    cursor: pointer;
    border: none;
  }
  &__buttons {
    display: flex;
    justify-content: space-between;
  }
  &__button {
    height: 50px;
    padding: 18px 12px;
    border-radius: 8px;
    outline: 2px solid $primary-grey;
    border: none;
    background-color: white;
    cursor: pointer;
  }
}
</style>
