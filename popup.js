function listMenu() {
  const menu = document.getElementById('nav');

  menu.classList.toggle('no-display');
}

function zoom(id) {
  const img = document.getElementById(id);

  //стрелки
  const buttons = img.querySelectorAll("button.route");

  //убрать полосу прокрутки
  document.body.classList.toggle('no_overflow');

  //добавить Х к изображению
  img.querySelector('.img-button').classList.toggle('close');

  //фиксировать img по центру экрана
  img.classList.toggle('popup_img');

  //показать стрелки
  for (const btn of buttons) {
    btn.classList.toggle('noshow');
  }
}

function slide(id) {
  let current = 0;
  const imgs = document.getElementById(id).querySelectorAll("img");

  return function(route) {
    imgs[current].classList.add('noshow');
    if (route === "next") {
      current === (imgs.length - 1) ? current = 0 : current++;
    } else {
      current === 0 ? current = (imgs.length - 1) : current--;
    }
    imgs[current].classList.remove('noshow');
  }
}

const slide1 = slide('img01'),
      slide2 = slide('img02'),
      slide3 = slide('img03')
      slide4 = slide('img04');

for (let index = 1; index < 5; index++) {
  const id = 'article#' + index,
        img = document.getElementById(id),
        btn = img.querySelector('.btn_square'),
        imgBtn = img.querySelector('.img-button'),
        imgN = 'img0' + index;
  
  btn.addEventListener('click', {
    handleEvent(event) {
      zoom(imgN);
    }
  });

  imgBtn.addEventListener('click', {
    handleEvent(event) {
      zoom(imgN);
    }
  });
}