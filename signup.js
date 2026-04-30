document.getElementById("signupForm").onsubmit = function(e) {
    e.preventDefault();

    // إخفاء رسائل الخطأ القديمة
    document.querySelectorAll(".error-msg").forEach(el => el.style.display = "none");

    let fName = document.getElementById("fName").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;
    let isValid = true;

    // 1. فحص هل الإيميل مسجل قبل كدة؟
    if (localStorage.getItem(email)) {
        let emailError = document.getElementById("emailError");
        emailError.innerText = "This email is already registered!"; 
        emailError.style.display = "block";
        return; 
    }

    // 2. التاكد من البيانات (Validation)
    if (fName.length < 3) {
        document.getElementById("fNameError").style.display = "block";
        isValid = false;
    }
    if (!email.includes("@")) {
        document.getElementById("emailError").innerText = "Please enter a valid email.";
        document.getElementById("emailError").style.display = "block";
        isValid = false;
    }
    if (pass.length < 6) {
        document.getElementById("passError").style.display = "block";
        isValid = false;
    }

    // 3. لو كله تمام، سيف وروح للـ Home
    if (isValid) {
        let user = { fName: fName, email: email, pass: pass };
        localStorage.setItem(email, JSON.stringify(user)); // سيف بياناتك
        localStorage.setItem("currentUser", email); // قوله إنك إنتِ اللي داخلة دلوقتي

        // إظهار رسالة نجاح في الصفحة
        let successBox = document.getElementById("successMsg");
        if(successBox) {
            successBox.innerText = "Welcome to CS Club!";
            successBox.style.display = "block";
            successBox.style.color = "#ffb703";
        }

        setTimeout(() => {
            window.location.href = "profile.html"; // هنكتب هنا الHTMLبتاعت الـ Home اللي مع جونير
        }, 1500);
    }
};