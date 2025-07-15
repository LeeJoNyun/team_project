

let calendarSwiper;
const data = [
  { title1: "내 삶에가까운", title2: "관악구민도서관", img: './assets/images/banner/MainVisual_1.png', color: 'black', isTrue: false },
  { title1: "가까운 도서관에서 지금 바로 참여하세요!", title2: "도전! 100권 챌린지", img: './assets/images/banner/MainVisual_2.png', color: 'white', isTrue: true },
  { title1: "내 덥지만, 마음은 시원해지는 책", title2: "여름에 읽기 좋은 도서 BEST", img: './assets/images/banner/MainVisual_3.png', color: 'white', isTrue: false },
]
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

const setBanner = () => {
  let html = '';
  data.map((item) => {
    if (item.isTrue) {
      html += `<div class="swiper-slide">
      <article>
        <h2 class="title1" style="color:${item.color}">${item.title1}</h2>
        <h3 class="title2" style="color:${item.color}">${item.title2}<div></div></h3>
        <div class="input-box">
          <input
              type="text"
              placeholder="원하시는 검색어를 입력하세요."
          />
          <button>
            <i class="fa fa-search" aria-hidden="true"></i>
          </button>
        </div>
        <div class="custom_icon">
          <div class="box">
            <div class="big"></div>
            <div class="small"></div>
          </div>
        </div>
      </article>
      <img src=${item.img} alt="" />
    </div>`
    } else {
      html += `<div class="swiper-slide">
      <article>
        <h2 class="title1" style="color:${item.color}">${item.title1}</h2>
        <h3 class="title2" style="color:${item.color}">${item.title2}</h3>
        <div class="input-box">
          <input
              type="text"
              placeholder="원하시는 검색어를 입력하세요."
          />
          <button>
            <i class="fa fa-search" aria-hidden="true"></i>
          </button>
        </div>
        <div class="custom_icon">
          <div class="box">
            <div class="big"></div>
            <div class="small"></div>
          </div>
        </div>
      </article>
      <img src=${item.img} alt="" />
    </div>`
    }
    // if (idx === 1) {
    //   html += `<div class="swiper-slide">
    //             <article>
    //               <h2 class="title">${item.title1}</h2>
    //               <h3 class="title">${item.title2}<div></div></h3>
    //               <div class="input-box">
    //                 <input
    //                     type="text"
    //                     placeholder="원하시는 검색어를 입력하세요."
    //                 />
    //                 <button>
    //                   <i class="fa fa-search" aria-hidden="true"></i>
    //                 </button>
    //               </div>
    //               <div class="custom_icon">
    //                 <div class="box">
    //                   <div class="big"></div>
    //                   <div class="small"></div>
    //                 </div>
    //               </div>
    //             </article>
    //             <img src=${item.img} alt="" />
    //           </div>`

    // } else {


    //   html += `<div class="swiper-slide">
    //             <article>
    //               <h2 class="title1">${item.title1}</h2>
    //               <h3 class="title2">${item.title2}</h3>
    //               <div class="input-box">
    //                 <input
    //                     type="text"
    //                     placeholder="원하시는 검색어를 입력하세요."
    //                 />
    //                 <button>
    //                   <i class="fa fa-search" aria-hidden="true"></i>
    //                 </button>
    //               </div>
    //               <div class="custom_icon">
    //                 <div class="box">
    //                   <div class="big"></div>
    //                   <div class="small"></div>
    //                 </div>
    //               </div>
    //             </article>
    //             <img src=${item.img} alt="" />
    //           </div>`
    // }
  })
  const target = document.querySelector('.banner .inner .swiper .swiper-wrapper')
  target.innerHTML = html;

}



const pageOnload = () => {
  setBanner();
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