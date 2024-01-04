/*index1*/
/*  start   */
// document.querySelector(".cat-heading").style.cursor = 'pointer'
// document.querySelector(".cat-heading").addEventListener('click', function(e) {
//     let cate = document.querySelector('.main-category');
//     if(cate.style.display == 'none') {
//         cate.style.display = 'block';
//     } else {
//         cate.style.display = 'none';
//     }
// })
/*  end    */

/*index2*/
/*  start   */
let stage = document.querySelector('.owl-stage');
home_slider()
function home_slider() {
    let test = 6;
    let i = 1;
    let html = '';
    for(i=1;i<=test;i++) {
        html +=
            '<div class="single-slider overlay" style="background-image:url(\'images/test/new_0' + i + '.jpg\');"> ' +
            ' <div class="container"> ' +
            '  <div class="row"> ' +
            '   <div class="col-12"> ' +
            '    <div class="content"> ' +
            '     <p class="sub-title">Women\'s Clothing</p> ' +
            '     <h4 class="title">Mega sale up to 50% off for all</h4> ' +
            '     <p class="des">Giordanr Shirt is the best design of Artist Alex Goot. You should got it for your style</p> ' +
            '     <div class="button"> ' +
            '      <a href="javascript:return false;" class="btn">Shop Now</a> ' +
            '     </div> ' +
            '    </div> ' +
            '   </div> ' +
            '  </div> ' +
            ' </div> ' +
            '</div>';
    }

    document.querySelector('.home-slider').innerHTML = html;
    console.log(document.querySelector('.home-slider'))
}


/*  end  */