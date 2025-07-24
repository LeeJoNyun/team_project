import { books } from '../module/bookThemeList.js';
import { posters } from '../module/posterList.js'
import { noticeList } from '../module/noticeList.js'
const get = (target) => document.querySelector(target);
const getAll = (target) => document.querySelectorAll(target);


const depth2Display = () => {
  const liList = getAll('.depth1 > li');
  liList.forEach((item) => {
    item.addEventListener('mouseenter', (e) => {
      const target = item.querySelector('.depth2');
      target.classList.add('on');
    })
  })
}
const depth2NoneDisplay = () => {
  const liList = getAll('.depth1 > li');
  liList.forEach((item) => {
    item.addEventListener('mouseleave', (e) => {
      const target = item.querySelector('.depth2');
      target.classList.remove('on');
    })
  })
}

const bannerControl = () => {
  const banner = get('.banner');

  banner.addEventListener('mouseenter', () => {
    swiper.autoplay.stop();
  })

  banner.addEventListener('mouseleave', () => {
    swiper.autoplay.start();
  })
}

const fnClickBtn = () => {
  const btn = get('.banner article button');
  const target = get('.banner article input');
  btn.addEventListener('click', () => {
    alert('미안합니다 기능이 정의되지 않았습니다.')
    target.value = "";
  })
}

const menuTapHoverEventHandler = () => {
  const aList = getAll('.menu_tap ul li a');
  const spanList = getAll('.menu_tap ul li span');
  aList.forEach((item, idx) => {
    item.addEventListener('mouseenter', () => {
      const target = spanList[idx];
      target.style.fontWeight = 'bold';
    })

    item.addEventListener('mouseleave', () => {
      const target = spanList[idx];
      target.style.fontWeight = 'normal';
    })
  });
}



const section3ListClickEventHandler = () => {
  const lis = getAll('#section3 .inner .con-box .bottom .left li')
  const bookmarks = getAll('#section3 .inner .con-box .bottom .right .bookmarks .bookmark')
  const img = get('#section3 .inner .con-box .bottom .right img')
  const imgArr = [
    "./assets/images/main_3/U-library1.png",
    "./assets/images/main_3/U-library2.png",
    "./assets/images/main_3/U-library3.png",
    "./assets/images/main_3/U-library4.png",
  ]
  //left list 클릭시
  lis.forEach((item, idx) => {
    const target = item.querySelector('a');
    target.addEventListener('click', (e) => {
      e.preventDefault();
      lis.forEach((item1) => {
        item1.classList.remove('on');
      })
      bookmarks.forEach((item1) => {
        item1.classList.remove('on');
      })
      item.classList.add('on');
      bookmarks[idx].classList.add('on');
      img.setAttribute('src', imgArr[idx]);
    })

    target.addEventListener('mouseenter', (e) => {
      e.preventDefault();
      lis.forEach((item1) => {
        item1.classList.remove('on');
      })
      bookmarks.forEach((item1) => {
        item1.classList.remove('on');
      })
      item.classList.add('on');
      bookmarks[idx].classList.add('on');
      img.setAttribute('src', imgArr[idx]);
    })
  })

  //right list 클릭시
  bookmarks.forEach((item, idx) => {
    const target = item.querySelector('a');
    target.addEventListener('click', (e) => {
      e.preventDefault();
      lis.forEach((item1) => {
        item1.classList.remove('on');
      })
      bookmarks.forEach((item1) => {
        item1.classList.remove('on');
      })
      item.classList.add('on');
      lis[idx].classList.add('on');
      img.setAttribute('src', imgArr[idx]);
    })
  })
}

const section4TapMenuClickEventHandler = () => {
  const lis = getAll('#section4 .inner .tap-menu li')
  lis.forEach((item, idx) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      lis.forEach(item1 => {
        item1.classList.remove('on');
      })
      item.classList.add('on');
      section4BookThemeListChange(idx);
    })
  })
}

