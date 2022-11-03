export const state = () => ({
  formAge: [],
  formCardStatus: [],
  formCardType: [],
})


export const mutations = {
  SET_AGE(state, payload) {
    state.formAge = payload
  },
  SET_CARD_STATUS(state, payload) {
    state.formCardStatus = payload
  },
  SET_CARD_TYPE(state, payload) {
    state.formCardType = payload
  }
}

export const actions = {
  postForm({ state }) {
    this.$formServices.postForm({...state})
  }
}
