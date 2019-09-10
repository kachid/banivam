const images = [
  {src: './images/additions/veshalka.jpg'},
  {src: './images/additions/Каравелла вход сбоку яркая.jpg'},
  {src: './images/additions/Красивый стол.jpg'},
  {src: './images/additions/Крыльцо к Каравелле.jpg'},
  {src: './images/additions/Моечная.jpg'},
  {src: './images/additions/Печь гривари.jpg'},
  {src: './images/additions/Стеклянная дверь.jpg'},
  {src: './images/additions/Стеклянная дверь(1).jpg'},
  {src: './images/additions/Топка снаружи.jpg'},
  {src: './images/additions/Туалет.jpg'},
  {src: './images/additions/Унитаз.jpg'}
];

(function() {
  console.log(carousel)
  const wrap = carousel.querySelector('div');

  for (const item of images) {
    const img = document.createElement('img');
    img.setAttribute('src', item.src);
    img.setAttribute('alt', "  ");
    wrap.append(img);
  }
})()