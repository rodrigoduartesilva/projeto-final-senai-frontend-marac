let inputFirstName = document.querySelector("#firstName");
let inputLastName = document.querySelector("#lastName");
let inputEmail = document.querySelector("#email");
let textMessage = document.querySelector("#textAreaInput");
let feedbackMsg = document.querySelector(".feedback-msg");
let btnEnviar = document.querySelector("#btnSend");

console.log(window.location.href);


btnEnviar.addEventListener('click', function (event) {
    const successText = document.querySelector("#formSubtitle");
    let contactForm = document.querySelector("#contactForm");
    let formSpace = document.querySelector("#formSpace");

    if (inputFirstName.value === '') {
        feedbackMsg.appendChild();
        event.preventDefault();
    } else if (inputLastName.value === '') {
        feedbackMsg.appendChild();
        event.preventDefault();
    } else if (inputEmail.value === '') {
        feedbackMsg.appendChild();
        event.preventDefault();
    } else if (textMessage.value === '') {
        feedbackMsg.appendChild();
        event.preventDefault();
    } else {
        contactForm.remove();

        if (window.location.href === "http://127.0.0.1:5501/theme/contact.html") {
            successText.innerHTML = "<p class='msg-success-container'>Mensagem enviada com sucesso, em breve entraremos em contato.</p>";
        } else {
            successText.innerHTML = "<p class='msg-success-container'>Message sent successfully, we will contact you soon.</p>";
        }


        setTimeout(() => {
            successText.remove();
            formSpace.appendChild(contactForm);

            inputFirstName.value = '';
            inputLastName.value = value = '';
            inputEmail.value = '';
            textMessage.value = '';
            window.location.reload();
        }, 6000);
    }
});