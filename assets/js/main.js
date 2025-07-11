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
    lis.forEach((item) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            lis.forEach(item1 => {
                item1.classList.remove('on');
            })
            item.classList.add('on');
        })
    })
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

const section5PostMouseEventHandler = () => {
    const slides = getAll('#section5 .bottom .poster-swiper .swiper-slide');
    const bg = get('#section5 .bottom .bg');
    slides.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const img = item.querySelector('img');
            const imgSrc = img.getAttribute('src');
            bg.style.backgroundImage = `url(${imgSrc})`;
            bg.style.opacity = 1;
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