//console.log('%c HI', 'color: firebrick')
 const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
 const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener("DOMContentLoaded", function() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(res => res.json())
    .then(dogData => dogData.message.forEach(dogUrl => {
        let div = document.querySelector("#dog-image-container")
       div.innerHTML = `
       <img src = "${dogUrl}" />
       `
    }))
   fetch("https://dog.ceo/api/breeds/list/all")
    .then(res => res.json())
    .then(function (breedData) {
        const breeds = breedData.message
        for (breedKey in breeds) {
        const li = document.createElement('li')
        li.textContent = breedKey
        document.querySelector("#dog-breeds").appendChild(li)
        li.style.cursor =  "pointer"

        let lis = document.querySelectorAll("ul#dog-breeds > li")
        console.log(lis)
        lis.forEach(li => li.addEventListener("click", function() {
            li.style.color = "red"
        }))
        }
  })
  let option = document.getElementById("breed-dropdown")
      //console.log(option)
        //let select = document.querySelector("select#breed-dropdown > option")
        // console.log(select)
        option.addEventListener("click", function(event) {
            console.log(event.target.value)
        })
})
  //dropdown
  //let select = document.querySelector("#breed-dropdown")
  //console.log(option)
  
  


  
  



