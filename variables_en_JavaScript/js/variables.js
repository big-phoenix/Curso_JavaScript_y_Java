
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
    
    
};