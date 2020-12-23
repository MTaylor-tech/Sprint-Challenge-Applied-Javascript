// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
const cardsContainer = document.querySelector('.cards-container');

function addArticle (articleObject) {
  const card = document.createElement('div');
  card.classList.add('card');
  cardsContainer.appendChild(card);

  const headline = document.createElement('div');
  headline.classList.add('headline');
  headline.textContent = articleObject.headline;
  card.appendChild(headline);

  const authorInfo = document.createElement('div');
  authorInfo.classList.add('author');
  card.appendChild(authorInfo);

  const authorImageContainer = document.createElement('div');
  authorImageContainer.classList.add('img-container');
  authorInfo.appendChild(authorImageContainer);

  const authorImage = document.createElement('img');
  authorImage.src = articleObject.authorPhoto;
  authorImageContainer.appendChild(authorImage);

  const authorCredit = document.createElement('span');
  authorCredit.textContent = `By ${articleObject.authorName}`;
  authorInfo.appendChild(authorCredit);
}

function getArticles () {
  axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
        .then(function (response) {
            console.log(response);
            for (const topic in response.data.articles) {
              response.data.articles[topic].forEach(article=>addArticle(article));
            }
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
}

getArticles();
