function saveDSA() {
    let value = document.getElementById("dsaCount").value;

    localStorage.setItem("dsa", value);

    document.getElementById("dsaDisplay").innerText =
        "Problems Solved: " + value;

    document.getElementById("dsaProgress").value = value;
}

function saveAptitude() {
    let value = document.getElementById("aptitudeCount").value;

    localStorage.setItem("aptitude", value);

    document.getElementById("aptitudeDisplay").innerText =
        "Questions Solved: " + value;
}

function saveCert() {
    let value = document.getElementById("certCount").value;

    localStorage.setItem("cert", value);

    document.getElementById("certDisplay").innerText =
        "Certificates Completed: " + value;
}

window.onload = function () {

    let dsa = localStorage.getItem("dsa") || 0;
    let aptitude = localStorage.getItem("aptitude") || 0;
    let cert = localStorage.getItem("cert") || 0;

    document.getElementById("dsaDisplay").innerText =
        "Problems Solved: " + dsa;

    document.getElementById("aptitudeDisplay").innerText =
        "Questions Solved: " + aptitude;

    document.getElementById("certDisplay").innerText =
        "Certificates Completed: " + cert;

    document.getElementById("dsaProgress").value = dsa;
};