const section4BookThemeListChange = (idx) => {
  const target = get('.book-theme-list');
  target.innerHTML = '';
  let html = '';
  books[idx].map(item =>
    html += ` <li class="books">
                <img src=${item.offimg} alt="" />
                <span class="genre">${item.genre}</span>
                <strong class="title">${item.title}</strong>
                <p class="writer">${item.writer}</p>
              </li>`
  );
  target.innerHTML = html;
  section4LiMouseEventHandler();
}

const section4LiMouseEventHandler = () => {
  let lis = getAll('#section4 .inner .bottom .book-theme-list .books')
  lis.forEach((item, idx) => {

    item.addEventListener('mouseenter', () => {
      const target = item.querySelector('img');
      const img = target.getAttribute('src');
      const imgOn = img.replace('off', 'on')
      console.log(imgOn)
      target.setAttribute('src', imgOn)


    });
    item.addEventListener('mouseleave', () => {
      const target = item.querySelector('img');
      const img = target.getAttribute('src');
      const imgOff = img.replace('on', 'off')
      console.log(imgOff)
      target.setAttribute('src', imgOff)
    });
  })
}
const setPosters = () => {
  const target = document.querySelector('#section5 .inner .bottom .poster-swiper .swiper-wrapper');
  target.innerHTML = '';
  let html = '';
  posters.map(({ title, area, place, date, img }) =>
    html += `
      <div class="swiper-slide">
                    <img src=${img} alt="" />
                    <strong class="slide-title">${title}</strong>
                    <span class="slide-date">일정 ${date}</span>
                    <div class="bg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="58"
                        height="76"
                        viewBox="0 0 58 76"
                        fill="none"
                      >
                        <g filter="url(#filter0_d_2099_68)">
                          <path
                            d="M4 0.938358C4 -4.29007 4 -6.90428 4.90833 -8.90229C5.70727 -10.659 6.98205 -12.0872 8.55 -12.9823C10.3333 -14 12.6667 -14 17.3333 -14H40.6667C45.3333 -14 47.6667 -14 49.45 -12.9823C51.0179 -12.0872 52.2927 -10.659 53.0917 -8.90229C54 -6.90428 54 -4.29007 54 0.938358V63.0492C54 65.318 54 66.4524 53.5792 67.0733C53.3973 67.3433 53.1653 67.5658 52.8991 67.7254C52.6329 67.885 52.3389 67.9779 52.0375 67.9976C51.3417 68.0443 50.5 67.4141 48.8167 66.1583L29 51.3553L9.18333 66.1536C7.5 67.4141 6.65833 68.0443 5.95833 67.9976C5.65765 67.9772 5.36449 67.884 5.09905 67.7245C4.83362 67.5649 4.60223 67.3427 4.42083 67.0733C4 66.4524 4 65.318 4 63.0492V0.938358Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_d_2099_68"
                            x="0"
                            y="-14"
                            width="58"
                            height="90"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow_2099_68"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_dropShadow_2099_68"
                              result="shape"
                            />
                          </filter>
                        </defs>
                      </svg>
                      <article>
                        <strong class="area">${area}</strong>
                        <span class="title">${title}</span>
                        <div class="date">
                          <span>일정 | ${date}</span>
                          <span>장소 | ${place}</span>
                        </div>
                      </article>
                     
                    </div>
                  </div>`
  );
  target.innerHTML = html;
}

const section5PostMouseEventHandler = () => {
  const slides = getAll('#section5 .bottom .poster-swiper .swiper-slide');
  slides.forEach(item => {
    item.addEventListener('mouseenter', () => {
      // posterSwiper.autoplay.stop(); // ✅ autoplay 정지
      posterAnimate.pause();
      item.classList.add('on');
    });

    item.addEventListener('mouseleave', () => {
      // posterSwiper.autoplay.start(); // ✅ autoplay 다시 시작
      item.classList.remove('on');
      posterAnimate.play();
    });
  })

}

