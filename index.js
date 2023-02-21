let count = 0;
let peopleCount = document.getElementById("people-count");
let saveEntry = document.getElementById("save-entry");

function add() {
    count += 1;
    // document.getElementById('demo').innerHTML = count;
    peopleCount.textContent = count;
}

function remv() {
    count -= 1;
    // document.getElementById('demo').innerHTML = count;
    peopleCount.textContent = count;
}

function save() {
    let entryCount = count + " - ";
    saveEntry.textContent += entryCount;
    peopleCount.textContent = 0;
    count = 0;
}
