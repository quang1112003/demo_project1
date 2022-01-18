var arr = new Array("Fairs.jpg","Fairs2.jpg");
var i = 0;
function chay_anh(){
document.getElementById("image").src = "image/"+arr[i];
i++;
if(i==arr.length){
i=0;

}
window.setTimeout("chay_anh()",3000);
}