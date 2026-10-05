const button = document.getElementById("print-btn");
const mail = document.getElementById("mail-img");
const printer = document.getElementById("printer-img");

if (button && mail) {

    button.addEventListener("click", () => {

        mail.classList.add("show-mail");

        setTimeout(() => {

            mail.classList.remove("show-mail");
            mail.classList.add("blink-mail");

            mail.addEventListener("click", () => {
                window.location.href = "opened.html";
            });

        }, 2000);

    });

}

const card = document.getElementById("card");
const closedCard = document.getElementById("closed-card");

if (card && closedCard) {

    closedCard.addEventListener("click", () => {

        card.classList.toggle("open");

    });

}

const opened = document.getElementById("opened");

if (opened) {
    opened.classList.add("opening");
}