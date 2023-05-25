function imprimePar (a) {
    // while (a > 0) {
    //     if (a % 2 === 0) {
    //         console.log("Números pares = " + a)
    //     }
    //     a--
    // }
    for(let i = a; i >= 0; i--) {
        if (i % 2 === 0) {
            console.log("Números pares = " + i)
        }
    }
}
imprimePar(10)