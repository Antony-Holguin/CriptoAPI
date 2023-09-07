class apiKey{
    constructor(apikey){
        this.apikey;
    }

    async getCoinsApi(){
        let url = `https://min-api.cryptocompare.com/data/all/coinlist?&api_key=${this.apiKey}`;

        let getCoinsUrl = await fetch(url);
        let answerJson = getCoinsUrl.json();
        return answerJson;
    }
    
    async getBitcoinValue(coinName, criptoCoinName){
        const url = `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${criptoCoinName},&tsyms=${coinName}&api_key=${this.apiKey}`;
        const getData = await fetch(url);
        const jsonData = getData.json();
        return jsonData;
    }
}