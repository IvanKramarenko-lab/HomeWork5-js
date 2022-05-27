const age = confirm('Есть ли вам 18 лет?');
const cancel = "Вам запрещено проходить опрос";
let wakeUp = "Во сколько вы встаете?";
const notNumber = "некорректный ввод";
const veryEarly = "Очень рано";
const stillEarly =  "Всё равно рано";
const fine = "Нормально";
const tooLate = "Слишком поздно";
const veryLate = "Очень-очень поздно";
const error = "Научись пользоваться часами!";
let time;

if (age) {
    time = prompt(wakeUp);
    if (time !== null && time !== "") {
        time = Number(time);
        if (!isNaN(time)) {
            if (time <= 0 || time > 24) {
                alert (error);
            } else if (time !== 0 && time <= 5) {
                alert (veryEarly);
            } else if (time > 5 && time <= 8) {
                alert (stillEarly);
            } else if (time > 8 && time <= 11) {
                alert (fine);
            } else if (time > 11 && time <= 14) {
                alert (tooLate);
            } else if (time > 14) {
                alert (veryLate);
            }
        } else {
            alert(notNumber);
        }
    } else {
        alert(notNumber);
    }
} else {
    alert(cancel);
}