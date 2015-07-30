(function(){

  [].forEach.call(document.querySelectorAll('.mdl-layout__header--static'), function(dom) {

    var defaultTop = dom.offsetTop;

    document.querySelector('.mdl-layout').addEventListener('scroll', function(){
      var dElm = document.documentElement , container = document.querySelector('.mdl-layout');
      var nY = dElm.scrollTop || container.scrollTop;

      if (defaultTop <= nY && !dom.classList.contains('is-compact')) {
        dom.classList.add('is-casting-shadow');
        dom.classList.add('is-compact');
        dom.classList.add('is-animating');
        dom.style.position = 'fixed';
        dom.style.top = 0;
      } else if (defaultTop > nY && dom.classList.contains('is-compact')) {
        dom.classList.remove('is-casting-shadow');
        dom.classList.remove('is-compact');
        dom.classList.add('is-animating');
        dom.style.position = 'relative';
        dom.style.top = null;
      }
    });
  });
})();
