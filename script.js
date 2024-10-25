// document.addEventListener("DOMContentLoaded", () => {
//     const microphone = document.getElementById("microphone");
//     const activateBtn = document.getElementById("activateBtn");
//     const assistantOutput = document.getElementById("assistantOutput");

//     activateBtn.addEventListener("click", () => {
//         activateVoiceAssistant();
//     });

//     microphone.addEventListener("click", () => {
//         activateVoiceAssistant();
//     });

//     function activateVoiceAssistant() {
//         assistantOutput.textContent = "Слушаю вас...";
//         assistantOutput.classList.add("show");
//         microphone.classList.add("active");

//         setTimeout(() => {
//             assistantOutput.textContent = "Обработка запроса...";
//         }, 2000);

//         setTimeout(() => {
//             assistantOutput.textContent = "Как я могу вам помочь?";
//             microphone.classList.remove("active");
//         }, 4000);
//     }






// });



document.addEventListener("DOMContentLoaded", () => {
    const microphone = document.getElementById("microphone");
    const activateBtn = document.getElementById("activateBtn");
    const assistantOutput = document.getElementById("assistantOutput");
    const textInput = document.getElementById("textInput");
    const sendBtn = document.getElementById("sendBtn");

    activateBtn.addEventListener("click", () => {
        activateVoiceAssistant();
    });

    microphone.addEventListener("click", () => {
        activateVoiceAssistant();
    });

    function activateVoiceAssistant() {
        assistantOutput.textContent = "Слушаю вас...";
        assistantOutput.classList.add("show");
        microphone.classList.add("active");

        setTimeout(() => {
            assistantOutput.textContent = "Обработка запроса...";
        }, 2000);

        setTimeout(() => {
            assistantOutput.textContent = "Как я могу вам помочь?";
            microphone.classList.remove("active");
        }, 4000);
    }


    // Обработка текстового ввода
    sendBtn.addEventListener("click", () => {
        const userInput = textInput.value.trim();
        if (userInput) {
            assistantOutput.textContent = `You asked: ${userInput}`;
            assistantOutput.classList.add("show");
            // Логика обработки текстового ввода
            textInput.value = ""; // Очистить поле ввода после отправки
        }
    });
});
