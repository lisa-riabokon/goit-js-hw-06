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

const imagesContainerEl = document.querySelector(".gallery");
imagesContainerEl.style.display = "flex";
imagesContainerEl.style.justifyContent = "center";
imagesContainerEl.style.gap = "40px";
imagesContainerEl.style.listStyle = "none";

const galleryImageTemplate = ({ url, alt }) => {
  return `<li><img src = ${url} alt= ${alt} width=480 height=300></img></li>`;
};

const makeGalleryCardImage = images.map(galleryImageTemplate).join("");

imagesContainerEl.insertAdjacentHTML("afterbegin", makeGalleryCardImage);
