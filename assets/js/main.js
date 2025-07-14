import { books } from '../module/bookThemeList.js';
import { posters } from '../module/posterList.js'
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
        "assets/images/main_3/U-library1.png",
        "assets/images/main_3/U-library2.png",
        "assets/images/main_3/U-library3.png",
        "assets/images/main_3/U-library4.png",
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
}

const section4LiMouseEventHandler = () => {
    const lis = getAll('#section4 .inner .bottom ul li')
    let imgOnTemplate = `assets/images/main_4/Object_1_on{idx}.png`;
    let imgOffTemplate = `assets/images/main_4/Object_1_off{idx}.png`;
    lis.forEach((item, idx) => {
        item.addEventListener('mouseenter', () => {
            const target = item.querySelector('img');

            const imgOn = imgOnTemplate.replace('{idx}', idx + 1);
            target.setAttribute('src', imgOn);
        });
        item.addEventListener('mouseleave', () => {
            const target = item.querySelector('img');
            const imgOff = imgOffTemplate.replace('{idx}', idx + 1);
            target.setAttribute('src', imgOff);
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
            posterSwiper.autoplay.stop(); // ✅ autoplay 정지
            item.classList.add('on');
        });

        item.addEventListener('mouseleave', () => {
            posterSwiper.autoplay.start(); // ✅ autoplay 다시 시작
            item.classList.remove('on');
        });
    })

}



const init = () => {
    setPosters();
    depth2Display();
    depth2NoneDisplay();
    bannerControl();
    fnClickBtn();
    menuTapHoverEventHandler();
    section3ListClickEventHandler();
    section4TapMenuClickEventHandler();
    section4LiMouseEventHandler();
    section5PostMouseEventHandler();
}

init();