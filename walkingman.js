
        $("#start").click(() => {

                $("#wimg").removeClass("start")
                $("#wimg").addClass("walk")

                var margin = 0;

               
                
              var interval =  setInterval(() => {

                
                        $("#wimg").css({"margin-left": margin + "%" })
                        console.log(margin);
                        margin += 1 ;
                        clear(margin)
                      
                }, 100);
        function clear(margin) {
            if (margin == 90)
            {
                clearInterval(interval)
                $("#wimg").addClass("flip")
                
            }
        }
                
        })
        $("#stop").click(() => {

            $("#wimg").stop()
        } )

        



