const pass = document.querySelector("#pass");
const confirmPass = document.querySelector("#confirm-pass");

function checkPass(e){
    const out = document.querySelector(`output[for="pass"]`)
    if(e.target.value.length < 8 ){
        out.textContent = "Password must has at least 8 character";
    }else{
        out.textContent = "";
    }
}

function confirm(e){
    const out = document.querySelector(`output[for="confirm-pass"]`);
    const nowPass = document.querySelector("#pass");
    if(nowPass.value !== e.target.value){
        out.textContent = "Password not match";
        confirmPass.setAttribute("isvalid","false");
    }else{
        out.textContent = "";
        confirmPass.setAttribute("isvalid","true");
    }
}

pass.addEventListener("change",checkPass);
confirmPass.addEventListener("change",confirm);
