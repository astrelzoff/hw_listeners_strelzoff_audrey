var firstName = document.getElementById('fname');
var lastName = document.getElementById('lname');
var emailInput = document.getElementById('email');
var messageInput = document.getElementById('message');

document.getElementsByTagName('form')[0].addEventListener('submit', function (clickEvent) {
    clickEvent.preventDefault();
    console.log('The first name is: ' + firstName.value);
    console.log('The last name is: ' + lastName.value);
    console.log('The email is: ' + emailInput.value);
    console.log('The message is: ' + messageInput.value);
});
