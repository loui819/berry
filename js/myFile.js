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


    printUser(userInput);
    userInput = userInput.toLowerCase();
    if (userInput.includes('lol')) {

        printBerry('I can see trough your camera that you aren\'t lauging at all...');
    }
    else if (userInput.includes('sudo')){

        printBerry('this isn\'t fucking ubuntu brah!');
    }
    else if (userInput.includes('mathilde')){

        printBerry('The love of my masters life!<br>The teeny tiny love of his life!..');
        printBerryImage("images/mathilde.jpg");
    }
    else if (userInput.includes('wesley')){

        printBerry('Wesley is my master\'s master!<br>He taught him every piece of code I was created by.. ');
        printBerry('And he really wanted this picture to be part of me :')
        printBerryImage("images/hummingsharks.jpg");
    }
    else if (userInput.includes('hummingshark')){

        printBerry('Hey Wesley, Thanks for teaching me all this stuff about coding<br>It\'s really awesome!!')
        printBerry('Here is your picture of the Hummingshark xD')
        printBerryImage("images/hummingsharks.jpg")
    }

    else if (userInput.includes('sam')){

        printBerry('Sam is the man! sam de man die alles can!');
        printBerry('some even say he conquered a small piece of africa');
        printBerryImage("images/sam.jpg")
    }
    else if (userInput.includes('emiel')){

        printBerry('I know Emiel!<br>Awesome dude for sure, <br>in lands far from here he\'s known as the king of troling..');
        printBerry('also here is a funny picture of him');
        printBerryImage("images/emiel.jpg");

    }
    else if (userInput.includes('bryan')){

        printBerry('yes, bryan!.. ');
        printBerry('A most trustworthy fellow! very funny, and not so fond of rasisms..');
        printBerry('some say he\'s dangerous.. I say, look at this picture:');
        printBerryImage("images/bryan.jpg" );

    }

    else if (userInput === 'exit') {

        printBerry('You can\'t exit...<br>You can never exit...')

    }
    else {

        printBerry('This I do not understand...<br> I bet you mean something important though...')

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
function printBerryImage(value) {
    printImage('berry', value);
}
function printUser(value) {
    print('user', value);
}
function print(from, value) {
    chatBoxChat.innerHTML = chatBoxChat.innerHTML + '<div class="message ' + from + '"><div>' + value + '</div></div>';
}
function printImage(from, value){
    chatBoxChat.innerHTML = chatBoxChat.innerHTML + '<div class="message ' + from + '"><div><img width="250" height="250" src=' + value + '/></div></div>';
}