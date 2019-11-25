
// CONVERSOR DE TEMPERATURA: LINHA 250



function tempLoad () {
    let temp = document.getElementById('temp');
    temp.innerHTML = "&#xf2cb;";
    
    setTimeout(function(){
      temp.innerHTML = "&#xf2ca;";
    }, 1000);
    setTimeout(function(){
      temp.innerHTML = "&#xf2c9;";
    }, 2000);
    setTimeout(function(){
      temp.innerHTML = "&#xf2c8;";
    }, 3000);
    setTimeout(function(){
      temp.innerHTML = "&#xf2c7;";
    }, 4000);
    
  }
   
  tempLoad();
  
  setInterval(tempLoad, 5000);
  
  

// Calculo de peso
function formPeso() {
  var mas = parseFloat(document.getElementById('forM').value);
  var ace = parseFloat(document.getElementById('forA').value);
  var pes = parseFloat(document.getElementById('forP').value);
  
  if(mas >0 && ace > 0){
    
    document.getElementById('forP').value = (mas*ace).toFixed(2);
    document.getElementById('forM').value = null;
    document.getElementById('forA').value = null;
  }else if(mas>0&&pes>0){
    
    document.getElementById('forA').value = (pes/mas).toFixed(2);
    document.getElementById('forM').value = null;
    document.getElementById('forP').value = null;
  }else if(ace>0&&pes>0){
    
    document.getElementById('forM').value = (pes/ace).toFixed(2);
    document.getElementById('forP').value = null;
    document.getElementById('forA').value = null;
  }


//Calculo de Velocidade
}
function formVeloc(){
  var dis = parseFloat(document.getElementById('forD').value);
  var tem = parseFloat(document.getElementById('forT').value);
  var vel = parseFloat(document.getElementById('forV').value);
  
  if(dis >0 && tem > 0){
    
    document.getElementById('forV').value = (dis/tem).toFixed(2);
    document.getElementById('forD').value = null;
    document.getElementById('forT').value = null;
  }else if(dis>0&&vel>0){
    
    document.getElementById('forT').value = (dis/vel).toFixed(2);
    document.getElementById('forD').value = null;
    document.getElementById('forV').value = null;
  }else if(tem>0&&vel>0){
    
    document.getElementById('forD').value = (vel*tem).toFixed(2);
    document.getElementById('forT').value = null;
    document.getElementById('forV').value = null;
  }



  // Calculo de aceleração
}
function formAcel(){
  var vaDv = parseFloat(document.getElementById('forVDV').value);
  var tem = parseFloat(document.getElementById('forT2').value);
  var ace = parseFloat(document.getElementById('forA2').value);
  
  if(vaDv >0 && tem > 0){
    //console.log(vaDv/tem)
    document.getElementById('forA2').value = (vaDv/tem).toFixed(2);
    document.getElementById('forVDV').value = null;
    document.getElementById('forT2').value = null;
    
  }else if(vaDv>0&&ace>0){
    
    document.getElementById('forT2').value = (vaDv/ace).toFixed(2);
    document.getElementById('forA2').value = null;
    document.getElementById('forVDV').value = null;
  }else if(tem>0&&ace>0){
    
    document.getElementById('forVDV').value = (ace*tem).toFixed(2);
    document.getElementById('forT2').value = null;
    document.getElementById('forA2').value = null;
  }

}



// Fromula de Gauss
function formGrauss(){
  var p = (document.getElementById('forPO').value);
  var pL = (document.getElementById('forPL').value);
  var f = (document.getElementById('forFO').value);
 
  if(p != 0 && pL != 0){
    if(p<0){
      alert("Os calculos tornam inviavel a distancia entre o espelho e o objeto");
      document.getElementById('forPL').value = null;
      document.getElementById('forFO').value = null;
      document.getElementById('forPO').value = null;
    }else{
      document.getElementById('forFO').value = (1/((1/p)+(1/pL))).toFixed(2);
      document.getElementById('forPL').value = null;
      document.getElementById('forPO').value = null;
    }
  }else if (f != 0 && p != 0){
    if(p<0){
      alert("Os calculos tornam inviavel a distancia entre o espelho e o objeto");
      document.getElementById('forPL').value = null;
      document.getElementById('forFO').value = null;
      document.getElementById('forPO').value = null;
    }else{
      pL = (1/((1/f)-(1/p))).toFixed(2);
      document.getElementById('forPL').value = pL;
      document.getElementById('forFO').value = null;
      document.getElementById('forPO').value = null;
    }
    
  }else if(f != 0 && pL != 0){
    if(p<0){
      alert("Os calculos tornam inviavel a distancia entre o espelho e o objeto");
      document.getElementById('forPL').value = null;
      document.getElementById('forFO').value = null;
      document.getElementById('forPO').value = null;
    }else{
      document.getElementById('forPO').value = (1/((1/f)-(1/pL))).toFixed(2);
      document.getElementById('forFO').value = null;
      document.getElementById('forPL').value = null;
    }
   
  }
  if(pL>0){
    document.getElementById('tiIm').innerHTML = "Imagem Real(Fora do Espelho)";
   }else if(pL<0) {
    document.getElementById('tiIm').innerHTML = "Imagem Virtual(Dentro do Espelho)";
   }



}



