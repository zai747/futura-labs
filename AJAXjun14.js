function getdata() {

    let xhttp = new XMLHttpRequest()

xhttp.onreadystatechange=()=>{
    if (xhttp.readyState == 4 && xhttp.status == 200) { 
      let data = JSON.parse(xhttp.responseText)
      
      data.forEach(element => {
          
          
          document.write("user name is ", element.username ,"<br>")
          document.write("they live in ",element.address.city ,"<br>") 
          document.write("phone number is ",element.phone,"<br>")
          document.write("They work at  ",element.company.name,"<br>")
          document.write(" <br> <br>")

     
          
      });
      
    }

}

xhttp.open('GET','https://jsonplaceholder.typicode.com/users')
xhttp.send()
    
}

//username city phone company name