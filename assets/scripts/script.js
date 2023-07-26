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

    // KG buttons
    $('#ttl-kg-btn').click(() => {
        if ($('#ttl-ontology-btn').hasClass('kg-mucho-btn-active')) {
        } else {
            $('#viz-kg-btn').removeClass('kg-mucho-btn-active').addClass('mucho-btn');
            $('#pop-kg-btn').removeClass('kg-mucho-btn-active').addClass('mucho-btn');
            $('#ttl-kg-btn').removeClass('mucho-btn').addClass('kg-mucho-btn-active');
            $('#kg-pop-div').addClass('hidden');
            $('#kg-viz-div').addClass('hidden');
            $('#kg-ttl-div').removeClass('hidden');
        }
    });

    $('#viz-kg-btn').click(() => {
        if ($('#viz-ontology-btn').hasClass('kg-mucho-btn-active')) {
        } else {
            $('#ttl-kg-btn').removeClass('kg-mucho-btn-active').addClass('mucho-btn');
            $('#pop-kg-btn').removeClass('kg-mucho-btn-active').addClass('mucho-btn');
            $('#viz-kg-btn').removeClass('mucho-btn').addClass('kg-mucho-btn-active');
            $('#kg-ttl-div').addClass('hidden');
            $('#kg-pop-div').addClass('hidden');
            $('#kg-viz-div').removeClass('hidden');
        }
    });

    $('#pop-kg-btn').click(() => {
        if ($('#pop-ontology-btn').hasClass('kg-mucho-btn-active')) {
        } else {
            $('#ttl-kg-btn').removeClass('kg-mucho-btn-active').addClass('mucho-btn');
            $('#viz-kg-btn').removeClass('kg-mucho-btn-active').addClass('mucho-btn');
            $('#pop-kg-btn').removeClass('mucho-btn').addClass('kg-mucho-btn-active');
            $('#kg-ttl-div').addClass('hidden');
            $('#kg-viz-div').addClass('hidden');
            $('#kg-pop-div').removeClass('hidden');
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
//
    //    $('.sm-nav-link').removeClass('active-sm-nav-link');
    //    $('.sm-nav-link').addClass('inactive-sm-nav-link');
    //}, { offset: '-50%'}
    //);




    $('#project-section-main').waypoint(function() {
        changeActiveNavLink('project');
    }, { offset: '120px'}
    );
    $('#project-section-main').waypoint(function(direction) {
        if (direction == 'up') {
            changeActiveNavLink('none');
        }
    }, { offset: '70%'}
    );


    $('#ke-section-main').waypoint(function(direction) {
        if (direction == 'down') {
            changeActiveNavLink('ke');
        }
    }, { offset: '120px'}
    );

    $('#ke-section-main').waypoint(function(direction) {
        if (direction == 'up') {
            changeActiveNavLink('project');
        }
    }, { offset: '100%'}
    );
    
    $('#ontology-section-main').waypoint(function(direction) {
        if (direction == 'down') {
            changeActiveNavLink('ontology');
        }
    }, { offset: '120px'}
    );
    $('#ontology-section-main').waypoint(function(direction) {
        if (direction == 'up') {
            changeActiveNavLink('ke');
        }
    }, { offset: '100%'}
    );

    $('#results-section-main').waypoint(function(direction) {
        if (direction == 'down') {
            changeActiveNavLink('results');
        }        
    }, { offset: '120px'}
    );
    $('#results-section-main').waypoint(function(direction) {
        if (direction == 'up') {
            changeActiveNavLink('ontology');
        }
    }, { offset: '100%'}
    );


    $('#about-section-main').waypoint(function(direction) {
        if (direction == 'down') {
            changeActiveNavLink('about');
        }
    }, { offset: '120px'}
    );
    $('#about-section-main').waypoint(function(direction) {
        if (direction == 'up') {
            changeActiveNavLink('results');
        }
    }, { offset: '100%'}
    );

    


});

function changeActiveNavLink(navLink) {
    $('.sm-nav-link').removeClass('active-sm-nav-link');
    $('.sm-nav-link').addClass('inactive-sm-nav-link');
    if (navLink != 'none') {
        $('#' + navLink + '-sm-nav-link').removeClass('inactive-sm-nav-link');
        $('#' + navLink + '-sm-nav-link').addClass('active-sm-nav-link');
    };
}
