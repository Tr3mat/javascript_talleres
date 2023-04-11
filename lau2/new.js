const prodImpares = function(ini,fin){
    let prod=1;
    for(let i=ini; i<= fin; i++){
        prod*=(i%2!==0) ? i: 1;
    }
    return prod;

}
console.log(prodImpares(1,15));