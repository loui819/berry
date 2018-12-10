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

    if (userInput === 'menu') {

        printBerry('Here is the menu: LOL');

        setTimeout(() => {
            goTo('menu')
        }, 2500)

    } else if (userInput === 'exit') {

        printBerry('You can\'t exit')

    } else {

        printBerry('You are not authorised to open undefined, fix sÜm undefined permissions first')

    }

    function goTo(name) {
        window.location.href = 'pages/' + name + '/index.html'
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