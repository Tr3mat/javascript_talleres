
// const montoCredito = 150000;
// const tasaInteresAnual = 0.12;
// const numPagosMensuales = 12;




function imprimir(){
    let interes=document.formu.inte.value;
  let prestamo=document.formu.prest.value;
   let cuotas=document.formu.cuotas.value;
let tasaInteresMensual = (interes/100) / 12;


const valorTotal = prestamo * (1 + tasaInteresMensual * cuotas);
const valorMensual = valorTotal / cuotas;

    let capital = prestamo;
    let totalInteres = 0;
    let totalPago = 0;
    let totalCapital = 0;
    
    const tabla = document.getElementById("respuesta");
      let contenidoTabla = "";
    for (let mes = 1; mes <= numPagosMensuales; mes++) {
    
        const interes = capital * tasaInteresMensual;
        const pago = valorMensual + interes;
        const amortizacionCapital = pago - interes;
        capital -= amortizacionCapital;
        totalInteres += interes;
        totalPago += pago;
        totalCapital += amortizacionCapital;
        contenidoTabla += `
      <tr>
        <td>${mes}</td>
        <td>$${capital.toFixed(2)}</td>
        <td>$${totalPago.toFixed(2)}</td>
        <td>$${amortizacionCapital.toFixed(2)}</td>
        <td>$${interes.toFixed(2)}</td>
        <td>$${pago.toFixed(2)}</td>
      </tr>
    `;
  }
  
 
  tabla.innerHTML = contenidoTabla;
}


juliana();