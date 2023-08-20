const cardInput = document.getElementById('cardInput');
cardInput.addEventListener('change', () => {
    const file = cardInput.files[0];
    addCardData(file);
});

async function addCardData(file) {
    try{
        let reader = new FileReader();
        reader.addEventListener('load', async (data) => {
            cards = JSON.parse(data.target.result);
            for(let card of cards){
                let id = card.id;
                let name = card.name;
                let type = card.type_line;
                let color = card.color_identity ? '' : null;
                let manaCost = card.mana_cost ? card.mana_cost : null;
                let ability = card.oracle_text ? card.oracle_text : null;
                let flavorText = card.flavor_text ? card.flavor_text : null;
                let power = card.power ? card.power : null;
                let toughness = card.toughness ? card.toughness : null;
                let image = card.image_uris ? card.image_uris.border_crop : null;
                let rarity = card.rarity;
                let set = card.set_name;
                let artist = card.artist;
                for(let colorType of card.color_identity){
                    switch(colorType){
                        case "W":
                            color += "W";
                            break;
                        case "G":
                            color += "G";
                            break;
                        case "R":
                            color += "R";
                            break;
                        case "U":
                            color += "U";
                            break;
                        case "B":
                            color += "B";
                            break;
                    }
                }
                let response = await fetch('/api/cards/', {
                    method: 'POST',
                    body: JSON.stringify({id, name, type, color, manaCost, ability, flavorText, power, toughness, image, rarity, set, artist}),
                    headers: { 'Content-Type': 'application/json' }
                });
                if(response.ok){
                    //document.location.replace('/');
                }
                else{
                    //alert('Failed to load database.');
                }
            }
            document.location.replace('/');
        });
        reader.readAsText(file);
    }
    catch(error){
        console.error(error);
    }
}