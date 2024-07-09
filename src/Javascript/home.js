document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('video');
    video.addEventListener('play', function() {
      video.muted = false;
    });
  });