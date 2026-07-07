function playAudio(id) {
    const audio = document.getElementById(id);

    // 혹시 다른 오디오가 재생 중이면 멈춤
    document.querySelectorAll('audio').forEach(a => {
        if (a !== audio) a.pause();
        a.currentTime = 0;
    });

    audio.play();


  }

