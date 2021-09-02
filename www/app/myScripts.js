define(['jquery'], {
  changeColor: function(n){
    let a = document.getElementById('title-'+n)
    a.style.color = a.style.color === 'blue' ? 'red' : 'blue'
  },
  setResult: function(n){
    $('#res').html(n)
  }
})

