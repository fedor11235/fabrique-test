export default ctx => ({
  async postForm(form) {
    try {
      await ctx.$formApi.postForm(form)
    } catch (e) {
      console.error('could not load batches feed', e)
    }
  },
})
