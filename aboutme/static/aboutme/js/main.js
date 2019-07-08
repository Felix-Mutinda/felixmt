$(function() {
    /* bind events to sidebar menu links */
    const homeLink = $('#home-link');
    const codeLink = $('#code-link');
    const aboutLink = $('#about-link');
    const url = '/aboutme/home.html';
    
    homeLink.on('click', function(e) {
        let mainContent = $('.main-content');
        $.get(url, "home-template", function(data, status, jqxhr){
            console.log(status);
        });
    });
});