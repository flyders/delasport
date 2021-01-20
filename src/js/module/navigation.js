/** ***********************************************
 *  Navigation
 ************************************************* */
(function (d) {
    const showMenu = (toggleId, navId, overlayId, closeBtnId) => {
        const toggle = d.getElementById(toggleId);
        const nav = d.getElementById(navId);
        const overlay = d.getElementById(overlayId);
        const closeBtn = d.getElementById(closeBtnId);

        if (toggle && nav && overlay && closeBtn) {
            [toggle, overlay, closeBtn].map((e) => {
                return e.addEventListener('click', () => {
                    nav.classList.toggle('show');
                    overlay.classList.toggle('header__overlay--show');
                });
            });
        }
    };
    showMenu('header-toggle', 'nav-menu', 'overlay', 'close-btn');
}(document));
