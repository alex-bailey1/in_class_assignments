function change_color()
{
    document.body.style.backgroundColor = rand_hex();
}

function rand_hex()
{
    var r_num = Math.floor(Math.random() * 255);
    var g_num = Math.floor(Math.random() * 255);
    var b_num = Math.floor(Math.random() * 255);

    var r_str = r_num.toString(16);
    var g_str = g_num.toString(16);
    var b_str = b_num.toString(16);

    if(r_str.length < 2)
    {
        r_str = "0" + r_str;
    }
    if(g_str.length < 2)
    {
        g_str = "0" + g_str;
    }
    if(b_str.length < 2)
    {
        b_str = "0" + b_str;
    }


    var hex_color = "#" + r_str + g_str + b_str;

    return hex_color;
}