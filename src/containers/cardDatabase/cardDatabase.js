import common from './Common';
import rare from './Rare';
import epic from './Epic';
import legendary from './Legendary';


const cardDatabase = (cardRarity, cardLevel) => {

    let filteredArray = [];
    let pushedArray = [];
    let reducedArray = [];

    const cardArray = (rarityOfArray) => {
        filteredArray = rarityOfArray.filter(item => item.key <= cardLevel)

        for(let x = 0; x < filteredArray.length; x++) {
            pushedArray.push(filteredArray[x].cardsRequiredToUpgrade)
        }
        console.log(pushedArray);
        reducedArray = pushedArray.reduce((a, b) => a + b, 0);
        console.log("Reduced - " + reducedArray);

        return reducedArray
    }
    
    if(cardRarity === 9586) {return cardArray(common)}

    if(cardRarity === 2586) {return cardArray(rare)}

    if(cardRarity === 386) {return cardArray(epic)}

    if(cardRarity === 36) {return cardArray(legendary)}

    if(cardRarity === "")  {return null}
}
export default cardDatabase;