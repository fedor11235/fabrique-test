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
        <option>Возраст репондента</option>
      </select>
    </div>
  </div>

  <div class="form__container">
    <div class="form__condition">
      <div class="form__condition__title">
        Диапозон 1
      </div>
    </div>
    <div class="form__options">
      от <input v-model="conditionDefault.from" type="number" name="age" class="form__input" />
      до <input v-model="conditionDefault.to" type="number" name="age" class="form__input" />
    </div>
  </div>

  <div v-for="(item, index) in conditions" :key="index" class="form__container">
    <div class="form__condition">
      <div class="form__condition__title">
        Диапозон {{index+2}}
      </div>
    </div>

    <div class="form__options">
      от <input v-model="item.from" type="number" name="age" class="form__input" />
      до <input v-model="item.to" type="number" name="age" class="form__input" />
    </div>
  </div>
  
  <div class="form__container">
    <div class="form__condition"></div>
    <div class="form__options form__buttons">
      <BaseButton type="delete" @click="handlerDelete"/>
      <BaseButton type="add" @click="handlerAdd"/>
    </div>
  </div>
</div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'FormAge',
  data() {
    return {
      conditionDefault: {
        from: '',
        to: ''
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
      setAge: 'SET_AGE'
    }),
    setFormStore() {
      const form = []
      form.push(Object.assign({}, this.conditionDefault))
      for (const condition of this.conditions) {
        form.push(Object.assign({}, condition))
      }
      this.setAge(form)
    },
    handlerAdd() {
      this.conditions.push({
        from: '',
        to: ''
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
  background-color: $primary-yellow;
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
  color: $secondary-yellow;
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
  &__input {
    width: 111px;
    height: 50px;
    padding: 0;
    border-radius: 8px;
    outline: 2px solid $primary-grey;
    border: none;
    padding-left: 14px;
    margin: 0 19px 0 7px;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
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
}
</style>
