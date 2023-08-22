let collectionEl = document.getElementById('collection');
let buildAreaEl = document.getElementById('buildArea');

let collection = new Array();
let index = 0;
let iterations = 0;
let deck = new Array();
let deckIter = 0
let deckIndex = 0

//when the window loads fetch the collection and render the screen
window.onload = async function(){
    collection = await getFormat('standard');
    renderCollection();
    renderDeck();
    addEventListener('resize', () => {
        renderCollection();
        renderDeck();
    })
}

//get all the cards in a format
async function getFormat(format){
    const response = await fetch(`/api/cards/format/${format}`);
    const data = await response.json();
    return data;
}

//Staging area for the collection
function renderCollection(){
    collectionEl.innerHTML = '';
    let bookEl = renderBook();
    renderCard(bookEl);
}
//book backdrop to maybe represent a binder
function renderBook(){
    let bookEl = document.createElement('section');
    let pageBackEl = document.createElement('div');
    let pageForwardEl = document.createElement('div');
    bookEl.className = 'book';
    pageBackEl.className = 'navigation';
    pageForwardEl.className = 'navigation';
    pageBackEl.innerText = ' ';
    pageForwardEl.innerText = ' ';
    pageBackEl.addEventListener('click', function(){
        if(collection.length == 0){
            index = 0;
            return;
        }
        index -= 18;
        if(index < 0){
            index = 0;
        }
        renderCollection();
    });
    pageForwardEl.addEventListener('click', function(){
        if(collection.length == 0){
            index = 0;
            return;
        }
        index += 18;
        if(index > collection.length - 18){
            index = collection.length - 18;
        }
        renderCollection();
    });
    
    collectionEl.appendChild(pageBackEl);
    collectionEl.appendChild(bookEl);
    collectionEl.appendChild(pageForwardEl);
    return bookEl;
}
//individual cards
function renderCard(bookEl){
    for(let i = 0; i < 18; i++){
        let articleEl = document.createElement('article');
        let h4El = document.createElement('h4');
        let imgEl = document.createElement('img');

        articleEl.appendChild(imgEl);
        articleEl.appendChild(h4El);
        bookEl.appendChild(articleEl);

        articleEl.className = 'card';
        
        h4El.textContent = collection[index+i].cardName;

        imgEl.className = 'cardImg';
        imgEl.src = collection[index+i].image;
        imgEl.alt = collection[index+i].cardName;
        imgEl.addEventListener('click', (event) => {
            event.stopPropagation();
            deck.push(collection[index+i]);
            renderDeck();            
        });
    }
}

//Staging area for the deck
function renderDeck(){
    buildAreaEl.innerHTML = '';
    createHeap();
}
//creates a pile of cards to represent the deck
function createHeap(){
    let heapEl = document.createElement('section');
    let centerX = document.documentElement.clientWidth / 4;
    let centerY = document.documentElement.clientHeight / 4;

    heapEl.className = 'heap';
    buildAreaEl.appendChild(heapEl);


    for(let i = 0; i < deck.length; i++){
        let divEl = document.createElement('div');
        divEl.className = 'deckProtector';
        let imageEl = document.createElement('img');
        imageEl.className = 'cardImg';
        imageEl.src = deck[i].image;
        imageEl.alt = deck[i].cardName;
        divEl.style.cssText =`
        z-index: ${i};
        left: ${Math.floor((Math.random() - 0.5) * 200) + centerX}px;
        top: ${Math.floor((Math.random() - 0.5) * 200) + centerY}px;
        transform: rotate(${(Math.random() - 0.5) * 15}deg)`;
        divEl.appendChild(imageEl);
        heapEl.appendChild(divEl);
        imageEl.addEventListener('click', (event) => {
            event.stopPropagation();
            deck.splice(i, 1);
            renderDeck();
        });
    }
}