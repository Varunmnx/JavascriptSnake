const cardArray = [
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    },
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    }
  ]
//   console.log(cardArray)
cardArray.sort(()=>{
    return (0.5-Math.random())
})
// console.log(cardArray)
const cardschosen=[];
let grid = document.querySelector('#grid')
function displayelements(){
    for(let i=0;i<cardArray.length;i++){
       let card = document.createElement('img');
       card.setAttribute('src','./images/blank.png');
       card.setAttribute('data-id',i); //same as card element
       card.addEventListener('click',flipcard);
       grid.appendChild(card);
    }
//  function flipcard(){
//    let cardId = this.getAttribute('data-id')
//   //  console.log(cardArray[cardId]) 
//   cardschosen.push(cardArray[cardId].name)
//    console.log('clicked !!',cardId)
//    this.setAttribute('src',cardArray[cardId].img)
//  }
function flipcard(){
let cardId = this.getAttribute('data-id')
console.log(cardId)
this.setAttribute('src',cardArray[cardId].img)
}   
}
displayelements()