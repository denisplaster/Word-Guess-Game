// Create an array of Words
var word = ['elsa', 'ariel', 'olaf', 'simba', 'pluto', 'dumbo', 'beast', 'merida', 'mulan'];
// Choose word randomly
var ranNum = Math.floor(Math.random() * word.length);
var choosenWord = word[ranNum];
var rightWord = [];
var wrongWord = [];
var underScore = [];

var docUnderScore = document.getElementsByClassName('underscore')
var docRightGuess = document.getElementsByClassName('rightGuess');
var docWrongGuess = document.getElementsByClassName('wrongGuess');

// ====================================================================================
console.log(choosenWord);
// Create underscores based on length of word
var generateUnderscore = () => {
    for(let i = 0; i < choosenWord.length; i++) {
underScore.push('_');
}
    return underScore;
}

// Get users guess
document.addEventListener('keypress', (event) => {
    var keyword = String.fromCharCode(event.keyCode);
// if users guess is right
    if(choosenWord.indexOf(keyword) > -1) {
      // add to right words array
rightWord.push(keyword);
      
// replace underscore with letter
underScore[choosenWord.indexOf(keyword)] = keyword;
docUnderScore[0].innerHTML = underScore.join(' ');
docRightGuess[0].innerHTML = rightWord;
//checks to see if user word matches guesses
    if (underScore.join('') == choosenWord) {
        alert('You Win');
}
}
    else {
wrongWord.push(keyword);
docWrongGuess[0].innerHTML = wrongWord;
}
});


docUnderScore[0].innerHTML = generateUnderscore().join(' ');
// Check if guess if right

// if right push to right array
// if wrong push to wrong array
