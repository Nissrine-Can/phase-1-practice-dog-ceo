
 const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
 const breedUrl = 'https://dog.ceo/api/breeds/list/all'
let breedArr = [];
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
        breedArr = [...Object.keys(breedData.message)]
        
        renderBreed(breedArr);
  })
  let option = document.getElementById("breed-dropdown")
      
        option.addEventListener("change", matchLis)
        
        function matchLis(e) {
            let letter = e.target.value
            let newBreedArr =  breedArr.filter(el => el[0] === letter)
            document.querySelector("#dog-breeds").innerHTML = ""
            renderBreed(newBreedArr)
        }

          function renderBreed (breedArr) {
            
            breedArr.forEach(el => {
                const li = document.createElement('li')
            li.textContent = el
            document.querySelector("#dog-breeds").appendChild(li)
            li.style.cursor =  "pointer"
            li.addEventListener("click", function() {
                li.style.color = "red"
                })
           })
        }
})
  
  


  
  



