const elem1 = document.getElementById('inputid1')
const btn1 = document.getElementById('buttonid1')
const elem2 = document.getElementById('inputid2')
const btn2 = document.getElementById('buttonid2')
const elem3 = document.getElementById('inputid3')
const btn3 = document.getElementById('buttonid3')

btn1.addEventListener('click', function(){
const inputvalue = elem1.value
console.log(inputvalue)
});

elem2.addEventListener('keypress', function(event){
    console.log(event.target)
});

btn3.addEventListener('mouseover', function(){
    btn3.textContent = 'dont click me'
});

btn3.addEventListener('mouseout', function(){
    btn3.textContent = 'click me'
})


const list = document.getElementById('listid');

list.addEventListener('click', function(e) {
    if(e.target.tagName === 'LI'){
        alert(e.target.textContent)
    }
})

let timeout;
window.addEventListener('scroll', function(){
    clearTimeout(timeout)
    timeout = this.setTimeout(function(){
        console.log('debouncing');
    },3000)
})
