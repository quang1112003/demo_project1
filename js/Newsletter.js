function checkemail()
{
    email2 = document.getElementById("email2");
    //mail
    if(email2.value=="")
    {
        alert("Please enter your email address");
        return false;
    }
    regEmail = /^\w+@\w+(\.\w+)+$/;
    if(regEmail.test(email2.value)==false)
    {
        alert("Email must be in format: abc@domain.com");
        return false;
    }
    alert("Thank You!\n" +
        "Your enquiry has been sent.");
    return true;
}