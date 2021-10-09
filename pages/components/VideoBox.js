import { Helmet } from "react-helmet";
import Image from "next/image";

const VideoBox = ({ videoId }) => {
  return (
    <>
      <Helmet>
        <script
          src="https://fast.wistia.com/assets/external/E-v1.js"
          async={true}
        />
      </Helmet>

      {/* <div
        className={`wistia_embed wistia_async_${videoId} videoFoam=true preload=true`}
        style={{ height: "100%", width: "100%", position: "relative" }}
      > */}
      {/* <div
        className="wistia_swatch"
        style={{
          left: 0,
          width: "100%",
          height: "100%",
          top: 0,
          opacity: 0,
          overflow: "hidden",
          position: "absolute",
          transition: "opacity 200ms"
        }}
      > */}
      {videoId === "8z9of3maj9" ? (
        <video
          src="https://github.com/tabascoes/SandBox-next-ssbwiki/blob/main/public/video/test/2021100620250300-C6D726972790F87F6521C61FBA400A1DX.mp4?raw=true"
          controls={true}
        />
      ) : (
        <video
          src="https://embed-ssl.wistia.com/deliveries/262fd8e350169efeecfd5bfce33b7997f5a8fec0.bin"
          controls={true}
        />
      )}
      {/* </div> */}
      {/* </div> */}
    </>
  );
};

export default VideoBox;
