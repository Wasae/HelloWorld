let commonFunctions=(function(){
    function RaiseAlert(msg) {
        if (msg) {
            alert(msg)   
        }        
    }

    return{
        RaiseAlert:RaiseAlert
    }
}())
