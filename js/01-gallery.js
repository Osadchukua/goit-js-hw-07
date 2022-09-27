import { galleryItems } from './gallery-items.js';

const list = document.querySelector('.gallery');

const markup = galleryItems.reduce(
  (acc, { original, preview, description }) =>
    acc +
    `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
    </a>
  </div>`,
  ''
);

list.insertAdjacentHTML('afterbegin', markup);

list.addEventListener('click', clickOnImg);

function clickOnImg(e) {
  e.preventDefault();

  if (!e.target.classList.contains('gallery__image')) return; // if (e.target === e.currentTarget) return // те саме тільки 'старе'
  const action = e.target.dataset.source;

  const instance = basicLightbox.create(
    `<img class="gallery__image" src="${action}">`
  );

  instance.show();

  list.addEventListener('keydown', e => {
    if (e.code === 'Escape') instance.close();
  });
}

// =========================================================================================
// import { galleryItems } from './gallery-items.js';

// // console.log(galleryItems);
// const list = document.querySelector('.gallery');
// // console.log(list);

// const markup = galleryItems.reduce(
//   (acc, { original, preview, description }) =>
//     acc +
//     `<div class="gallery__item">
//     <a class="gallery__link" href="${original}">
//       <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
//     </a>
//   </div>`,
//   ''
// );

// list.insertAdjacentHTML('afterbegin', markup);
// // ---------------------------------------------------------------------------------------

// list.addEventListener('click', clickOnImg);

// function clickOnImg(e) {
//   e.preventDefault();

//   if (!e.target.classList.contains('gallery__image')) return; // if (e.target === e.currentTarget) return // те саме тільки 'старе'
//   const action = e.target.dataset.source;
//   // console.log(e.currentTarget);
//   // console.log(e.target);
//   // console.log(e.target.nodeName);
//   // console.log(e.target.dataset.source);
//   // console.log(e.target.alt);
//   // console.log(e.target.src);

//   const instance = basicLightbox.create(
//     `<img class="gallery__image" src="${action}">`
//   );

//   instance.show();

//   list.addEventListener('keydown', e => {
//     if (e.code === 'Escape') instance.close();
//   });
// }
// =========================================================================================
// -------------------------------------
// import { galleryItems } from './gallery-items.js';
// // Change code below this line

// const imageConteiner = document.querySelector('.gallery');

// const imageMarkup = createGallery(galleryItems);

// imageConteiner.insertAdjacentHTML('beforeend', imageMarkup);

// function createGallery(galleryItems) {
//   return galleryItems
//     .map(({ original, preview, description }) => {
//       return `<div class="gallery__item">
//     <a class="gallery__link" href="${original}">
//       <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
//     </a>
//   </div>`;
//     })
//     .join('');
// }

// imageConteiner.addEventListener('click', onClickImage);

// function onClickImage(evt) {
//   evt.preventDefault();
// if (evt.target.nodeNeme !== 'IMG') {
//   return;
// }
// const options = {
//   onShow: () => {
//     window.addEventListener('keydown', keyClose), console.log('onListner');
//   },
//   onClose: () => {
//     window.removeEventListener('keydown', keyClose),
//       console.log('offListner');
//   },
// };
// const clickImg = evt.target.dataset.source;
// // console.log(evt.target);
// console.dir(evt.target);
// const instance = basicLightbox.create(`<img src = "${clickImg}">`, options);

// instance.show();

// function keyClose(evt) {
//   if (evt.code === 'Escape') {
//     instance.close();
//   }

// // ----------------------- basicLightbox ------------------------- //

// const instance = basicLightbox.create(`
//     <div class="modal">
//         <p>
//            fgdsrf
//         </p>
//     </div>
// `);

// instance.show();

// // ----------------------- basicLightbox ------------------------- //
// }

// }

// import { galleryItems } from "./gallery-items.js";
// // Change code below this line

// console.log(galleryItems);
// const list = document.querySelector(".gallery");
// console.log(list);

// const markup = galleryItems.reduce(
//   (acc, item) =>
//     acc +
//     `<div class="gallery__item">
//     <a class="gallery__link" href="${item.original}">
//       <img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="$ {item.description}" />
//     </a>
//   </div>`,
//   ""
// );
// // console.log(markup);

// list.insertAdjacentHTML("afterbegin", markup);

// // console.log(object);

// //  event.preventDefault(); -//скасування дії браузера за замовчуванням

// // ----------------------- basicLightbox ------------------------- //

// const instance = basicLightbox.create(`
//     <div class="modal">
//         <p>
//             Your first lightbox with just a few lines of code.
//             Yes, it's really that simple.
//         </p>
//     </div>
// `);

// instance.show();

// // ----------------------- basicLightbox ------------------------- //
