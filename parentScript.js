document.addEventListener('DOMContentLoaded', function () {
    var indexesToPrint = [0, 1];
    var startIndex = 2;
    children = [];

    if (!localStorage.getItem('childCount')) {
        // Initialize childCount to a default value
        localStorage.setItem('childCount', '0');
    }
    // Check if children information exists in local storage
    if (localStorage.getItem('childCount') === '0') {
        // Children information does not exist, so save sample children info
        const sampleChildren = [
            {
                firstName: 'Khalid',
                lastName: 'Abdullah',
                birthDate: '1/4/2010',
                gender: 'Male'
            },
            {
                firstName: 'Mona',
                lastName: 'Abdullah',
                birthDate: '1/4/2014',
                gender: 'Female'
            }
        ];

        // Save sample children to local storage
        localStorage.setItem('childCount', sampleChildren.length.toString());

        sampleChildren.forEach((child, index) => {
            localStorage.setItem(`childFirstName${index + 1}`, child.firstName);
            localStorage.setItem(`childLastName${index + 1}`, child.lastName);
            localStorage.setItem(`childBirthDate${index + 1}`, child.birthDate);
            localStorage.setItem(`Gender${index + 1}`, child.gender);
            children.push(child);
        });

        
    }

    else {
        // Retrieve children information from local storage
        var childCount = 2;
        childCount = parseInt(localStorage.getItem('childCount'));

        for (let i = 1; i <= childCount; i++) {
            const child = {
                firstName: localStorage.getItem(`childFirstName${i}`),
                lastName: localStorage.getItem(`childLastName${i}`),
                birthDate: localStorage.getItem(`childBirthDate${i}`),
                gender: localStorage.getItem(`Gender${i}`)
            };
            children.push(child);
        }

    }
    console.log(localStorage.getItem('childCount'));


    // show children info in the dashboard
    const kidsContainer = document.getElementById('kids');
    console.log(children.length);
    children.forEach((child, index) => {
        if (localStorage.getItem('childCount') !== '2') {
            if (index >= startIndex) {
                console.log("more than one children");

                // create a card for each child
                const card = document.createElement('div');
                card.classList.add('card');

                const cardTitle = document.createElement('h2');
                cardTitle.classList.add('card-title');
                cardTitle.textContent = child.firstName + ' ' + child.lastName;
                card.appendChild(cardTitle);

                const avatar = document.createElement('img');
                avatar.classList.add('avatar');
                avatar.src = child.gender === 'Male' ? 'images/male3.png' : 'images/female3.png';
                avatar.alt = 'Avatar';
                card.appendChild(avatar);

                const cardBody = document.createElement('div');
                cardBody.classList.add('card-body');
                card.appendChild(cardBody);

                const info = document.createElement('div');
                info.classList.add('info');
                cardBody.appendChild(info);

                const infoTitle = document.createElement('h3');
                infoTitle.textContent = 'Info';
                info.appendChild(infoTitle);

                const infoList = document.createElement('dl');
                info.appendChild(infoList);

                const birthDateTerm = document.createElement('dt');
                birthDateTerm.textContent = 'Date of birth';
                infoList.appendChild(birthDateTerm);

                const birthDateValue = document.createElement('dd');
                birthDateValue.textContent = child.birthDate;
                infoList.appendChild(birthDateValue);

                const genderTerm = document.createElement('dt');
                genderTerm.textContent = 'Gender';
                infoList.appendChild(genderTerm);

                const genderValue = document.createElement('dd');
                genderValue.textContent = child.gender;
                infoList.appendChild(genderValue);

                kidsContainer.appendChild(card);
            }
        }
        else {

            if (indexesToPrint.includes(index)) {
                console.log(" no children");
                const card = document.createElement('div');
                card.classList.add('card');

                const cardTitle = document.createElement('h2');
                cardTitle.classList.add('card-title');
                cardTitle.textContent = child.firstName + ' ' + child.lastName;
                card.appendChild(cardTitle);

                const avatar = document.createElement('img');
                avatar.classList.add('avatar');
                avatar.src = child.gender === 'Male' ? 'images/male3.png' : 'images/female3.png';
                avatar.alt = 'Avatar';
                card.appendChild(avatar);

                const cardBody = document.createElement('div');
                cardBody.classList.add('card-body');
                card.appendChild(cardBody);

                const info = document.createElement('div');
                info.classList.add('info');
                cardBody.appendChild(info);

                const infoTitle = document.createElement('h3');
                infoTitle.textContent = 'Info';
                info.appendChild(infoTitle);

                const infoList = document.createElement('dl');
                info.appendChild(infoList);

                const birthDateTerm = document.createElement('dt');
                birthDateTerm.textContent = 'Date of birth';
                infoList.appendChild(birthDateTerm);

                const birthDateValue = document.createElement('dd');
                birthDateValue.textContent = child.birthDate;
                infoList.appendChild(birthDateValue);

                const genderTerm = document.createElement('dt');
                genderTerm.textContent = 'Gender';
                infoList.appendChild(genderTerm);

                const genderValue = document.createElement('dd');
                genderValue.textContent = child.gender;
                infoList.appendChild(genderValue);

                kidsContainer.appendChild(card);
            }
        }
    }

    );


});