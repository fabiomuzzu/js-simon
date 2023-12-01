alert('Hai 30 secondi di tempo per memorizzare i numeri!');
setTimeout(timer, 30000);

// 1 -  Creo l'arrey che deve contenere 5 numeri vuoto
let numbers = [];

// 2 - Creo un ciclo for per generare 5 numeri casuali
for (let i=0; i<5; i++){
    
    // formula per creare un numero casuale da 1 a 100
    let rnd_number = Math.floor(Math.random() * 100) + 1;
    
    // 3 -  Li pusho nell'arrey
    numbers.push(rnd_number);
}
console.log(`I 5 numeri casuali sono: ${numbers}`);

// 5 - Li inserisco nell'html

// recupero l'id dall'html
const num_display = document.getElementById('num_display');
// inserisco il testo contente l'array dei numeri
num_display.innerText = `I 5 numeri casuali sono: ${numbers}`

// 6 - Creo un timer di 30 secondi con setTimeout
function timer(){
    // cancello testo in pagina
    num_display.innerText = ` `
}

// 7 - Rimuovo i numeri dal html allo scadere dei 30 secondi
// 8 - Creo i prompt di inserimento numero (utilizzando il while)
// 9 - Se il numero inserito è corretto lo metto in un secondo arrey, così posso determinarne la lunghezza