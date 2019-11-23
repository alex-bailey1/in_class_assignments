function submit_form() 
{
    f_name = document.getElementById("f_name").value;
    l_name = document.getElementById("l_name").value;
    email = document.getElementById("email").value;
    comment = document.getElementById("comment").value;

    console.log("name: " + f_name + " " + l_name);
    console.log("email: " + email);
    console.log("message: " + comment);

}

function clear_form()
{
    document.getElementById("f_name").value = "";
    document.getElementById("l_name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("comment").value = "";

}