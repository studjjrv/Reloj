function reloj(){
    //INSTANCIA DE LA FUNCIÓN DATE
    let fecha = new Date()
    //SE CREA UN OBJETO CON LOS DÍAS DE LA SEMANA
    const semana = ["Dom","Lun","Mar","Mie","Jue","Vie","Sab"];
    let diaSemana = semana[fecha.getDay()]

    //TOMAMOS LA HORA, MINUTO, SEGUNDO, AÑO, DÍA (NÚMERO DE DOS DÍGITOS), MES (NÚMERO DE DOS DÍGITOS) DEL DÍA
    let h = fecha.getHours()
    let m = fecha.getMinutes()
    let s = fecha.getSeconds()
    let ano = fecha.getFullYear()
    let dia = fecha.getDate().toString().padStart(2, "0")

    //SE CREA UN OBJETO CON LOS NOMBRES DE LOS MESES DEL AÑO
    const mesCompleto = ["ENE","FEB","MAR","ABR","MAY","JUN","JUL","AGO","SEP","OCT","NOV","DIC"];
    let mesNumero = (fecha.getMonth() + 1).toString().padStart(2, "0")
    let mesLetras = mesCompleto[(fecha.getMonth())]   

    //CONDICIONAL PARA SABER SI ES AM O PM
    let tiempo
        if(h >=12){
            tiempo = 'P'
        }else{
            tiempo = 'A'
        }
    //CREAMOS UN FORMATO PARA LA HORA, MINUTO, SEGUNDO, AÑO Y FECHA
    let horaActual = tiempo+" "+h + ":" + m 
    let segundos = s
    let soloAno = ano
    let fechaActual = dia+"-"+mesLetras

    //ENVIAMOS LOS VALORES AL HTML
    document.getElementById('reloj').value = horaActual
    document.getElementById('segundos').value = segundos
    document.getElementById('diames').value = fechaActual
    document.getElementById('ano').value = soloAno
    document.getElementById('diasemana').value = diaSemana
    
    //LLAMAMOS LA FUNCIÓN CADA SEGUNDO
    setTimeout(reloj,1000)

} 










