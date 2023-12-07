var PK = 1900;
var KK = 2100;
var danasnjidatum = new Date();

var Vrij = danasnjidatum.toTimeString();

var Sat = danasnjidatum.getHours().toString();
if (Sat < 10) {
    Sat = "0" + Sat;
}

var Minute = danasnjidatum.getMinutes().toString();
if (Minute < 10) {
    Minute = "0" + Minute;
}

var Time = Sat + Minute;

var VR = Number(Time);

var Dan = new Date().getDay();

switch (true) {
    case (Dan == 1 || Dan == 5):
        if (VR >= PK && VR <= KK) {
            document.getElementById("switch").innerHTML = "Kurs je u toku.";
        }
        else if (VR < PK)
            document.getElementById("switch").innerHTML = "Kurs još nije počeo..";
        else if (VR > KK)
            document.getElementById("switch").innerHTML = "Kurs je završen!";
        break;
    default:
        document.getElementById("switch").innerHTML = "Kurs nije danas!";
        break;
}