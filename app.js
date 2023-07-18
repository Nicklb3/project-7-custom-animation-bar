const progressDone = document.querySelector('.progress-done');

setTimeout( function () {
    progressDone.style.width = progressDone.getAttribute('data-done') + '%';
    progressDone.style.opacity = 1;
}, 500);