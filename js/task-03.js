const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const imagesContainerEl = document.querySelector("gallery");

const galleryItemEl = document.createElement("li");

const imageEl = document.createElement("img");
imageEl.url = images.url;
imageEl.alt = images.alt;
console.log(imageEl);

galleryItemEl.appendChild(imageEl);
console.log(galleryItemEl);

// const galleryImage = ({ url, alt }) => {
// url, alt;
// };

// const makeGalleryCardImage = images.map(galleryImage).join("");

// imagesContainerEl.insertAdjacentHTML("afterbegin", makeGalleryCardImage);
// console.log(makeGalleryCardImage);
