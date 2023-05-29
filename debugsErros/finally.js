try {
    let c = a / b
} catch(e) {
    console.log("Algo deu errado " + e.message)
} finally {
    console.log("Fim do código")
}
