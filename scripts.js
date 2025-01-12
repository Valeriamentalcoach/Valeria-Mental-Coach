// Inizializza EmailJS con la tua Public Key
emailjs.init('B6PAFFVX2Wc8wWwBg');

// Seleziona il pulsante e la sezione
const prenotaButton = document.getElementById('prenotaora');
const bordo1Section = document.getElementById('bordo1');

// Aggiungi l'evento click al pulsante
prenotaButton.addEventListener('click', () => {
    // Scorri fino alla sezione centrata
    bordo1Section.scrollIntoView({ behavior: 'smooth', block: 'center' });

    // Aggiungi la classe per l'animazione
    bordo1Section.classList.add('flash');

    // Rimuovi la classe dopo 2 secondi
    setTimeout(() => {
        bordo1Section.classList.remove('flash');
    }, 6000);
});

// Controllo se la checkbox è selezionata prima di inviare il modulo
document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Impedisce l'invio del modulo normale

    // Controlla se la checkbox per il consenso è selezionata
    const consensoCheckbox = document.getElementById('consenso');
    if (!consensoCheckbox.checked) {
        alert('Devi acconsentire al trattamento dei dati personali prima di inviare il modulo.');
        return;
    }

    // Mostra il popup di caricamento
    document.getElementById('loading-popup').style.display = 'flex';


    // Invia il modulo usando EmailJS
    emailjs.sendForm('service_sito mental', 'template_9rrcxd3', this)
        .then(() => {
            // Nascondi il popup di caricamento e mostra quello di successo
            document.getElementById('loading-popup').style.display = 'none';
            document.getElementById('success-popup').style.display = 'flex';
        }, (error) => {
            // Gestione dell'errore durante l'invio
            alert('Errore durante l\'invio: ' + JSON.stringify(error));
            document.getElementById('loading-popup').style.display = 'none';
        });
});

// Aggiungi la logica per chiudere il popup di caricamento
document.getElementById('close-loading-popup').addEventListener('click', () => {
    document.getElementById('loading-popup').style.display = 'none';
    // Ricarica la pagina
    location.reload();
});

// Aggiungi la logica per chiudere il popup di successo
document.getElementById('close-success-popup').addEventListener('click', () => {
    document.getElementById('success-popup').style.display = 'none';
    // Ricarica la pagina
    location.reload();
});














