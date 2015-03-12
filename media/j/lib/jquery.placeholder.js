/*

Example usage:
if (!Modernizr.input.placeholder){
    $('input[placeholder]').placeholder();
}

*/
(function($) {

$.fn.placeholder = (function(){
    this.each(function(i, item) {
        var input = $(item), placeholderRemoved = false, removePromptFunc;
		
        if (input.attr("placeholder")) {		
            var removePromptFunc = function(){
                input.removeClass("placeholder-visible");
                if (!placeholderRemoved && input.val() == input.attr("placeholder")){
                    input.val("");
                    placeholderRemoved = true;
                }
            };
            
            var addPromptFunc = function() {
                if (input.attr("placeholder") && (!input.val() || input.val() == input.attr("placeholder"))) {
                    input.addClass("placeholder-visible");
                    input.val(input.attr("placeholder"));
                    
                    input.change(removePromptFunc);
                    input.focus(removePromptFunc);
                    input.parents("form").submit(removePromptFunc);
                    placeholderRemoved = false;
                }
            };
            
		
            addPromptFunc();
            input.blur(addPromptFunc);
        }
    });
    
    return this;
});


})(jQuery);