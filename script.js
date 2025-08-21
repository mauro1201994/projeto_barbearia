document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".menu-link");
    const currentPage = window.location.pathname.split("/").pop();

    links.forEach(link => {
        const linkPage = link.getAttribute("href");

        if (linkPage === currentPage) {
            link.classList.add("ativo"); // adiciona classe ativa
        }
    });
});


