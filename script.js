// Assignment Code
var generatePasswordBtn = document.querySelector('#generate');
var password = '';
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var specialChars = ['!', '@', '#','$', '%', '^', '&', '*', '(', ')', '{', '}', '[', ']', '=', '<', '>', '/', '.', '|', '~', '?'];


function getPassword() {
   
    var length = parseInt(
        prompt('Select a password length. Choose a number between 8 and 128.')
    );
    if (isNaN(length)=== true) {
        alert('Password length must be provided as a number.');
        return;
    }

    if (length < 8) {
        alert('Length requirement too short. Please select a number between 8 and 128');
        return;
    }
    if (length > 128) {
        alert('Length requirement too high. Please select a number between 8 and 128.');
        return;
    }
    var hasNumbers = confirm(
        'Click OK to include numbers'
    );
    var hasUppercase = confirm(
    'Click OK to include uppercase letters'
    );
    var hasLowercase = confirm(
    'Click OK to include lowercase letters.'
    );
    var hasSpecialChars = confirm(
    'Click OK to include special characters.'
    );



    if 
    ((hasNumbers === false) &&  
    (hasUppercase === false) &&
    (hasLowercase === false) &&
    (hasSpecialChars === false) 
    ){
    alert('Must select at least one character type');
    return;
    }

    
    var passwordChars = {
    length: length,
    hasNumbers: hasNumbers,
    hasUppercase: hasUppercase,
    hasLowercase: hasLowercase,
    hasSpecialChars: hasSpecialChars,
    };

    return passwordChars;
}

function getRandom(arr) {
    var randIndex = Math.floor(Math.random() * arr.length);
    var randElement = arr[randIndex];

    return randElement;
  }

  // Function to generate password with user input
  function makePassword()
  {
    var password = getPassword();
    var finalPassword = [];
    var possibleChars = [];
    
  

    if (password.hasNumbers) {
        possibleChars = possibleChars.concat(numbers);

    }

    if (password.hasUppercase) {
        possibleChars = possibleChars.concat(uppercase);

    }

    if (password.hasLowercase) {
        possibleChars = possibleChars.concat(lowercase);
        
    }

    if (password.hasSpecialChars) {
        possibleChars = possibleChars.concat(specialChars);
        
    }

    for (var i = 0; i < password.length; i++) {
        var randomChar = getRandom(possibleChars);
        finalPassword.push(randomChar);
    }


  
    return finalPassword.join('');
}


function writePassword() {
    var password = makePassword();
    var passwordText = document.querySelector('#password');

    passwordText.value = 'Your password is ' + password;
}

// Add event listener to make-soup button
generatePasswordBtn.addEventListener('click', writePassword);





