$(document).ready(() => {
    $("button first-child").click(() => {

        $.get("./base.txt",(res) => {

            document.querySelector("h1").innerHTML=res
        })
    })

    
        $("#hide").click( () => {

            $("H2").slideToggle()
           
        })

        $("#show").click( () => {
            
            $("h2").fadeTo("slow",0.15)
            
    
        })

        $("#sqr").click(() =>{

            console.log("test");
            $("#sqr").animate({left: "250px"})
            $("#sqr").css({background:"red",height:"150px",width:"150px"})
            settimeout(() => {
                
                returnback()

            },2000)

        } )
        function returnback()
        {
          $("#sqr").animate({right: "250px"})
          $("#sqr").css({background:"#98bf21",height:"100px",width:"100px"})
        }

        $("#start").click(() => {

                $("#wimg").removeClass("start")
                $("#wimg").addClass("walk")

                var margin = 0;

               
                
                setInterval(() => {

                
                        $("#wimg").css({"margin-left": margin + "px" })
                        console.log(margin);
                        margin += 4 ;

                    

                   
                    
                }, 20);
    
                
        })
        $("#stop").click(() => {

            $("#wimg").stop()
        } )

        
})


