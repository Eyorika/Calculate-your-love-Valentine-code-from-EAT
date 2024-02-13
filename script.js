

window.onload = function() {
    let button = document.getElementById("calculate");
    button.addEventListener("click", calculateLove);
}

function calculateLove() {
    let yourName = document.getElementById("your-name").value;
    let crushName = document.getElementById("crush-name").value;

    if (yourName != "" && crushName != "") {
        let percentage = Math.floor(Math.random() * 100); //0-.99999
         //percentage = 90;
        
        document.getElementById("result-message").innerText = yourName + " እና " + crushName + "'ጋ  የፍቅር ዕድል:";
        document.getElementById("result-percentage").innerText = percentage.toString() + "%";
        return;
       
    }
}