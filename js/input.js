(function($){
	
	
	/*
	*  acf/setup_fields
	*
	*  This event is triggered when ACF adds any new elements to the DOM. 
	*
	*  @type	function
	*  @since	1.1.0
	*  @date	08/29/14
	*
	*  @param	event		e: an event object. This can be ignored
	*  @param	Element		postbox: An element which contains the new HTML
	*
	*  @return	N/A
	*/
	
	acf.add_action('ready append', function( $el ){
	 
		// search $el for fields of type 'column'
		acf.get_fields({ type : 'column'}, $el).each(function(e, postbox){
			var columns = $(postbox).find('.acf-column').data('column'),
				colClass = '';

			$(postbox).find('.acf-column').each(function() {
				var root = $(this).parents('.field_type-column');
				if ( columns == '1_1' ) {
					$(postbox).replaceWith('<div class="acf-field field_type-columngroup column-layout-' + columns + '"></div>')
				} else {
					if ( $(postbox).hasClass('hidden-by-tab') ) {
						colClass = 'acf-field field_type-columngroup column-layout-' + columns + ' hidden-by-tab';
					} else {
						colClass = 'acf-field field_type-columngroup column-layout-' + columns;
					}
					$(root)	.nextUntil('.field_type-column')
							.removeClass('hidden-by-tab')
							.wrapAll('<div class="' + colClass + '"><div class="column-pad"></div></div>');
					$(postbox).remove();
				}
			});
		});
	});

})(jQuery);
