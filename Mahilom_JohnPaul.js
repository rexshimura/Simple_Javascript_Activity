
// ACTION 1
function runAction1(){
    alert("Welcome my guy!");
    alert('You just clicked me right? I guess I should ask for your name then hehe.');
    let userName = prompt("then who are you?");

    if (userName) {
        let isReady = confirm(`Hmmmm ${userName}, are you sure this is your real name? I'd like to confirm.`);
        if (isReady) {
            alert("aight imma just call you that, thank you for the confirmation!");
        } else {
            alert("No worries, take your time lol.");
        }
    } else {
        alert("You didn't enter your name. Refresh the page to try again.");
    }

}

// ACTION 5
function runAction5() {
    alert("I am the math god");
    let num1 = parseFloat(prompt("First number:","0"));
    let num2 = parseFloat(prompt("Second number:","0"));

    let sum = num1 + num2;
    alert("Easy bruh.. the sum of ( "+ num1 +" & "+ num2 +" ) is " + sum);
}

// ACTION 7
function runAction7() {
    const age = prompt("Please enter your age:");
    const isConfirmed = confirm(`You entered ${age}. Is this correct?`);

    if (isConfirmed) {
        alert("Thank you for confirming your age");
    } else {
        alert("Please try again");
    }
}

