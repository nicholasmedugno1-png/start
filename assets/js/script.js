/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto ogni commento.
- Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
- In alternativa: nel terminale, `node script.js`.
- Cerca nei motori di ricerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato stamattina.
*/

/* ESERCIZIO 1 — Saluto personalizzato
   Crea due const "nome" e "cognome".
   Stampa con un template literal: "Ciao, mi chiamo Mario Rossi."
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const NAME = 'Mario';
const LASTNAME = 'Rossi';
console.log(`ciao mi chiamo ${NAME} ${LASTNAME}`);

/* ESERCIZIO 2 — Calcolatrice base
   Due numeri "a" e "b".
   Stampa le 6 operazioni nel formato "10 + 3 = 13":
   somma, differenza, prodotto, divisione, resto (%), elevamento (**).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let a = 10;
let b = 3;
let sum = a + b;
console.log(`${a} + ${b} = ${sum}`);
/* ESERCIZIO 3 — Età nel tempo
   const annoNascita (scegli un anno).
   const annoCorrente = 2026.
   Stampa: età oggi, età tra 10 anni, età 5 anni fa.
   Formato: "Tra 10 anni avrai 35 anni."
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const ANNO_NASCITA = 1995;
const ANNO_CORRENTE = 2026;
let etaAttuale =  ANNO_CORRENTE - ANNO_NASCITA; 
let etaFutura = ANNO_CORRENTE - ANNO_NASCITA + 10;
let etaPassata = ANNO_CORRENTE - ANNO_NASCITA - 5;
console.log(`eta' attuale: ${etaAttuale}, eta tra 10 anni: ${etaFutura}, eta 5 anni fa: ${etaPassata} `);

/* ESERCIZIO 4 — Maggiorenne?
   Variabile "eta".
   Calcola "maggiorenne" come "eta >= 18".
   Stampa: "Età: 25 — Maggiorenne: true"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let age = 25
let checkAge = age >= 18
console.log(`eta': ${age}, maggiorenne: ${checkAge} `);


/* ESERCIZIO 5 — Tipo del valore
   Cinque variabili: una string, una number, una boolean, una null, una undefined.
   Stampa per ognuna: "nome è di tipo: string" usando typeof.
   In commento sopra la variabile null: spiega cosa ritorna typeof null e perché.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name = 'Mario';
let ageMario = 25;
let maggiorenne = true;
let lavoro = null;
let titolo = undefined;

console.log (`name e' di tipo: ${typeof name}`);
console.log (`ageMario e' di tipo: ${typeof ageMario}`);
console.log (`maggiorenne e' di tipo: ${typeof maggiorenne}`);
// null viene definito object a causa di un bug 
console.log (`lavoro e' di tipo: ${typeof lavoro}`);
console.log (`titolo e' di tipo: ${typeof titolo}`);



/* ESERCIZIO 6 — === vs ==
   numero = 5
   stringa = "5"
   Stampa il risultato di "numero == stringa" e "numero === stringa".
   In commento, una riga: spiega la differenza.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numero = 5;
let stringa = "5";
// il doppio uguale verifica se numero e' delle stesso tipo o se ha valore uguale a stringa 
// in questo caso basta che una delle due condizioni sia vera per riportare true
console.log(numero == stringa);
// il triplo uguale verifica sia il tipo che il valore sia uguali 
// in questo caso devono essere entrambi veri per riportare true
// consigliato da usare sempre
console.log(numero === stringa);

/* ESERCIZIO 7 — Conversioni implicite
   Senza eseguire il codice, prevedi in commento il risultato di queste 4 espressioni.
   Poi stampale per verificare.
   - "5" + 3 -----> 53 il + in questo caso concatena il number alla string
   - "5" - 3 -----> 2 in questo caso viene eseguita l'operazione visto che - non e un simbolo che concatena e la stringa vieni convertita in numero per eseguire il calcolo
   - true + 1 -----> 2 true e' uguale a 1 di conseguenza verra' eseguito il calcolo 1+1 dando risultato 2
   - "10" * "2" ----- 20 come nel caso N2 le stringhe vengono convertite in numero per eseguire il calcolo
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8 — Classificazione numero
   Variabile "n".
   Usando % e operatori logici, stampa tre righe:
   "n è pari: true/false"
   "n è divisibile per 3: true/false"
   "n è pari E divisibile per 3: true/false"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let n = 658;
let nPari = n % 2 === 0;
let nDiv = n % 3 === 0;
let confronto = (n % 2 === 0) && (n % 3 === 0);
console.log(`${n} e' pari? ${nPari}`);
console.log(`${n} e' divisibile per 3? ${nDiv}`);
console.log(`${n} e' pari e divisibile per 3? ${confronto}`);

let number = 15
console.log(`${number} e' pari? ${n % 2 === 0}`);
console.log(`${number} e' divisibile per 3? ${number % 3 === 0} `);
console.log(`${number} e' pari e divisibile per 3? ${number % 3 === 0 || number % 2 === 0} `);

/* --EXTRA-- ESERCIZIO 9 — Triangolo
   Tre const "a", "b", "c" (lunghezze dei lati).
   Calcola perimetro.
   Determina il tipo: "equilatero", "isoscele", "scaleno".
   Stampa: "Triangolo isoscele, perimetro 15"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const A = 40;
const B = 60;
const C = 50;
let triangleType;


if(A === B && B === C && C === A) {
   triangleType = 'equilatero' 
} if ( A === C && A != B ) {
   triangleType = 'isoscele' 
} if (A !=B && A !=C && C !=B) {
   triangleType = 'scaleno'
};

console.log(`il triangolo e'${triangleType} e il perimetro del triangolo e' ${A+B+C}`);
      
   
    




