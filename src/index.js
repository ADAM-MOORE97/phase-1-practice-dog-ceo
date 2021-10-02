// // console.log('%c HI', 'color: firebrick')
// let breeds = []
// const init = () => {
//     //challenge 1
//     fetch('https://dog.ceo/api/breeds/image/random/4')
//     .then(response=>response.json())
//     .then(data => addImages(data))
// }
// // challenge two
// fetch('https://dog.ceo/api/breeds/list/all')
// .then(response=>response.json())
// .then(data => addBreeds(data))

// // challenge 1

// function addImages(data){
//     const imagesHolder = document.querySelector('#dog-image-container');
//     data.message.forEach(url => {
//         const image = document.createElement('img');
//         image.src = url;
//         image.width = 200;
//         image.height=200;
//         imagesHolder.appendChild(image)

//     })}
//     // challenge two
//     function addBreeds(breeds){
//         const breedsHolder = document.getElementById('dog-breeds')
//         for(let breedKey in breeds.message){
//             // console.log(breedKey);
//             const li = document.createElement('li');
//             li.innerText = breedKey;
//             breedsHolder.appendChild(li)
//         }
    

//     }


// // challeneg 3
//     function changeColor(event){

//         event.target.style.color= 'red';
//     }

//     function updateBreedList(breeds) {
//         let ul = document.querySelector('#dog-breeds');
//         removeChildren(ul);
//         breeds.forEach(breed => addBreed(breed));
//       }
      
//       function removeChildren(element) {
//         let child = element.lastElementChild;
//         while (child) {
//           element.removeChild(child);
//           child = element.lastElementChild;
//         }
//       }
      
//       function selectBreedsStartingWith(letter) {
//         updateBreedList(breeds.filter(breed => breed.startsWith(letter)));
//       }
      
//       function addBreedSelectListener() {
//         let breedDropdown = document.querySelector('#breed-dropdown');
//         breedDropdown.addEventListener('change', function (event) {
//           selectBreedsStartingWith(event.target.value);
//         });
//       }
 




    
   
//     // challenge 3, add in html!!!!!
// //    function dropdown(event){ 
// //        breeds.filter(breed=>breed.startsWith(event))}
    







// document.addEventListener('DOMContentLoaded', init)














document.addEventListener('DOMContentLoaded', ()=>{
    const imgUrl = 'https://dog.ceo/api/breeds/image/random/4'

    const breedURL = 'https://dog.ceo/api/breeds/list/all'

    fetch(imgUrl).then(res=>res.json()).then(data=>displayImages(data))

    fetch(breedURL).then(res=>res.json()).then(breedlist=>addBreeds(breedlist))

    

});
// console.log(dogs)


// challenge 1: display random images to dom for each in array of given URL.
function displayImages(dogs){
 const imgContainer = document.getElementById('dog-image-container')   
    dogs.message.forEach(dog=>{
        const img=document.createElement('img');
        img.src=dog
        img.style.margin = '30px';
        img.style.display = 'block';
        img.style.width = '200px';
        img.style.height = '200px';
        imgContainer.appendChild(img)
        });
}

function addBreeds(breeds){
    const breedContainer = document.querySelector('#dog-breeds')
    for(let element in breeds.message){

        let list=document.createElement('li')
        // console.log(element)
        list.textContent = element
        list.className = 'breeds';
        breedContainer.appendChild(list)
    
    }

}

function changeColor(event){
    event.target.style.color = 'red';

    
}
function handleChange(e){
    let allDogs = document.querySelectorAll('list.breeds');

    allDogs.forEach(list => {
        if(list.innerText.startsWith(e.target.value)){
            list.style.display = ''
        } else{
            list.style.display = 'none'
        }
    })
}


























