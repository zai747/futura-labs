

function click(txt) {
    if ( txt == "This heading will change") {
        document.getElementById("heading").innerHTML="This text has changed click again to change back"

    } else {
        document.getElementById("heading").innerHTML="This heading will change"

    }    
    
} 
function fun1(){
    var txt = document.getElementById("demo").value;
    console.log(txt);

}