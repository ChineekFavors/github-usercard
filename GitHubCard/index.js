/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
const axiosPromise = axios.get('https://api.github.com/users/ChineekFavors');

axiosPromise
  .then(response => {
      console.log(response.data);
      componentCreator(response);
  })
  .catch(error => {
      cosole.log(`error: ${error}`);
  })

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

  //reference to empty div with class name cards to place cards in
const cards = document.querySelector('.cards');

//function creates and return card      
function componentCreator(response){
  
  //created elements
  const card = document.createElement('div');
  const img = document.createElement('img');
  const name = document.createElement('h1');
  const userName = document.createElement('h2');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');
  // add class name to elements
  card.classList.add('card');
  img.classList.add('img');
  name.classList.add('name');
  userName.classList.add('username');
  location.classList.add('p');
  profile.classList.add('p');
  followers.classList.add('p');
  following.classList.add('p');
  bio.classList.add('p');
    // setting content for elements
  img.src =  "https://avatars3.githubusercontent.com/u/45578867?v=4";
  name.textContent = `${response.data.name}`;
  userName.textContent = `${response.data.login}`;
  location.textContent = `Location: ${response.data.location}`;
  profile.textContent = `Profile: ${response.data.url}`;
  followers.textContent = `Followers: ${response.data.followers}`;
  following.textContent = `Following: ${response.data.following}`;
  bio.textContent = `Bio: ${response.data.bio}`;
  // appending
  card.appendChild(img);
  card.appendChild(name);
  name.appendChild(userName);
  userName.appendChild(location);
  location.appendChild(profile);
  profile.appendChild(followers);
  followers.appendChild(following);
  following.appendChild(bio);

    return cards.appendChild(card);
}

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
