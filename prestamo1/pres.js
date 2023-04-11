const buuildFila = (a, b, c, d, e, f) => {
    return `<tr>
                <td>${a}</td>
                <td>${b}</td>
                <td>${c}</td>
                <td>${d}</td>
                <td>${e}</td>
                <td>${f}</td>
            </tr>`;
}
function imprimir(){


let interesAnual=document.formu.inte.value;
  let credito=document.formu.prest.value;
   let pagosMensuales=document.formu.cuotas.value;
let tasaInteres= (interesAnual/100) ;
let interes = credito * tazaInteres;
console.log(tasaInteres);
let tabla = `<table>
                <tr>
                    <th>Mes</th>
                    <th>Valor</th>
                    <th>Valor Total</th>
                    <th>Capital</th>
                    <th>Interés</th>
                    <th>Total</th>
                </tr>`;
let capitalTotal = 0;
let interesTotal = 0;              
let totalFinal = 0;         
for (let mes = 1; mes <= pagosMensuales; mes++) {
    let valor = credito;
    let valorTotal = credito + interes;
    let interesMensuales = interes / pagosMensuales
    let capital = credito / pagosMensuales
    let total = capital + interesMensuales
    valor += capital;
    valorTotal += total;
    valorTotal -= total * mes;
    valor -= capital * mes;
    tabla+=`<tr>
                <td>${mes}</td>
                <td>${valor.toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}</td>
                <td>${valorTotal.toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}</td>
                <td>${capital.toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}</td>
                <td>${interesMensuales.toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}</td>
                <td>${total.toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}</td>
            </tr>`;

    capitalTotal += capital;
    interesTotal += interesMensuales;
    totalFinal += total;
}

const aaa = "";
const bbb = "";
const ccc = "";
tabla += buuildFila(aaa,
                    bbb,
                    ccc,
                    capitalTotal.toLocaleString('es-CO', { style: 'currency', currency: 'COP'}),
                    interesTotal.toLocaleString('es-CO', { style: 'currency', currency: 'COP'}),
                    totalFinal.toLocaleString('es-CO', { style: 'currency', currency: 'COP'})
                    );
tabla += "</table>";
document.getElementById("tabla").innerHTML = tabla;
}