// Calculo de aumento linear
function auLinear(){
  var i = (document.getElementById('forI').value);
  var o = (document.getElementById('forO').value);
  var a = (document.getElementById('forAu').value);

  if(i != 0 && o != 0){

    document.getElementById('forAu').value = (i/o).toFixed(2);
    document.getElementById('forI').value = null;
    document.getElementById('forO').value = null;
    
  }else if(a!=0&&i!=0){
    
    document.getElementById('forO').value = (i/a).toFixed(2);
    document.getElementById('forAu').value = null;
    document.getElementById('forI').value = null;
  }else if(a!=0&&o!=00){
    
    document.getElementById('forI').value = (a/o).toFixed(2);
    document.getElementById('forAu').value = null;
    document.getElementById('forO').value = null;
  }
}


// Calculo de aumento linear ( outra versão )

function auLinear2(){
  var pl = (document.getElementById('forPL2').value);
  var p = (document.getElementById('forPO2').value);
  var a = (document.getElementById('forAu2').value);

  if(pl != 0 && p != 0){

    document.getElementById('forAu2').value = (-pl/p).toFixed(2);
    document.getElementById('forPL2').value = null;
    document.getElementById('forPO2').value = null;
    
  }else if(a!=0&&pl!=0){
    
    document.getElementById('forPO2').value = (-pl/a).toFixed(2);
    document.getElementById('forAu2').value = null;
    document.getElementById('forPL2').value = null;
  }else if(a!=00&&p!=00){
    
    document.getElementById('forPL2').value = (-1*(a/p)).toFixed(2);
    document.getElementById('forAu2').value = null;
    document.getElementById('forPO2').value = null;
  }
}


// Calculo de aumento linear ( mais uma versão )
function auLinear3(){
  var pl = (document.getElementById('forPL3').value);
  var p = (document.getElementById('forPO3').value);
  var i = (document.getElementById('forI2').value);
  var o = (document.getElementById('forO2').value);
  if(pl != 0 && p != 0 && i != 0){

    document.getElementById('forO2').value = (i/(-pl/p)).toFixed(2);
    document.getElementById('forPL3').value = null;
    document.getElementById('forPO3').value = null;
    document.getElementById('forI2').value = null;
    
  }else if(pl != 0 && p != 0 && o != 0){
    
    document.getElementById('forI2').value = ((-pl/p)*o).toFixed(2);
    document.getElementById('forPL3').value = null;
    document.getElementById('forPO3').value = null;
    document.getElementById('forO2').value = null;
  }else if(o != 0 && p != 0 && i != 0){
    
    document.getElementById('forPL3').value = (((i/o)*p)*-1).toFixed(2);
    document.getElementById('forO2').value = null;
    document.getElementById('forPO3').value = null;
    document.getElementById('forI2').value = null;
  }else if(pl != 0 && o != 0 && i != 0){
    
    document.getElementById('forPO3').value = (-pl/(i/o)).toFixed(2);
    document.getElementById('forPL3').value = null;
    document.getElementById('forO2').value = null;
    document.getElementById('forI2').value = null;
  }
}





// Conversor de Fahrenheit para Celsius e Kelvin. 
document.getElementById('farInput').addEventListener('input', function(e) {
  
   
  var far = e.target.value;
  
    var a = ((5/9)*((far*1)-32)).toFixed(2);
    var b = ((5/9)*((far*1)+459.67)).toFixed(2);
    if(far < -459.40){
      alert("valor inesistente");
      //document.getElementById('farInput').value = 0;
    }else{
      if(isNaN(a) && far !="-" && far != "+"){
        //console.log(far);
  
        alert("Caracter não reconhecivel");
      }else{
        document.getElementById('farToCel').innerHTML = a;
        document.getElementById('farToKel').innerHTML = b;
      }
    }
});




