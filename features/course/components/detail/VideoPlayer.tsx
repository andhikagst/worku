"use client";
import { useState } from "react";

interface Props {
  youtubeUrl: string;
}

const VideoPlayer = ({ youtubeUrl }: Props) => {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative w-full bg-black rounded-none overflow-hidden" style={{ aspectRatio: "16/9" }}>
      {!playing ? (
        <div
          className="w-full h-full flex items-center justify-center bg-linear-to-br from-teal-800 to-teal-600 cursor-pointer group"
          onClick={() => setPlaying(true)}
        >
          <div className="w-16 h-16 rounded-full bg-white/20 border-2 border-white flex items-center justify-center group-hover:bg-white/30 transition-all">
            <div className="w-0 h-0 border-t-12 border-t-transparent border-l-22 border-l-white border-b-12 border-b-transparent ml-1" />
          </div>
        </div>
      ) : (
        <iframe
          src={`${youtubeUrl}?autoplay=1`}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}

      {!playing && (
        <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-black/40">
          <div className="w-full h-1.5 bg-white/30 rounded-full overflow-hidden">
            <div className="h-full bg-green-normal rounded-full w-[35%]" />
          </div>
          <div className="flex justify-end mt-1">
            <span className="text-white text-body-xs">06:24 / 18:12</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;