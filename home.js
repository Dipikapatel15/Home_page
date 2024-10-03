// Get the select element and the book button
const hotelSelect = document.getElementById('hotel-sites');
const bookButton = document.getElementById('book-now');

// Add event listener to the button
bookButton.addEventListener('click', function() {
    const selectedSite = hotelSelect.value;

    // Check if a site is selected
    if (selectedSite) {
        // Redirect to the selected hotel site
        window.location.href = `https://${selectedSite}`;
    } else {
        // Alert if no site is selected
        alert('Please select a hotel site to book.');
    }
});
