// Destructuring
const { getFullName, productType} = require("./services/products");
const config = require("./services/config");
//const {productType} = require("./services/products");
const database = require("./services/database");
const {getFullName, productType} = require("./services/products");

async function main() {
    console.log("Carrinho de compras:");

    getFullName("1", "teclado");
    // product.getFullName("408", "mousepad")
    // product.getFullName("508", "mouse")
    // product.getProductLabel("mouse")

    database.connectToDatabase();
}

main();