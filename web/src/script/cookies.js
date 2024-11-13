
const DOM = {
    cookiesBtn : document.getElementById('acceptCookies'),
    cookieModal : document.getElementById('cookieModal'),
    cookiesAccepted : localStorage.getItem('cookiesAccepted'),
}

        
    if (!DOM.cookiesAccepted) {
        window.onload = function() {
            var myModal = new bootstrap.Modal(DOM.cookieModal, {
            keyboard: false
            });
        myModal.show();
    };


    DOM.cookiesBtn.addEventListener('click', function() {
        localStorage.setItem(DOM.cookiesBtn, 'true');
        var myModal = bootstrap.Modal.getInstance(DOM.cookieModal);
        myModal.hide(); 
    });
}
