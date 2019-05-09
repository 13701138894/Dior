// 隐藏显示
function Show_Hidden(obj)
{
 if(obj.style.display=="block")
 {
  obj.style.display='none';
 }
 else
 {
  obj.style.display='block';
 }
}
window.onload=function()
{
 var olink=document.getElementById("link");
 var odiv=document.getElementById("thediv");
 olink.onclick=function()
 {
  Show_Hidden(odiv);
  return false;
 }


$(' #link').click(function(){
    if( $('#ssdd').css('display') =='block'){
        $('#ssdd').hide();
        $('#ssd').show();
    }else{
        $('#ssdd').show();
        $('#ssd').hide();
        return false;
    }
});
  }

