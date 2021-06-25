$(document).ready(function () {
    $(".dropdown-menuCity li a").click(function () {
        var selText = $(this).text();
        $(this).closest('.citydropdown').find('#textauxCity').val(selText);
    });
});