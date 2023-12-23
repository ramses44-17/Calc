const affBtn = document.querySelectorAll(".affBtn");
const AC = document.querySelector("#AC");
const equal = document.querySelector("#equal");
const display = document.querySelector(".display");
const remove = document.querySelector('#delete');
const pi = document.querySelector('#pi')
const exp = document.querySelector('#exp')
const log = document.querySelector('#log')
const ln = document.querySelector('#ln')
const square = document.querySelector('#square')
const sin = document.querySelector('#sin')
const tan = document.querySelector('#tan')
const cos = document.querySelector('#cos')
const rad = document.querySelector('#rad')
const deg = document.querySelector('#deg')
const grad = document.querySelector('#grad')





rad.addEventListener('change',()=>{
    if (rad.checked) {
        sin.addEventListener('click',()=>{
            display.value = Math.sin(eval(display.value))
        })
        cos.addEventListener('click',()=>{
            display.value = Math.cos(eval(display.value))
        })
        tan.addEventListener('click',()=>{
            display.value = Math.tan(eval(display.value))
        })
    }
})

deg.addEventListener('change',()=>{
    if (deg.checked) {
        sin.addEventListener('click',()=>{
            display.value = Math.sin((eval(display.value)*Math.PI)/180)
        })
        cos.addEventListener('click',()=>{
            display.value = Math.cos((eval(display.value)*Math.PI)/180)
        })
        tan.addEventListener('click',()=>{
            display.value = Math.tan((eval(display.value)*Math.PI)/180)
        })
    }
})

grad.addEventListener('change',()=>{
    if (grad.checked) {
        sin.addEventListener('click',()=>{
            display.value = Math.sin((eval(display.value)*Math.PI)/200)
        })
        cos.addEventListener('click',()=>{
            display.value = Math.cos((eval(display.value)*Math.PI)/200)
        })
        tan.addEventListener('click',()=>{
            display.value = Math.tan((eval(display.value)*Math.PI)/200)
        })
    }
})

// bouton d'affichage
affBtn.forEach((b) => {
  b.addEventListener("click", () => {
    display.value += b.innerHTML;
  });
});


equal.addEventListener('click',() =>{
    try {
            display.value = eval(display.value)
            if(display.value == Infinity){
            display.value = "error: divide by zero"
        }else if (display.value === 'undefined'){
            display.value = 'syntax error'
        }
    } catch (e) {
        display.value = "syntax error"
    }
    
})

AC.addEventListener('click',()=>{
    display.value = ''
})

remove.addEventListener('click',()=>{
    display.value = display.value.slice(0,-1)
})


pi.addEventListener('click',()=>{
    display.value = Math.PI
})


exp.addEventListener('click',()=>{
        if (display.value == '') {
        display.value = Math.E
    }else{
        display.value = Math.exp(eval(display.value))
    }
    
})
log.addEventListener('click',()=>{
        if (display.value == ''|| display.value == 0 || Number(display.value) < 0) {
        display.value = 'not defined'
    }else{
        display.value = Math.log10(eval(display.value))
    }
})
ln.addEventListener('click',()=>{
    if (display.value == ''|| display.value == 0 || Number(display.value) < 0) {
        display.value = 'not defined'
    }else{
        display.value = Math.log(eval(display.value))
    }
})

// bug à corriger
square.addEventListener('click',()=>{
    if(display.value == ''){
        display.value = ''
    }else{
        display.value = eval(display.value)**2
    }
})

const facto = document.querySelector('#fact').addEventListener('click',()=>{
    try {
       if(Number(eval(display.value))< 0){
        display.value = 'not defined'
    }else{
        display.value = fact(eval(display.value))
    } 
    } catch (e) {
       display.value = 'syntax error' 
    }
})

function fact(n){
    let p = 1
    for(let i = 2;i <= n; i++){
        p *= i
    }
    return p
}
function inverse(n) {
    if (Number(n) === 0) {
        return 'error: divide by zero'
    }
    return 1/n
}
const inv = document.querySelector('#inv').addEventListener('click',()=>{
    try {
        if(display.value === ''){
        display.value = 'error divide by zero'
    }else{
        display.value = inverse(eval(display.value))
    }
    } catch (e) {
        display.value = 'syntax error'
    }
    
    
})

function sqrt(n) {
    if (Number(n) < 0) {
        return 'not defined'
    }
    return Math.sqrt(n)
}

const Sqrt = document.querySelector('#sqrt').addEventListener('click',()=>{
    try {
    if (display.value === '') {
        display.value = ''
    }else{
    display.value = sqrt(eval(display.value))
    }
        
    } catch (error) {
        display.value = 'syntax error'
    }
})









/*
console.log(math.lambertw(2));
console.log(fact(-1));
console.log(Math.pow(2,1/2));
console.log(math.evaluate('log(-2)').toString());
console.log(Math.sin(Math.PI));
console.log(math.evaluate('sin(2*PI)'));

// bibliotheque katex pour afficher sqrt
document.addEventListener("DOMContentLoaded", function() {
    const sqrt = document.querySelector('#sqrt')
    katex.render('\\quad sqrt(x)',sqrt)
  });
*/
