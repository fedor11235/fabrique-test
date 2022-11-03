import formApi from '@/api/formApi'

export default ({ $axios, app, res }, inject) => {
  inject('formApi', formApi($axios))
}
