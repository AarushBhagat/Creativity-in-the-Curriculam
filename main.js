// Highlight active nav link
document.querySelectorAll('nav ul li a').forEach(link => {
    if (window.location.pathname.endsWith(link.getAttribute('href'))) {
        link.classList.add('active');
    }
});

// Back to Top button
const backToTop = document.getElementById('backToTop');
window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
};
backToTop.onclick = function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
};