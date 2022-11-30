$(function () {
    let submit = $('#submit');
    submit.attr('disabled', 'disabled');

    $($(":input")).on("input", function () {
        if ($('#username').val().length > 0 &&
            $('#password1').val().length > 9 &&
            $('#password1').val() === $('#password2').val() &&
            $("#checkbox").prop('checked') == true &&
            $('#countries').find(":selected").text() != 'Select your country') {
            submit.removeAttr('disabled');
        }
    });

    submit.click(function (e) {
        e.preventDefault();
        $('body').append(`Welcome ${$('#username').val()}! The country code you selected is ${$('#countries').find(":selected").attr('value')}`);
        submit.removeClass("enable");
        submit.addClass("disable");
        submit.attr('disabled', 'disabled');
    });
    var select = document.getElementById("countries");

    for (var i = 0; i < countries.length; i++) {
        var country = countries[i];
        var cn = document.createElement("option");
        cn.textContent = country.name;
        cn.value = country.code;
        select.appendChild(cn);
    }
});