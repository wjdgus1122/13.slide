const swiper = new Swiper('.swiper', {
    // speed : 400,
    loop : true,//넣어주면 3페이지에서 뒤로 넘기면 자동으로 1페이지로 넘어감
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },//양옆에 버튼
    pagination: {
        el: '.swiper-pagination',
        type: 'progressbar' ,
        clickable : true
    },//밑부분에 페이지 넘길때마다 바뀌는 바
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true
    },//윗부분에 스크롤바 생김
    autoplay: {
    delay: 1000,
    },//자동으로 넘어감
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    }//서서히 바뀌는 이벤트
    
  })

//   swiper 플러그인 사용
// 그냥 swiper사이트 들어가서 사용할 기능들 코드 복사해오면됨 그러나
// 반드시 html 클래스 넣어주는거는 같은 자리에 넣어줄것