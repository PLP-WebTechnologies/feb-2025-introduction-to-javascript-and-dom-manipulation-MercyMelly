function changeBody() {
    const body = document.body;
    body.style.fontFamily = "Tahoma";
    const button = document.querySelectorAll("button");
    button.forEach((button) => {
        button.style.borderRadius = "10px";
        button.style.backgroundColor = "black";
        button.style.color = "white";
    });
}
function changeText() {
    const text = document.getElementById("text");
    text.textContent = "I AM THE NEXT TECH DOLLAR BILLIONAIRE!!!!";
}  
function changeHeadingStyle() {
    const heading = document.getElementById("heading");
    heading.style.color = "blue";
    heading.style.fontFamily = "sans-serif";
    heading.style.fontSize = "30px";
    heading.style.fontWeight = "bold";
    heading.style.textTransform = "uppercase";
}  
function addElement() {
    const newPara = document.createElement("p");
    newPara.textContent ="Born to sip wine in phuket,forced to work in a tech company";
    newPara.className = "newElement";
    document.body.appendChild(newPara);
}
function removeElement() {
    const element = document.querySelector(".newElement");
    if (element) {
      element.remove();
    } else {
      alert("There is no element to remove");
    }
}
function changeBackground(){
    const body = document.body;
    body.style.backgroundColor = "aquamarine";
    body.style.border= "2px solid black";
}
  