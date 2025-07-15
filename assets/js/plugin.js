var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    loop: true, // ✅ 무한 루프
    autoplay: {
        delay: 3000, // 3초마다 전환
        disableOnInteraction: false, // 사용자 상호작용 이후에도 계속 재생
    },
    on: {
        init: function () {
            animateSlide(this.slides[this.activeIndex]);
        },
        slideChange: function () {
            animateSlide(this.slides[this.activeIndex]);
        },
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,

    },
});

var posterSwiper = new Swiper(".poster-swiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    loop: true,
    spaceBetween: 66, // 슬라이드 간 간격
    grabCursor: true,
    pagination: {
        clickable: true,
    },
    autoplay: {
        delay: 3000, // ✅ 3초마다 슬라이드 전환
        disableOnInteraction: false, // 사용자가 터치하거나 클릭해도 계속 자동 재생
    },
});

// ✅ 애니메이션 실행 함수
function animateSlide(slide) {
    const title1 = slide.querySelector(".title1");
    const title2 = slide.querySelector(".title2");

    if (!title1 || !title2) return;

    // 초기 상태 리셋 (다시 등장하도록)
    gsap.set([title1, title2], { opacity: 0, y: 100 });

    const tl = gsap.timeline();

    tl.to(title1, {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.2
    }).to(title2, {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.2
    });
}

gsap.registerPlugin(ScrollTrigger);
gsap.fromTo('.second_area .info', {
    y: 100,       // 아래에서 시작
    opacity: 0    // 투명하게 시작
}, {
    y: 0,
    opacity: 1,
    duration: 1,
    scrollTrigger: {
        trigger: '.second_area .info',
        start: 'top 80%',
        end: 'top 30%',
        toggleActions: 'play none none reverse',
    }
});
gsap.fromTo('.second_area .calendar', {
    y: 100,       // 아래에서 시작
    opacity: 0    // 투명하게 시작
}, {
    y: 0,
    opacity: 1,
    duration: 1,
    delay: 0.5,
    scrollTrigger: {
        trigger: '.second_area .calendar',
        start: 'top 80%',
        end: 'top 30%',
        toggleActions: 'play none none reverse',
    }
});



var noticeSwiper = new Swiper(".notice-swiper", {
    slidesPerView: "auto",
    // centeredSlides: true,
    // loop: true,
    spaceBetween: 32, // 슬라이드 간 간격
    grabCursor: true,
    navigation: {
        nextEl: '.notice-swiper-next',
        prevEl: '.notice-swiper-prev',
    },
    // autoplay: {
    //     delay: 3000, // ✅ 3초마다 슬라이드 전환
    //     disableOnInteraction: false, // 사용자가 터치하거나 클릭해도 계속 자동 재생
    // },

});