
//
fetch("http://localhost:3000/characters")
  .then(response => response.json())
  .then(jsData => {
    for (charactersObj of jsData) {
      console.log(charactersObj.name);

      // Create an li element
      let liElement = document.createElement('li');

      // Create an image element
      let imgElement = document.createElement('img');
      imgElement.src = charactersObj.image;
      imgElement.alt = charactersObj.name;
      imgElement.width = 100;
      imgElement.height = 100;

      // Create a span element for displaying votes
      let votesSpan = document.createElement('span');
      votesSpan.textContent = `Votes: ${charactersObj.votes}`;

      // Append name, image, and votes to the li element
      liElement.appendChild(document.createTextNode(charactersObj.name));
      liElement.appendChild(imgElement);
      liElement.appendChild(votesSpan);

      // Append the li element to the animalList ul
      animalList.appendChild(liElement);
    }
  })
  .catch(error => {
    console.error(error);
  });