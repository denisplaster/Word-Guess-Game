var word = ['elsa', 'ariel', 'olaf', 'simba', 'pluto', 'dumbo', 'beast', 'merida', 'mulan'];
var ranNum = Math.floor(Math.random() * word.length);
var randomWord = word[ranNum];
var rightWord = [];
var wrongWord = [];
var underScore = [];
var wrongLetter = [];


var docUnderScore = document.getElementsByClassName('underscore');
var docRightGuess = document.getElementsByClassName('rightGuess');
var docWrongLetter = document.getElementsByClassName('wrongLetter');
var docWrongGuess = document.getElementsByClassName('wrongGuess');


// ====================================================================================
console.log(randomWord);
var generateUnderscore = function() {
    for(let i = 0; i < randomWord.length; i++) {
underScore.push('_');
}
    return underScore;
}

document.addEventListener('keypress', function (event) {
    var keyword = String.fromCharCode(event.keyCode);

    if(randomWord.indexOf(keyword) > -1) {
    rightWord.push(keyword);
      
underScore[randomWord.indexOf(keyword)] = keyword;
docUnderScore[0].innerHTML = underScore.join(' ');
docRightGuess[0].innerHTML = rightWord;

    if (underScore.join('') == randomWord) {
        alert('You are not the six fingered man');
}
}
    else {
        wrongWord.push(keyword);
        docWrongGuess[0].innerHTML = wrongWord;
    }
    // if (wrongGuess.push(wrongLetter){  
    //     wrongGuess.push(keyword);  ;
    //     docWrongLetter[0].innerHTML = wrongLetter;        
    // }
        // }
    if (wrongWord.indexOf(keyword) > 5) {
        
    
        alert('You have been killed by Inigo Montoya');
        sound = new Audio('../audio/SlippinDMX.mp3')
    }
});

docUnderScore[0].innerHTML = generateUnderscore().join(' ');
