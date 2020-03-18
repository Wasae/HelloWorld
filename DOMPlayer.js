let domPlayerModule=(function() {
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

    function ShowElement(el) {
        try {
            if (el && el.style && el.style.display) {
                el.style.display=''
            }   
        } catch (error) {
            console.log(error)
        }
    }

    function HideElement(el) {
        try {
            if (el && el.style && el.style.display) {
                el.style.display='none'
            }   
        } catch (error) {
            console.log(error)
        }
    }


    return {
        Attributer:AttrValue,
        SetClass:SetClass,
        RemoveClass:RemoveClass,
        ShowElement:ShowElement,
        HideElement:HideElement,           

        getElementById:getById,
        getElementByClass:getByClass
    }
}())
