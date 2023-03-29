var sit = document.getElementById('site');
sit.style.display = 'none';

function siteShows() {
    var Sit = "Do you open the site?"
    if (confirm(Sit) == true) {
        sit.style.display = 'block'
    }
    else {
        sit.style.display = 'none';
    }
}