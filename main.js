window.onload = function() {
    const color_btn_els = document.querySelectorAll('.colors .color');
    const capacity_btn_els = document.querySelectorAll('.capacity .size');
    const imagery_els = document.querySelector('.imagery');
    const image_els = document.querySelector('.imagery .image');

    for (let i = 0; i < capacity_btn_els.length; i++) {
        let btn =capacity_btn_els[i];

        btn.addEventListener('click', function() {
            document.querySelector('.capacity .size.selected').classList.remove('selected');
            this.classList.add('selected');
        })
    }

    for (let i = 0; i < color_btn_els.length; i++) {
        let btn = color_btn_els[i];

        btn.addEventListener('click', function() {
            document.querySelector('.colors .color.selected').classList.remove('selected');
            this.classList.add('selected');
            image_els.src = "images/" + this.dataset.name + '.png';
            imagery_els.style.backgroundColor = this.dataset.color;
        });
    }
}