function Stopwatch(Id, Seconds) {
  this.realSeconds = Seconds || 0;
  this.seconds = Seconds || 0;
  this.interval;

  this.start = function () {
    this.timerElem = document.getElementById(Id);
    if (!this.interval) {
      this.timer();
      this.interval = setInterval(this.timer.bind(this), 1000);
    }
  };

  this.timer = function () {
    var totalSeconds = this.seconds;
    var hours = parseInt(totalSeconds / 3600) % 24;
    var minutes = parseInt(totalSeconds / 60) % 60;
    var seconds = totalSeconds % 60;

    this.timerElem.innerHTML =
      (hours < 10 ? "0" + hours : hours) +
      ":" +
      (minutes < 10 ? "0" + minutes : minutes) +
      ":" +
      (seconds < 10 ? "0" + seconds : seconds);

    this.seconds += 1;
  };

  this.pause = function () {
    clearInterval(this.interval);
    this.interval = null;
  };

  this.stop = function () {
    this.pause();
    this.timerElem.innerHTML = "";
    this.seconds = this.realSeconds;
  };
}

var Stopwatch = new Stopwatch("timer");
