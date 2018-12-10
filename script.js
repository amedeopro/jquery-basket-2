// Basket
// Il software deve generare casualmente le statistiche di gioco di
// 100 giocatori di basket per una giornata di campionato.
// In particolare vanno generate per ogni giocatore le seguenti
// informazioni, facendo attenzione che il numero generato abbia
// senso:
// - Codice Giocatore Univoco (formato da 3 lettere
// maiuscole casuali e 3 numeri)
// - Numero di punti fatti
// - Numero di rimbalzi
// - Falli
// - Percentuale di successo per tiri da 2 punti
// - Percentuale di successo per da 3 punti
// Una volta generato il “database”, il programma deve chiedere
// all’utente di inserire un Codice Giocatore e il programma
// restituisce le statistiche.


// creo una funzione che genera numeri random

function numeroRandom(min, max){

  var numero = Math.floor(Math.random()*(max-min+1)+min);

  return numero;

}

//genero il codice del giocatore
function generaCodice(){
  var lettereMaiuscole = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var codice = "";


  for (var i = 0; i < 3; i++) {
    codice += lettereMaiuscole.charAt(Math.floor(Math.random() * lettereMaiuscole.length));
  }

  for (var i = 0; i < 3; i++){
    codice += numeroRandom(1,9);
  }

  return codice;
}



//creo un array con all'interno uno o più oggetti per creare i giocatori

  var arrayGiocatori = [];

  for (var i = 0; i < 100; i++) {

    var player =
      {
        codiceGiocatore: generaCodice(),
        puntiFatti: numeroRandom(1,50),
        rimbalzi: numeroRandom(1,20),
        falli: numeroRandom(1,4),
        percDaDue: numeroRandom(0,100) + "%",
        percDaTre: numeroRandom(0,100) + "%",
      };

      arrayGiocatori.push(player); //così si fa il push di un oggetto all'interno di un array DEVO METTERE LE GRAFFE

      console.log(player.codiceGiocatore); //mi loggo i codici per vedere pi quale inserire altrimenti avrei tutti gli oggetti chiusi e non visualizzabili in console.log
  }

  console.log(arrayGiocatori);

  var richiestaUtente = prompt('inserisci codice giocatore');

  for (var i = 0; i < arrayGiocatori.length; i++) {
    var giocatore = arrayGiocatori[i];

    if (richiestaUtente == giocatore.codiceGiocatore) {

      for (var key in giocatore) {

        document.writeln(key + ": " + giocatore[key] + "<br>");

      }

    }

  }
