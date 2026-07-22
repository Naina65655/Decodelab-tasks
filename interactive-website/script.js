const message = document.getElementById("message");
const updateBtn = document.getElementById("updateBtn");
const toggleBtn = document.getElementById("toggleBtn");
const colorBtn = document.getElementById("colorBtn");

// Update text
let updated=false;
updateBtn.addEventListener("click", () => {
    if(!updated){
    message.textContent = "The content has been updated using JavaScript!";
        updated=true;}
    else{
        message.textContent="welcome to my interactive webpage!";
            updated=false;
    }
});

// Show/Hide text
toggleBtn.addEventListener("click", () => {
    if (message.style.display === "none") {
        message.style.display = "block";
        toggleBtn.textContent = "Hide Text";
    } else {
        message.style.display = "none";
        toggleBtn.textContent = "Show Text";
    }
});

// Change text color
const colors=["red","blue","green"
,"purple","orange","pink",
"brown","yellow","teal"];
let colorindex=0;
colorBtn.addEventListener("click",()=>
{
    message.style.color=
    colors[colorindex];
    colorindex++;
    if (colorindex>=colors.length){
        colorindex=0;
    }
});
