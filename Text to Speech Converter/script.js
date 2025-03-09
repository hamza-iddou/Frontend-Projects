let speech = new SpeechSynthesisUtterance();

let voices = [];

let voicesSelect = document.querySelector("select");


window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];


    voices.forEach((voices, i) => (voicesSelect.options[i] = new Option(voices.name, i)));

}

voicesSelect.addEventListener("change", ()=>{
    speech.voice = voices[voicesSelect.value]
})

document.querySelector("button").addEventListener("click", ()=>{
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
})