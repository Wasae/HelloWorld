let eventBinderModule=(function(byid,byclass){
    function BindEventByClass(sel,type,fn) {
        try {
            if (sel && type && fn) {
                let els=byclass(sel)
                if (els && els.length!=0) {
                    for (let ii = 0; ii < els.length; ii++) {
                        const element = els[ii];
                        element.addEventListener(type,fn)
                    }
                }      
            }
            else{
                console.log(sel)
            }
        } catch (error) {
            console.log(sel)
            console.log(error)
        }
    }

    function BindEventById(sel,type,fn) {
        try {
            if (sel && type && fn) {
                let el=byid(sel)
                if (el) {
                    el.addEventListener(type,fn)
                }
            }
            else{
                console.log(sel)
            }   
        } catch (error) {
            console.log(sel)
            console.log(error)
        }
    }

    return {
        ClassEventBinder:BindEventByClass,
        BindEventById:BindEventById
    }
}(domPlayerModule.getElementById,domPlayerModule.getElementByClass))
