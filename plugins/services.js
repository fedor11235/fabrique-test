import formServices from '@/services/formServices'

export default (ctx, inject) => {
  inject('formServices', formServices(ctx))
}
