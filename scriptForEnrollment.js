/// Check if childCount exists in local storage, initialize it to 0 if not
if (!localStorage.getItem('childCount')) {
  localStorage.setItem('childCount', '0');
}

// Retrieve childCount from local storage
var childCount = parseInt(localStorage.getItem('childCount'));

// Create an array to store children's names
var childrenNames = [];

// Check if childCount is 0 localStorage is empty

if (childCount === 0 ) {
	
	//Create a sample child
  var sampleChild = {
    firstName: 'Khalid',
    lastName: 'Abdullah',
  };
  var sampleChild2 = {
    firstName: 'Mona',
    lastName: 'Abdullah',
  };
  

  // Add the sample child to the childrenNames array
  childrenNames.push(sampleChild.firstName + ' ' + sampleChild.lastName);
  childrenNames.push(sampleChild2.firstName + ' ' + sampleChild2.lastName); 
} 

// Check if childCount is 2 there are no children registered
else if (childCount === 2) {
	
	for (var i = 1; i <= childCount; i++) {
    var firstName = localStorage.getItem(`childFirstName${i}`);
    var lastName = localStorage.getItem(`childLastName${i}`);
    childrenNames.push(firstName + ' ' + lastName);
  }
   

} 
// there is children have registered
else {
  // Loop through childCount and retrieve children's names from local storage
  for (var i = 3; i <= childCount; i++) {
    var firstName = localStorage.getItem(`childFirstName${i}`);
    var lastName = localStorage.getItem(`childLastName${i}`);
    childrenNames.push(firstName + ' ' + lastName);
  }
}

// Get the dropdown element
var dropdown = document.getElementById('dropdown');

// Clear existing options in the dropdown
dropdown.innerHTML = '';

// Create the "Select a child" option
var selectOption = document.createElement('option');
selectOption.disabled = true;
selectOption.selected = true;
selectOption.textContent = 'Select a child';
dropdown.appendChild(selectOption);

// Populate the dropdown with children's names
childrenNames.forEach(function(name) {
  var option = document.createElement('option');
  option.textContent = name;
  dropdown.appendChild(option);
});

// Create a multidimensional array for courses
var courses = [
  ['Robotics', 'Mariam Alyami'],
  ['Python Programming', 'Ahmad Alghamdi'],
  ['Web Development', 'Ahmad Alghamdi'],
  ['Website Design Fundamentals', 'Waleed Alqahtani'],
  ['Games Development', 'Mariam Alyami'],
  ['Scratch Programming', 'Waleed Alqahtani'],
  ['Problem Solving', 'Majedah Altamimi'],
  ['Programming Fundamentals', 'Majedah Altamimi'],
  ['Game Design', 'Reema Alsubai'],
  ['Mobile App Development', 'Reema Alsubai'],
  ['Animation Design', 'Salem Albuaij'],
  ['Electronics', 'Salem Albuaij']
];

// Add prerequisite courses
courses[0].push('Electronics');
courses[1].push('Programming Fundamentals');
courses[2].push('Website Design Fundamentals');
courses[4].push('Game Design');
courses[7].push('Problem Solving');
courses[8].push('Scratch Programming');
courses[9].push('Programming Fundamentals');

// Populate the filter options from the array
function populateFilterOptions() {
  var tutors = [];
  var prerequisites = [];

  for (var i = 0; i < courses.length; i++) {
    var tutor = courses[i][1];
    var prerequisite = courses[i][2];

    if (tutors.indexOf(tutor) === -1) {
      tutors.push(tutor);
    }

    if (prerequisite && prerequisites.indexOf(prerequisite) === -1) {
      prerequisites.push(prerequisite);
    }
  }

  var tutorSelect = document.querySelector('optgroup[label="Tutors"]');
  var prerequisiteSelect = document.querySelector('optgroup[label="Prerequisite"]');
  var coursesSelect = document.querySelector('optgroup[label="Courses"]');

  tutors.forEach(function (tutor) {
    var option = document.createElement('option');
    option.value = tutor;
    option.textContent = tutor;
    tutorSelect.appendChild(option);
  });

  prerequisites.forEach(function (prerequisite) {
    var option = document.createElement('option');
    option.value = prerequisite;
    option.textContent = prerequisite;
    prerequisiteSelect.appendChild(option);
  });

  var showAllOption = document.createElement('option');
  showAllOption.value = 'all';
  showAllOption.textContent = 'Show all courses';
  coursesSelect.appendChild(showAllOption);
}

