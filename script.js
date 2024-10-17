// Select all elements with the class 'link-item'
const linkItems = document.querySelectorAll(".link-item");

// Loop through each link item and add a click event listener
linkItems.forEach((linkItem, index) => {

    // Add an event listener for the click event on each 'link-item'
    linkItem.addEventListener("click", () => {

        // Find the currently active link and remove the 'active' class
        document.querySelector(".active").classList.remove("active");

        // Add the 'active' class to the clicked link item
        linkItem.classList.add("active");

        // Select the indicator element
        const indicator = document.querySelector(".indicator");

        // Calculate the new position of the indicator based on the clicked link index
        // Each link item is 95px wide, and the indicator is initially positioned 48px from the left
        indicator.style.left = `${index * 95 + 48}px`;
    });
});
