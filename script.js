if (typeof document !== 'undefined') {
    function showSubMenu() {
        document.getElementById('submenu').style.display = 'block';
    }

    function hideSubMenu() {
        document.getElementById('submenu').style.display = 'none';
    }

    document.addEventListener('DOMContentLoaded', function () {
        document.getElementById('quem-somos-link').addEventListener('click', function () {
            document.getElementById('sessao6').scrollIntoView({ behavior: 'smooth' });
        });

        const menuLinks = document.querySelectorAll('#menu a');

        menuLinks.forEach(function (link) {
            link.addEventListener('click', function (event) {
                event.preventDefault();
                const sessaoAlvo = link.getAttribute('data-sessao');
                document.getElementById(sessaoAlvo).scrollIntoView({ behavior: 'smooth' });
            });
        });

        const quemSomosLink = document.getElementById('quem-somos-link');

        quemSomosLink.addEventListener('click', function () {
            document.getElementById('sessao6').scrollIntoView({ behavior: 'smooth' });
        });
    });

    function openLink(link) {
        window.open(link, '_blank');
    }

    function addHoverEffect(element) {
        element.querySelector('.hover-overlay').style.display = 'block';
    }

    function removeHoverEffect(element) {
        element.querySelector('.hover-overlay').style.display = 'none';
    }

    document.addEventListener('DOMContentLoaded', function () {
        window.addEventListener('scroll', function () {
            var rodape = document.getElementById('rodape');
            var altura = document.documentElement.scrollHeight - window.innerHeight;
            var scrollAtual = window.scrollY;

            if (scrollAtual >= altura) {
                rodape.classList.add('visivel');
            } else {
                rodape.classList.remove('visivel');
            }
        });
    });
}

function openLink(link) {
    window.open(link, '_blank');
}