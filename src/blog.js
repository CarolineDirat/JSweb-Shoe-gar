const api = 'https://master-7rqtwti-fus3tltfddn7w.eu-2.platformsh.site';
const loadButton = document.getElementById('load-button');

let message = false;

loadButton.addEventListener('click', function(){
  if(!message){  
    const main = document.querySelector('main');
    const alert = document.createElement('p');
    alert.innerHTML = "L'adresse de l'api 'https://master-7rqtwti-fus3tltfddn7w.eu-2.platformsh.site' ne fonctionn plus (erreur 404). <br/> C'est pour cela que le click sur le bouton 'Ajouter un article' ne permet pas d'ajouter une article.";
    alert.classList.add('alert-danger', 'w-100', 'p-2');
    main.appendChild(alert);
  }
  message = true;
});

function getRequest(url) {
  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.onreadystatechange = () => {
      if (request.readyState === 4) {
        if (request.status !== 200) {
          reject(JSON.parse(request.response));
        }
        resolve(JSON.parse(request.response));
      }
    };
    request.send();
  });
}

async function getBlogPost() {
  const titlePromise = getRequest(api + '/generate-title');
  const loremPromise = getRequest(api + '/generate-lorem');
  try {
    let [titleResponse, loremResponse] = await Promise.all([titlePromise, loremPromise]);
    document.querySelector('main').appendChild(buildPostElement(titleResponse.title, loremResponse.lorem));
  } catch (error) {
    document.querySelector('main').appendChild(buildPostElement('Une erreur est survenue !', error));
  }
}

loadButton.addEventListener('click', async function () {
  getBlogPost();
});

function buildPostElement(title, content) {
  let card = document.createElement('div');
  let cardBody = document.createElement('div');
  let cardTitle = document.createElement('h2');
  let cardContent = document.createElement('p');

  card.classList.add('card');
  cardBody.classList.add('card-body');
  cardTitle.classList.add('card-title');
  cardContent.classList.add('card-text');

  cardTitle.textContent = title;
  cardContent.textContent = content;

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardContent);
  card.appendChild(cardBody);

  return card;
}