document.querySelectorAll(".play-btn").forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const audioId = button.getAttribute("data-audio");
      const audio = document.getElementById(audioId);
  
      // 모든 오디오를 멈추고 현재 오디오만 재생
      document.querySelectorAll("audio").forEach((a) => {
        if (a !== audio) a.pause();
      });
  
      // 이미 재생 중이면 멈추고, 아니면 재생
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
        audio.currentTime = 0;
      }
    });
  });