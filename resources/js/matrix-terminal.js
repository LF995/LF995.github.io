const terminal = document.getElementById("terminal");
const output = document.getElementById("output");

const maxLines = 15; // Maximal zulässige Anzahl an Zeilen im Terminal
const matrixTexts = []; // Array für Matrix-Texte
const maxCount = 500; // Maximale Anzahl von Wiederholungen

const Texts = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Praesent lacinia leo vel lectus cursus, non gravida turpis consectetur.",
    "Suspendisse potenti. Integer scelerisque libero eu pharetra sodales.",
    "Vestibulum consectetur massa et lobortis tempor.",
  ];

let ready = false;
let position = 0;
let line = generateMatrixText();
let count = 0; // Zählervariable

function generateMatrixText() {
    min = Math.ceil(1); // Abrunden auf die nächste ganze Zahl
    max = Math.floor(Texts.length); // Abrunden auf die nächste ganze Zahl
    const randomIndex = Math.floor(Math.random() * (max - min + 1)) + min;
  return "LF@nine:~$ " + Texts[randomIndex - 1];// Hier deinen Code generieren oder eine zufällige Matrix-Zeile zurückgeben""
}

function printChar(char){
  output.innerText = output.innerText + "X"; // Array in einen Zeichenkettenabschnitt umwandeln und im Terminal anzeigen
}

function appendLineToTerminal() {
  // Überprüfen, ob die maximale Anzahl an Zeilen erreicht wurde
  if (matrixTexts.length >= maxLines)
  {
    matrixTexts.shift(); // Älteste Zeile entfernen
    output.innerText = matrixTexts.join("\n"); // Array in einen Zeichenkettenabschnitt umwandeln und im Terminal anzeigen
  }
  else
  {
    if (ready)
    {
      matrixTexts.push(line); // Neue Zeile zum Array hinzufügen
      output.innerText = matrixTexts.join("\n"); // Array in einen Zeichenkettenabschnitt umwandeln und im Terminal anzeigen
      ready = false;
      position = 0;
      line = generateMatrixText();
    }
    else 
    {
      if (position == 0 && matrixTexts.length != 0){
        output.innerText = output.innerText + "\n";
      }
      output.innerText = output.innerText + line[position];
      position++;
      if (position == line.length)
      {
        ready = true;
      }
    }
  }

  count++; // Zähler erhöhen

  // Abbruch nach einer bestimmten Anzahl an Wiederholungen
  if (count === maxCount) {
    clearInterval(interval); // Intervall stoppen, wenn maximale Anzahl erreicht ist
    output.innerText = output.innerText + "\n" + "--- CONNECTION LOST ---" + "\n";
  }
}

const interval = setInterval(appendLineToTerminal, 20);