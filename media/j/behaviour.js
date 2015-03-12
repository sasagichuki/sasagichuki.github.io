(function($) {

    function init() {
    
        // Kill links to self
        $('a').each(function(i, item) {
            if (item.href == ('' + window.location).replace(/#.*$/, '').replace(/\?.*$/, '')) {
                $(item).addClass('current');
            }
            else {
                $(item).removeClass('current');
            }
        });

        if (!Modernizr.input.placeholder){
            $('input[placeholder]').placeholder();
        }
        
    };
    
    $(init);

})(jQuery);

// $('#chaosemail').html(function(){
// 	var a = "me";
// 	var b = "@";
// 	var c = "chaos";
// 	var d = ".co.ke";
// 	var e = 'mailto:' + a + b + c + d;
// 	$(this).attr('href', e);
// 	//return a + b + c + d;
// });

//    var a = "me";
//    var b = "@";
//    var c = "chaos";
//    var d = ".co.ke";
//    var e = "?subject=Hi%20Chaos"
//    var f = 'mailto:' + a + b + c + d + e;
//
//$('#chaosemail').attr('href', f);