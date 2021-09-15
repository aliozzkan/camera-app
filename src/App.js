import logo from "./logo.svg";
import React, { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    var video = document.getElementById("video");

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then(function (stream) {
          video.srcObject = stream;
          video.play();
        });
    }
  }, []);

  function takePhoto() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var video = document.getElementById("video");

    context.drawImage(video, 0, 0, 640, 480);
  }

  return (
    <div className="App">
      <video id="video" width="640" height="480" autoplay />
      <button id="snap" onClick={takePhoto}>
        Snap Photo
      </button>
      <canvas id="canvas" width="640" height="480" />
    </div>
  );
}

export default App;
