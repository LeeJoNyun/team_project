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
const init = () => {
    depth2Display();
    depth2NoneDisplay();
    bannerControl();
    fnClickBtn();
    menuTapHoverEventHandler();
}

init();