"use strict";

{
  class Panel {
    constructor(images) {
      this.images = images;

      const section = document.createElement("section");
      section.classList.add("panel");

      this.img = document.createElement("img");
      this.img.src = this.getRandomImage();

      this.timeoutId = undefined;

      this.stop = document.createElement("div");
      this.stop.textContent = "STOP";
      this.stop.classList.add("stop", "inactive");
      this.stop.addEventListener("click", () => {
        if (this.stop.classList.contains("inactive")) {
          return;
        }
        this.stop.classList.add("inactive");
        clearTimeout(this.timeoutId);
        panelsLeft--;

        vestUrl.push(this.img.src.match(/images\/(\w+)/)[1]);

        if (panelsLeft === 0) {
          start.classList.remove("inactive");
          panelsLeft = 3;
          tweet.classList.remove("hidden");
          start.classList.add("hidden");
          const t = `${vestUrl[0]}${vestUrl[1]}${vestUrl[2]}`;
          const good = `${t.match(/h\w/)[0].slice(1, 2)}${t.match(/v\w/)[0].slice(1, 2)}${t.match(/p\w/)[0].slice(1, 2)}`;
          tweet.href = `http://twitter.com/share?url=https://ashitano.herokuapp.com/vest/${good}&text=@kazuhira あしたのベストはこれです&hashtags=あしたのベスト`;
          // console.log(aaa.dataset.url);
        }
      });

      section.appendChild(this.img);

      const kazuhiraImages = document.querySelector(".kazuhira-images");
      kazuhiraImages.appendChild(section);
      document.querySelector(".stops").appendChild(this.stop);
    }

    getRandomImage() {
      return this.images[Math.floor(Math.random() * this.images.length)];
    }

    start() {
      this.img.src = this.getRandomImage();
      this.timeoutId = setTimeout(() => {
        this.start();
      }, 10);
    }

    activate() {
      this.stop.classList.remove("inactive");
    }
  }

  const headImages = ["images/h1.jpg", "images/h2.jpg", "images/h3.jpg"];
  const vestImages = ["images/v1.jpg", "images/v2.jpg", "images/v3.jpg", "images/v4.jpg", "images/v5.jpg", "images/v6.jpg", "images/v8.jpg"];
  const footImages = ["images/p1.jpg", "images/p2.jpg", "images/p3.jpg", "images/p4.jpg", "images/p5.jpg"];

  const panels = [
    new Panel(headImages),
    new Panel(vestImages),
    new Panel(footImages)
  ];

  let panelsLeft = 3;
  let clickStop = 0; 

  const start = document.getElementById("start");
  start.addEventListener("click", () => {
    if (start.classList.contains("inactive")) {
      return;
    }
    start.classList.add("inactive");
    panels.forEach(panel => {
      panel.activate();
      panel.start();
    });
  });

  const vestUrl = [];
  const tweet = document.getElementById("tweet");
  const aaa = document.querySelector("iframe");
}
