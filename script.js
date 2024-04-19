//Method 1:By using on click button method 

// const countValue=document.getElementById('counter');

// const decrement=()=>{
//     let value=parseInt(countValue.innerText);
//     value=value-1;
//     countValue.innerText=value;
// };

// const increment=()=>{
//     let value=parseInt(countValue.innerText);
//     value=value+1;
//     countValue.innerText=value;
// };





//method 2: By using event listener 
const countValue = document.querySelector("#counter");

let incrementBtn = document.getElementById("btn+");
let decrementBtn = document.getElementById("btn-");

// this is the decrement function
dec = () => {
  let value = parseInt(countValue.innerText);
//   if(value>0){
    value = value - 1;
  countValue.innerText=value;
//   }
//   else
//   {
//     let msg=document.querySelector('#msg');
//     msg.textContent='Cannot decrement beyond 0';
//       document.appendChild(msg);
// }
};    

// now we will add event listener on the decrement btn and increment button
decrementBtn.addEventListener('click',dec);
// this is the increment  function
inc=()=>{
    //get the value from UI
    let value=parseInt(countValue.innerText);
    // update the value 
    value=value+1;
    // set the value onto UI 
    countValue.innerText=value;
};

incrementBtn.addEventListener('click',inc);

