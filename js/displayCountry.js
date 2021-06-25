$(document).ready(function () {
    $(".dropdown-menuCountry li a").click(function () {
        var selText = $(this).text();
        $(this).closest('.countrydropdown').find('#textauxCountry').val(selText);
    });
});