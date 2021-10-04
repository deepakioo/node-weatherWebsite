// console.log('Client side javascript file is loaded!')


 const weatherForn = document.querySelector('form')
 const search = document.querySelector('input')
 const messageOne = document.querySelector('#messageOne')
 const messageTwo = document.querySelector('#messageTwo')
 weatherForn.addEventListener('submit', (e)=>{
    e.preventDefault()
    const location = search.value

    messageOne.textContent = 'Loading...'
    messageOne.textContent = ''
    
    fetch('http://localhost:3000/weather?address='+location).then((response)=>{
     response.json().then((data) => {
         if(data.error){
            messageOne.textContent = data.error
         }else {
            messageOne.textContent = data.location
            messageTwo.textContent = data.forecast
         }
     })
})
 })