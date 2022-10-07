
(function ($) {
    $.fn.timeline = function () {
        var selectors = {
            id: $(this),
            item: $(this).find(".timeline-item"),
            activeClass: "timeline-item--active",
            img: ".timeline__img"
        };
        selectors.item.eq(0).addClass(selectors.activeClass);
        selectors.item.removeClass(selectors.activeClass);
        selectors.id.css(
            "background",
            "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(" +
            selectors.item
                .first()
                .find(selectors.img)
                .attr("src") +
            ")"
        );
        selectors.id.css(
            "background-position",
            "center"
        );
        selectors.id.css(
            "background-attachment",
            "fixed"
        );
        selectors.id.css(
            "background-repeat",
            "no-repeat"
        );
        selectors.id.css(
            "background-size",
            "contain"
        );
        var itemLength = selectors.item.length;
        $(window).scroll(function () {
            var max, min;
            var pos = $(this).scrollTop();
            selectors.item.each(function (i) {
                min = $(this).offset().top - 100;
                max = $(this).height() + $(this).offset().top - 300;
                var that = $(this);
                if (i == itemLength - 2 && pos > min + $(this).height() / 2) {
                    selectors.item.removeClass(selectors.activeClass);
                    selectors.id.css(
                        "background",
                        "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(" +
                        selectors.item
                            .last()
                            .find(selectors.img)
                            .attr("src") +
                        ")"
                    );
                    selectors.id.css(
                        "background-position",
                        "center"
                    );
                    selectors.id.css(
                        "background-attachment",
                        "fixed"
                    );
                    selectors.id.css(
                        "background-repeat",
                        "no-repeat"
                    );
                    selectors.id.css(
                        "background-size",
                        "contain"
                    );
                    selectors.item.last().addClass(selectors.activeClass);
                } else if (pos <= max - 100 && pos >= min) {
                    selectors.id.css(
                        "background",
                        "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(" +
                        $(this)
                            .find(selectors.img)
                            .attr("src") +
                        ")"
                    );
                    selectors.id.css(
                        "background-position",
                        "center",
                    );
                    selectors.id.css(
                        "background-attachment",
                        "fixed"
                    );
                    selectors.id.css(
                        "background-repeat",
                        "no-repeat"
                    );
                    selectors.id.css(
                        "background-size",
                        "contain"
                    );
                    selectors.item.removeClass(selectors.activeClass);
                    $(this).addClass(selectors.activeClass);
                }
            });
        });
    };
})(jQuery);
$("#timeline-1").timeline();
$("#timeline-2").timeline();
$("#timeline-3").timeline();