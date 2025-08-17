const p = require("./services/products");

async function main() {
    console.log("Carrinho de compras:");
    p.getFullName("408", "mousepad")
    p.getFullName("508", "mouse")
}

main();