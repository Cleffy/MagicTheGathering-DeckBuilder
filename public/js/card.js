/**
 * @class Card
 * @param id            -Skryfall ID for card
 * @param parentEl      -Element this will be placed into
 */

class Card {
    constructor(id, parentEl) {
        this.id = id;
        this.parentEl = parentEl;
        this.name;
        this.image;
    }
    async getCardInfo() {
        let response = await fetch('/api/cards/' + this.id, {
            method: 'GET'
        });
        this.name = response.name;
        this.image = response.image;
    }

    display() {
        let articleEl = document.createElement('article');
        articleEl.className = 'card';
        let h4El = document.createElement('h4');
        h4El.textContent = this.name;
        let imgEl = document.createElement('img');
        imgEl.className = 'cardImg';
        imgEl.src = this.image;

        articleEl.appendChild(h4El);
        articleEl.appendChild(imgEl);

        this.parentEl.appendChild(articleEl);
    }
};

module.exports = Card;