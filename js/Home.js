var arr = new Array("home1.webp","home2.webp","home3.webp","home4.webp","home5.webp","home6.webp");
var i = 0;
function chay_anh(){
    document.getElementById("anh").src = "image/"+arr[i];
    i++;
    if(i==arr.length){
        i=0;

    }
    window.setTimeout("chay_anh()",5000);
}