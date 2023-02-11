console.log("event js added");
//onclick event handaler
 function func(){
    console.log("you succefully create onclick event");
}

//event handaler wiith event listner

    document.getElementById("simple").addEventListener('mouseover',function () {
     console.log("hello event")})

// event handaler  append  item 

let parent_item = document.getElementById("section-3");
document.getElementById("submit").addEventListener('click', function() {
  let textarea_value = document.getElementById('textarea').value;
  let child_item = document.createElement("p");
  child_item.innerText = textarea_value;
  parent_item.appendChild(child_item);
  document.getElementById("textarea").value = "";
});
//face problem  append child not accept text
//  //event delegation

document.getElementById("parent").addEventListener('click', function(event) {
    if (event.target.tagName === "LI") {
      event.target.remove();
    } else if (event.target.id === "delete") {
      let parent = document.getElementById("parent");
      while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
      }
    }
  });
 

 //disabled button

 document.getElementById("email-text").addEventListener("keyup", function () {
    let email = document.getElementById("email-text").value.toLowerCase();
    if (email === "email") {
      document.getElementById("email").removeAttribute("disabled");
    } else {
      document.getElementById("email").setAttribute("disabled", true);
    }
  });

  //get face problem remove atribut