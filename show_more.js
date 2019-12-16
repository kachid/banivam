function showMore() {
    const btn = document.getElementById('show_more');
    const listItems = document.querySelectorAll('.hiddenListItem');

    for (let item of listItems) {
        item.classList.toggle('noshow');
    }

    if (!listItems[0].classList.contains('noshow')) {
        btn.innerHTML = 'Свернуть';
    } else {
        btn.innerHTML = 'Показать еще...';
    }
}