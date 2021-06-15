function vermas(id){
    if(id=="mas"){
    document.getElementById("desplegar").style.display="block";   
    document.getElementById("mas").style.display="none"; 
    }
    else{
        if(id=="mas1"){
            document.getElementById("desplegar1").style.display="block";   
            document.getElementById("mas1").style.display="none"; 
            document.getElementById("desplegar").style.display="none";
            document.getElementById("mas").style.display="inline";
        }else{
            if(id=="mas2"){
                document.getElementById("desplegar2").style.display="block";   
                document.getElementById("mas2").style.display="none"; 
                document.getElementById("desplegar").style.display="none";
                document.getElementById("mas").style.display="inline";
                document.getElementById("desplegar1").style.display="none";
                document.getElementById("mas1").style.display="inline" ;}}}}