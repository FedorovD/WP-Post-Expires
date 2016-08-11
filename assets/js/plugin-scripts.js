jQuery(function($){
	var selectField      = $('#xn-wppe-action-end');
	var addTextFieldWrap = $('#xn-wppe-select-add-text');
	var addTextField     = $('#xn-wppe-add-text');
	var editBtn          = $('#xn-wppe-edit');
	var hideBtn          = $('.xn-wppe-hide-expiration');
	var allFields        = $('#xn-wppe-fields');
	var datetimeField    = $('#xn-wppe-datetime');
	var datetimePreview  = $('#xn-wppe-currentsetdt');
	var prevDatetime     = datetimeField.val();
	var datetimepicker = datetimeField.datepicker({
		minDate: new Date(),
		dateFormat: 'yyyy-mm-dd',
		timepicker: true,
		timeFormat:'hh:ii',
		position: "bottom right",
	}).data('datepicker');

	if($(window).width() < 768 ){
		datetimepicker.update('position','bottom left');
	}

	if(selectField.val() != 'add_text'){
		addTextFieldWrap.slideUp();
		addTextFieldWrap.prop('disabled',true);
	}

	selectField.on('change',function(){
		if($(this).val() == 'add_text'){
			addTextFieldWrap.slideDown('fast');
			addTextField.prop('disabled',false);
		}else{
			addTextFieldWrap.slideUp('fast');
			addTextField.prop('disabled',true);
		}
	});

	editBtn.on('click',function(e){
		e.preventDefault();
		editBtn.hide();
		allFields.slideDown('fast');
	});

	hideBtn.on('click',function(e){
		e.preventDefault();
		editBtn.show();
		allFields.slideUp('fast');

		if(!$(this).hasClass('cancel')){
			if(datetimeField.val().length > 0){
				datetimePreview.text(datetimeField.val());
			}else{
				datetimePreview.text(datetimePreview.data('never'));
			}
		}else{
			datetimeField.val(prevDatetime);
		}
	});
});
