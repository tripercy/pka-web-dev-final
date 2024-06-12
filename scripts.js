$(document).ready(function () {
    $('.cta-button').hover(
        function () {
            $(this).css('background-color', '#218838');
        },
        function () {
            $(this).css('background-color', '#28a745');
        }
    );

    $('.search-bar input').on('focus', function () {
        $(this).css('border-color', '#0366d6');
    });

    $('.search-bar input').on('blur', function () {
        $(this).css('border-color', '#ccc');
    });

    $('.repo-search input').on('focus', function () {
        $(this).css('border-color', '#0366d6');
    });

    $('.repo-search input').on('blur', function () {
        $(this).css('border-color', '#ccc');
    });
});
