
const inputBox = document.querySelector(".inputbox")
const addBtn = document.querySelector("#addbutton")


inputBox.onkeyup = ()=> {
    let userdata = inputBox.value;  // getting user entered value   

    if( userdata.trim() !=0){
        addBtn.classList.add("active")
        console.log("helo every one")
        
    }else{
        addBtn.classList.remove("active")

    }
}

