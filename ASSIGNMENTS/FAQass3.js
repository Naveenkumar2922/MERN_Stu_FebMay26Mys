const q = document.getElementById("q");
const a = document.getElementById("a");
const btn = document.getElementById("add");
const qErr = document.getElementById("qerr");
const aErr = document.getElementById("aerr");
const display = document.getElementById("display");
const del = document.getElementById("del");
const empty = document.getElementById("empty");

btn.addEventListener("click", function (event) {
    event.preventDefault();
    const qVal = document.getElementById("q").value.trim();
    console.log(qVal);
    const aVal = document.getElementById("a").value.trim();
    console.log(aVal);

    if (qVal === "") {
        qErr.textContent = "Minimum 5 characters required.";
        qErr.style.color = "red";
        qVal.focus();
        return;
    }
    if (qVal.length < 5) {
        qErr.textContent = "Minimum 5 characters required."
        qErr.style.color = "red";
        qVal.focus();
        return;

    }
    if (qVal.length < 5) {
        display=textContent=qVal.value();
        qVal.appendChild(h3);       

    }
    if (aVal === "") {
        aErr.textContent = "Minimum 15 characters required.";
        aErr.style.color = "red";
        aVal.focus();
        return;
    }

    if (aVal.length < 15) {
        aErr.textContent = "Minimum 15 characters required."
        aErr.style.color = "red";
        aVal.focus();
        return;

    }
    if (aVal.length < 15) {
        display=textContent=aVal.value();
        aVal.appendChild(p);       

    }

const block = document.createElement("div");
block.innerHTML = `<h3>${qVal}</h3><p>${aVal}</p>`; 
display.appendChild(block);

});

del.addEventListener("click", function() {
    if (display.lastElementChild) {
        display.removeChild(display.lastElementChild);
    } else {
        empty.textContent="No FAQs avaliable!";
    }
});