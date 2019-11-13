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

        if (panelsLeft === 0) {
          // checkResult();
          start.classList.remove("inactive");
          panelsLeft = 3;
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
      }, 0.01);
    }

    activate() {
      this.img.classList.remove("unmatched");
      this.stop.classList.remove("inactive");
    }
  }

  const images = ["images/vest_01.png", "images/vest_02.png"];
  const headImages = ["images/vest_head.png", "images/vest_02.png"];

  const footImages = ["images/vest_foot.png"];

  const panels = [
    new Panel(headImages),
    new Panel(images),
    new Panel(footImages)
  ];

  let panelsLeft = 3;

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
  
  // let c = document.getElementById("myCanvas");
  // let ctx = c.getContext("2d");
  // let imageObj1 = new Image();
  // let imageObj2 = new Image();
  // let imageObj3 = new Image();
  // imageObj1.src = "images/vest_head.png"
  //
  // imageObj1.onload = function () {
  //   ctx.drawImage(imageObj1, 0, 0, 100, 50);
  //
  //   imageObj2.src = "images/vest_01.png";
  //   imageObj2.onload = function () {
  //     ctx.drawImage(imageObj2, 0, 50, 100, 50);
  //
  //     imageObj3.src = "images/vest_foot.png";
  //     imageObj3.onload = function () {
  //       ctx.drawImage(imageObj3, 0, 100, 100, 50);
  //       // let sanmi = c.toDataURL("image/png");
  //       // document.write(`<img src=sanmi>`);
  //       let dataURL = c.toDataURL();
  //       // let output = document.getElementById("output");
  //       // output.src = dataURL;
  //     }
  //   }
  // };
}
