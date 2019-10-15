var config = {
	map: {
		'*': {
			'SM/note': 'SM_Bannerslider/js/jquery/slider/jquery-ads-note',
			'SM/impress': 'SM_Bannerslider/js/report/impress',
			'SM/clickbanner': 'SM_Bannerslider/js/report/clickbanner',
		},
	},
	paths: {
		'SM/flexslider': 'SM_Bannerslider/js/jquery/slider/jquery-flexslider-min',
		'SM/evolutionslider': 'SM_Bannerslider/js/jquery/slider/jquery-slider-min',
		'SM/popup': 'SM_Bannerslider/js/jquery.bpopup.min',
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
