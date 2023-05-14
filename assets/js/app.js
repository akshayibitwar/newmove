let  cl = console.log;
// for Event Bindning

const btn = document.getElementById('btn');
const box = document.getElementById('box');
let flag = true;
//const onclickHandler = () => {
    //cl(this)  
   // if(flag === true){
      //  box.classList.add('d-none')
      //  flag = false;
        //btn.innerHTML = "Show Box"
    //    this.innerHTML = "Show Box";
   // }else{
    //    box.classList.remove('d-none')
    //    flag = true;
       // btn.innerHTML = "Hide Box"
     //  this.innerHTML = "Hide Box";
  //  }
//}

//for binding Event addEventListener('event', callbackfunction)

const onclickHandler = (e) => {
    cl(e.target)
    if(flag === true){
        box?.classList.add('d-none');
        flag = false;
        e.target.innerHTML = "Show Box";
    }else{
        box?.classList.remove('d-none');
        flag = true;
        e.target.innerHTML = "Hide Box";
    }
}


btn?.addEventListener('click', onclickHandler);

// >>>MouseOver & MouseOut Event

const box1 = document.getElementById("box1");

const onMouseOver = (eve) => {
    cl(eve.target)
    eve.target.style.backgroundColor = "yellowgreen";
    eve.target.style.borderRadius = "50%";
}

const onMouseOut = (eve) => {
    let box = eve.target;
    box.style.backgroundColor = "blueviolet";
    box.style.borderRadius = "0%";

}

box1?.addEventListener('mouseover',onMouseOver)
box1?.addEventListener("mouseout", onMouseOut)

let img1 = `https://images.unsplash.com/photo-1420582282039-a6d11404cb66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8b3V0ZG9vcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60`

let img2 = `https://images.unsplash.com/photo-1445108771252-d1cc31a02a3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8b3V0ZG9vcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60`

const natureImg = document.getElementById("natureImg");

const onImgOverHandler = (eve) => {
    let img = eve.target.getAttribute("src");
    //cl(img);
    eve.target.setAttribute('src', img2)
}

const onImgMouseOut = (eve) => {
    eve.target.setAttribute('src', img1)
}

const onMouseMove = (eve) => {
   // cl(eve)
   // cl(eve.offsetX)
   // cl(eve.offsetY)
   eve.target.style.backgroundColor = `rgb(255, ${eve.offsetX}, ${eve.offsetY})`
}

natureImg.addEventListener("mouseover", onImgOverHandler)
natureImg.addEventListener("mouseout", onImgMouseOut)
box2.addEventListener("mousemove", onMouseMove)


//==========================================assisment -II====================================

const onMouseMove1 = (eve) => {
    eve.target.style.backgroundColor =`rgb(240, ${eve.offsetX}, ${eve.offsetY})`
}


box3.addEventListener("mouseover", onMouseMove1)