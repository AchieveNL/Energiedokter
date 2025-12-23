export default function AnimatedBg({ speed = 1 }) {
  const baseSpeed = {
    gradient1: 20 / speed,
    gradient2: 18 / speed,
    gradient3: 22 / speed,
    rect: 25 / speed,
    circle1Cx: 30 / speed,
    circle1Cy: 35 / speed,
    circle1R: 28 / speed,
    circle2Cx: 32 / speed,
    circle2Cy: 38 / speed,
    circle2R: 30 / speed,
    circle3Cx: 34 / speed,
    circle3Cy: 36 / speed,
    circle3R: 32 / speed,
    circle4Fill: 24 / speed,
    circle4Cx: 36 / speed,
    circle4Cy: 40 / speed,
    circle4R: 26 / speed,
    circle5Fill: 26 / speed,
    circle5Cx: 38 / speed,
    circle5Cy: 42 / speed,
    circle5R: 28 / speed,
  };

  return (
    <svg
      className="w-full h-full"
      viewBox="0 0 1600 600"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="grad1" cx="30%" cy="40%">
          <stop offset="0%" style={{ stopColor: "#d8eba3", stopOpacity: 1 }}>
            <animate
              attributeName="stop-color"
              values="#d8eba3;#d1f0f5;#d8eba3"
              dur={`${baseSpeed.gradient1}s`}
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="50%" style={{ stopColor: "#d1f0f5", stopOpacity: 1 }}>
            <animate
              attributeName="stop-color"
              values="#d1f0f5;#d8eba3;#d1f0f5"
              dur={`${baseSpeed.gradient1}s`}
              repeatCount="indefinite"
            />
          </stop>
          <stop
            offset="100%"
            style={{ stopColor: "#d8eba3", stopOpacity: 0.8 }}
          >
            <animate
              attributeName="stop-color"
              values="#d8eba3;#d1f0f5;#d8eba3"
              dur={`${baseSpeed.gradient1}s`}
              repeatCount="indefinite"
            />
          </stop>
        </radialGradient>

        <radialGradient id="grad2" cx="70%" cy="60%">
          <stop offset="0%" style={{ stopColor: "#d1f0f5", stopOpacity: 1 }}>
            <animate
              attributeName="stop-color"
              values="#d1f0f5;#d8eba3;#d1f0f5"
              dur={`${baseSpeed.gradient2}s`}
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="50%" style={{ stopColor: "#d8eba3", stopOpacity: 1 }}>
            <animate
              attributeName="stop-color"
              values="#d8eba3;#d1f0f5;#d8eba3"
              dur={`${baseSpeed.gradient2}s`}
              repeatCount="indefinite"
            />
          </stop>
          <stop
            offset="100%"
            style={{ stopColor: "#d1f0f5", stopOpacity: 0.8 }}
          >
            <animate
              attributeName="stop-color"
              values="#d1f0f5;#d8eba3;#d1f0f5"
              dur={`${baseSpeed.gradient2}s`}
              repeatCount="indefinite"
            />
          </stop>
        </radialGradient>

        <radialGradient id="grad3" cx="50%" cy="50%">
          <stop offset="0%" style={{ stopColor: "#d8eba3", stopOpacity: 0.9 }}>
            <animate
              attributeName="stop-color"
              values="#d8eba3;#d1f0f5;#d8eba3"
              dur={`${baseSpeed.gradient3}s`}
              repeatCount="indefinite"
            />
          </stop>
          <stop
            offset="100%"
            style={{ stopColor: "#d1f0f5", stopOpacity: 0.7 }}
          >
            <animate
              attributeName="stop-color"
              values="#d1f0f5;#d8eba3;#d1f0f5"
              dur={`${baseSpeed.gradient3}s`}
              repeatCount="indefinite"
            />
          </stop>
        </radialGradient>

        <filter id="blur">
          <feGaussianBlur in="SourceGraphic" stdDeviation="15" />
        </filter>
      </defs>

      <rect width="1600" height="600" fill="#d1f0f5" rx="20">
        <animate
          attributeName="fill"
          values="#d1f0f5;#d8eba3;#d1f0f5"
          dur={`${baseSpeed.rect}s`}
          repeatCount="indefinite"
        />
      </rect>

      <circle
        cx="400"
        cy="250"
        r="350"
        fill="url(#grad1)"
        filter="url(#blur)"
        opacity="0.95"
      >
        <animate
          attributeName="cx"
          values="400;420;380;400"
          dur={`${baseSpeed.circle1Cx}s`}
          repeatCount="indefinite"
        />
        <animate
          attributeName="cy"
          values="250;270;230;250"
          dur={`${baseSpeed.circle1Cy}s`}
          repeatCount="indefinite"
        />
        <animate
          attributeName="r"
          values="350;370;340;350"
          dur={`${baseSpeed.circle1R}s`}
          repeatCount="indefinite"
        />
      </circle>

      <circle
        cx="1200"
        cy="400"
        r="400"
        fill="url(#grad2)"
        filter="url(#blur)"
        opacity="0.98"
      >
        <animate
          attributeName="cx"
          values="1200;1180;1210;1200"
          dur={`${baseSpeed.circle2Cx}s`}
          repeatCount="indefinite"
        />
        <animate
          attributeName="cy"
          values="400;420;385;400"
          dur={`${baseSpeed.circle2Cy}s`}
          repeatCount="indefinite"
        />
        <animate
          attributeName="r"
          values="400;415;395;400"
          dur={`${baseSpeed.circle2R}s`}
          repeatCount="indefinite"
        />
      </circle>

      <circle
        cx="800"
        cy="300"
        r="300"
        fill="url(#grad3)"
        filter="url(#blur)"
        opacity="0.9"
      >
        <animate
          attributeName="cx"
          values="800;815;785;800"
          dur={`${baseSpeed.circle3Cx}s`}
          repeatCount="indefinite"
        />
        <animate
          attributeName="cy"
          values="300;315;285;300"
          dur={`${baseSpeed.circle3Cy}s`}
          repeatCount="indefinite"
        />
        <animate
          attributeName="r"
          values="300;320;290;300"
          dur={`${baseSpeed.circle3R}s`}
          repeatCount="indefinite"
        />
      </circle>

      <circle
        cx="200"
        cy="500"
        r="250"
        fill="#d8eba3"
        filter="url(#blur)"
        opacity="0.85"
      >
        <animate
          attributeName="fill"
          values="#d8eba3;#d1f0f5;#d8eba3"
          dur={`${baseSpeed.circle4Fill}s`}
          repeatCount="indefinite"
        />
        <animate
          attributeName="cx"
          values="200;215;185;200"
          dur={`${baseSpeed.circle4Cx}s`}
          repeatCount="indefinite"
        />
        <animate
          attributeName="cy"
          values="500;515;485;500"
          dur={`${baseSpeed.circle4Cy}s`}
          repeatCount="indefinite"
        />
        <animate
          attributeName="r"
          values="250;265;240;250"
          dur={`${baseSpeed.circle4R}s`}
          repeatCount="indefinite"
        />
      </circle>

      <circle
        cx="1400"
        cy="200"
        r="280"
        fill="#d1f0f5"
        filter="url(#blur)"
        opacity="0.88"
      >
        <animate
          attributeName="fill"
          values="#d1f0f5;#d8eba3;#d1f0f5"
          dur={`${baseSpeed.circle5Fill}s`}
          repeatCount="indefinite"
        />
        <animate
          attributeName="cx"
          values="1400;1385;1415;1400"
          dur={`${baseSpeed.circle5Cx}s`}
          repeatCount="indefinite"
        />
        <animate
          attributeName="cy"
          values="200;215;185;200"
          dur={`${baseSpeed.circle5Cy}s`}
          repeatCount="indefinite"
        />
        <animate
          attributeName="r"
          values="280;295;270;280"
          dur={`${baseSpeed.circle5R}s`}
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
}
