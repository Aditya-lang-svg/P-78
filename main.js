var images=["https://thumbs.dreamstime.com/z/illustration-cartoon-father-carrying-son-his-arms-cartoon-father-carrying-son-his-arms-145730921.jpg","https://www.pngitem.com/pimgs/m/120-1203252_clip-art-mom-png-for-mother-cartoon-png.png","https://us.123rf.com/450wm/yupiramos/yupiramos1905/yupiramos190505227/122760736-little-girl-avatar-character-vector-illustration-design.jpg?ver=6","https://thumbs.dreamstime.com/b/boy-stands-confident-pose-cartoon-character-man-women-girl-125448403.jpg","https://images-na.ssl-images-amazon.com/images/I/61zTGIEvQoL.jpg"];
var names=["Father","Mother","Sister","Myself","Family Book"];
var i=0;
function nextSlide(){
  document.getElementById("image1").src=images[i];
  document.getElementById("family_member_name").innerHTML=names[i];
 i++;
  if(i == 5){
   i=0;
 }

}
