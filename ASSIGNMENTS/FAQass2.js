const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const typeInput = document.getElementById("type");
const textInput = document.getElementById("text");
const btn = document.getElementById("add");

const nameErr = document.getElementById("nameErr");
const emailErr = document.getElementById("emailErr");
const textErr = document.getElementById("textErr");

const display = document.getElementById("display");
const countDisplay = document.getElementById("count");
const empty = document.getElementById("empty");

let total = 0;

btn.addEventListener("click", function (event) {
    event.preventDefault();


    nameErr.textContent = "";
    emailErr.textContent = "";
    textErr.textContent = "";
    empty.textContent = "";

    const nameVal = nameInput.value.trim();
    const emailVal = emailInput.value.trim();
    const typeVal = typeInput.value;
    const textVal = textInput.value.trim();

    if (nameVal === "") {
        nameErr.textContent = "Name is required";
        return;
    }

    if (!emailVal.includes("@")) {
        emailErr.textContent = "Enter a valid email";
        return;
    }

    if (textVal.length < 20) {
        textErr.textContent = "Minimum 20 characters required.";
        return;
    }


    let label = "";
    if (typeVal === "Bug") label = "[Needs Review]";
    if (typeVal === "Suggestion") label = "[Idea]";
    if (typeVal === "Appreciation") label = "[Positive]";


    const block = document.createElement("div");
    

    block.innerHTML = `
        <hr>
        <h4 class="label-box"></h4>
        <p><strong>Name:</strong> <span class="n"></span></p>
        <p><strong>Email:</strong> <span class="e"></span></p>
        <p><strong>Type:</strong> <span class="t"></span></p>
        <p><strong>Feedback:</strong> <span class="f"></span></p>
        <button class="del">Delete</button>
    `;


    block.querySelector(".label-box").textContent = label;
    block.querySelector(".n").textContent = nameVal;
    block.querySelector(".e").textContent = emailVal;
    block.querySelector(".t").textContent = typeVal;
    block.querySelector(".f").textContent = textVal;


    block.querySelector(".del").addEventListener("click", function() {
        block.remove();
        total--;
        countDisplay.textContent = total;
    });

    display.appendChild(block);
    total++;
    countDisplay.textContent = total;


    nameInput.value = "";
    emailInput.value = "";
    textInput.value = "";
});