
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

    showResults(fromCoin, toCryptoCoin,result){
        const div = document.querySelector("#resultado");
        const templateStr= `
        <div class="card bg-warning">
            <div class="card-body text-light">
                <h2 class="card-title">Result:</h2>
                <p>The result of ${fromCoin} to ${toCryptoCoin} is: ${result.toFixed(2)}</p>

            </div>
        </div>`;
        
        div.innerHTML = templateStr;

        // const resultCoin = document.createElement("p");
        // resultCoin.innerHTML = `The result of ${fromCoin} to ${toCryptoCoin} is result:${resultCoin}`;
        // div.append(resultCoin);
    }
}