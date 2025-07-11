// const setDateInSwiper = () => {
//     let html = ``;
//     for (let i = 0; i < 12; i++) {
//         if (i < 10) {
//             html += `<div class="swiper-slide">0${i + 1}월</div>`
//         }
//         else {
//             html += `<div class="swiper-slide">${i + 1}월</div>`
//         }
//     }
//     const target = document.querySelector('.calendar-wrapper');
//     target.innerHTML = html;
// }

// // const setDate = () => {
// //     const today = new Date();
// //     const monthIndex = today.getMonth(); // 0부터 시작 (0=1월, 6=7월)
// //     calendarSwiper.slideTo(monthIndex, 0); // 0ms로 바로 이동
// // }

// const pageOnload = () => {
//     setDateInSwiper();
//     // setDate();
// }

// pageOnload();


let calendarSwiper;

const setDateInSwiper = () => {
    const wrapper = document.querySelector('.calendar-swiper .swiper-wrapper');
    let html = '';
    for (let i = 0; i < 12; i++) {
        html += `<div class="swiper-slide">${String(i + 1).padStart(2, '0')}월</div>`;
    }
    wrapper.innerHTML = html;
};

const renderDatesForMonth = (month) => {
    const now = new Date();
    const year = now.getFullYear();
    const todayMonth = now.getMonth() + 1; // 현재 월 (1~12)
    const todayDate = now.getDate();       // 오늘 날짜 (1~31)

    const days = new Date(year, month, 0).getDate(); // 해당 월의 마지막 일자

    let html = '';
    for (let i = 1; i <= days; i++) {
        const isCurrentMonth = (month === todayMonth);
        const isToday = isCurrentMonth && (i === todayDate);

        html += `<li class="date-item${isToday ? ' on' : ''}">${String(i).padStart(2, '0')}</li>`;
    }

    document.querySelector('.days').innerHTML = html;
};

const pageOnload = () => {
    setDateInSwiper();

    calendarSwiper = new Swiper('.calendar-swiper', {
        loop: false,
        navigation: {
            nextEl: '.calendar-button-next',
            prevEl: '.calendar-button-prev',
        },
        on: {
            init: function () {
                const initialMonth = this.activeIndex + 1; // 인덱스는 0부터 시작하므로 +1
                renderDatesForMonth(initialMonth);
            },
            slideChange: function () {
                const currentMonth = this.activeIndex + 1;
                renderDatesForMonth(currentMonth);
            }
        }
    });

    // 오늘 월로 이동
    const todayMonthIndex = new Date().getMonth(); // 0~11
    calendarSwiper.slideTo(todayMonthIndex, 0);
};

pageOnload();