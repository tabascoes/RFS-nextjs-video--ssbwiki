import React from "react";
import VideoBox from "./components/VideoBox";
import Navbar from "./components/Navbar";

const video1 = "8z9of3maj9";
const video2 = "god04lsa50";

export const getStaticProps = async (ctx) => {
  const mediaId = ctx.params?.mediaId;
  return { props: { mediaId } };
};

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { mediaId: video1 } }, { params: { mediaId: video2 } }],
    fallback: false
  };
};

export default function Video({ mediaId }) {
  return (
    <>
      <Navbar video1={video1} video2={video2} />
      <VideoBox videoId={mediaId} />
    </>
  );
}
