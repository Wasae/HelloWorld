let domPlayerModule=(function(params) {
    function getById(elid) {
        return document.getElementById(elid)
    }

    function getByClass(sel) {
        return document.getElementsByClassName(sel)
    }

    function AttrValue(el,attr,val) {
        try {
            if (!val) {
                val=''
            }
            if(el){
                el.setAttribute(attr,value)                
            }
        } catch (error) {
            console.log(el)
            console.log(error)
        }
    }

    function SetClass(el,cls) {
        try {
            if (cls && el) {                      
                if(!el.classList.contains(cls)){
                    el.classList.add(cls)
                }
            }
        } catch (error) {
            console.log(el)
            console.log(error)
        }
    }

    function RemoveClass(el,cls) {
        try {
            if (cls && el) {
                if (el.classList.contains(cls)) {
                    el.classList.remove(cls)
                }
            }   
        } catch (error) {
            console.log(el)
            console.log(error)
        }
    }

    return {
        Attributer:AttrValue,
        SetClass:SetClass,
        RemoveClass:RemoveClass,
        getElementById:getById,
        getElementByClass:getByClass
    }
}())