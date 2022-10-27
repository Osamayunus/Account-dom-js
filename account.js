document.getElementById('button').addEventListener('click', function (event) {
    const inputField = document.getElementById('input-Email-Address')
    const inputText = inputField.value;
    inputField.value = '';
    console.log(inputText)
    // password part
    const inputFieldPassword = document.getElementById('input-password')
    const inputPassword = inputFieldPassword.value;
    inputFieldPassword.value = '';
    console.log(inputPassword);
    if (inputText !== '' && inputPassword !== '')
        window.location.href = ('bank.html')

})
