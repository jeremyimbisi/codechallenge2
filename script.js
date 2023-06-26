fetch("http://localhost:3000/characters")
  .then(response => response.json())
  .then(jsData => {
    for (const charactersObj of jsData) {
      console.log(charactersObj.name);

      // Create an li element
      const liElement = document.createElement('li');
      liElement.innerText = charactersObj.name;

      const imgElement = document.createElement('img');

      // Create a span element for displaying votes
      const votesSpan = document.createElement('span');
      let votesSpanc = 0;
      votesSpan.textContent = `Votes: ${votesSpanc}`;

      // Create a button for voting
      const voteBtn = document.createElement('button');
      voteBtn.innerText = 'Vote';
      voteBtn.addEventListener('click', voteCount);

      function voteCount() {
        votesSpanc++;
        votesSpan.textContent = `Votes: ${votesSpanc}`;
      }

      liElement.addEventListener('click', ((obj) => {
        return () => {
          // Create an image element
          imgElement.src = obj.image;
          imgElement.alt = obj.name;
          imgElement.width = 100;
          imgElement.height = 100;
        };
      })(charactersObj));

      // Append the image, votes, and vote button to the li element
      liElement.appendChild(imgElement);
      liElement.appendChild(votesSpan);
      liElement.appendChild(voteBtn);

      // Append the li element to the animalList ul
      animalList.appendChild(liElement);
    }
  })
  .catch(error => {
    console.error(error);
  });
