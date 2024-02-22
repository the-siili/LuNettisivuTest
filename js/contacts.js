

function sendMessage(){
    Email.send({
        SecureToken : "f7913e7d-bc2f-43bd-941a-5327f889ff7f",
        To : 'akseli.siili@gmail.com',
        From : "viesti.sol@proton.me",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert("Viesti lähetetty!")
    );
}