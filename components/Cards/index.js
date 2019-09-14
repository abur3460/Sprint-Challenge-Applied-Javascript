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

// query select

const cardsContainer = document.querySelector(".cards-container");

// get request

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    console.log(response);
    response.data.articles.javascript.forEach(article => {
      cardsContainer.appendChild(techCards(article));
    });
    response.data.articles.bootstrap.forEach(article => {
      cardsContainer.appendChild(techCards(article));
    });
    response.data.articles.technology.forEach(article => {
      cardsContainer.appendChild(techCards(article));
    });
    response.data.articles.jquery.forEach(article => {
      cardsContainer.appendChild(techCards(article));
    });
    response.data.articles.node.forEach(article => {
      cardsContainer.appendChild(techCards(article));
    });
  });

function techCards(data) {
  const techCards = document.createElement("div");
  const cardHeadline = document.createElement("div");
  const authorImgContainer = document.createElement("div");
  const imgContainer = document.createElement("div");
  const cardImg = document.createElement("img");
  const cardAuthor = document.createElement("span");

  // creating structure

  techCards.appendChild(cardHeadline);
  techCards.appendChild(authorImgContainer);
  authorImgContainer.appendChild(imgContainer);
  authorImgContainer.appendChild(cardAuthor);
  imgContainer.appendChild(cardImg);

  // classlist

  techCards.classList.add("card");
  cardHeadline.classList.add("headline"),
    authorImgContainer.classList.add("author"),
    imgContainer.classList.add("img-container");

  // adding content

  cardHeadline.textContent = data.headline;
  cardImg.src = data.authorPhoto;
  cardAuthor.textContent = data.authorName;

  return techCards;
}
