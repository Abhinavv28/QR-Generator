let imgBox = document.getElementById("imgBox");
let qrimg = document.getElementById("qrimg");
let input = document.getElementById("input");
let btn = document.querySelector("#btn");
let reloadBtn = document.querySelector("#hidebtn");
let para = document.querySelector("#para");
let showImg = document.querySelector(".show-img");
let generatedImg = false;

let initialtext = para.innerText;
let initiaColor = para.style.color;

function generateQR(){
    if(input.value.length > 0){
    qrimg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input.value;
    imgBox.classList.remove("hide-img")
    imgBox.classList.add("show-img");
    generatedImg = true;
    } else {
        para.innerText = "Invalid Input";
        para.style.color = "Red";
        setTimeout(() => {
            para.innerText = initialtext;
            para.style.color = initiaColor;
        }, 1000)
        input.classList.add('error');
        setTimeout(() => {
            input.classList.remove('error');
        }, 1000);
    }
}

btn.addEventListener("click", () => {
    if(generatedImg){
        para.innerText = "Already generated";
        para.style.color = "Green";
    }
        generateQR();
})

reloadBtn.addEventListener("click", () => {
    qrimg.src = ""
    imgBox.classList.remove("show-img");
    imgBox.classList.add("hide-img");
    input.value = "";
    generatedImg = false;
    para.innerText = initialtext;
    para.style.color = initiaColor;
})
