function zoom(id) {
  const img = document.getElementById(id);
  const buttons = img.querySelectorAll("button.route");

  img.classList.toggle('popup_img');
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
      slide3 = slide('img03');