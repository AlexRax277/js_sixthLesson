// const popup = document.getElementsByClassName('modal')
// popup[0].style.display = 'flex'
// console.log(popup[0].getElementsByClassName('modal__close modal__close_times')[0].closest('.modal'))
// popup[0].getElementsByClassName('modal__close modal__close_times')[0].addEventListener('click', () => {
//     popup[0].style.display = 'none'
// })

// popup[0].getElementsByClassName('btn btn_danger modal__close show-success')[0].addEventListener('click', () => {
//     popup[0].style.display = 'none'
//     popup[1].style.display = 'flex'
//     popup[1].getElementsByClassName('modal__close modal__close_times')[0].addEventListener('click', () => {
//         popup[1].style.display = 'none'
//     })
// })

const popupStart = document.getElementById('modal_main');
const popupEnd = document.getElementById('modal_success');
let closeButton = (popup) => {return popup.getElementsByClassName('modal__close modal__close_times')[0]};
let switchButton = (popup) => {return popup.getElementsByClassName('btn')[0]};
let closePupop = (mode) => {
    closeButton(mode).addEventListener('click', () => {
        mode.style.display = 'none'
    });
};
let switchPupop = (mode1, mode2) => {
    switchButton(mode1).addEventListener('click', () => {
        mode1.style.display = 'none'
        mode2.style.display = 'flex'
    });
};

popupStart.style.display = 'flex';
closePupop(popupStart);
closePupop(popupEnd);
switchPupop(popupStart, popupEnd);
switchPupop(popupEnd, popupStart);
