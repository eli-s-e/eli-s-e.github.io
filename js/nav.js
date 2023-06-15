function run() {
  window.addEventListener('scroll', function(event)
  {
    colourChange();
  });
}

/*function loadTitle(){
  var titles = document.getElementsByClassName('title');
  for(var i = 0; i < titles.length; i++){
    const box = titles[i].getBoundingClientRect();
    if(box.bottom <= ((window.innerHeight || document.documentElement.clientHeight))){
      document.getElementById(titles[i].id).add('active');
      break;
}*/

function colourChange(){
  //something like this except is checks whether any blue or "inverted" section is coming up and performs this if so
  var sections = document.getElementsByClassName('inverted');
  for(var i = 0; i < sections.length; i++){
    const box = sections[i].getBoundingClientRect();
    if(((box.top + box.bottom) / 2) > 0 && ((box.top + box.bottom) / 2) <= ((window.innerHeight || document.documentElement.clientHeight))){
      document.body.classList.add('invert');
      break;
    } else{
      document.body.classList.remove('invert');
    }
  }
}

function hoverImage(item){
  var image = document.getElementById(item.nextElementSibling.id);
  document.addEventListener('mousemove', function(e){
    var x = e.clientX;
    var y = e.clientY;
    image.style.left = x + "px";
    image.style.top = y + "px";
  });
}
