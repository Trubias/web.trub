document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('send-message');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert("Message Sent!");
        form.reset();
    });

});