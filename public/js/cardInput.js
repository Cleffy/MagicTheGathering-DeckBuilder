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
                let set_name = card.set_name;
                let artist = card.artist;
                let standard = card.legalities.standard == "legal" ? true : false;
                let future = card.legalities.future == "legal" ? true : false;
                let historic = card.legalities.historic == "legal" ? true : false;
                let gladiator = card.legalities.gladiator == "legal" ? true : false;
                let pioneer = card.legalities.pioneer == "legal" ? true : false;
                let explorer = card.legalities.explorer == "legal" ? true : false;
                let modern = card.legalities.modern == "legal" ? true : false;
                let legacy = card.legalities.legacy == "legal" ? true : false;
                let pauper = card.legalities.pauper == "legal" ? true : false;
                let vintage = card.legalities.vintage == "legal" ? true : false;
                let penny = card.legalities.penny == "legal" ? true : false;
                let commander = card.legalities.commander == "legal" ? true : false;
                let oathbreaker = card.legalities.oathbreaker == "legal" ? true : false;
                let brawl = card.legalities.brawl == "legal" ? true : false;
                let historicbrawl = card.legalities.historicbrawl == "legal" ? true : false;
                let alchemy = card.legalities.alchemy == "legal" ? true : false;
                let paupercommander = card.legalities.paupercommander == "legal" ? true : false;
                let duel = card.legalities.duel == "legal" ? true : false;
                let oldschool = card.legalities.oldschool == "legal" ? true : false;
                let premodern = card.legalities.premodern == "legal" ? true : false;
                let predh = card.legalities.predh == "legal" ? true : false;
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
                    body: JSON.stringify({id, name, type, color, manaCost, ability, flavorText, power, toughness, image, rarity, set_name, artist, standard, future, historic, gladiator, pioneer, explorer, modern, legacy, pauper, vintage, penny, commander, oathbreaker, brawl, historicbrawl, alchemy, paupercommander, duel, oldschool, premodern, predh}),
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