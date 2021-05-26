$(function() {
    const $filterContent = $('.filter-content');
    $(document).on("click", "body .filter-sort-mobile .filter-mobile", function (e) {
        e.preventDefault();
        e.stopPropagation();
        $($filterContent).addClass('active');
        $("body").addClass('filter-active');
        $("body").scrollTop(0);
    });

    $(document).on("click", "body .filter-content .filter-sort-mobile-close", function (e) {
        e.preventDefault();
        e.stopPropagation();
        $filterContent.removeClass('active');
        $("body").removeClass('filter-active');
    });

    $('.filter-option-dropdown').click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).toggleClass('expanded');
        $('#' + $(e.target).attr('for')).prop('checked', true);
    });

    $(document).click(function() {
        $('.filter-option-dropdown').removeClass('expanded');
    });

    $('.sort-dropdown > .sort-caption').on('click', function() {
        $(this).parent().toggleClass('open');
    });

    $('.sort-dropdown > .sort-list > .sort-item').on('click', function() {
        $('.sort-dropdown > .sort-list > .sort-item').removeClass('selected');
        $(this).addClass('selected').parent().parent().removeClass('open').children('.sort-caption').text( $(this).text() );
        if ($(this).hasClass('sort-item-default')) {
            $(".filter-sort-block").removeClass('sort-default');
        } else {
            $(".filter-sort-block").addClass('sort-default');
        }
    });

    $(document).on('keyup', function(evt) {
        if ( (evt.keyCode || evt.which) === 27 ) {
            $('.sort-dropdown').removeClass('open');
        }
    });

    $(document).on('click', function(evt) {
        if ( $(evt.target).closest(".sort-dropdown > .sort-caption").length === 0 ) {
            $('.sort-dropdown').removeClass('open');
        }
    });

    $('.sort-modal-toggle').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        $('.sort-modal').toggleClass('is-visible');
        $("body").toggleClass('sort-active');
    });

    $('.filter-sort .filter-feature').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        $('.filter-content').slideToggle(100);
        $(this).toggleClass('is-visible');
        $('.filter-content').toggleClass('is-visible');
    });
});
