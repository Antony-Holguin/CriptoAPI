
class userInterface{

    constructor(){
        this.init();
    }

    init(){
        //this.showMessage();
        this.buildSelect();
    }

    showMessage(message, clase){
        const div = document.createElement("div");
        div.className = clase;
        div.appendChild(document.createTextNode(message));
        console.log(div);
        let messageContainer = document.querySelector(".mensajes");
        messageContainer.appendChild(div);

        setTimeout(() => {
            messageContainer.removeChild(div);
        }, 3000);
    }

    buildSelect(){
        API.getCoinsApi()
        .then(coins => {
            const select = document.querySelector("#criptomoneda");
            for (const [key,value] of Object.entries(coins.Data)) {
                //Llenar option
                const options = document.createElement('option');
                options.value = value.Symbol;
                options.appendChild(document.createTextNode(value.CoinName));
                select.appendChild(options);
                //console.log(value.Id);
            }
        })
        .catch(error => console.log(error));
    }

    showResults(result, fromCoin, toCryptoCoin){
        const div = document.querySelector("#resultado");
        div.className = "alert bg-alert text-primary";
        
        const resultCoin = document.createElement("p");
        resultCoin.innerHTML = `The result of ${fromCoin} to ${toCryptoCoin} is result:${resultCoin}`;
        div.appendChild(resultCoin);
    }
}