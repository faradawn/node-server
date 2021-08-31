function getLuck(){
  // let arr = _.times(5, ()=>Math.floor(Math.random()*5)+1)
  let arr = [1,2,3]
  console.log('from getLuck module')
  return arr
}

function handleColor(){
  console.log('handle color!')
  var ele = document.getElementById('title')
  if(ele.style.color === 'red'){
    ele.style.color = 'blue'
  }else{
    ele.style.setProperty('color', 'red')
  }
}