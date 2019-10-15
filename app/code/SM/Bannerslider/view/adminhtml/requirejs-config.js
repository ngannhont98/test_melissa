var config = {
    map: {
        '*': {
            'SM/note': 'SM_Bannerslider/js/jquery/slider/jquery-ads-note',
        },
    },
    paths: {
        'SM/flexslider': 'SM_Bannerslider/js/jquery/slider/jquery-flexslider-min',
        'SM/evolutionslider': 'SM_Bannerslider/js/jquery/slider/jquery-slider-min',
        'SM/zebra-tooltips': 'SM_Bannerslider/js/jquery/ui/zebra-tooltips',
    },
    shim: {
        'SM/flexslider': {
            deps: ['jquery']
        },
        'SM/evolutionslider': {
            deps: ['jquery']
        },
        'SM/zebra-tooltips': {
            deps: ['jquery']
        },
    }
};