// Filter the courses based on the selected tutor, prerequisite, or show all option
function filterCourses() {
  var tutorFilter = document.querySelector('#select optgroup[label="Tutors"] option:checked');
  var prerequisiteFilter = document.querySelector('#select optgroup[label="Prerequisite"] option:checked');
  var showAllFilter = document.querySelector('#select optgroup[label="Courses"] option:checked');

  var tutor = tutorFilter ? tutorFilter.value : null;
  var prerequisite = prerequisiteFilter ? prerequisiteFilter.value : null;
  var showAll = showAllFilter && showAllFilter.value === 'all';

  // Check if no filters are selected
  if (!tutorFilter && !prerequisiteFilter && !showAllFilter) {
    showAll = true; // Show all courses
  }

  var coursesContainer = document.getElementById('courses');
  coursesContainer.innerHTML = '';

  for (var i = 0; i < courses.length; i++) {
    var course = courses[i][0];
    var courseTutor = courses[i][1];
    var coursePrerequisite = courses[i][2];

    if ((tutor && courseTutor === tutor) || (prerequisite && coursePrerequisite === prerequisite) || showAll) {
      var div = document.createElement('div');
      div.className = 'responsive';

      var gallery = document.createElement('div');
      gallery.className = 'gallery';

      var checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.name = "Child's course";
      checkbox.value = course;

      var img = document.createElement('img');
      img.src = 'images/' + course.toLowerCase().replace(/ /g, '-') + '.jpg';
      img.alt = 'course image';

      var desc = document.createElement('div');
      desc.className = 'desc';
      desc.textContent = course;

      gallery.appendChild(checkbox);
      gallery.appendChild(img);
      gallery.appendChild(desc);
      div.appendChild(gallery);
      coursesContainer.appendChild(div);
    }
  }
}

// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault(); // Prevent form submission

  // Retrieve the selected child and course
  var childSelect = document.getElementById('dropdown');
  var courseSelect = document.getElementsByName("Child's course");
  var selectedChild = childSelect.value;

  // Check if at least one course is selected
  var selectedCourses = [];
  for (var i = 0; i < courseSelect.length; i++) {
    if (courseSelect[i].checked) {
      selectedCourses.push(courseSelect[i].value);
    }
  }

  // Check if both a child and at least one course are selected
  if (selectedChild === 'Select a child' && selectedCourses.length === 0) {
    alert('Please select a child and at least one course.');
    return; // Exit the function if the form is not valid
  }
  
  // Check if a child is selected
  if (selectedChild === 'Select a child') {
    alert('Please select a child.');
    return; // Exit the function if the form is not valid
  }
  
  
  // Check if at least one course is selected
  if (selectedCourses.length === 0) {
    alert('Please select at least one course.');
    return; // Exit the function if the form is not valid
  }

  // Remove previous information
  var childInfoContainer = document.getElementById('childInfo');
  childInfoContainer.innerHTML = '';

  // Display the child's information
  var childInfoHeading = document.createElement('h2');
  childInfoHeading.textContent = 'Child Information';
  childInfoContainer.appendChild(childInfoHeading);
  
  var NameHeading = document.createElement('h3');
  NameHeading.textContent = 'Child Name: ' ;
  childInfoContainer.appendChild(NameHeading);

  var childNameParagraph = document.createElement('p');
  childNameParagraph.textContent =  selectedChild;
  childInfoContainer.appendChild(childNameParagraph);

  if (selectedCourses.length > 0) {
    var coursesHeading = document.createElement('h3');
    coursesHeading.textContent = 'Selected Courses with Tutors';
    childInfoContainer.appendChild(coursesHeading);

    var coursesList = document.createElement('ul');
    for (var j = 0; j < selectedCourses.length; j++) {
      var courseItem = document.createElement('li');
      var tutor = getCourseTutor(selectedCourses[j]);
      courseItem.textContent = selectedCourses[j] + ' - Tutor: ' + tutor;
      coursesList.appendChild(courseItem);
    }
    childInfoContainer.appendChild(coursesList);
  }

  // Clear the form
  childSelect.selectedIndex = 0;
  for (var k = 0; k < courseSelect.length; k++) {
    courseSelect[k].checked = false;
  }
  
  // Re-select and display all courses
  var select = document.getElementById('select');
  select.selectedIndex = 0;

  filterCourses();
  
}

// Function to get the tutor name for a course
function getCourseTutor(course) {
  for (var i = 0; i < courses.length; i++) {
    if (courses[i][0] === course) {
      return courses[i][1];
    }
  }
  return '';
}

// Add event listener to the submit button
var submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', handleSubmit);


// Load the filter options and apply event listeners
window.addEventListener('DOMContentLoaded', function () {
  populateFilterOptions();

  var select = document.getElementById('select');
  select.addEventListener('change', filterCourses);

  filterCourses();
});