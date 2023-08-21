let collectionEl = document.getElementById('collection');
let buildAreaEl = document.getElementById('buildArea');

let collection;
let index = 0;
let iterations = 0;
let scryFallReady = true;
//Get cards
function getFormat(format){
    fetch(`/api/cards/format/${format}`, {
        method: 'GET'
    })
    .then(response => response.json())
    .then(data => {
        collection = data;
        renderCollection(index);
    });
}
function pageForward(){
    if(collection = null){
        index = 0;
        return;
    }
    index += 18;
    if(index > collection.length){
        index = collection.length;
    }
}
function pageBack(){
    if(collection = null){
        index = 0;
        return;
    }
    index -= 18;
    if(index < 0){
        index = 0;
    }
}
function renderCollection(){
    if(collection[index+iterations]){
        let articleEl = document.createElement('article');
        articleEl.className = 'card';
        let h4El = document.createElement('h4');
        h4El.textContent = collection[index+iterations].cardName;
        let imgEl = document.createElement('img');
        imgEl.className = 'cardImg';
        imgEl.src = collection[index+iterations].image;

        articleEl.appendChild(imgEl);
        articleEl.appendChild(h4El);

        collectionEl.appendChild(articleEl);

        iterations++;
        if(iterations == 18){
            iterations = 0;
            return;
        }
    }
    else{
        iterations = 0;
        return;
    }
    setTimeout(renderCollection, 100);
}
getFormat('standard');