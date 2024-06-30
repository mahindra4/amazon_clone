const imgs = document.querySelectorAll('.header-slider ul img');
const prev_btn = document.querySelector('.control-prev');
const next_btn = document.querySelector('.control-next');

let n = 0,len = imgs.length;
function change_slide(){
    for(let i=0;i<len;i++){
        imgs[i].style.display = "none";
    }
    imgs[n].style.display = "block";
}
change_slide();
prev_btn.addEventListener('click',(e) => {
    n = (n-1+len)%len;
    change_slide();
})
next_btn.addEventListener('click', (e) => {
    n = (n+1)%len;
    change_slide();
})

const scrollContainer = document.querySelectorAll('.products');
for(const item of scrollContainer){
    item.addEventListener('wheel',(e) => {
        e.preventDefault();
        item.scrollLeft += e.deltaY;
    })
}