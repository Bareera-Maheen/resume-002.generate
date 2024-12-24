function mybutton() {
    alert('button clicked');
}
document.addEventListener('DOMContentLoaded', function () {
    var button = document.getElementById('mybutton');
    if (button) {
        button.addEventListener('click', mybutton);
    }
});
