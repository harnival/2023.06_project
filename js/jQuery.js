
document.onload = () => {
  const header = document.querySelector("header");
  fetch("../header/header.html").then(snapshot => snapshot.text()).then(res => header.innerHTML = res)
}

// promotion section slide
$(document).ready(function(){
  $('.slider-wrap-promotion').slick({
    slide: '.cont_promotion',        //슬라이드 되어야 할 태그
    infinite : true,     //무한 반복 옵션     
    slidesToShow : 1,        // 한 화면에 보여질 컨텐츠 개수
    slidesToScroll : 1,        //스크롤 한번에 움직일 컨텐츠 개수
    speed : 400,     // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
    arrows : true,         // 옆으로 이동하는 화살표 표시 여부
    dots : true,         // 스크롤바 아래 점으로 페이지네이션 여부
    autoplay : false,            // 자동 스크롤 사용 여부
    autoplaySpeed : 2000,         // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
    pauseOnHover : true,        // 슬라이드 이동    시 마우스 호버하면 슬라이더 멈추게 설정
    vertical : false,        // 세로 방향 슬라이드 옵션
    prevArrow : "<div class='material-symbols-outlined arrow_back'>arrow_back_ios</div>",
    nextArrow : "<div class='material-symbols-outlined arrow_forward'>arrow_forward_ios</div>",
    draggable : true,     //드래그 가능 여부 
  });
});
// promotion section slide

// instagram section slide
$(document).ready(function(){
  $('.slider-wrap-instagram').slick({
    slide: '.cont_instagram',        //슬라이드 되어야 할 태그
    infinite : true,     //무한 반복 옵션     
    slidesToShow : 1,        // 한 화면에 보여질 컨텐츠 개수
    slidesToScroll : 1,        //스크롤 한번에 움직일 컨텐츠 개수
    speed : 400,     // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
    arrows : true,         // 옆으로 이동하는 화살표 표시 여부
    dots : true,         // 스크롤바 아래 점으로 페이지네이션 여부
    autoplay : false,            // 자동 스크롤 사용 여부
    autoplaySpeed : 2000,         // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
    pauseOnHover : true,        // 슬라이드 이동    시 마우스 호버하면 슬라이더 멈추게 설정
    vertical : false,        // 세로 방향 슬라이드 옵션
    prevArrow : "<div class='material-symbols-outlined arrow_back'>arrow_back_ios</div>",
    nextArrow : "<div class='material-symbols-outlined arrow_forward'>arrow_forward_ios</div>",
    draggable : true,     //드래그 가능 여부 
  });
});
// instagram section slide

// youtube section slide
$(document).ready(function(){
  $('.slider-wrap-youtube').slick({
    slide: '.cont_youtube',        //슬라이드 되어야 할 태그
    infinite : true,     //무한 반복 옵션     
    slidesToShow : 1,        // 한 화면에 보여질 컨텐츠 개수
    slidesToScroll : 1,        //스크롤 한번에 움직일 컨텐츠 개수
    speed : 400,     // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
    arrows : true,         // 옆으로 이동하는 화살표 표시 여부
    dots : true,         // 스크롤바 아래 점으로 페이지네이션 여부
    autoplay : false,            // 자동 스크롤 사용 여부
    autoplaySpeed : 2000,         // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
    pauseOnHover : true,        // 슬라이드 이동    시 마우스 호버하면 슬라이더 멈추게 설정
    vertical : false,        // 세로 방향 슬라이드 옵션
    prevArrow : "<div class='material-symbols-outlined arrow_back'>arrow_back_ios</div>",
    nextArrow : "<div class='material-symbols-outlined arrow_forward'>arrow_forward_ios</div>",
    draggable : true,     //드래그 가능 여부 
  });
});
// youtube section slide
