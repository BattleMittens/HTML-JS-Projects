
const colorArray = [
  "#63b598", "#ce7d78", "#ea9e70", "#a48a9e", "#c6e1e8", "#648177" ,"#0d5ac1" ,
  "#f205e6" ,"#1c0365" ,"#14a9ad" ,"#4ca2f9" ,"#a4e43f" ,"#d298e2" ,"#6119d0",
  "#d2737d" ,"#c0a43c" ,"#f2510e" ,"#651be6" ,"#79806e" ,"#61da5e" ,"#cd2f00" ,
  "#9348af" ,"#01ac53" ,"#c5a4fb" ,"#996635","#b11573" ,"#4bb473" ,"#75d89e" ,
  "#2f3f94" ,"#2f7b99" ,"#da967d" ,"#34891f" ,"#b0d87b" ,"#ca4751" ,"#7e50a8" ,
  "#c4d647" ,"#e0eeb8" ,"#11dec1" ,"#289812" ,"#566ca0" ,"#ffdbe1" ,"#2f1179" ,
  "#935b6d" ,"#916988" ,"#513d98" ,"#aead3a", "#9e6d71", "#4b5bdc", "#0cd36d",
  "#250662", "#cb5bea", "#228916", "#ac3e1b", "#df514a", "#539397", "#880977",
  "#f697c1", "#ba96ce", "#679c9d", "#c6c42c", "#5d2c52", "#48b41b", "#e1cf3b",
  "#5be4f0", "#57c4d8", "#a4d17a", "#225b8", "#be608b", "#96b00c", "#088baf",
  "#f158bf", "#e145ba", "#ee91e3", "#05d371", "#5426e0", "#4834d0", "#802234",
  "#6749e8", "#0971f0", "#8fb413", "#b2b4f0", "#c3c89d", "#c9a941", "#41d158",
  "#fb21a3", "#51aed9", "#5bb32d", "#807fb", "#21538e", "#89d534", "#d36647",
  "#7fb411", "#0023b8", "#3b8c2a", "#986b53", "#f50422", "#983f7a", "#ea24a3",
  "#79352c", "#521250", "#c79ed2", "#d6dd92", "#e33e52", "#b2be57", "#fa06ec",
  "#1bb699", "#6b2e5f", "#64820f", "#1c271", "#21538e", "#89d534", "#d36647",
  "#7fb411", "#0023b8", "#3b8c2a", "#986b53", "#f50422", "#983f7a", "#ea24a3",
  "#79352c", "#521250", "#c79ed2", "#d6dd92", "#e33e52", "#b2be57", "#fa06ec",
  "#1bb699", "#6b2e5f", "#64820f", "#1c271", "#9cb64a", "#996c48", "#9ab9b7",
  "#06e052", "#e3a481", "#0eb621", "#fc458e", "#b2db15", "#aa226d", "#792ed8",
  "#73872a", "#520d3a", "#cefcb8", "#a5b3d9", "#7d1d85", "#c4fd57", "#f1ae16",
  "#8fe22a", "#ef6e3c", "#243eeb", "#1dc18", "#dd93fd", "#3f8473", "#e7dbce",
  "#421f79", "#7a3d93", "#635f6d", "#93f2d7", "#9b5c2a", "#15b9ee", "#0f5997",
  "#409188", "#911e20", "#1350ce", "#10e5b1", "#fff4d7", "#cb2582", "#ce00be",
  "#32d5d6", "#172320", "#608572", "#c79bc2", "#00f87c", "#77772a", "#6995ba",
  "#fc6b57", "#f07815", "#8fd883", "#060e27", "#96e591", "#21d52e", "#d00043",
  "#b47162", "#1ec227", "#4f0f6f", "#1d1d58", "#947002", "#bde052", "#e08c56",
  "#28fcfd", "#bb09bb", "#36486a", "#d02e29", "#1ae6db", "#3e464c", "#a84a8f",
  "#911e7e", "#3f16d9", "#0f525f", "#ac7c0a", "#b4c086", "#c9d730", "#30cc49",
  "#3d6751", "#fb4c03", "#640fc1", "#62c03e", "#d3493a", "#88aa0b", "#406df9",
  "#615af0", "#4be477", "#2a3434", "#4a543f", "#79bca0", "#a8b8d4", "#00efd4",
  "#7ad236", "#7260d8", "#1deaa7", "#06f43a", "#823c59", "#e3d94c", "#dc1c06",
  "#f53b2a", "#b46238", "#2dfff6", "#a82b89", "#1a8011", "#436a9f", "#1a806a",
  "#4cf09d", "#c188a2", "#67eb4b", "#b308d3", "#fc7e41", "#af3101", "#ff065",
  "#71b1f4", "#a2f8a5", "#e23dd0", "#d3486d", "#00f7f9", "#474893", "#3cec35",
  "#1c65cb", "#5d1d0c", "#2d7d2a", "#ff3420", "#5cdd87", "#a259a4", "#e4ac44",
  "#1bede6", "#8798a4", "#d7790f", "#b2c24f", "#de73c2", "#d70a9c", "#25b67",
  "#88e9b8", "#c2b0e2", "#86e98f", "#ae90e2", "#1a806b", "#436a9e", "#0ec0ff",
  "#f812b3", "#b17fc9", "#8d6c2f", "#d3277a", "#2ca1ae", "#9685eb", "#8a96c6",
  "#dba2e6", "#76fc1b", "#608fa4", "#20f6ba", "#07d7f6", "#dce77a", "#77ecca"
  ];
  
