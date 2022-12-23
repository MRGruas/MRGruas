/* source: https://github.com/avinoamr/bootstrap-carousel-swipe */
/* changes from Mobirise team */
+(function(b) {
  if (b.fn.carousel) {
    var c = function(a) {
      this.$element = b(a);
      this.carousel = this.$element.data("bs.carousel");
      this.options = b.extend({}, c.DEFAULTS, this.carousel.options);
      this.startX = this.startY = this.startTime = this.cycling = this.$active = this.$items = this.$next = this.$prev = this.dx = null;
      this.$element
        .on("touchstart", b.proxy(this.touchstart, this))
        .on("touchmove", b.proxy(this.touchmove, this))
        .on("touchend", b.proxy(this.touchend, this));
    };
    c.DEFAULTS = { swipe: 50 };
    c.prototype.touchstart = function(a) {
      if (this.options.swipe) {
        var b = a.originalEvent.touches ? a.originalEvent.touches[0] : a;
        this.dx = 0;
        this.startX = b.pageX;
        this.startY = b.pageY;
        this.cycling = null;
        this.width = this.$element.width();
        this.startTime = a.timeStamp;
      }
    };
    c.prototype.touchmove = function(a) {
      if (this.options.swipe) {
        var b = a.originalEvent.touches ? a.originalEvent.touches[0] : a,
          c = b.pageX - this.startX,
          b = b.pageY - this.startY;
        Math.abs(c) < Math.abs(b) ||
          (
            null === this.cycling &&
              (this.cycling = !!this.carousel.interval) &&
              this.carousel.pause(),
            a.preventDefault(),
            (this.dx = c / (this.width || 1) * 100),
            this.swipe(this.dx)
          );
      }
    };
    c.prototype.touchend = function(a) {
      if (this.options.swipe && this.$active) {
        var c = b()
          .add(this.$active)
          .add(this.$prev)
          .add(this.$next)
          .carousel_transition(!0);
        a = Math.abs(this.dx / ((a.timeStamp - this.startTime) / 1e3));
        40 < this.dx || (0 < this.dx && a > this.options.swipe)
          ? this.carousel.prev()
          : -40 > this.dx || (0 > this.dx && a > this.options.swipe)
            ? this.carousel.next()
            : this.$active
                .one(b.support.transition.end, function() {
                  c.removeClass("prev next");
                })
                .emulateTransitionEnd(
                  1e3 * this.$active.css("transition-duration").slice(0, -1)
                );
        c.carousel_offset(!1);
        this.cycling && this.carousel.cycle();
        this.$active = null;
      }
    };
    c.prototype.swipe = function(a) {
      var b = this.$active || this.getActive();
      if (0 > a) {
        this.$prev
          .carousel_offset(!1)
          .removeClass("prev")
          .carousel_transition(!0);
        if (!this.$next.length || this.$next.hasClass("active")) return;
        this.$next
          .carousel_transition(!1)
          .addClass("next")
          .carousel_offset(a + 100);
      } else {
        this.$next
          .carousel_offset(!1)
          .removeClass("next")
          .carousel_transition(!0);
        if (!this.$prev.length || this.$prev.hasClass("active")) return;
        this.$prev
          .carousel_transition(!1)
          .addClass("prev")
          .carousel_offset(a - 100);
      }
      b.carousel_transition(!1).carousel_offset(a);
    };
    c.prototype.getActive = function() {
      this.$active = this.$element.find(".item.active");
      this.$items = this.$active.parent().children();
      this.$next = this.$active.next();
      !this.$next.length &&
        this.options.wrap &&
        (this.$next = this)