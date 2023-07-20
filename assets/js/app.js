let text = document.getElementById('text')
let bird1 = document.getElementById('bird1')
let bird2 = document.getElementById('bird2')
let btn = document.getElementById('btn')
let rocks = document.getElementById('rocks')
let forest = document.getElementById('forest');
let header = document.getElementById('header');

window.addEventListener('scroll',function(){
    let value =window.scrollY
    // console.log(value)
    text.style.top = 50+ value * -.1 + '%';

    bird1.style.top = value * -1.5 + 'px';
    bird1.style.left = value * -3 + 'px';
    
    bird2.style.top = value * -1.5 + 'px';
    bird2.style.left = value * 3 + 'px';

    btn.style.marginTop = value * 1.5 + 'px'
    
    rocks.style.top = value * -.12 + 'px';

    forest.style.top = value * .25 + 'px';

    header.style.top = value * .5 + 'px';
})