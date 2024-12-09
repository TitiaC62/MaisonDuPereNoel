
// Vérifie si le prénom est déjà enregistré dans le stockage local
const savedName = localStorage.getItem('user_name');

if (savedName) {
    // Utilise le prénom enregistré s'il existe
     let prenomElement = document.getElementById('prenom');
        prenomElement.textContent = (`Bonjour ${savedName} !`);
} else {
    // Propose à l'utilisateur de saisir son prénom
    const userName = prompt('Entrez votre prénom :');
    let prenomElement = document.getElementById('prenom');
        prenomElement.textContent = (`Bonjour ${userName} !`);

    // Enregistre le prénom dans le stockage local
    localStorage.setItem('user_name', userName);

    
}



