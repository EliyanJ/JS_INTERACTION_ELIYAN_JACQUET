document.addEventListener('DOMContentLoaded', function () {
    let form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        console.log('Envoi du formulaire détecté!');

        // Section d'erreur
        let errorContainer = document.querySelector('.message-error');
        let errorList = document.querySelector('.message-error ul');

        // Je vide les erreurs avant la nouvelle vérification et recache le message
        errorList.innerHTML = "";
        errorContainer.classList.remove('visible');

        // Elements du formulaire
        let email = document.querySelector('#email');
        let pseudo = document.querySelector('#pseudo');
        let password = document.querySelector('#password');
        let password2 = document.querySelector('#password2');

        // Verif email
        if (email.value == '') {
            // Je rends visible la zone d'erreur et enlève le succès du mail s'il a existé
            errorContainer.classList.add('visible');
            email.classList.remove('success');

            // Creation du message d'erreur
            let err = document.createElement('li');
            err.innerText = "Le champ email ne peut pas être vide";

            // Ajout au container
            errorList.appendChild(err);
        } else {
            // Je mets l'email en succès
            email.classList.add('success');
        }

        // Nouvelle logique ajoutée pour l'email
        console.log('Validation de l\'email : ' + (email.value == '' ? 'invalide' : 'valide'));

        // Logique pour ajouter la classe 'success' à l'élément email
        if (email.value == '') {
            console.log('invalide');
            // Je rends invisible la zone d'erreur
            errorContainer.classList.remove('visible');
        } else {
            email.classList.add('success');
        }

        // Vérification du champ pseudo
        if (pseudo.value.length < 6) {
            // Je rends visible la zone d'erreur et enlève le succès du pseudo s'il a existé
            errorContainer.classList.add('visible');
            pseudo.classList.remove('success');

            // Creation du message d'erreur
            let err = document.createElement('li');
            err.innerText = "Le champ pseudo doit contenir au moins 6 caractères";

            // Ajout au container
            errorList.appendChild(err);
        } else {
            pseudo.classList.add('success');
        }

        // Vérification du mot de passe
        let passCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-+_!@#$%^6*. ,?]).+$/;
        // Si le mdp n'a pas 10 caractères ou ne respecte pas la regex
        if (password.value.length < 10 || passCheck.test(password.value) === false) {
            // Je rends visible la zone d'erreur et enlève le succès du mot de passe s'il a existé
            errorContainer.classList.add('visible');
            password.classList.remove('success');

            // Creation du message d'erreur
            let err = document.createElement('li');
            err.innerText = "Le mot de passe doit faire 10 caractères minimum, contenir minuscule, majuscule, chiffre, caractère spécial";

            // Ajout au container
            errorList.appendChild(err);
        } else {
            // Je mets le mot de passe en succès
            password.classList.add('success');
        }

        // Vérification de la correspondance des mots de passe
        if (password.value !== password2.value) {
            // Je rends visible la zone d'erreur et enlève le succès du mot de passe de confirmation s'il a existé
            errorContainer.classList.add('visible');
            password2.classList.remove('success');

            // Creation du message d'erreur
            let err = document.createElement('li');
            err.innerText = "Les mots de passe ne correspondent pas";

            // Ajout au container
            errorList.appendChild(err);
        } else {
            // Je mets le mot de passe de confirmation en succès
            password2.classList.add('success');
        }

        // Vérification de la correspondance des mots de passe initial et de répétition
        if (password.value !== password2.value) {
            // Je rends visible la zone d'erreur et enlève le succès du mot de passe de répétition s'il a existé
            errorContainer.classList.add('visible');
            password2.classList.remove('success');

            // Creation du message d'erreur
            let err = document.createElement('li');
            err.innerText = "Les mots de passes sont différents";

            // Ajout au container
            errorList.appendChild(err);
        } else {
            // Je mets le mot de passe de répétition en succès
            password2.classList.add('success');
        }

        // Affichage du message de succès
        let successContainer = document.querySelector('.message-success');
        successContainer.classList.remove('visible');

        if (
            pseudo.classList.contains('success') &&
            email.classList.contains('success') &&
            password.classList.contains('success') &&
            password2.classList.contains('success')
        ) {
            successContainer.classList.add('visible');
        }
    });
});
