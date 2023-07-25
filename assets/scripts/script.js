$(document).ready(function() {

    $('.gist-file').addClass('padding-0').addClass("margin-0") //.addClass("b-black-border")

    $('#viz-ontology-btn').click(() => {
        if ($('#viz-ontology-btn').hasClass('mucho-btn-active')) {
        } else {
            $('#owl-ontology-btn').removeClass('mucho-btn-active').addClass('mucho-btn');
            $('#viz-ontology-btn').removeClass('mucho-btn').addClass('mucho-btn-active');
            $('#ontology-owl-div').addClass('hidden');
            $('#ontology-viz-div').removeClass('hidden');
        }
    });

    $('#owl-ontology-btn').click(() => {
        if ($('#owl-ontology-btn').hasClass('mucho-btn-active')) {
        } else {
            $('#viz-ontology-btn').removeClass('mucho-btn-active').addClass('mucho-btn');
            $('#owl-ontology-btn').removeClass('mucho-btn').addClass('mucho-btn-active');
            $('#ontology-viz-div').addClass('hidden');
            $('#ontology-owl-div').removeClass('hidden');
        }
    });

    // Smooth scrolling to anchor links on the same page
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                block: 'start',
                behavior: 'smooth'
            });
        });
    });

    // Close mobile menu when a link is clicked
    $('.sm-nav-link').click(() => {
        $('#mobile-menu-dropdown').addClass('hidden');
        $('#mobile-menu-btn').html('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/></svg>')
    });
    $('#logo').click(() => {
        $('#mobile-menu-dropdown').addClass('hidden');
        $('#mobile-menu-btn').html('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/></svg>')
    });

    
    // Change the svg icon of the mobile menu button when clicked
    $('#mobile-menu-btn').click(() => {
        if ($('#mobile-menu-dropdown').hasClass('hidden')) {
            $('#mobile-menu-dropdown').removeClass('hidden');
            $('#mobile-menu-btn').html('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>');
        } else {
            $('#mobile-menu-dropdown').addClass('hidden');
            $('#mobile-menu-btn').html('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/></svg>')
        };
    });


    // Waypoints for the project sections
    //$('#site-banner').waypoint(function() {
    //    $('.lg-nav-link').removeClass('active-lg-nav-link');
    //    $('.lg-nav-link').addClass('inactive-lg-nav-link');
    //    $('.sm-nav-link').removeClass('active-sm-nav-link');
    //    $('.sm-nav-link').addClass('inactive-sm-nav-link');
    //}, { offset: '-50%'}
    //);


    //$('#project-section-main').waypoint(function() {
    //    changeActiveNavLink('project');
    //}, { offset: '120px'}
    //);


    //$('#datasets-section-main').waypoint(function(direction) {
    //    if (direction == 'down') {
    //        changeActiveNavLink('datasets');
    //    }
    //}, { offset: '120px'}
    //);

    //$('#datasets-section-main').waypoint(function(direction) {
    //    if (direction == 'up') {
    //        changeActiveNavLink('project');
    //    }
    //}, { offset: '100%'}
    //);
    
    //$('#visualisations-section-main').waypoint(function(direction) {
    //    if (direction == 'down') {
    //        changeActiveNavLink('visualisations');
    //    }
    //}, { offset: '120px'}
    //);
    //$('#visualisations-section-main').waypoint(function(direction) {
    //    if (direction == 'up') {
    //        changeActiveNavLink('datasets');
    //    }
    //}, { offset: '100%'}
    //);

    //$('#license-metadata-section-main').waypoint(function(direction) {
    //    if (direction == 'down') {
    //        changeActiveNavLink('license-metadata');
    //    }        
    //}, { offset: '120px'}
    //);
    //$('#license-metadata-section-main').waypoint(function(direction) {
    //    if (direction == 'up') {
    //        changeActiveNavLink('visualisations');
    //    }
    //}, { offset: '100%'}
    //);


    //$('#about-section-main').waypoint(function(direction) {
    //    if (direction == 'down') {
    //        changeActiveNavLink('about');
    //    }
    //}, { offset: '120px'}
    //);
    //$('#about-section-main').waypoint(function(direction) {
    //    if (direction == 'up') {
    //        changeActiveNavLink('license-metadata');
    //    }
    //}, { offset: '100%'}
    //);


});
