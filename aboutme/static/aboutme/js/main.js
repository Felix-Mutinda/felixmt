$(function() {
    
    
    /* overide boostrap .dropdown-toggle .show colors */
    $('.dropdown-toggle').click((e) => {

        $('.dropdown-toggle').css({
           'border-color': '#E9C46A',
           'background': '#E9C46A',
        });
    });
    
    
    /* bind events to sidebar menu links */
    const homeLink = $('.home-link');
    const codeLink = $('.code-link');
    const aboutLink = $('.about-link');

    function updateMainContent(url) { // fetch url and display on .main-content
        let mainContent = $('.main-content');
        
        /* pseudo progress bar below nav */
        $('#header-divider').css({
            visibility: 'visible',
            animation: 'moveRight 1s infinite',
        });
        
        fetch(url)
        .then((data) =>  data.text())
        .then(function(data) {
            /* remove pseudo progress bar */
            $('#header-divider').css({
                visibility: 'hidden',
            });
        
            /* replace .main-content with retrieved data. */
            mainContent.html(data);
        })
        .catch(function(error) {
            console.log(error);
        });
    }
    
    
    homeLink.on('click', function(e) {
        updateMainContent('/aboutme/home');
    });
    
    codeLink.on('click', function(e) {
        updateMainContent('/aboutme/samples');
    });
    
    aboutLink.on('click', function(e) {
        updateMainContent('/aboutme/about');
    });
    
});