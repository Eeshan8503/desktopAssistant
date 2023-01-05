// Onclick of the button
holder=document.getElementsByClassName("chat-holder")[0];
document.querySelector("#cmdBtn").onclick = function () {  
  // Get the text from the input
  var text = document.querySelector("#cmd").value;
  if(text!=""){
    const para = document.createElement("p");
    para.innerText = text;
    para.classList.add("user");
    holder.appendChild(para);
    const paraa = document.createElement("p");
    paraa.innerText="replying...";
    paraa.classList.add("comp");
    holder.appendChild(paraa);
    document.querySelector("#cmd").value="";
  }
  else{
    alert("Please enter a command");
  }
  }
  document.querySelector(".clr").onclick = function () {
    holder.innerHTML="";
    holder.innerHTML="<em>cleared...</em>"
  }
  // element.classList.add("mystyle");
document.onkeydown=function(e){
  if(e.keyCode==13 && document.querySelector("#cmd").value!=""){
    document.querySelector("#cmdBtn").click();
  }
}