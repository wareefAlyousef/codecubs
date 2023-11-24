document.addEventListener('DOMContentLoaded', function () {
    //get form
    const form = document.querySelector('form');

    //submit event listener
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        //get inputs
        var firstNameIn = document.getElementById('firstName');
        var lastNameIn = document.querySelector('input[name="LastName"]');
        var birthDateIn = document.querySelector('input[name="BirthDate"]');
        var telNoIn = document.querySelector('input[name="TelNo"]');
        var emailIn = document.querySelector('input[name="Email"]');
        var genderIn = document.querySelector('select[name="Gender"]');
        var avatarIn = document.querySelector('input[name="ChildPhoto"]');

        //get input values
        var firstName = firstNameIn.value.trim();
        var lastName = lastNameIn.value.trim();
        var birthDate = new Date(birthDateIn.value);
        var telNo = telNoIn.value.trim();
        var email = emailIn.value.trim();
        var gender = genderIn.value.trim();
        var avatar = avatarIn.files[0];

        //check form validaty
        let isValid = true;

        //check for missing values
        if (firstName === '' || lastName === '' || birthDateIn.value === '' || telNo === '' || email === '' || !avatar) {
            isValid = false;


            if (firstName === '') {
                alert('Please enter the first name.');
            }

            if (lastName === '') {
                alert('Please enter the last name.');
            }

            if (birthDateIn.value === '') {
                alert('Please enter the birth date.');
            }

            if (telNo === '') {
                alert('Please enter the phone number.');
            }
            if (email === '') {
                alert('Please enter the email.');
            }
            if (!avatar) {
                alert('Please select a child photo.');
            }

        }

        else {
            //check first name validity
            if (/^\d/.test(firstName)) {
                isValid = false;
                alert('The Child first name cannot start with a number.');
            }

            //check phoneNO validity
            if (!/^\d{10}$/.test(telNo)) {
                isValid = false;
                alert('The phone number should be composed of exactly 10 digits.');
            }

            //check age validity
            const currentYear = new Date().getFullYear();
            if (birthDate.getFullYear() > 2017 || birthDate.getFullYear() > currentYear) {
                isValid = false;
                alert('Children younger than 6 years old cannot be registered.');
            }
        }


        if (!localStorage.getItem('childCount')) {
            // initialize childCount to 0
            localStorage.setItem('childCount', '0');
        }


        console.log(localStorage.getItem('childCount'));
        if (isValid) {

            let childCount = parseInt(localStorage.getItem('childCount'));
            childCount++;
            localStorage.setItem(`childFirstName${childCount}`, firstName);
            localStorage.setItem(`childLastName${childCount}`, lastName);
            localStorage.setItem(`Gender${childCount}`, gender);
            localStorage.setItem(`childBirthDate${childCount}`, birthDate.toDateString());


            // update child count in local storage
            localStorage.setItem('childCount', childCount.toString());

            const childInfo = `
      Child's Name: ${firstName} ${lastName}<br>
      Birth Date: ${birthDate.toDateString()}<br>
      Gender: ${gender}<br>
      Phone Number: ${telNo}<br>
    Email: ${email}<br>
    `;
            console.log(childInfo);

            //submission message
            alert('The submission is successful! Thank you.');

            //print childInfo and pic
            var printing = window.open('', '_blank');
            printing.document.write('<html><head><title>Child Information</title></head><body>');
            printing.document.write('<h1>Child Information</h1>');

            //load the image with file reader
            var infoReader = new FileReader();
            infoReader.onload = function (e) {
                var image = new Image();
                image.src = e.target.result;
                image.onload = function () {
                    // show child photo
                    printing.document.write('<canvas id="avatarCanvas" width="' + image.width + '" height="' + image.height + '" style="max-width: 200px; border-radius: 50%;"></canvas><br>');
                    var canvas = printing.document.getElementById('avatarCanvas');
                    var context = canvas.getContext('2d');
                    context.drawImage(image, 0, 0, image.width, image.height);

                    // show child info
                    printing.document.write('<div style="margin-top: 20px;">' + childInfo + '</div>');
                    printing.document.write('</body></html>');
                    printing.document.close();

                    // print the new window
                    printing.print();
                    //go back to parent dashboard
                    window.location = 'parentDashboard.html';
                };
            };

            //load the image with file reade
            infoReader.readAsDataURL(avatar);
        }
    });
});