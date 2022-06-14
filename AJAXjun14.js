let xhttp = new XMLHttpRequest()

xhttp.onreadystatechange=()=>{
    if (xhttp.readyState == 4 && xhttp.status == 200) { 
      let data = JSON.parse(xhttp.responseText)
      data.forEach(element => {
          let name = element.name
          document.write(name ,"<br>")
      });
    }

}

xhttp.open('GET','file.json')
xhttp.send()