document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('email-field');
    const email = emailField.value;

    const passwordField = document.getElementById('password-field');
    const password = passwordField.value;

    // do not verify email password on the client side
    if(email == 'himudot1239@gmail.com' && password ==='himudot1239@'){
        window.location.href = "bank.html";
    }
    else{
        alert('remember email and password!!')
    }
})