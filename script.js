let userName = document.getElementById("name");
let userProfession = document.getElementById("profession");
let userAge = document.getElementById("age");
let submitbtn = document.getElementById("submitbtn");
let userContainer = document.getElementById("userContainer");
let count = 0;


submitbtn.addEventListener('click', () => {
  if(userName.value === '' || userProfession.value === '' || userAge.value === ''){
    let message = document.createElement("p");
    if (displayMessage.hasChildNodes.length === 0) {
      message.innerHTML = "Error : Please Make sure All the fields are filled before adding in an employee !";
      displayMessage.appendChild(message);
  }
  }
  else{
    let li = document.createElement("li");
    li.setAttribute('id','listItem');
    li.innerHTML = "Name: "+ userName.value +"&emsp;&emsp; Profession: "+ userProfession.value + "&emsp;&emsp; Age: " + userAge.value +"&emsp;&emsp;";
    count++;
    console.log(count);
    userContainer.appendChild(li);
    let btn = document.createElement('button');
    btn.setAttribute('id','deletebtn');
    
    btn.innerHTML = "Delete";
    li.appendChild(btn);
    const pTag = document.querySelector('p');
    pTag.remove();
  }
});



userContainer.addEventListener("click", function(e){
  if(e.target.tagName === "LI"){
      e.target.classList.toggle("checked");
  }
  else if(e.target.tagName === "BUTTON"){
      e.target.parentElement.remove();
      count--;
      console.log(count);
  }
}, false);