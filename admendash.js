document.addEventListener("DOMContentLoaded", function() {
    // Function to get the current week's date
    function getCurrentWeekDate() {
        const now = new Date();
        const startOfWeek = new Date(now.getFullYear(), now.getMonth(), now.getDate() - now.getDay());
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return startOfWeek.toLocaleDateString('en-US', options);
    }

    // Set the current week's date above the lists
    const currentDate = getCurrentWeekDate();
    document.getElementById('currentDate').innerText = currentDate;
});


document.addEventListener('DOMContentLoaded', function () {
    // Get all elements with the class 'view-more'
    var viewMoreButtons = document.querySelectorAll('.view-more');

    // Add click event listener to each 'View More' button
    viewMoreButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            // Toggle the visibility of the additional content
            var additionalContent = button.nextElementSibling;
            var isVisible = additionalContent.style.display !== 'none';

            additionalContent.style.display = isVisible ? 'none' : 'block';

            // Update the data attribute to reflect the current visibility state
            button.setAttribute('data-visible', !isVisible);
        });
    });
});



document.addEventListener("DOMContentLoaded", function() {
    const viewMoreButtons = document.querySelectorAll('.view-more3');

    viewMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const additionalContent = this.previousElementSibling;
            const isVisible = additionalContent.style.display !== 'none';

            if (isVisible) {
                additionalContent.style.display = 'none';
                this.textContent = 'View More';
            } else {
                additionalContent.style.display = 'block';
                this.textContent = 'Hide';
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const viewMoreButtons = document.querySelectorAll('.view-more2');

    viewMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const additionalContent = this.parentElement.previousElementSibling;
            const isVisible = additionalContent.style.display !== 'none';

            if (isVisible) {
                additionalContent.style.display = 'none';
                this.textContent = 'View More';
            } else {
                additionalContent.style.display = 'block';
                this.textContent = 'Hide';
            }
        });
    });
});