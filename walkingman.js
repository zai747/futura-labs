
$("#start").click(() => { go()})
$("#return").click(() => { goback()} )
var margin = 0;


    let go =() => {
        $("#wimg").removeClass("start")
        $("#wimg").addClass("walk")
        var interval =  setInterval(() => {
                $("#wimg").css({"margin-left": margin + "%" })
                console.log(margin);
                margin += 1 ;
                clear(margin,interval)
              
        }, 100);
          }
            
    const clear = (margin,interval) => {
        if (!(margin > 0 && margin < 90))
        {
            clearInterval(interval)
            
            $("#wimg").toggleClass("flip")
        }
            }
    const goback = () => {
            interval =  setInterval(() => {

                
                $("#wimg").css({"margin-left": margin + "%" })
                console.log(margin);
                margin -= 1 ;
                clear(margin,interval)
              
        }, 100);
    }
       

        



