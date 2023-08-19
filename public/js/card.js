class Card {
    constructor(title, description, image) {
        this.title = title;
        this.description = description;
        this.image = image;
    }

    display() {
        console.log(`displaying card: ${this.title} - ${this.description} - ${this.image}`);
        
        const card = document.createElement('span')

        card.setAttribute(`card-id-${this.title}`)



        document.body.appendChild(card)
    }
};

module.exports = Card;