// Conversor de Celsius para Fahrenheit e Kelvin
document.getElementById('celInput').addEventListener('input', function(e) {
  

  var cel = e.target.value;
  var a = ( (cel*1.8) + 32).toFixed(2);
  var b = ( (cel*1) + 273.15).toFixed(2);

  if(cel < -273.15){
    alert("valor inesistente");
    //document.getElementById('farInput').value = 0;
  }else{
    if(isNaN(a) && cel !="-" && cel != "+"){
      //console.log(cel);

      alert("Caracter não reconhecivel");
    }else{
      document.getElementById('celToFar').innerHTML = a;
      document.getElementById('celToKel').innerHTML = b;
    }
  }
  
  
});




// Conversor de Kelvin para Fahrenheit e Celsius
document.getElementById('kelInput').addEventListener('input', function(e) {
  

  var kel = e.target.value;
  var a = ( 1.8*((kel*1)-273) + 32).toFixed(2);
  var b = ((kel*1)-273.15).toFixed(2);

  if(kel < 0){
    alert("valor inesistente");
    //document.getElementById('farInput').value = 0;
  }else{
    if(isNaN(a) && kel !="-" && kel != "+"){
      //console.log(kel);

      alert("Caracter não reconhecivel");
    }else{
      document.getElementById('kelToFar').innerHTML = a;
      document.getElementById('kelToCel').innerHTML = b;
    }
  }
  
  
});
///////////////////////////////////////////////////





  var xmlns = "http://www.w3.org/2000/svg",
  xlinkns = "http://www.w3.org/1999/xlink",
  select = function(s) {
    return document.querySelector(s);
  },
  selectAll = function(s) {
    return document.querySelectorAll(s);
  },
    liquid = selectAll('.liquid'),
    tubeShine = select('.tubeShine'),
    label = select('.label'),
    follower = select('.follower'),
    dragger = select('.dragger'),
    dragTip = select('.dragTip'),
    minDragY = -380,
    liquidId = 0,
    step = Math.abs(minDragY/100),
    snap = Math.abs(minDragY/10),
    followerVY = 0
  

TweenMax.set('svg', {
  visibility: 'visible'
})

TweenMax.set(dragTip, {
 transformOrigin:'20% 50%'
})

var tl = new TimelineMax()
tl.staggerTo(liquid, 0.7, {
 x:'-=200',
 ease:Linear.easeNone,
 repeat:-1
},0.9)

tl.time(100);

document.addEventListener("touchmove", function(event){
    event.preventDefault();
});
Draggable.create(dragger, {
 type:'y',
 bounds:{minY:minDragY, maxY:0},
 onDrag:onUpdate,
 throwProps:true,
 throwResistance:2300,
 onThrowUpdate:onUpdate,
 overshootTolerance:0,
 snap:function(value){
  //Use this to snap the values to steps of 10
  //return Math.round(value/snap) * snap
 }
})

function onUpdate(){
 liquidId = Math.abs(Math.round(dragger._gsTransform.y/step));

 label.textContent = liquidId + '°';
 TweenMax.to(liquid, 1.3, {
  y:dragger._gsTransform.y*1.12,
  ease:Elastic.easeOut.config(1,0.4)
 })
 
}

TweenMax.to(follower, 1, {
 y:'+=0',
 repeat:-1,
 modifiers:{
  y:function(y, count){
  followerVY += (dragger._gsTransform.y - follower._gsTransform.y) * 0.23;
   followerVY *= 0.69;
   return follower._gsTransform.y + followerVY; 
  }
 }
})

TweenMax.to(dragTip, 1, {
 rotation:'+=0',
 repeat:-1,
 modifiers:{
  rotation:function(rotation, count){
   return rotation-followerVY
  }
 }
})

TweenMax.to(label, 1, {
 y:'+=0',
 repeat:-1,
 modifiers:{
  y:function(y, count){
   return y-followerVY * 0.5
  }
 }
})


TweenMax.to(dragger, 1.4, {
 y:minDragY/2,
 onUpdate:onUpdate,
 ease:Expo.easeInOut
})



