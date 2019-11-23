window.onresize = display_size;
window.onload = display_size;

function display_size()
{
    document.getElementById("width").value = window.innerWidth;
    document.getElementById("height").value = window.innerHeight;
}