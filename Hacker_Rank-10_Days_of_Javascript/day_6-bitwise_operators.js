function getMaxLessThanK(n,k){
    let maximo = 0;
    let valor = -1;
    for (let i = 1; i < n; i++) {
        for (let j = i + 1; j <= n; j++) {
            valor = i & j;
            if (valor < k && valor > maximo) {
                maximo = valor;
            }
        }
    }
    return maximo;
}