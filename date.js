document.addEventListener("DOMContentLoaded", function() {

    function getCurrentDateTime() {
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
        return now.toLocaleDateString('en-US', options);
    }

    function updateDateTime() {
        const datetimeElement = document.getElementById('datetime');
        datetimeElement.textContent = getCurrentDateTime();
    }

    updateDateTime();
    setInterval(updateDateTime, 1000);
});