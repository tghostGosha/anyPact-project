import * as flsFunctions from "./modules/functions.js";
// import $ from "jquery"
// import { Inputmask } from "inputmask";
// import Swiper, { Navigation, Pagination } from 'swiper';
// import JustValidate from 'just-validate';

// Swiper.use([Navigation, Pagination])

flsFunctions.isWebp()


//=========swiper hero=======
// const heroSwiper = new Swiper('.hero-swiper', {
//   modules: [Navigation, Pagination],
//   slidesPerView: 1,
//   slidesPerColumn: 1,
//   slidesPerGroup: 1,
//   spaceBetween: 50,
//   loop: true,

//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
// })

//====делаем первую букву  в Верхнем регистре
// const regex = /[A-Za-z0-0]/;
// let firstLetterToUpperCase = (className) => {
//   const inputs = document.getElementsByClassName(className)
  
  
//     for (let i = 0; i < inputs.length; ++i) {
//       inputs[i].onblur = () => {
//         // if (regex.test(inputs[i].value)) inputs[i].value='';
//         if (inputs[i].value === '') return;
  
//         let str = inputs[i].value
//           .trim()
//           .replace(/-+/g, '-')
//           .replace(/^-|-$/g, '')
//           .replace(/\s+/g, ' ')
//           .trim()
//         inputs[i].value = str[0].toUpperCase() + str.substr(1).toLowerCase()
//       }
//     }
  
// }
// firstLetterToUpperCase('form-control')



//=====Input mask
// const mask = event => {
//   const { target, keyCode, type } = event;

//   const pos = target.selectionStart;
//   if (pos < 3) event.preventDefault();
//   const matrix = '+7 (___) ___-__-__';
//   let i = 0;
//   const def = matrix.replace(/\D/g, '');
//   const val = target.value.replace(/\D/g, '');
//   let newValue = matrix.replace(/[_\d]/g,
//     a => (i < val.length ? val[i++] || def[i] : a));
//   i = newValue.indexOf('_');
//   if (i !== -1) {
//     i < 5 && (i = 3);
//     newValue = newValue.slice(0, i);
//   }
//   let reg = matrix.substring(0, target.value.length).replace(/_+/g,
//     (a) => `\\d{1,${a.length}}`).replace(/[+()]/g, '\\$&');
//   reg = new RegExp(`^${reg}$`);
//   if (!reg.test(target.value) || target.value.length < 5 ||
//     keyCode > 47 && keyCode < 58) {
//     target.value = newValue;
//   }
//   if (type === 'blur' && target.value.length < 5) target.value = '';
// };

// const input = document.getElementById('exampleFormControlInput');

// if (input.type === 'tel') {
//   input.addEventListener('input', mask);
//   input.addEventListener('focus', mask);
//   input.addEventListener('blur', mask);
//   input.addEventListener('keydown', mask);
// }





//========Валидация формы открытия счета и маска================
      //======маска телефон
// const accountFormTel = document.getElementById('tel');
// if (accountFormTel.type === 'tel') {
//   accountFormTel.addEventListener('input', mask);
//   accountFormTel.addEventListener('focus', mask);
//   accountFormTel.addEventListener('blur', mask);
//   accountFormTel.addEventListener('keydown', mask);
// }
//       //======заглавная буква
// firstLetterToUpperCase('account__form-input');
//       //=======Валидация
// const validation = new JustValidate('#accountform', {
//   errorFieldCssClass: 'is-invalid',
//   errorLabelStyle: {
//     fontSize: '14px',
//     color: '#dc3545',
//   },
//   successFieldCssClass: 'is-valid',
//   successLabelStyle: {
//     fontSize: '14px',
//     color: '#20b418',

//   },
//   successFieldStyle: {
//     border: '1px solid #44953D',
//   },
//   focusInvalidField: true,
//   lockForm: true,
// });
// validation
//   .addField('#firstname', [
//     {
//       rule: 'minLength',
//       value: 3,
//       errorMessage: 'Фамилия должна содержать не менее 3-х символов ',
//     },
//     {
//       rule: 'maxLength',
//       value: 30,
//     },
//     {
//       rule: 'required',
//       errorMessage: 'Обязательное поле',
//     },
//   ])
//   .addField('#secondname', [
//     {
//       rule: 'minLength',
//       value: 2,
//       errorMessage: 'Имя должно содержать не менее 2-х символов ',
//     },
//     {
//       rule: 'maxLength',
//       value: 30,
//     },
//     {
//       rule: 'required',
//       errorMessage: 'Обязательное поле',
//     },
//   ])
//   .addField('#surname', [
//     {
//       rule: 'minLength',
//       value: 3,
//       errorMessage: 'Отчество должно содержать не менее 3-х символов ',
//     },
//     {
//       rule: 'maxLength',
//       value: 30,
//     },
//     {
//       rule: 'required',
//       errorMessage: 'Обязательное поле',
//     },
//   ])
//   .addField('#mail', [
//     {
//       rule: 'required',
//       errorMessage: 'Обязательное поле',
//     },
//     {
//       rule: 'email',
//       errorMessage: 'Не валидный Email',
//     },
//   ])
//   .addField('#tel', [
//     {
//       rule: 'required',
//       errorMessage: 'Обязательное поле',
//     },
//   ])
//   .addField('#accountCheck', [
//     {
//       rule: 'required',
//       errorMessage: 'Подтвердите',
//     },
//   ])
//   // {
//   //   successMessage: 'Силён! с первой попытки'
//   // }
//   .onSuccess((ev) => {
//     ev.preventDefault();
//     window.showNotification();
//   });