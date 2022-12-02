
function bendBottomCorner () {
  $('.flip-card:not(.builderCard)').each(function () {
    $(this).addClass('builderCard')
  })
} var isBuilder = $('html').hasClass('is-builder'); if (isBuilder) {
  $(document).on('add.cards', function () {
    $('.flip-card').length != 0 && bendBottomCorner()
  })
}
