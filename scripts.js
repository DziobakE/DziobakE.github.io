document.addEventListener('DOMContentLoaded', () => {
    const menuMobilne = document.getElementById('menu-mobilne');
    const listaNawigacji = document.getElementById('lista-nawigacji');

    menuMobilne.addEventListener('click', () => { listaNawigacji.classList.toggle('aktywny');});

    const linki = document.querySelectorAll('.lista-nawigacji li a');

    for (const link of linki) 
        {
        link.addEventListener('click', (event) => 
        {
            event.preventDefault();
            const docelowyId = event.currentTarget.getAttribute('href');
            const docelowaSekcja = document.querySelector(docelowyId);

            window.scrollTo({ top: docelowaSekcja.offsetTop - 60, behavior: 'smooth' });
            listaNawigacji.classList.remove('aktywny');
        });
    }
});
