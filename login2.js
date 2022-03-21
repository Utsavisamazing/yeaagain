function validate()
{
    var username=document.getElementByID("username").value;
    var password=dcoument.getElementByID("password").value;
    if(username=="admin"&& password=="user")
{
    alert("LOGGED IN SUCCESFULLY");
    return false;
}
{
    alert("login failed")
}
}