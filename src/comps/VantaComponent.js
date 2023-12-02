import React, { useState, useEffect, useRef } from "react";
import BIRDS from "vanta/dist/vanta.birds.min";
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

const VantaComponent = (props) => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: 0x82ddf0,
          color2: 0xff70,
          wingSpan: 22.0,
          cohesion: 56.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <>
      <div className="vanta-container" ref={myRef}></div>
    </>
  );
};

export default VantaComponent;
