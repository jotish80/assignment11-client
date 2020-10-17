import React from "react";
import { Link } from "react-router-dom";
import "./ServicesAvailable.css";
import { useSpring, animated } from "react-spring";

// -----------React spring animation properties-------------//

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];

const trans = (x, y, s) =>
  `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const ServicesAvailable = ({ services }) => {
  const { id } = services;
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 3, tension: 400, friction: 40 },
  }));

  return (
    <div
      style={{ marginBottom: "10px" }}
      className="col-sm-9 col-md-4 col-lg-3"
    >
      <animated.div
        class="card"
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.interpolate(trans) }}
      >
        <div className="service-box p-5 text-center px-2">
          <Link to={`/ordersubmitform/${id}`}>
            <img
              className="service-image"
              style={{ height: "74px" }}
              src={`data:image/png;base64,${services.image.img}`}
              alt=""
            />
          </Link>
          <h4 className="mt-3 mb-3">{services.service}</h4>
          <p>{services.description}</p>
        </div>
      </animated.div>
    </div>
  );
};

export default ServicesAvailable;
