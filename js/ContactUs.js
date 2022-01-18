function check()
{
	ten = document.getElementById("name");
	errname = document.getElementById("loiname");
    email = document.getElementById("email");
	errEmail = document.getElementById("loiEmail");
    phone = document.getElementById("phone");
    errPhone = document.getElementById("loiPhone");
    b1 = document.getElementById("b1");
    //name
    if(ten.value=="")
    {
        errname.innerHTML="This field is required";
        errname.style.color="red";
        b1.disabled = true;
        return false;
    }
    else
        errname.innerHTML="";
    //mail
    if(email.value=="")
    {
        errEmail.innerHTML="Please enter your email address";
        errEmail.style.color="red";
        b1.disabled = true;
        return false;
    }
    else
        errEmail.innerHTML="";

    regEmail = /^\w+@\w+(\.\w+)+$/; 
    if(regEmail.test(email.value)==false)
    {
        errEmail.innerHTML="Email must be in format: abc@domain.com";
        errEmail.style.color="red";
        b1.disabled = true;
        return false;
    }
    else
        errEmail.innerHTML="";
    //phone 
    if(phone.value=="")
    {
        errPhone.innerHTML="Please enter your phone number";
        errPhone.style.color="red";
        b1.disabled = true;
        return false;
    }
    else
        errPhone.innerHTML="";

    regPhone = /^\d{10}$/;
    if(regPhone.test(phone.value)==false)
    {
        errPhone.innerHTML="Please enter valid phone number";
        errPhone.style.color="red";
        b1.disabled = true;
        return false;
    }
    else
        errPhone.innerHTML="";

    b1.disabled = false;
    return true;
}