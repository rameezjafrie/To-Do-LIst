 // Create a "close" button and append it to each list item

 var myNodeList = document.getElementsByTagName("LI");
 var li;

 for (i=0; i < myNodeList.length; i++){
     var span = document.createElement("span");
     var txt = document.createTextNode("\u2A2F");
     span.className = "close";
     span.appendChild(txt);
     myNodeList[i].appendChild(span);


 }

// Create a new list item when clicking on the "Add" button
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("inputbox").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
  
    if (inputValue === '') {
        alert("you must writing something!")
    }else{
        document.getElementById("myUL").appendChild(li);
    }
    
    document.getElementById("inputbox").value = "";
    var span = document.createElement('span')
    var txt = document.createTextNode("\u2A2F")

    span.className="close";
    span.appendChild(txt);
    li.appendChild(span);

    for( i=0; i < close.length; i++){
        close[i].onclick = function(){
            var div = this.parentElement;
            div.style.display = "none"
        }
    }

  }

 


  // Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}



// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

