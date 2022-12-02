export default function horizontalScroll() {
    const windowWidth = window.innerWidth;
const horizontalLenth = document.querySelector(".flex_wrapper").scrollWidth;
const distFromTop = document.querySelector('.sticky_wrapper').offsetTop
console.log(distFromTop);
let scrollDistance = distFromTop + horizontalLenth - windowWidth
document.getElementById('work').style.height = horizontalLenth + "px"

window.onscroll = ()=> {
  let scrollTop = window.pageYOffset
  if (scrollTop >= distFromTop && scrollTop <= scrollDistance) {
    document.querySelector(".flex_wrapper").style.transform = "translateX(-" +
      (scrollTop - distFromTop) + "px)";
  }
  // document.querySelectorAll(".box").forEach(e => {
  //   e.style.transform = "skewY(-3deg)";
  // })
  }
 

}