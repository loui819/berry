'use strict';

const berryForm = document.getElementById('berryForm');
const chatBoxChat = document.getElementById('chatBoxChat');




printBerry('Hello, I am Berry.<br>What page would you like to open?');

berryForm.addEventListener('submit', (event) => {

    event.preventDefault();    //stop form from submitting
    const inputElement = document.getElementById('input');

    response(inputElement.value);

    clearInput(inputElement);
    autoScroll();

});

function response(userInput) {

    let myImage = new Image(100,200);
    myImage.src = 'emiel.jpg';

    printUser(userInput);

    if (userInput === 'lol') {

        printBerry('I can see trough your camera that you aren\'t lauging at all...');
    }
    else if (userInput.includes('sudo')){
        printBerry('this isn\'t fucking ubuntu brah!');
    }

    else if (userInput.includes('sam')){
        printBerry('Sam iis the man! sam de man die alles can!');
        printBerry('some even say he conquered a small piece of africa');
    }
    else if (userInput.includes('emiel')){
        printBerry('I know Emiel!<br>Awesome dude for sure, <br>in lands far from here he\'s known as the king of troling..');
        printBerry('also here is a funny picture of him');
        printBerry(document.body.appendChild(myImage));

    }
    else if (userInput.includes('bryan')){
        printBerry('yes, bryan!.. ');
        printBerry('A most trustworthy fellow! very funy, and not so fond of rasisms..');
        printBerry('some say he\'s dangerous.. I say, look at this picture');
    }

    else if (userInput === 'exit') {

        printBerry('You can\'t exit...<br>You can never exit...')

    }
    else {

        printBerry('You are not authorised to open undefined, fix sÜm undefined permissions first')

    }

}
function clearInput(inputElement) {
    inputElement.value = ''
}
function autoScroll(){
    chatBoxChat.scrollTo(0, chatBoxChat.scrollHeight);
}

/** utils */
function printBerry(value) {
    print('berry', value);
}
function printUser(value) {
    print('user', value);
}
function print(from, value) {
    chatBoxChat.innerHTML = chatBoxChat.innerHTML + '<div class="message ' + from + '"><div>' + value + '</div></div>';
}