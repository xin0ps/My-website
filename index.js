function sendEmail() {
    var email = document.getElementById("pass").value;

    // Kullanıcının girdiği e-posta adresini sunucuya gönderme
    fetch("/send-email", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email: email })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.message);
        alert(data.message);
    })
    .catch(error => {
        console.error("Error:", error);
    });
}
