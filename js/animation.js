let value1 = document.getElementById('v1')
let value2 = document.getElementById('v2')
let value3 = document.getElementById('v3')
let value4 = document.getElementById('v4')

function countTo(number, value) {
    let count = 0

    setInterval(function() {
        if(count < number) count++
        value.textContent = count + '%'
    },18)
};

function elementInViewport (el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
var elementsToAnimate = Array.from(document.getElementsByClassName('skills__value'))
window.addEventListener('scroll', function(){
    setTimeout(function(){
        elementsToAnimate.map(element => {
            if(elementInViewport(element) && element.hasAttribute('animate')){
                element.removeAttribute('animate')
                countTo(element.dataset.count, element)
                element.parentNode.querySelector('svg').classList.add('animate')
            }
        })
    },100)
})
