const imgs = document.querySelectorAll('.header-slider ul img');
const prev_button = document.querySelector('.control-prev');
const next_button = document.querySelector('.control-next');

let n = 1;

function changeSlide(){  
    console.log('inside change slide');
    for(let i = 0; i < imgs.length; i++){
        imgs[i].style.display='none';
    }
    console.log(n);
    imgs[n].style.display='block';
};
changeSlide();


console.log('Prev_button');
console.log(prev_button);
prev_button.addEventListener('click', (e)=>{

    console.log('Inside prev event listener');
    if(n > 0){
        console.log('if');
        n--;
    }
    else{
        console.log('else');
        n = imgs.length-1;
    }
    
    changeSlide();

});

next_button.addEventListener('click', (e)=>{
    if(n < imgs.length-1){
        n++;
    }
    else{
        n=0;
    }
    changeSlide();
});

const scrollContainer = document.querySelectorAll('.products');
for(const item of scrollContainer){
    item.addEventListener('wheel', (evt)=>{
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;
    })
}
