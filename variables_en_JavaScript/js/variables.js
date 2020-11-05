
function variables(){

    /********************************************** Fase1 ***************************************************************/
 
    let name = document.getElementById("name").value;
    let firtName = document.getElementById("firtName").value;
    let seconName = document.getElementById("seconName").value;

    let day = parseInt(document.getElementById("day").value);
    let month = parseInt(document.getElementById("month").value);
    let year = parseInt(document.getElementById("year").value);

    document.getElementById("text1").innerHTML = "Nombre: " +firtName+ " " +seconName+ ", " +name+ "<br>";
    document.getElementById("text2").innerHTML = "Edad: " +day+ "/" +month+ "/" +year+ "<br>";
    
    /********************************************** Fase2 ***************************************************************/

    const traspas = 1948;
    let temps = 4;
    let anys = 0;


    for(i = traspas; i <= year; i++) {
			
        i += temps;
        anys++;
        
    }

    document.getElementById("text3").innerHTML = "Anys de traspas en " +traspas+ " y " +year+ " son: " +(anys+1)+ "<br>";

    
};