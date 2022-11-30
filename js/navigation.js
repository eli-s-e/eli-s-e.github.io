function run(){
  window.addEventListener('scroll', function(event)
  {
    var scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
    var scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;

    if((scrollTop + window.innerHeight) >= scrollHeight)
    {
      document.getElementById('end-marker').classList.add('active');
    }
    else{
      document.getElementById('end-marker').classList.remove('active');
    }

    colourChange();
    showTitle();
  });
}

function colourChange(){
  if(document.getElementById('my-work').getBoundingClientRect().top <= ((window.innerHeight || document.documentElement.clientHeight) - 100))
  {
    document.getElementById('main').classList.add('active');
  }
  else {
    document.getElementById('main').classList.remove('active');
  }
}

function showTitle(){
  if(document.getElementById('my-work-title').getBoundingClientRect().top <= ((window.innerHeight || document.documentElement.clientHeight) - 200)){
    document.getElementById('my-work-title').classList.add('active');
  }
}

function circleText() {
  new CircleType(document.getElementById('circletext'));
}

var footerInView = false;
function scrollToFooter(){
  if(!footerInView){
    window.scrollTo({
      top: document.body.scrollHeight,
      left: 0,
      behavior: 'smooth'
    });
    footerInView = true;
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
