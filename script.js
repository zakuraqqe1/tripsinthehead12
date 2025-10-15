const iframe = document.getElementById('soundcloud-player');
const vinyl = document.getElementById('vinyl');

const widget = SC.Widget(iframe);
let isPlaying = false;
let rotationSpeed = 4;

widget.bind(SC.Widget.Events.PLAY, () => {
  vinyl.style.animationPlayState = 'running';
  isPlaying = true;
});

widget.bind(SC.Widget.Events.PAUSE, () => {
  vinyl.style.animationPlayState = 'paused';
  isPlaying = false;
});

vinyl.addEventListener('click', () => {
  widget.getVolume(volume => {
    let newVolume = Math.min(volume + 10, 100);
    widget.setVolume(newVolume);
    rotationSpeed = 4 - (newVolume / 100) * 3;
    vinyl.style.animationDuration = `${rotationSpeed}s`;
  });
});

setInterval(() => {
  let hue = Math.floor(Math.random() * 360);
  vinyl.style.background = `conic-gradient(hsl(${hue},100%,50%), hsl(${(hue+60)%360},100%,50%), hsl(${(hue+120)%360},100%,50%), hsl(${(hue+180)%360},100%,50%), hsl(${(hue+240)%360},100%,50%), hsl(${(hue+300)%360},100%,50%), hsl(${hue},100%,50%))`;
}, 500);
