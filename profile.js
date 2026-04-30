window.onload = function() {
    let email = localStorage.getItem("currentUser");
    let data = localStorage.getItem(email);

    if (data) {
        let user = JSON.parse(data);
        let realPassword = user.pass; // الباسورد الحقيقي

        // عرض البيانات الأساسية
        document.getElementById("pName").innerText = user.fName;
        document.getElementById("pEmail").innerText = user.email;
        document.getElementById("pAvatar").innerText = user.fName[0].toUpperCase();

        let passSpan = document.getElementById("pPassword");
        let toggleIcon = document.getElementById("toggleIcon");

        // --- السطر السحري: بيخلي عدد النجوم = عدد حروف الباسورد ---
        passSpan.innerText = "•".repeat(realPassword.length); 

        toggleIcon.onclick = function() {
            if (toggleIcon.classList.contains("fa-eye-slash")) {
                // إظهار الباسورد الحقيقي
                passSpan.innerText = realPassword;
                toggleIcon.classList.replace("fa-eye-slash", "fa-eye");
                toggleIcon.style.color = "#ffb703";
            } else {
                // إرجاع النجوم بنفس عدد الحروف
                passSpan.innerText = "•".repeat(realPassword.length);
                toggleIcon.classList.replace("fa-eye", "fa-eye-slash");
                toggleIcon.style.color = "#8a99a4";
            }
        };
    } else {
        window.location.href = "login.html";
    }
};

function logout() {
    // 1. نمسح اليوزر الحالي من الـ Storage عشان الموقع ميعرفوش
    localStorage.removeItem("currentUser");
    
    // 2. رسالة اختيارية تظهر لثانية (ممكن تستغني عنها)
    console.log("Logging out...");

    // 3. نوديه لصفحة الـ Login
    window.location.href = "login.html"; 
}