const clickMe = () => {
    window.location.href = "http://localhost:3000/indexmongo.html";
}
$(document).ready(function () {
    $('.materialboxed').materialbox();
    $('#clickMeButton').click(() => {
        clickMe();
    })
});

