  $('.cross-start').hide();
  $('.cross-mail').hide();
  $('.mailid').hide();
  $('.form').hide();
$(document).ready(function(){
  $('.bars, .item').click(function(){
    $('.bar2').toggleClass('bar1-ac')
    $('.bar1').toggleClass('bar2-ac')
    $('.bar3').toggleClass('bar3-ac')
    $('.menu').toggleClass('menu-ac')
    $('.bar-name').toggleClass('bar-name-ac')
  })
  $('.block-butt').hover(function(){
    $('.ar-right1').toggleClass('ar-right-ac')
  })
  $('.gci-butt').hover(function(){
    $('.ar-right2').toggleClass('ar-right-ac')
  })
  $('.it1').click(function(){
			$('body, html').animate({scrollTop:$('.land').offset().top}, 1000)
	})
  $('.it2').click(function(){
			$('body, html').animate({scrollTop:$('.about').offset().top}, 1000)
	})
  $('.it3').click(function(){
			$('body, html').animate({scrollTop:$('.works').offset().top}, 1000)
	})
  $('.it4').click(function(){
			$('body, html').animate({scrollTop:$('.contact').offset().top}, 1000)
	})
  $('.email-butt').click(function(){
    $('.email').addClass('email-ac')
    $('.mailid').show(700);
    $('.cross-mail').show(700);
    $('.project').hide(500);
    $('.email').removeClass('col-md-6');
    $('.email').removeClass('pointer');
    $('.email').addClass('col-md-12');
    $('.email-butt').hide();
  })
  $('.cross-mail').click(function(){
    $('.email').removeClass('email-ac')
    $('.mailid').hide(500);
    $('.email-butt').show();
    $('.cross-mail').hide(500);
    $('.project').show();
    $('.email').addClass('col-md-6');
    $('.email').addClass('pointer');
    $('.email').removeClass('col-md-12');
  })
  $('.start-butt').click(function(){
    $('.project').addClass('project-ac')
    // $('.mailid').show(700);
    $('.cross-start').show(700);
    $('.email').hide();
    $('.project').removeClass('col-md-6');
    $('.project').removeClass('pointer');
    $('.project').addClass('col-md-12');
    $('.start-butt').hide();
    $('.form').show(500);
    $('.email').addClass('delay')
  })
  $('.cross-start').click(function(){
    $('.project').removeClass('project-ac')
    // $('.mailid').hide(500);
    $('.start-butt').show();
    $('.cross-start').hide(500);
    $('.form').hide();
    $('.email').addClass('delay')
    $('.email').show();
    $('.project').addClass('col-md-6');
    $('.project').addClass('pointer');
    $('.project').removeClass('col-md-12');
  })
  $(window).scroll(function(){
    var x = $(window).scrollTop();
    console.log(x);
    $('.bar').addClass('black')
    $('.bar-name').addClass('black-text')
    if (x < 635) {
      $('.bar').removeClass('black')
      $('.bar-name').removeClass('black-text')
    }
    else if (x > 4120 && x < 4545) {
      $('.bar').removeClass('black')
      $('.bar-name').removeClass('black-text')
    }
  //  else if (x > 4545) {
    //  $('.bar').addClass('black')
      //$('.bar-name').addClass('black-text')
    //}
    else{
      $('.bar').addClass('black')
      $('.bar-name').addClass('black-text')
    }
  })


function Particles(){
this.colors = [
  '255, 255, 255',
  '255, 99, 71',
  '19, 19, 19'
]

this.blurry = true;
this.border = false;
this.minRadius = 10;
this.maxRadius = 35;
this.minOpacity = .005;
this.maxOpacity = .3;
this.minSpeed = .2;
this.maxSpeed = .7;
this.fps = 60;
this.numParticles = 75;
this.canvas = document.getElementById('canvas');
this.ctx = this.canvas.getContext('2d');
}


Particles.prototype.init = function(){
this.render();
this.createCircle();
}


Particles.prototype._rand = function(min, max){
return Math.random() * (max - min) + min;
}

Particles.prototype.render = function(){
var self = this,
    wHeight = $(window).height(),
    wWidth = $(window).width();

self.canvas.width = wWidth;
self.canvas.height = wHeight;

$(window).on('resize', self.render);
}

Particles.prototype.createCircle = function(){
var particle = [];

for (var i = 0; i < this.numParticles; i++) {
  var self = this,
      color = self.colors[~~(self._rand(0, self.colors.length))];

  particle[i] = {
    radius    : self._rand(self.minRadius, self.maxRadius),
    xPos      : self._rand(0, canvas.width),
    yPos      : self._rand(0, canvas.height),
    xVelocity : self._rand(self.minSpeed, self.maxSpeed),
    yVelocity : self._rand(self.minSpeed, self.maxSpeed),
    color     : 'rgba(' + color + ',' + self._rand(self.minOpacity, self.maxOpacity) + ')'
  }

  self.draw(particle, i);
}
self.animate(particle);
}

Particles.prototype.draw = function(particle, i){
var self = this,
    ctx = self.ctx;

if (self.blurry === true ) {
  var grd = ctx.createRadialGradient(particle[i].xPos, particle[i].yPos, particle[i].radius, particle[i].xPos, particle[i].yPos, particle[i].radius/1.25);

  grd.addColorStop(1.000, particle[i].color);
  grd.addColorStop(0.000, 'rgba(34, 34, 34, 0)');
  ctx.fillStyle = grd;
} else {
  ctx.fillStyle = particle[i].color;
}

if (self.border === true) {
  ctx.strokeStyle = '#fff';
  ctx.stroke();
}

ctx.beginPath();
ctx.arc(particle[i].xPos, particle[i].yPos, particle[i].radius, 0, 2 * Math.PI, false);
ctx.fill();
}

Particles.prototype.animate = function(particle){
var self = this,
        ctx = self.ctx;

setInterval(function(){
  self.clearCanvas();
  for (var i = 0; i < self.numParticles; i++) {
    particle[i].xPos += particle[i].xVelocity;
    particle[i].yPos -= particle[i].yVelocity;

    if (particle[i].xPos > self.canvas.width + particle[i].radius || particle[i].yPos > self.canvas.height + particle[i].radius) {
      self.resetParticle(particle, i);
    } else {
      self.draw(particle, i);
    }
  }
}, 1000/self.fps);
}

Particles.prototype.resetParticle = function(particle, i){
var self = this;

var random = self._rand(0, 1);

if (random > .5) {
  particle[i].xPos = -particle[i].radius;//left
  particle[i].yPos = self._rand(0, canvas.height);
} else {//bottom
  particle[i].xPos = self._rand(0, canvas.width);
  particle[i].yPos = canvas.height + particle[i].radius;
}
//redraw
self.draw(particle, i);
}

Particles.prototype.clearCanvas = function(){
this.ctx.clearRect(0, 0, canvas.width, canvas.height);
}

var particle = new Particles().init();
})