const canvas = document.querySelector('canvas')
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');

let particleNum = 7;
let particleSize = 3;
let spawnRate = 5;

//currently doesn't adjust if fullscreened
window.addEventListener('resize', () =>
{
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

window.addEventListener("keydown", (event) =>
{
  let x = event.key;

  if (x == "k" || x == "K") 
  { 
      particleNum = prompt("Plese enter the number of firework particles!", "7");
  }

  if (x == 'm' || x == 'M')
  {
    particleSize = prompt("Plese enter the size of firework particles!", "3");
  }

  if(x == '=' || x == '+')
  {
    spawnRate--;
  }

  if(x == '-' || x == '_')
  {
    spawnRate++;
  }
});

//Same as animation frame, but manually input in terms of ms
//setInterval(draw, 1000 / 60);

// 3/4height <= y <= 15/16height -> x% chance of explosion.
// 15/16height < y -> explode



// 1) formal definition "newer style"
// class Firework
// {
//   constructor(x, y)
//   {
//     this.x = x;
//     this.y = y;
//   }
//
//   asdf(var, var)
//   {
//      // code
//   }
// }
// fireworks.push(new Firework(20, 20));
// fireworks[0].y

// 2)


// fireworks[0].y

// 3)
// function Firework(x, y)
// {
//   this.x = x;
//   this.y = y;
//   this.asdf = () =>
//   {
//     // code
//   }
// }
// fireworks.push(new Firework(20, 20));

const fireworks = [];
const explosions = [];
let counter = 0;
const speed = 4;
//added size decrease for the fireworks
const sizeDecrease = 0.015;
const velMult = 4;
const velDecrement = 1.05;

// function noNeg(a, b)
// {
//   if(a < b)
//     return 0;
//   else
//     return a;
// }

function randomColor()
{
  return colorArray[Math.floor(Math.random() * colorArray.length)];
}

function explode(i, s, p)
{
  let clr = randomColor();
  //everything based on inscritption and centering, 2 and 4 treated differently on a unit circle, so centered different
  if(p%4 === 0)
  {
    for(let j = 0; j < p; j++)
      explosions.push(
        {
          x: fireworks[i].x, 
          y: fireworks[i].y, 
          size: s, 
          xVel: Math.cos((2*Math.PI*j)/p)*velMult, 
          yVel: -Math.sin((2*Math.PI*j)/p)*velMult - speed, 
          color: clr, 
          lifetime: 0
        });
  
  fireworks.splice(i, 1);
  }
  else if(p%2 === 0)
  {
    for(let j = 0; j < p; j++)
      explosions.push(
        {
          x: fireworks[i].x, 
          y: fireworks[i].y, 
          size: s, 
          xVel: Math.cos((2*Math.PI*j)/p + (1/p)*Math.PI)*velMult, 
          yVel: (-Math.sin((2*Math.PI*j)/p + (1/p)*Math.PI))*velMult - speed, 
          color: clr, 
          lifetime: 0
        });
  
  fireworks.splice(i, 1);
  }
  else if((p-1)%4 === 0)
  {
    for(let j = 0; j < p; j++)
    explosions.push(
      {
        x: fireworks[i].x, 
        y: fireworks[i].y, 
        size: s, 
        xVel: Math.cos((2*Math.PI*j)/p + 1/(2*p)*Math.PI)*velMult, 
        yVel: (-Math.sin((2*Math.PI*j)/p + 1/(2*p)*Math.PI))*velMult - speed, 
        color: clr, 
        lifetime: 0
      });
  
  fireworks.splice(i, 1);
  }
  else
  {
    for(let j = 0; j < p; j++)
    explosions.push(
      {
        x: fireworks[i].x, 
        y: fireworks[i].y, 
        size: s, 
        xVel: Math.cos((2*Math.PI*j)/p - 1/(2*p)*Math.PI)*velMult, 
        yVel: (-Math.sin((2*Math.PI*j)/p - 1/(2*p)*Math.PI))*velMult - speed, 
        color: clr, 
        lifetime: 0
      });
  
  fireworks.splice(i, 1);
  }

}

function variance(a)
  { // value between a-(1/2 * a) and a+(1/2 * a)
    let x = Math.floor(Math.random() * 2.99999);
    if(Math.random() * 2 < 1)
    {
      x = -x;
    }
    return a - x;
  };

  function varianceSize(a)
  { // value between a-(1/2 * a) and a+(1/2 * a)
    let x = Math.random() * 1;
    if(Math.random() * 2 < 1)
    {
      x = -x;
    }
    return a - x;
  };

function draw()
{
  //makes the function draw based on ideal for browser, normally 60fps
  //fake recursion without killing stack
  requestAnimationFrame(draw);

  counter += 1;

  //background created
  ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
  ctx.fillRect(0,0,window.innerWidth,window.innerHeight);

  //don't go below 0.2 on opactiy with vanablack, leaves a line behind
  // ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
  // ctx.fillRect(0,0,window.innerWidth,window.innerHeight);
  //12 a second
  if(counter % spawnRate === 0)
  {  
    fireworks.push({ x: Math.random() * window.innerWidth, y: window.innerHeight+10, size: 4.5, color: randomColor()}); // Math.random() * win width
  }


  
  //where the first param is the firework, forEach is a function of the array, which uses a function passing the item (object / function) and the index of it
  for(let j = 0; j < fireworks.length; j++)
  {
    if(fireworks[j].y < window.innerHeight*(1/16)) 
    {
      // 2 +- 1/2(2)
      explode(j, varianceSize(particleSize), variance(particleNum));
      j--;
    }
    else if(fireworks[j].y < window.innerHeight*(1/2) && Math.random() >= .975)
    {
      explode(j, varianceSize(particleSize), variance(particleNum));
      j--;
    }
    else
    {
      fireworks[j].y -= speed;
      fireworks[j].size -= sizeDecrease;
      ctx.fillStyle = fireworks[j].color;
      // ctx.fillRect(fireworks[j].x, fireworks[j].y, 50, 50);
      
      if(fireworks[j].size > 0)
      {
        ctx.beginPath();
        //creating circles
        ctx.ellipse(fireworks[j].x, fireworks[j].y, fireworks[j].size, fireworks[j].size, 0, 0, Math.PI * 2, false);
        ctx.fill();
      }
    }
  }

  for(let j = 0; j < explosions.length; j++)
  {
    //in terms of seconds
    if(explosions[j].lifetime > (60*1.3))
    {
      explosions.splice(j, 1);
      j--;
    }
    else
    {
      explosions[j].x += explosions[j].xVel;
      explosions[j].y += explosions[j].yVel;
      explosions[j].xVel /= velDecrement;
      explosions[j].yVel /= velDecrement;
      explosions[j].lifetime += 1;

      ctx.fillStyle = explosions[j].color;

      ctx.beginPath();
      ctx.ellipse(explosions[j].x, explosions[j].y, explosions[j].size, explosions[j].size, 0, 0, Math.PI*2, false);
      ctx.fill();
    }
  }

  // Example of how it works lmao
  // (Pretend it's in the Array class & this.items are the variables)
  // function forEach(callback)
  // {
  //   for(let i = 0; i < this.items.length; i++)
  //   {
  //     callback(this.items[i], i);
  //   }
  // }

  // ctx.fillStyle = 'aqua';
  // ctx.beginPath();
  // ctx.ellipse(x, y, 50, 50, 0, 0, Math.PI * 2, false);
  // ctx.fill();

  // x +=speed;
  // y +=speed;
}

draw();
//when clearing canvas use 10% opacity for cool effect - Corns
