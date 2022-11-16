!(function (e) {
  if (e(window).on('load', function () {
    e('#preloader').length && e('#preloader').delay(100).fadeOut('slow', function () {
      e(this).remove()
    })
  }), e(window).scroll(function () {
    e(this).scrollTop() > 100 ? e('.back-to-top').fadeIn('slow') : e('.back-to-top').fadeOut('slow')
  }), e('.back-to-top').click(function () {
    return e('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo'), !1
  }), (new WOW()).init(), e('.nav-menu').superfish({ animation: { opacity: 'show' }, speed: 400 }), e('#nav-menu-container').length) {
    var o = e('#nav-menu-container').clone().prop({ id: 'mobile-nav' }); o.find('> ul').attr({ class: '', id: '' }), e('body').append(o), e('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>'), e('body').append('<div id="mobile-body-overly"></div>'), e('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>'), e(document).on('click', '.menu-has-children i', function (o) {
      e(this).next().toggleClass('menu-item-active'), e(this).nextAll('ul').eq(0).slideToggle(), e(this).toggleClass('fa-chevron-up fa-chevron-down')
    }), e(document).on('click', '#mobile-nav-toggle', function (o) {
      e('body').toggleClass('mobile-nav-active'), e('#mobile-nav-toggle i').toggleClass('fa-times fa-bars'), e('#mobile-body-overly').toggle()
    }), e(document).click(function (o) {
      var a = e('#mobile-nav, #mobile-nav-toggle'); a.is(o.target) || a.has(o.target).length !== 0 || e('body').hasClass('mobile-nav-active') && (e('body').removeClass('mobile-nav-active'), e('#mobile-nav-toggle i').toggleClass('fa-times fa-bars'), e('#mobile-body-overly').fadeOut())
    })
  } else {
    e('#mobile-nav, #mobile-nav-toggle').length && e('#mobile-nav, #mobile-nav-toggle').hide()
  } e(window).scroll(function () {
    e(this).scrollTop() > 100 ? e('#header').addClass('header-scrolled') : e('#header').removeClass('header-scrolled')
  }), e(window).scrollTop() > 100 && e('#header').addClass('header-scrolled'), e('.nav-menu a, #mobile-nav a, .scrollto').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var o = e(this.hash); if (o.length) {
        var a = 0; return e('#header').length && (a = e('#header').outerHeight(), e('#header').hasClass('header-scrolled') || (a -= 20)), e('html, body').animate({ scrollTop: o.offset().top - a }, 1500, 'easeInOutExpo'), e(this).parents('.nav-menu').length && (e('.nav-menu .menu-active').removeClass('menu-active'), e(this).closest('li').addClass('menu-active')), e('body').hasClass('mobile-nav-active') && (e('body').removeClass('mobile-nav-active'), e('#mobile-nav-toggle i').toggleClass('fa-times fa-bars'), e('#mobile-body-overly').fadeOut()), !1
      }
    }
  }); var a = e('section'); var t = e('.nav-menu, #mobile-nav'); var i = e('#header').outerHeight(); e(window).on('scroll', function () {
    var o = e(this).scrollTop(); a.each(function () {
      var a = e(this).offset().top - i; var l = a + e(this).outerHeight(); o >= a && o <= l && (t.find('li').removeClass('menu-active menu-item-active'), t.find('a[href="#' + e(this).attr('id') + '"]').parent('li').addClass('menu-active menu-item-active'))
    })
  }); var l = e('.carousel'); var n = e('.carousel-indicators'); l.find('.carousel-inner').children('.carousel-item').each(function (o) {
    o === 0 ? n.append("<li data-target='#introCarousel' data-slide-to='" + o + "' class='active'></li>") : n.append("<li data-target='#introCarousel' data-slide-to='" + o + "'></li>"), e(this).css('background-image', "url('" + e(this).children('.carousel-background').children('img').attr('src') + "')"), e(this).children('.carousel-background').remove()
  }), e('.carousel').swipe({ swipe: function (o, a, t, i, l, n) {
    a == 'left' && e(this).carousel('next'), a == 'right' && e(this).carousel('prev')
  },
  allowPageScroll: 'vertical' }), e('#skills').waypoint(function () {
    e('.progress .progress-bar').each(function () {
      e(this).css('width', e(this).attr('aria-valuenow') + '%')
    })
  }, { offset: '80%' }), e('[data-toggle="counter-up"]').counterUp({ delay: 10, time: 1e3 }); var s = e('.portfolio-container').isotope({ itemSelector: '.portfolio-item', layoutMode: 'fitRows' }); e('#portfolio-flters li').on('click', function () {
    e('#portfolio-flters li').removeClass('filter-active'), e(this).addClass('filter-active'), s.isotope({ filter: e(this).data('filter') })
  }), e('.clients-carousel').owlCarousel({ autoplay: !0, dots: !0, loop: !0, responsive: { 0: { items: 2 }, 768: { items: 4 }, 900: { items: 6 } } }), e('.testimonials-carousel').owlCarousel({ autoplay: !0, dots: !0, loop: !0, items: 1 })
}(jQuery))
