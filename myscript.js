var arrImages = document.getElementsByTagName("img");
for(var i = 0; i < arrImages.length; i++)
{
   arrImages[i].style.cursor = 'hand';
   arrImages[i].onmouseover = function() {
      this.style.background = '#333333';
   }
   arrImages[i].onmouseout = function() {
      this.style.background = '#ffffff';
   }
}