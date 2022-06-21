
var margin = 0;
let stopflag = false


$("#start").click(() =>  go())
$("#return").click(() => goback())
$("#stop").click(() => stopflag = true)


let go =() => {

    stopflag = false
    $("#wimg").removeClass("start")
    $("#wimg").addClass("walk")

        if ($("#wimg").hasClass("flip")) 
        {
            $("#wimg").toggleClass("flip")
        }
    
            let interval =  setInterval(() => {
                $("#wimg").css({"margin-left": margin + "%" })
                console.log(margin);
                margin += 1 ;
                if (margin == 80) {
                    $("#wimg").toggleClass("flip")
                }
                clear(margin,interval)
            
            }, 90);
}
    
    
    const clear = (margin,interval) => {
        
        if ( (!(margin > 0 && margin < 80)) || stopflag == true)
        {
            clearInterval(interval)
            
        }
       
    }


    const goback = () => {

          stopflag = false
          let interval =  setInterval( () => {

            if (!($("#wimg").hasClass("flip"))) 
            {
                $("#wimg").toggleClass("flip")
            }
        
                $("#wimg").css({"margin-left": margin + "%" })
                console.log(margin);
                margin -= 1 ;
                if (margin == 0) {
                    $("#wimg").toggleClass("flip")
                }
                clear(margin,interval)
            }, 90);
                     
    }
       

        



