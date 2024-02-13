//Variables to display hike details and list
    const hikesList = document.getElementById('hikes-list');
    const hikeDetails = document.getElementById('hike-details');
    
  
    // Fetch hikes data from db.json
    fetch('http://localhost:3000/hikes')
      .then(response => response.json())
      .then(data => {
        data.forEach(hike => {
          const hikeCard = document.createElement('div');
          hikeCard.innerHTML = `<img src="${hike.image}"/>
            <h3>${hike.name}</h3>`;

            
          //Adds click event to each hikecard when hikecard is clicked
          hikeCard.addEventListener('click', () => showHikeDetails(hike));
          //Adds a mouseover listener that displays image
          hikeCard.addEventListener('mouseover', () => displayHikeImageOnMouseover(hike));
         
          hikesList.appendChild(hikeCard);
        });
      })
      

  

      
  
    // Function to display hike details
    function showHikeDetails(hike) {
      hikeDetails.innerHTML = `
      <h2></h2>
      <p><strong>Start/Finish:</strong> ${hike.start_finish}</p>
      <p><strong>Length:</strong> ${hike.length}</p>
      <p><strong>Best Time to Start:</strong> ${hike.best_time_to_start}</p>
      <p><strong>Description:</strong> ${hike.description}</p>
      <p><img src="${hike.image3}"/> 
      `;
}

// Function to display Hike image when mouseover
function displayHikeImageOnMouseover(hike) {
  hikeDetails.innerHTML = `
  <h3></h3>
  <img src="${hike.image2}"/>
  
  `;
}




const submitForm = document.getElementById('submitForm');
const displaySubmission = document.getElementById('displaySubmission');

 // Add submit event listener to the form
 submitForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form submission

  // Get the submitted content
  const submissionInput = document.getElementById('submission');
  const submittedContent = submissionInput.value;

  // Check if the submitted content is not empty
  if (submittedContent !== '') {
    // Create a new paragraph element to display the submitted content
    const submissionElement = document.createElement('p');
    submissionElement.textContent = `Hiker: ${submittedContent}`;
    
    // Append the new paragraph element to the display area
    displaySubmission.appendChild(submissionElement);
    
    // Clear the input field
    submissionInput.value = '';
  }
});
;

  
   
        
      
  
  