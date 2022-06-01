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
let cardschosen=[];
let cardschosenId=[];
let grid = document.querySelector('#grid')

function displayelements(){
    for(let i=0;i<cardArray.length;i++){
       let card = document.createElement('img');
       card.setAttribute('src','./images/blank.png');
       card.setAttribute('data-id',i); //same as card element
       grid.appendChild(card);
       card.addEventListener('click',flipcard);
    }

function checkMatch(){

  // const cards = document.querySelectorAll('img')
  // if(cardschosen[0]==cardschosen[1]){
  //   alert('hurray ! found a match')
  //   cards[cardschosenId[0]].setAttribute('src','images/white.png')
  //   cards[cardschosenId[1]].setAttribute('src','images/white.png')
  //   cards[cardschosenId[0]].removeEventListener('click',flipcard)
  //   cards[cardschosenId[1]].removeEventListener('click',flipcard)
    
  // }
  const allcards = document.querySelectorAll('img')//we need all html img elements not the array
  if (cardschosen[0]==cardschosen[1]){
    alert('wegotta fighter here!')
    allcards[cardschosenId[0]].setAttribute('src','images/white.png')
    allcards[cardschosenId[1]].setAttribute('src','images/white.png')
    allcards[cardschosenId[0]].removeEventListener('click',flipcard)
    allcards[cardschosenId[1]].removeEventListener('click',flipcard)

    
  }
}



function flipcard(){

let cardId = this.getAttribute('data-id')
this.setAttribute('src',cardArray[cardId].img)
cardschosenId.push(cardId)
cardschosen.push(cardArray[cardId].name)
if(cardschosen.length ==2){
setTimeout(checkMatch,500);
}

}   
}
displayelements()