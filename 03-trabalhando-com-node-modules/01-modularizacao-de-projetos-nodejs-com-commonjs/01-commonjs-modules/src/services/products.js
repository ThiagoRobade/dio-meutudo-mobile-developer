// Todas as funções que lidam com produtos
async function getFullName(codeId, productName){
    console.log("productX" + codeId + " - " + productName);
}

async function getProductLabel(productName){
    console.log("product" + productName);
}



module.exports = {
    getFullName,
    getProductLabel
};