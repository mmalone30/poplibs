$('.form-control').on('focus blur', function (e) {
    $(this).parents('.form-input').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
}).trigger('blur');
