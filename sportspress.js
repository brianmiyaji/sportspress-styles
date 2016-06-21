(function($) {
    
    /* Countdown */
    $(".js-countdown").each(function() {
        var $this = $(this), finalDate = $(this).data("countdown");
        $this.countdown(finalDate, function(event) {
            $this.html(event.strftime("<td class=\"sp-table__cell\"><span class=\"sp-table__value sp-table__value--size-large\">%D</span> <small class=\"sp-table__value sp-table__value--size-small\">" + localized_strings.days + "</small></td> "
            + "<td class=\"sp-table__cell\"><span class=\"sp-table__value sp-table__value--size-large\">%H</span> <small class=\"sp-table__value sp-table__value--size-small\">" + localized_strings.hrs + "</small></td> "
            + "<td class=\"sp-table__cell\"><span class=\"sp-table__value sp-table__value--size-large\">%M</span> <small class=\"sp-table__value sp-table__value--size-small\">" + localized_strings.mins + "</small></td> "
            + "<td class=\"sp-table__cell\"><span class=\"sp-table__value sp-table__value--size-large\">%S</span> <small class=\"sp-table__value sp-table__value--size-small\">" + localized_strings.secs + "</small></td>" ));
        });
    });

})(jQuery);