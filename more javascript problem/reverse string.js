// string revers use for loop in javascrip..
const speech = "Hello developer";
let reversSpeech = '';
for (let i = 0; i < speech.length; i++){
    const element = speech[i];
    reversSpeech = element + reversSpeech;
}
console.log(reversSpeech);


// string revers use function in use for loop in javascrip...
function getReverse(words) {
    const speech = words;
    let reversSpeech = '';
    for (let i = 0; i < speech.length; i++){
        const element = speech[i];
        reversSpeech = element + reversSpeech;
    }
    return reversSpeech;
}
const word = "i am a good programmer"
const result = getReverse(word);
console.log(result)


// string revers use function in use for of loop in javascrip...
function wordReverse(words) {
    const speech = words;
    let reversSpeech = '';
    for (const element of speech){
        reversSpeech = element + reversSpeech;
    }
    return reversSpeech;
}
const myWord = "i am a good developer in world!"
const myResult = wordReverse(myWord);
console.log(myResult)


// string revers use for loop in javascrip..
const text = "this is my computer"
let reverseText = "";
let i = 0
while (i < text.length) {
    const element = text[i];
    reverseText = element + reverseText;
    i += 1;
}
console.log(reverseText);


// string revers use function in use while loop in javascrip...
function reversElement(myText) {
    const text = myText;
    let reverseText = "";
    let i = 0
    while (i < text.length) {
        const element = text[i];
        reverseText = element + reverseText;
        i += 1;
    }
    return reverseText;
}
const herText = "hi habib you are liquid person";
const myTextResult = reversElement(herText);
console.log(myTextResult);
