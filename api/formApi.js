export default api => ({
  postForm(form) {
    console.info('you sent a request with this body: ', form)
    alert('смотрите ответ в консоли')
  },
})
