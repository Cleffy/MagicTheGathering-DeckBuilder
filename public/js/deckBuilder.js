let collectionEl = document.getElementById('collection');
let buildAreaEl = document.getElementById('buildArea');

let collection = new Array();
let index = 0;
let iterations = 0;

window.onload = async function(){
    collection = await getFormat('standard');
    renderCollection();
}

async function getFormat(format){
    const response = await fetch(`/api/cards/format/${format}`);
    const data = await response.json();
    return data;
}
function renderCollection(){
    collectionEl.innerHTML = '';
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
    renderBook(bookEl);
}

function renderBook(bookEl,){
    if(collection[index+iterations]){
        let articleEl = document.createElement('article');
        articleEl.className = 'card';
        articleEl.id = `${(index + iterations)}`;
        let h4El = document.createElement('h4');
        h4El.textContent = collection[index+iterations].cardName;
        let imgEl = document.createElement('img');
        imgEl.className = 'cardImg';
        imgEl.src = collection[index+iterations].image;

        articleEl.appendChild(imgEl);
        articleEl.appendChild(h4El);

        bookEl.appendChild(articleEl);

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
    setTimeout(renderBook(bookEl), 100);
}