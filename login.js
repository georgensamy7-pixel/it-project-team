document.getElementById("loginForm").onsubmit = function(e) {
    e.preventDefault();

    document.querySelectorAll(".error-msg").forEach(el => el.style.display = "none");

    let email = document.getElementById("loginEmail").value;
    let pass = document.getElementById("loginPass").value;

    let storedData = localStorage.getItem(email);

    if (!storedData) {
        document.getElementById("emailError").style.display = "block";
    } else {
        let user = JSON.parse(storedData);

        if (user.pass === pass) {
            localStorage.setItem("currentUser", email); // قوله إنك دخلتِ
            
            // رسالة نجاح
            let successBox = document.getElementById("successMsg");
            if(successBox) {
                successBox.innerText = "Login successful! Redirecting...";
                successBox.style.display = "block";
            }

            setTimeout(() => {
                window.location.href = "profile.html"; // هنكتب هنا الHTMLبتاعت الـ Home
            }, 1000);
        } else {
            document.getElementById("passError").style.display = "block";
        }
    }
};