// Todas as funções que lidam com produtos
const productType = {
    version: "digital",
    tax: "X1",
};

// Hidden Const
const apiURL = {
    url: 'www.google.com/api',
}
async function getFullName(codeId, productName){
    console.log("productX" + codeId + " - " + productName);
    await doBreakLine();
}


// Hidden Function
async function doBreakLine(){
    console.log("\n");
}

async function getProductLabel(productName){
    console.log("product" + productName);
}



module.exports = {
    getFullName,
    getProductLabel,
    productType,
};