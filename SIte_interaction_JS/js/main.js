let form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('Envoi du formulaire détecté !');
});



form.addEventListener('submit', function(event) {
    event.preventDefault();

    let email = document.querySelector('#email');
    if (email.value == '') {
        console.log("Invalide");
        email.classList.remove('success')
        
    } else {
        console.log('Valide');
        email.classList.add('success')
    }
});