const section6NoticeSwiperSet = () => {
  const target = get('#section6 .bottom .notice-swiper .swiper-wrapper');
  target.innerHTML = '';
  let html = '';
  noticeList.map(({ label, title, date }) => html += `<div class="swiper-slide">
                  <div class="label">${label}</div>
                  <article>
                    <h2 class="title">
                      ${title}
                    </h2>
                    <span class="date">${date}</span>
                  </article>
                  <div class="logo">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="54"
                      height="53"
                      viewBox="0 0 54 53"
                      fill="none"
                    >
                      <path
                        d="M36.3291 1V14.6777C45.6867 15.6756 53 23.2654 53 33.2734C52.9999 43.6167 44.62 51.9997 34.292 52C25.0063 52 17.3167 45.2361 15.8477 36.3633H1V9.08105H5.08105V32.2803H15.6025C16.086 23.0855 23.2005 15.6734 32.2412 14.6865V5.08398H1.25977V1H36.3291ZM32.2412 18.8037C25.4623 19.754 20.1612 25.357 19.6924 32.2803H36.0361V36.3633H20.0068C21.4267 42.9557 27.2851 47.916 34.2852 47.916C42.3286 47.9159 48.905 41.011 48.9053 33.2803C48.9053 25.9094 43.4188 19.8015 36.3223 18.8047V28.2891H32.2412V18.8037Z"
                        fill="#F6F7F8"
                        stroke="#F6F7F8"
                        stroke-width="2"
                      />
                    </svg>
                  </div>
                </div>`)
  target.innerHTML = html;
};

const footerSelectEventHandler = () => {
  const clickTarget = get('#footer .library-toggle');
  const toggleTarget = get('#footer .library-wrap');
  const inner = get('#footer .inner');
  clickTarget.addEventListener('click', () => {
    toggleTarget.classList.toggle('active');
    if (!toggleTarget.classList.contains('active')) {
      inner.style.overflow = 'hidden';
    } else {
      inner.style.overflow = 'visible';
    }
  })
}

const footerLibraryLitagsEventHandler = () => {
  const toggleTarget = get('#footer .library-wrap');
  const inner = get('#footer .inner');

  const lis = getAll('#footer .inner .top .library-dropdown ul li');
  const phoneNumberArea = get('#footer .inner .bottom .phone h3');
  const libraryName = get('#footer .inner .top .library-name');
  lis.forEach(item => {
    item.addEventListener('click', () => {
      const txt = item.innerHTML;
      libraryName.innerHTML = txt;
      toggleTarget.classList.remove('active');
      inner.style.overflow = 'hidden';
      phoneNumberArea.innerHTML = switchLibraryPhoneNumber(txt);
    })
  });
}

const switchLibraryPhoneNumber = (txt) => {
  switch (txt) {
    case '관악중앙도서관':
      return '02-828-5700'
    case '하나곡작은도서관':
      return '02-868-8994'
    case '은천동작은도서관':
      return '02-877-1162'
    case '글빛정보도서관':
      return '02-878-7460'
    case '용꿈꾸는작은도서관':
      return '02-889-8823'
    case '성현동작은도서관':
      return '02-877-7182'
    case '관악구청 교육지원과':
      return '02-879-5712'
    case '낙성대공원도서관':
      return '02-872-5575'
    case '조원도서관':
      return '02-851-5571'
    case '새마을문고관악구지부':
      return '02-882-5169'
  }
}

const topBtnHandler = () => {
  const topBtn = document.querySelector(".top-btn");


  window.addEventListener("scroll", () => {
    if (window.scrollY > 999) {
      topBtn.style.opacity = "1";
    } else {
      topBtn.style.opacity = "0";
    }
  });

  topBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // 부드럽게 스크롤
    });
  });

}
const init = () => {
  setPosters();
  section6NoticeSwiperSet();
  depth2Display();
  depth2NoneDisplay();
  bannerControl();
  fnClickBtn();
  menuTapHoverEventHandler();
  section3ListClickEventHandler();
  section4TapMenuClickEventHandler();
  section4LiMouseEventHandler();
  section5PostMouseEventHandler();
  footerSelectEventHandler();
  footerLibraryLitagsEventHandler();
  topBtnHandler();
}

init();