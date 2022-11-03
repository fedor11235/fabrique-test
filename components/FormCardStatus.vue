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
        <option>Статус карты лояльности</option>
      </select>
    </div>
  </div>

  <div class="form__container">
    <div class="form__condition">
      <div class="form__condition__title">
        Статус 1
      </div>
    </div>
    <div class="form__options">
      <select v-model="conditionDefault.active" class="form__options__select">
        <option>Активна</option>
        <option>Не активна</option>
      </select>
    </div>
  </div>

  <div v-for="(item, index) in conditions" :key="index" class="form__container">
    <div class="form__condition">
      <div class="form__condition__title">
        Статус {{index+2}}
      </div>
    </div>

    <div class="form__options">
      <select v-model="item.active" class="form__options__select">
        <option>Активна</option>
        <option>Не активна</option>
      </select>
    </div>
  </div>
  

  <div class="form__container">
    <div сlass="form__condition"></div>
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
  name: 'FormCardStatus',
  data() {
    return {
      conditionDefault: {
        active: ''
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
      setCardStatus: 'SET_CARD_STATUS'
    }),
    setFormStore() {
      const form = []
      form.push(Object.assign({}, this.conditionDefault))
      for (const condition of this.conditions) {
        form.push(Object.assign({}, condition))
      }
      this.setCardStatus(form)
    },
    handlerAdd() {
      this.conditions.push({
        active: ''
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
  background-color:$primary-green;
  padding-top: 20px;
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 29px;
  &__container {
    display: flex;
    height: 90px;
  }
  &__title {
    display: flex;
    font-size: 14px;
    font-weight: 600;
    color:$secondary-green;
  }

  &__condition {
    display: flex;
    align-items: center;
    width: 30%;
    &__title {
      display: flex;
      font-size: 14px;
      font-weight: 500;
    }
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
  &__select {
    width: 100%;
    height: 50px;
    border-radius: 8px;
    outline: 2px solid $primary-grey;
    padding: 14px;
    cursor: pointer;
    border: none;
  }
}
</style>
