const API = new apiKey("baed16da8e26f49feff252ab53e6063a67d54879b7c70d229e58cd36a5babae7");
const ui = new userInterface();

//Create object



let form = document.getElementById("formulario").addEventListener("submit", function(e){
    e.preventDefault();

    //Select el select 😁
    let coinSelect = document.getElementById("moneda");
    let coinSelected = coinSelect.options[coinSelect.selectedIndex].value;

    //Select criptop
    let criptoSelect = document.getElementById("criptomoneda");
    let criptoSelected = criptoSelect.options[criptoSelect.selectedIndex].value;

    if(criptoSelected == "" || coinSelected == ""){
        Swal.fire({
            title: 'Error!',
            text: 'No dejes campos vacios 😒',
            icon: 'error',
            confirmButtonText: 'Cool'
          })
        ui.showMessage("No dejes campos vacios", "alert bg-danger text-center");
    }else{
        API.getBitcoinValue(coinSelected,criptoSelected)
        .then(data=> {
            for (const [key,value] of Object.entries(data)) {
                console.log(`Llave: ${key}`);
                let from = key;
                for (const [llave,valor] of Object.entries(value)) {
                    console.log(llave,valor);
                }
                
            }     
        })
        .catch(error => console.log(error));
    }
});