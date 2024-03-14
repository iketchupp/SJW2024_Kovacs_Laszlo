const menus = document.querySelectorAll('.nav-link');

menus.forEach((menu) => {
    menu.addEventListener('click', function() {
        menus.forEach(m => {
            m.classList.remove('active')
            m.classList.remove('text-white')
            m.classList.add('text-white-50')
        });
        this.classList.remove('text-white-50')
        this.classList.add('text-white')
        this.classList.add('active');
    })
})