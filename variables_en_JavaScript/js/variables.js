
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

    /********************************************** Fase3 ***************************************************************/

        let resultado = "";
		let calc;
		let cert = false;
		let frase1 = "El any " +year+ " es de traspas";
        let frase2 = "El any " +year+ " no es de traspas";
        
        for(i = traspas; i < year; i++) {
			
			if(i % 400 == 0 || (i % 4 == 0 && i % 100 != 0) ){
				
				calc = i + temps;
				
				resultado += " " + calc;
	
			}
			
        }
        
        document.getElementById("text4").innerHTML = "Els anys de traspas desde " +traspas+ " son:" +resultado+ "<br>";

        if(year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
			cert = true;
			alert(frase1);
			
		} else {
			cert = false;
			alert(frase2);
			
		}

    /********************************************** Fase4 ***************************************************************/

        let nomComplet = "El meu nom és " +name+ " " +firtName+ " " +seconName;
        let dataNaixament = "Vaig néixer el " +day+ "/" +month+ "/" +year;
        
        if(year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
            cert = true;
            
            document.getElementById("text5").innerHTML = "Exemple de sortida per consola: <br>" +nomComplet+ "<br>" +dataNaixament+ "<br> El menu any de neixament es de traspas";
			
		} else {
			cert = false;
            document.getElementById("text5").innerHTML = "Exemple de sortida per consola: <br>" +nomComplet+ "<br>" +dataNaixament+ "<br> El menu any de neixament es de traspas";			
		}

};