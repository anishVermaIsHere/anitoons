import { anitoons} from "./data.js";

const cartoonSlider = document.querySelector('#cartoon-slider');
const animeSlider = document.querySelector('#anime-slider');
const anitoonSlider = document.querySelector('#anitoon-slider');
document.querySelector('#copyright').innerHTML = 'Copyright ' + new Date().getFullYear() + ' | ' + 'Designed by Anish';


function createSlide(arr) {
    const sliderContainer = document.querySelectorAll('.slider-container');
    const nextBtn = document.querySelectorAll('.next-btn');
    const prevBtn = document.querySelectorAll('.prev-btn');
    const slideIndex = 0;
    const slides = arr.map(slide => {
        return `
        <div class="card p-0 bg-light" style="width:10rem">
        <div class="bg-none">
            <img src=${slide.image} alt=${slide.name} class="card-img object-fit-sm-fill object-fit-md-cover" style="height:200px">
        </div>
        <div class="card-body">
            <p class="card-title">${slide.name}</p>    
            <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</small>
        </div> 
        </div>
        `
    }).join('');

    sliderContainer.forEach((slide, i) => {
        let containerDimension = slide.getBoundingClientRect();
        let containerWidth = containerDimension.width;

        nextBtn[i].addEventListener("click", function() {
            slide.scrollLeft += containerWidth - 200;
        });

        prevBtn[i].addEventListener("click", function(){
            slide.scrollLeft -= containerWidth + 200;
        });
    });

    return slides;

}

if(cartoonSlider&&animeSlider){
    cartoonSlider.innerHTML = createSlide(anitoons.slice(0, 78));
    animeSlider.innerHTML = createSlide(anitoons.slice(78, anitoons.length));
}
else if (anitoonSlider){
    anitoonSlider.innerHTML = createSlide(anitoons);
}
else "";