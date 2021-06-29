$(document).ready(function () {
    $(".dropdown-menuCity li a").click(function () {
        var selText = $(this).text();
        $(document).find('#textauxCity').text(selText);
        selectedCity = selText;
    });
});

