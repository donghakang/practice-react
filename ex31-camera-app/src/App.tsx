import React, { useEffect, useRef, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const photoRef = useRef<HTMLCanvasElement>(null);

  const [hasPhoto, setHasPhoto] = useState<boolean>(false);

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: { width: 1920, height: 1080 },
      })
      .then((stream) => {
        if (videoRef.current !== null) {
          let video = videoRef.current;
          video.srcObject = stream;
          video.play();
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const takePhoto = () => {
    const width = 414;
    const height = width / (16 / 9);

    if (videoRef.current !== null && photoRef.current !== null) {
      let video = videoRef.current;
      let photo = photoRef.current;
      photo.width = width;
      photo.height = height;

      let ctx = photo.getContext("2d");
      ctx?.drawImage(video, 0, 0, width, height);
      setHasPhoto(true);
    }
  };

  const closePhoto = () => {
    if (photoRef.current !== null) {
      let photo = photoRef.current;
      let ctx = photo.getContext("2d");
      if (ctx !== null) {
        ctx.clearRect(0, 0, photo.width, photo.height);
      }

      setHasPhoto(false);
    }
  };

  useEffect(() => {
    getVideo();
  }, [videoRef]);

  return (
    <div className="App">
      <div className="camera">
        <video ref={videoRef}></video>
        <button onClick={takePhoto}>SNAP</button>
      </div>
      <div className={"result" + (hasPhoto ? "hasPhoto" : "")}>
        <canvas ref={photoRef}></canvas>
        <button onClick={closePhoto}>Close</button>
      </div>
    </div>
  );
}

export default App;
