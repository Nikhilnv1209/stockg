import { useRef, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Webcame = ({ uploads }) => {
  const videoref = useRef(null);
  const [pathname, setPathname] = useState(useLocation().pathname);
  const [status, setStatus] = useState({
    showphoto: false,
    showvideo: true,
  });
  const [imagesrc, setImagesrc] = useState(null);

  useEffect(() => {
    let stream = null;
    const capture = async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        if (videoref.current) videoref.current.srcObject = stream;
      } catch (err) {
        console.log(err);
      }
    };
    capture();

    return () => {
      if (stream) stream.getTracks().forEach((track) => track.stop());
    };
  }, [pathname, status.showvideo]);

  async function takePhoto() {
    const canvas = document.createElement("canvas");
    canvas.width = videoref.current.videoWidth;
    canvas.height = videoref.current.videoHeight;
    canvas
      .getContext("2d")
      .drawImage(
        videoref.current,
        0,
        0,
        videoref.current.videoWidth,
        videoref.current.videoHeight
      );
    const photo = canvas.toDataURL("image/png");

    setStatus({ showphoto: true, showvideo: false });
    setImagesrc(photo);
    // console.log(photo);
  }
  const toggleVideo = () => {
    setStatus({ showphoto: false, showvideo: true });
  };

  const uploadPhoto = () => {
    console.log("upload");
    console.log(imagesrc);
    toggleVideo();
  };
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <span
        className="flex flex-col lg:flex-row w-[40%] max-md:w-[60%] gap-4"
      >
        <select
          name="IdProof"
          className="text-center
        border-2 border-[#C7F609] w-full h-[3rem] rounded text-base md:text-lg outline-none"
          onChange={status.showphoto ? toggleVideo: undefined}
        >
          {uploads.map((upload, index) => (
            <option key={index} value={upload}>
              {upload}
            </option>
          ))}
        </select>
        <select
          name="country"
          id=""
          className="text-center
        border-2 border-[#C7F609] w-full h-[3rem] rounded text-base md:text-lg outline-none"
        >
          <option value="India">India</option>
        </select>
      </span>
      {status.showvideo && (
        <video
          ref={videoref}
          width="480"
          height="320"
          autoPlay
          className="rounded"
        />
      )}
      {status.showphoto && (
        <img
          src={imagesrc}
          alt=""
          className="md:max-w-[480px] md:max-h-[320px]"
        />
      )}

      <span className="flex gap-2">
        <button
          id="snap"
          onClick={status.showphoto ? toggleVideo : takePhoto}
          className="bg-[#C7F609] px-6 py-2 rounded"
        >
          {status.showphoto ? "Take Another" : "Snap Photo"}
        </button>
        {status.showphoto && (
          <button
            id="snap"
            onClick={uploadPhoto}
            className="bg-[#C7F609] px-6 py-2 rounded"
          >
            Upload Photo
          </button>
        )}
      </span>
    </div>
  );
};

export default Webcame;
