var products = [];
var suma = 0;

function add(product, price) {
    suma = suma + price;
    products.push(product);
    console.log(suma);
    console.log(products);
    document.getElementById("total").innerHTML= "TOTAL = $"+suma;

}

function pay() {
    if (products.length == 0) {
        window.alert("no hay ningun producto para pagar");
    }else{
        window.alert(products.join(",\n"));
        document.getElementById("total").innerHTML= "TOTAL = $"+0;
        suma = 0;
        products = [];
    }
    
}