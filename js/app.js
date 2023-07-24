let imgSlider = document.querySelector('img')
let prevBtn = document.querySelector('.prev')
let nextBtn = document.querySelector('.next')
let imgArr = ['image/1.jpg', 'image/2.png', 'image/3.jpg']
let imgIndex = 0;

prevBtn.addEventListener('click', function(){
    imgIndex--;
    if(imgIndex < 0){
      imgIndex = imgArr.length - 1
    }
    imgSlider.setAttribute('src', imgArr[imgIndex])
})


nextBtn.addEventListener('click', function(){
  imgIndex++;
  if(imgIndex > imgArr.length - 1){
    imgIndex = 0
  }
  imgSlider.setAttribute('src', imgArr[imgIndex])
})

