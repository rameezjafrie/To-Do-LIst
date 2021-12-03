function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("inputbox").value;
    var t = document.createTextNode("inputValue");
    li.appendChild(t);
  
    if (inputValue === '') {
        alert("you must writing something!")
    }else{
        document.getElementById("list").appendChild(li);
    }
    
    document.getElementById("inputbox").value='';
    var span = document.createElement('span')
    var txt = document.createTextNode("\u00D7")

    span.className("close")
    span.appendChild(txt);
    li.appendChild(span);

    for( i=0; i < close.length; i++){
        close[i].onclick = function(){
            var div = this.parentElement;
            div.style.display = "none"
        }
    }

  }