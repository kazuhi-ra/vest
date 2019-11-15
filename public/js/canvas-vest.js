"use strict";

let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");
let imageObj1 = new Image();
let imageObj2 = new Image();
let imageObj3 = new Image();
imageObj1.src = "../images/vest_head.png";

imageObj1.onload = function () {
  ctx.drawImage(imageObj1, 0, 0, 100, 50);

  imageObj2.src = "../images/vest_01.png";
  imageObj2.onload = function () {
    ctx.drawImage(imageObj2, 0, 50, 100, 50);

    imageObj3.src = "../images/vest_foot.png";
    imageObj3.onload = function () {
      ctx.drawImage(imageObj3, 0, 100, 100, 50);
      // let sanmi = c.toDataURL("image/png");
      // document.write(`<img src=sanmi>`);
      // let dataURL = c.toDataURL();
      // let output = document.getElementById("output");
      // output.src = dataURL;
    };
  };
};