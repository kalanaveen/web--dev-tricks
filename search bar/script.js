let text ="hello i am naveen kala";
let speech = new SpeechSynthesisUtterance();
function TextToSpeech(){
    speech.text = text;
    speech.rate = 1;
    speech.volume = 1;
    speech.pitch = 1;
    speech.lang = "en-US";
    speechSynthesis.speak(speech)
}
TextToSpeech();