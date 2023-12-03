alert('Hai 30 secondi di tempo per memorizzare i numeri!');
setTimeout(timer, 30000);
setTimeout(asktimer, 31000);


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
num_display.innerText = `I 5 numeri casuali sono: ${numbers}`;

// 6 - Creo un timer di 30 secondi con setTimeout
function timer(){

    // 7 - Rimuovo i numeri dall'html allo scadere dei 30 secondi
    num_display.innerText = ` `;
}

// 8 - Creo  un timer in cui inserisco i prompt di inserimento numero ed il resto delle funzioni

let user_num = [];

// ciclo for per creare i prompt necessari
function asktimer(){
    for (let i=0; i<numbers.length; i++){
        const ask_num = prompt('Inserisci i 5 numeri visti in precedenza');
        // pushare dati inseriti nel prompt nell'array
        user_num.push(ask_num);
        
    }
    console.log(`I 5 numeri che hai inserito sono: ${user_num}`);
    
    // 9 - Comparazione dei due array
    function compareArray() {
        // array vuoto in cui verranno pushati i numeri uguali
        let samenumbers = [];
        // ciclo for per comparare ogni elemento degli array
        for (let i = 0; i < numbers.length; i++)
            // if che pusha nell'array vuoto i numeri uguali
            if (numbers[i] == user_num[i]){
                samenumbers.push(numbers[i]);
            }
        return samenumbers
    }
    
    let samenumbers = compareArray();
    
    // 11 - Inserisco lo score nell'html
    const score = document.getElementById('score');
    score.innerText = `Il totale di numeri indovinati è: ${samenumbers.length}! ${samenumbers}!`;
}
