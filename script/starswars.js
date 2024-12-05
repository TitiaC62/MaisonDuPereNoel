const select = document.getElementById('selectPerso');
const image = document.getElementById('imagePerso');
const description = document.getElementById('description');

select.addEventListener('change', function() {
  const Perso = this.value;
  
  switch(Perso) {
    case 'Luke':
      image.src = '/assets/images/starWars/luke.jpeg';
      description.textContent = 'Luke Skywalker, un jeune Jedi de Tatooine.';
      break;
    case 'Leia':
      image.src = './assets/images/starWars/leia.png';
      description.textContent = 'Leia Organa, princesse d\'Alderaan et leader de la Rébellion.';
      break;
    case 'Anakin':
      image.src = './assets/images/starWars/anakin.jpg';
      description.textContent = 'Anakin';
      break;
    case 'R2-D2':
      image.src = './assets/images/starWars/r2-d2.jpg';
      description.textContent = '';
      break;
    case 'Han':
      image.src = './assets/images/starWars/han.jpg';
      description.textContent = 'Han Solo, contrebandier et pilote du Faucon Millenium.';
      break;
    case 'Chewbacca':
       image.src = './assets/images/starWars/chewbacca.jpeg';
       description.textContent = 'Chewbacca, .';
       break;
    case 'Yoda':
       image.src = './assets/images/starWars/yoda.jpg';
       description.textContent = 'Yoda';
       break;
    case 'C3PO':
       image.src = './assets/images/starWars/c-3po.jpg';
       description.textContent = 'C3PO';
       break;
    case 'Jabba':
       image.src = './assets/images/starWars/jabba.jpg';
       description.textContent = 'Jabba';
       break;
    
    default:
      image.src = '';
      description.textContent = '';
  }
});

