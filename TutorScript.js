// used DOMContentLoaded so this code excutes after all the page is loaded
document.addEventListener('DOMContentLoaded', function() {

    // the drop down menu
    const sortMenu = document.getElementById('sort');
  
    // tutors list
    const tutorsList = document.querySelector('.grid-container-Tutors');
  
    // sort tutors alphabetically function
    function sortTutors() {
      const sortValue = sortMenu.value;
      const tutors = Array.from(tutorsList.children);
  
      tutors.sort((a, b) => {
        const name1 = a.querySelector('h3').textContent.trim().toLowerCase();
        const name2 = b.querySelector('h3').textContent.trim().toLowerCase();
  
        //use localeCompare method to compare strings
        if (sortValue === 'A-Z sort') { //ascending order
          return name1.localeCompare(name2); 
        } else if (sortValue === 'Z-A sort') { //descending order
          return name2.localeCompare(name1);
        }
      });
  
      tutors.forEach(tutor => tutorsList.appendChild(tutor));
    }
  
    //event listener
    sortMenu.addEventListener('change', sortTutors);
  });