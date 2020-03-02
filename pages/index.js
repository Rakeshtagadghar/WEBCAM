import { useState } from "react";
import Webcam from 'react-webcam';

const videoConstraints = {
    width: 1024,
    height: 640,
    facingMode: { exact: "environment" },
    screenshotQuality: 1
  };
   
  const WebcamCapture = () => {
    const [height, setHeight] = useState(null)
    const [width, setWidth] = useState(null)
    if (process.browser) {
    useEffect(() => setHeight(document.children[0].clientHeight), [
    document.children[0].clientHeight
    ])
    useEffect(() => setWidth(document.children[0].clientWidth), [
    document.children[0].clientWidth
    ])
    }

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
        height={height - '40px'}
          ref={webcamRef}
          screenshotFormat="image/webp"
        width='90%'
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