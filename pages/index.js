import { useState } from "react";
import Webcam from 'react-webcam';

const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user",
    screenshotQuality: 1
  };
   
  const WebcamCapture = () => {
    const webcamRef = React.useRef(null);
    const [image,setImage] = useState([]);
    const capture = React.useCallback(
      () => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImage([...image,imageSrc])
      },
      [webcamRef]
    );
   
    return (
      <>
        <Webcam
          audio={false}
        //   height={720}
          ref={webcamRef}
          screenshotFormat="image/webp"
        //   width={1280}
          videoConstraints={videoConstraints}
        />
        <button onClick={capture}>Capture photo</button>
    {image && image.length >0  && <div>
        <br />
        <h2>Your captured image</h2>
        {image.map((item) => {
       return <img src={item} />
     })}
        </div>
    }
      </>
    );
  };

  export default WebcamCapture