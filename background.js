const images = [
  "https://cdn.pixabay.com/photo/2016/08/09/21/54/lake-1581879_960_720.jpg",
  "https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_960_720.jpg",
  "https://cdn.pixabay.com/photo/2018/04/16/16/16/sunset-3325080_960_720.jpg",
  "https://cdn.pixabay.com/photo/2021/08/30/21/29/port-6587129_960_720.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `${chosenImage}`;

document.body.append(bgImage);
