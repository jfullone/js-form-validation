function formValidate() {
    const username = document.getElementById("uname");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmpassword = document.getElementById("confirm-password");
    const phonenumber = document.getElementById("phone-number");
    const numberpattern = /^[0][0-9]{9}$/;
    const emailpattern = /^([a-z0-9\.-]+)@([a-z0-9-]+).([a-z]{2,20})$/;
    let validform = 1;

    if (username.value.trim()=="") {
        document.getElementById("uname_lbl").innerHTML = "Required";
        username.style.border = "2px solid red";
        validform = 0;
    }

    if (email.value.trim()== "") {
        document.getElementById("email_lbl").innerHTML = "Required";
        email.style.border = "2px solid red";
        validform = 0;
    }

    else if (!(emailpattern.test(email.value))) {
        document.getElementById("email_lbl").innerHTML = "Invalid";
        email.style.border = "2px solid red";
        validform = 0;
    }

    if (phonenumber.value.trim()== "") {
        document.getElementById("phone-number_lbl").innerHTML = "Required";
        phonenumber.style.border = "2px solid red";
        validform = 0;
    }

    else if (!(numberpattern.test(phonenumber.value))) {
        document.getElementById("phone-number_lbl").innerHTML = "Invalid";
        phonenumber.style.border = "2px solid red";
        validform = 0;
    }

    if (password.value.trim()== "") {
        document.getElementById("password_lbl").innerHTML = "Required";
        password.style.border = "2px solid red";
        validform = 0;
    }

    else if (password.value.trim().length<8) {
        document.getElementById("password_lbl").innerHTML = "Must contain 8 characters";
        password.style.border = "2px solid red";
        validform = 0;
    }

    if (confirmpassword.value.trim()== "") {
        document.getElementById("confirm-password_lbl").innerHTML = "Required";
        confirmpassword.style.border = "2px solid red";
        validform = 0;
    }

    else if (password.value.trim() != confirmpassword.value.trim()) {
        document.getElementById("confirm-password_lbl").innerHTML = "Passwords do not match";
        confirmpassword.style.border = "2px solid red";
        validform = 0;
    }

    if (validform == 1) {
        return true;
    }
    
    else {
        return false;
    }
    
}
