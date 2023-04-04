
    const buildFila = (nombre,idAbonado,estra,pagar) => {
    return `<tr>
                <td>${idAbonado}</td>
                <td>${nombre}</td>
                <td>${estra}</td>
                <td>${pagar}</td>
                
            <tr>`;
    };
    str="";
    function im(){
        let nombre=document.formu.nombre.value;
        let idAbonado=document.formu.idAbonado.value;
        let estra=Number(document.formu.estra.value);
        
    if (estra==1){
        pagar=10000;
    }
    else if(estra==2){
        pagar=15000;
    }
    else if(estra==3){
        pagar=30000;
    }
    else if(estra==4){
        pagar=50000;
    }
    else if(estra==5){
        pagar=65000;
    }
    
    
    str += buildFila(nombre,idAbonado,estra,pagar);
    document.getElementById("respuesta").innerHTML = str;
    
    }
    