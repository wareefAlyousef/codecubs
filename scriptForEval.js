
  // Get form elements
  var form = document.getElementById("Form");
  var courseSelect = document.getElementById("dropdown");
  var ratingInputs = document.querySelectorAll('input[name="rate2"]');
  var feedbackTextarea = document.getElementById("textarea");

  // Add form submit event listener
  form.addEventListener("submit", function(event) {
    event.preventDefault();

	// loop to store the result if user selected a rate or not 
	var ratingSelected = false;
    for (var i = 0; i < ratingInputs.length; i++) {
      if (ratingInputs[i].checked) {
        ratingSelected = true;
        break;
      }
    }
	
	// Check if both a course is selected and a rating is selected
	if (courseSelect.value === "Select a course" && !ratingSelected ) {
            alert("Please select a course, and rate the course.");
            return; // Exit the function if the form is not valid
        } 
		
    // Check only if a course is selected
    if (courseSelect.value === "Select a course") {
      alert("Please select a course.");
      return;
    }

    // Check only if a rating is selected
    if (!ratingSelected) {
      alert("Please select a rating for the course.");
      return;
    }

    // Form is valid, display alert message
    var courseName = courseSelect.options[courseSelect.selectedIndex].text;
    var userRating = document.querySelector('input[name="rate2"]:checked').value;
    var message = "Thank you for your feedback!\nYour rating for course " + courseName + " is " + userRating;
    alert(message);
	
	
	// Clear the form
  courseSelect.value = "Select a course";
  for (var i = 0; i < ratingInputs.length; i++) {
    ratingInputs[i].checked = false;
  }
  feedbackTextarea.value = "";
  
  });
