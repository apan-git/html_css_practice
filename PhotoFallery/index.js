var div_class = document.querySelector(".gallery");
var img_url = "https://cdn.freecodecamp.org/curriculum/css-photo-gallery/";
text = "";
for (var i=1; i<10; i++){
    text += `<img src=${img_url}${i}.jpg alt=0000${i}>`
};
div_class.innerHTML=text;