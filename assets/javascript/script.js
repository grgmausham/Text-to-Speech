let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    //provides all the default voices available in the device
    voices = window.speechSynthesis.getVoices();
 
}


// converts textarea text into default system speeech
document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speek(speech);
})