$(document).ready(function () {
    $(".dropdown-menuCountry li a").click(function () {
        var selText = $(this).text();
        $(document).find('#textauxCountry').text(selText);
    });
});