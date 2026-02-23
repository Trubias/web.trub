document.addEventListener('DOMContentLoaded',() => {
    const form = document.getElementById('contact-me');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert("ngi");
        form.reset();

    });

});