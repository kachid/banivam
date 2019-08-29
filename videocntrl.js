(function () {
  const video  = document.querySelectorAll('video');
  for (const item of video) {
    item.controls = false;
    item.addEventListener('mouseover', function() {
      item.controls = true;
    });
    item.addEventListener('mouseleave', function() {
      item.controls = false;
    });
  }

})()