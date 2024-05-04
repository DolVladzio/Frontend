//------------------
var helloSpeaker = (function () {
    var speakWord = "Hello";
    function speak(name) {
    console.log(speakWord + " " + name);
    }
    return {
    speak: speak
    };
})();
//------------------
var byeSpeaker = (function () {
    var speakWord = "Goodbye";
    function speak(name) {
    console.log(speakWord + " " + name);
    }
    return {
    speak: speak
    };
})();
//------------------
var names = ["John", "Jane", "James", "Jack", "Jill", "Joe", "Jerry", "Julia"];
for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase();
    
    if (firstLetter === 'j') {
    byeSpeaker.speak(names[i]);
    } else {
    helloSpeaker.speak(names[i]);
    }
}
//------------------
function additionalFunctionality(namesArray) {
    for (var i = 0; i < namesArray.length; i++) {
    var sum = 0;
    for (var j = 0; j < namesArray[i].length; j++) {
        sum += namesArray[i].charCodeAt(j);
    }
    console.log(namesArray[i] + ": " + sum);
    }
}
additionalFunctionality(names);