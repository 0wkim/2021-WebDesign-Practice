window.addEventListener('load', () => {
  const dropzone = document.querySelector('#drop')
  dropzone.addEventListener('dragover', e => e.preventDefault())
  dropzone.addEventListener('drop', e => {
      // save()
      // reDraw()
  })
})