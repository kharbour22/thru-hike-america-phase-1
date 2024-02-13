//Variables to display hike details and list
    const hikesList = document.getElementById('hikes-list');
    const hikeDetails = document.getElementById('hike-details');
    
  
    // Fetch hikes data from db.json
    fetch('http://localhost:3000/hikes')
      .then(response => response.json())
      .then(data => {
        data.forEach(hike => {
          const hikeCard = document.createElement('div');
          hikeCard.innerHTML = `
            <img src="${hike.image}" alt="${hike.name}" />
            <h3>${hike.name}</h3>
            
          `;

          //Adds click event to each hikecard when hikecard is clicked
          hikeCard.addEventListener('click', () => showHikeDetails(hike));
        
          hikesList.appendChild(hikeCard);
        });
      })
      .catch(error => console.error('No hikes today:', error));

      
  
    // Function to display hike details
    function showHikeDetails(hike) {
      hikeDetails.innerHTML = `
      <h2></h2>
      <p><strong>Start/Finish:</strong> ${hike.start_finish}</p>
      <p><strong>Length:</strong> ${hike.length}</p>
      <p><strong>Best Time to Start:</strong> ${hike.best_time_to_start}</p>
      <p><strong>Description:</strong> ${hike.description}</p>
      `;
    }
  
  
  
   
        
      
  
  