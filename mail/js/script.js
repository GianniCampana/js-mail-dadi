

var emails = ["totò@peppino.it",
                        "franco@ciccio.it", 
                        "gianni@campana.it", 
                        "ale@franz.it", 
                        "ficarra@picone.it"];

var mail_to_found = prompt("inserisci la tua mail");
var mail_presente = false;

for(var i=0; i<emails.length; i++){
    var email = emails[i]
    console.log(email)
    if(email === mail_to_found){
        mail_presente = true
        
    }
}

if(mail_presente){
    document.getElementById('accesso').innerHTML = "l'accesso è consentito";
}else{
    document.getElementById('accesso').innerHTML = "l'accesso NON è consentito";
}


   



