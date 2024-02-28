const email = document.getElementById("email");
const name = document.getElementById("name");
const phone = document.getElementById("phone");
const message = document.getElementById("message");
function sendEmail(){
const msg = `Name: ${name.value} <br> Email: ${email.value} <br> Phone: ${phone.value} <br> Message: ${message.value}`;
Email.send({
    Host : "smtp.elasticemail.com",
    Username : "manodnyagaikwad@gmail.com",
    Password : "6302442F0FA22927E383BF1F09B912812E8C",
    To : 'manodnyagaikwad@gmail.com',
    From : document.getElementById("email").value,
    Subject : "New Contact US Form",
    Body : msg
}).then(
message => alert(message)
);
}
form.addEventListner("submit", (e) => {
e.preventDefauly();
});
