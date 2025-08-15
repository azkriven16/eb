import { useRef, useState } from "react";

const urls = [
  "https://picsum.photos/200/300?random=1",
  "https://picsum.photos/200/300?random=2",
  "https://picsum.photos/200/300?random=3",
];

interface Props {
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

export function Loader({ loading, setLoading }: Props) {
  const counter = useRef(0);
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);

  const imageLoaded = () => {
    counter.current += 1;
    if (counter.current >= urls.length) {
      setAllImagesLoaded(true);
    }
  };

  const handleContinue = () => {
    setLoading(false);
  };

  return (
    <>
      <div className="svg col-center fixed top-0 left-0 z-[100] w-full  h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  EB
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./images/bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
        <button
          disabled={!allImagesLoaded || !loading}
          onClick={handleContinue}
          className="bg-red-500 mb-20"
        >
          {loading ? (allImagesLoaded ? "Continue" : "Loading...") : "Continue"}
        </button>
      </div>
      {loading && <div>Loading images...</div>}
      <div style={{ display: loading ? "none" : "block" }}>
        {urls.map((url) => (
          <img key={url} src={url} onLoad={imageLoaded} />
        ))}
      </div>
    </>
  );
}
