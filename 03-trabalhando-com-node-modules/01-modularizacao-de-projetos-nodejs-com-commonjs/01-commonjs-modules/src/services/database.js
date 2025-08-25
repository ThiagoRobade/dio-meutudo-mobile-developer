// Export Default Async
exports.connectToDatabase = async (dataName) => {
    console.log("Conectando ao banco de dados..." + dataName);

}

exports.disconnectFromDatabase = () => {
    console.log("Desconectando do banco de dados...");
}