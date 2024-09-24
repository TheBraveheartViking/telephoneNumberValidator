document.getElementById("check-btn").addEventListener("click", function() {
    const input = document.getElementById("user-input").value.trim();
    const resultsDiv = document.getElementById("results-div");

    if (input === "") {
        alert("Please provide a phone number");
        return;
    }

    const validUSNumber = /^(1\s?)?(\(\d{3}\)|\d{3})([\s-]?)(\d{3})([\s-]?)(\d{4})$/;
    const isValid = validUSNumber.test(input);

    if (isValid) {
        resultsDiv.textContent = `Valid US number: ${input}`;
    } else {
        resultsDiv.textContent = `Invalid US number: ${input}`;
    }
});

document.getElementById("clear-btn").addEventListener("click", function() {
    document.getElementById("results-div").textContent = "";
    document.getElementById("user-input").value = "";
});


//added fluff - i'm adding in a navbar, with actions, however the navigtion won't direct anywhere but to a non-existing page
document.addEventListener("DOMContentLoaded", function() {
    
    const navbar = document.createElement('nav');
    navbar.classList.add('navbar');

    
//i've not linked this to any pages, as it's not part of the project.  Merely wanted to add a personal touch. 
    

// the following code will allow for looping through each item and create the link elements
//i did however not include the nav-list in my html. 
    navItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.classList.add('nav-item');

        const anchor = document.createElement('a');
        anchor.href = item.link;
        anchor.textContent = item.name;

        listItem.appendChild(anchor);
        navList.appendChild(listItem);
    });

    // append the nav list to the navbar
    navbar.appendChild(navList);

    // append the navbar to the footer
    document.getElementById('navbar-container').appendChild(navbar);
});

