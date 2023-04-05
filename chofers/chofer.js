const buildFila = (nombre,lunes,martes,miercoles,jueves,viernes,sabado,total) => {
    return `<tr>
                <td>${nombre}</td>
                <td>${lunes}</td>
                <td>${martes}</td>
                <td>${miercoles}</td>
                <td>${jueves}</td>
                <td>${viernes}</td>
                <td>${sabado}</td>
                <td>${total}</td>
                
                
            <tr>`;
    };
    str="";
    res="";
    let count =0;
    let totales = [];
    let nomb= [];  
    function imprimir(){
    count++
    let nombre=document.formu.nombre.value;
    let lunes=Number(document.formu.lunes.value);
    let martes=Number(document.formu.martes.value);
    let miercoles=Number(document.formu.miercoles.value);
    let jueves=Number(document.formu.jueves.value);
    let viernes=Number(document.formu.viernes.value);
    let sabado=Number(document.formu.sabado.value);
    let total=lunes+martes+miercoles+jueves+viernes+sabado

    nomb.push(nombre);
    totales.push(total);

    let numeroMayor = Math.max(...totales);
    let posicion = totales.indexOf(numeroMayor);
    let chofm=nomb[posicion]

    console.log(nomb[posicion]);



// console.log(martes);
res= buil (chofm);
document.getElementById("mayor").innerHTML = res;

str += buildFila(nombre,martes,lunes,miercoles,jueves,viernes,sabado,total);
    document.getElementById("respuesta").innerHTML = str;
}
const buil = (chofm) => {
    return ` <p>El conductor con mayor cantidad de kilometros fue: <strong>${chofm}<strong></p>`
    };
    

    