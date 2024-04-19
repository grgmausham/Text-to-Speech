let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    //provides all the default voices available in the device
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
 
};
//select and apply voices from dropdown menu
voiceSelect.addEventListener("change", () =>{
    speech.voice = voices[voiceSelect.value]
})

// converts textarea text into default system speeech
document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speek(speech);
});