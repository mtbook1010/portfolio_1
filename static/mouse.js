document.addEventListener('DOMContentLoaded', () => {
  if (!navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)) {
    const body = document.body;
    const stalker = document.createElement('div');
    const btns = document.querySelectorAll('a');
    const STALKER_SIZE = 25;
    const STALHER_COLOR = 'rgba(30,30,30,.5)';
    const SCALE_SIZE = 1;
    const SCALE_DURATION = .5;

    ({
      init() {
        const self = this;
        stalker.id = 'js-stalker';
        stalker.className = 'stalker';
        stalker.style.width = STALKER_SIZE + 'px';
        stalker.style.height = STALKER_SIZE + 'px';
        stalker.style.backgroundColor = STALHER_COLOR;
        body.appendChild(stalker);
        body.addEventListener('mousemove', self.onMouseMove);
        for (let i = 0; i < btns.length; i++) {
          btns[i].addEventListener('mouseenter', self.onMouseEnter);
          btns[i].addEventListener('mouseleave', self.onMouseLeave);
        }
      },
      onMouseMove(e) {
        TweenMax.to(stalker, .4, {
          x: e.pageX - (STALKER_SIZE / 2),
          y: e.pageY - (STALKER_SIZE / 2),
        });
      },
      onMouseEnter() {
        TweenMax.to(stalker, SCALE_DURATION, {
          scale: SCALE_SIZE
        });
      },
      onMouseLeave() {
        TweenMax.to(stalker, SCALE_DURATION, {
          scale: 1
        });
      },
    }.init());
  }else{
    const body = document.body;
    const stalker = document.createElement('div');
    const btns = document.querySelectorAll('a');
    const STALKER_SIZE = 25;
    const STALHER_COLOR = 'rgba(30,30,30,.5)';
    const SCALE_SIZE = 1;
    const SCALE_DURATION = .5;

    ({
      init() {
        const self = this;
        stalker.id = 'js-stalker';
        stalker.className = 'stalker';
        stalker.style.width = STALKER_SIZE + 'px';
        stalker.style.height = STALKER_SIZE + 'px';
        stalker.style.backgroundColor = STALHER_COLOR;
        body.appendChild(stalker);
        body.addEventListener('mousemove', self.onMouseMove);
        for (let i = 0; i < btns.length; i++) {
          btns[i].addEventListener('mouseenter', self.onMouseEnter);
          btns[i].addEventListener('mouseleave', self.onMouseLeave);
        }
      },
      onMouseMove(e) {
        TweenMax.to(stalker, .4, {
          x: e.pageX - (STALKER_SIZE / 2),
          y: e.pageY - (STALKER_SIZE / 2),
        });
      },
      onMouseEnter() {
        TweenMax.to(stalker, SCALE_DURATION, {
          scale: SCALE_SIZE
        });
      },
      onMouseLeave() {
        TweenMax.to(stalker, SCALE_DURATION, {
          scale: 1
        });
      },
    }.init());
  }
});