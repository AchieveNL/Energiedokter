export default function SectionAnimatedBg({ speed = 1 }) {
  const baseSpeed = {
    gradient1: 25 / speed,
    gradient2: 22 / speed,
    gradient3: 28 / speed,
    gradient4: 24 / speed,
    gradient5: 26 / speed,
    rect: 30 / speed,
    circle1Cx: 35 / speed,
    circle1Cy: 40 / speed,
    circle1R: 33 / speed,
    circle2Cx: 38 / speed,
    circle2Cy: 42 / speed,
    circle2R: 36 / speed,
    circle3Cx: 40 / speed,
    circle3Cy: 38 / speed,
    circle3R: 35 / speed,
    circle4Cx: 42 / speed,
    circle4Cy: 45 / speed,
    circle4R: 40 / speed,
    circle5Cx: 44 / speed,
    circle5Cy: 48 / speed,
    circle5R: 38 / speed,
    circle6Cx: 46 / speed,
    circle6Cy: 43 / speed,
    circle6R: 41 / speed,
    circle7Cx: 39 / speed,
    circle7Cy: 47 / speed,
    circle7R: 37 / speed,
  };

  return (
    <svg
      className="w-full h-full"
      viewBox="0 0 1600 400"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="smoke1" cx="50%" cy="50%">
          <stop offset="0%" style={{ stopColor: "#d1f0f5", stopOpacity: 0.95 }}>
            <animate
              attributeName="stop-color"
              values="#d1f0f5;#c8e9ef;#d8f2f7;#d1f0f5"
              dur={`${baseSpeed.gradient1}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="stop-opacity"
              values="0.95;0.85;0.9;0.95"
              dur={`${baseSpeed.gradient1}s`}
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="40%" style={{ stopColor: "#daf1f3", stopOpacity: 0.7 }}>
            <animate
              attributeName="stop-color"
              values="#daf1f3;#d1f0f5;#e0f3f5;#daf1f3"
              dur={`${baseSpeed.gradient1}s`}
              repeatCount="indefinite"
            />
          </stop>
          <stop
            offset="100%"
            style={{ stopColor: "#d8eba3", stopOpacity: 0.3 }}
          >
            <animate
              attributeName="stop-color"
              values="#d8eba3;#e0edb5;#d8eba3"
              dur={`${baseSpeed.gradient1}s`}
              repeatCount="indefinite"
            />
          </stop>
        </radialGradient>

        <radialGradient id="smoke2" cx="50%" cy="50%">
          <stop offset="0%" style={{ stopColor: "#d8eba3", stopOpacity: 0.9 }}>
            <animate
              attributeName="stop-color"
              values="#d8eba3;#e2edb8;#d0e89a;#d8eba3"
              dur={`${baseSpeed.gradient2}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="stop-opacity"
              values="0.9;0.8;0.85;0.9"
              dur={`${baseSpeed.gradient2}s`}
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="45%" style={{ stopColor: "#ddedb0", stopOpacity: 0.6 }}>
            <animate
              attributeName="stop-color"
              values="#ddedb0;#d8eba3;#e0edb5;#ddedb0"
              dur={`${baseSpeed.gradient2}s`}
              repeatCount="indefinite"
            />
          </stop>
          <stop
            offset="100%"
            style={{ stopColor: "#d1f0f5", stopOpacity: 0.2 }}
          >
            <animate
              attributeName="stop-color"
              values="#d1f0f5;#daf5f8;#d1f0f5"
              dur={`${baseSpeed.gradient2}s`}
              repeatCount="indefinite"
            />
          </stop>
        </radialGradient>

        <radialGradient id="smoke3" cx="50%" cy="50%">
          <stop offset="0%" style={{ stopColor: "#d1f0f5", stopOpacity: 0.85 }}>
            <animate
              attributeName="stop-color"
              values="#d1f0f5;#d8eba3;#d1f0f5"
              dur={`${baseSpeed.gradient3}s`}
              repeatCount="indefinite"
            />
          </stop>
          <stop
            offset="50%"
            style={{ stopColor: "#d8eba3", stopOpacity: 0.65 }}
          >
            <animate
              attributeName="stop-color"
              values="#d8eba3;#d1f0f5;#d8eba3"
              dur={`${baseSpeed.gradient3}s`}
              repeatCount="indefinite"
            />
          </stop>
          <stop
            offset="100%"
            style={{ stopColor: "#dcedb8", stopOpacity: 0.25 }}
          />
        </radialGradient>

        <radialGradient id="smoke4" cx="50%" cy="50%">
          <stop offset="0%" style={{ stopColor: "#d8eba3", stopOpacity: 0.8 }}>
            <animate
              attributeName="stop-color"
              values="#d8eba3;#d1f0f5;#e0edb0;#d8eba3"
              dur={`${baseSpeed.gradient4}s`}
              repeatCount="indefinite"
            />
          </stop>
          <stop
            offset="60%"
            style={{ stopColor: "#d5edb8", stopOpacity: 0.5 }}
          />
          <stop
            offset="100%"
            style={{ stopColor: "#d1f0f5", stopOpacity: 0.15 }}
          />
        </radialGradient>

        <radialGradient id="smoke5" cx="50%" cy="50%">
          <stop offset="0%" style={{ stopColor: "#d1f0f5", stopOpacity: 0.9 }}>
            <animate
              attributeName="stop-color"
              values="#d1f0f5;#d8eba3;#c8e9ef;#d1f0f5"
              dur={`${baseSpeed.gradient5}s`}
              repeatCount="indefinite"
            />
          </stop>
          <stop
            offset="35%"
            style={{ stopColor: "#d8eba3", stopOpacity: 0.7 }}
          />
          <stop
            offset="100%"
            style={{ stopColor: "#daf1f3", stopOpacity: 0.3 }}
          />
        </radialGradient>

        <filter id="blur-smoke">
          <feGaussianBlur in="SourceGraphic" stdDeviation="25" />
        </filter>

        <filter id="blur-soft">
          <feGaussianBlur in="SourceGraphic" stdDeviation="35" />
        </filter>
      </defs>

      <rect width="1600" height="400" fill="#d8eba3" rx="20">
        <animate
          attributeName="fill"
          values="#d8eba3;#d1f0f5;#ddedb0;#d8eba3"
          dur={`${baseSpeed.rect}s`}
          repeatCount="indefinite"
        />
      </rect>

      {/* Large smoke circles - more organic movement */}
      <circle
        cx="250"
        cy="200"
        r="220"
        fill="url(#smoke1)"
        filter="url(#blur-soft)"
        opacity="0.9"
      >
        <animate
          attributeName="cx"
          values="250;280;240;265;250"
          dur={`${baseSpeed.circle1Cx}s`}
          repeatCount="indefinite"
        />
        <animate
          attributeName="cy"
          values="200;190;220;185;200"
          dur={`${baseSpeed.circle1Cy}s`}
          repeatCount="indefinite"
        />
        <animate
          attributeName="r"
          values="220;250;210;240;220"
          dur={`${baseSpeed.circle1R}s`}
          repeatCount="indefinite"
        />
      </circle>

      <circle
        cx="600"
        cy="180"
        r="200"
        fill="url(#smoke2)"
        filter="url(#blur-soft)"
        opacity="0.85"
      >
        <animate
          attributeName="cx"
          values="600;620;580;610;600"
          dur={`${baseSpeed.circle2Cx}s`}
          repeatCount="indefinite"
        />
        <animate
          attributeName="cy"
          values="180;200;170;195;180"
          dur={`${baseSpeed.circle2Cy}s`}
          repeatCount="indefinite"
        />
        <animate
          attributeName="r"
          values="200;230;190;220;200"
          dur={`${baseSpeed.circle2R}s`}
          repeatCount="indefinite"
        />
      </circle>

      <circle
        cx="950"
        cy="220"
        r="240"
        fill="url(#smoke3)"
        filter="url(#blur-soft)"
        opacity="0.88"
      >
        <animate
          attributeName="cx"
          values="950;930;970;945;950"
          dur={`${baseSpeed.circle3Cx}s`}
          repeatCount="indefinite"
        />
        <animate
          attributeName="cy"
          values="220;240;200;230;220"
          dur={`${baseSpeed.circle3Cy}s`}
          repeatCount="indefinite"
        />
        <animate
          attributeName="r"
          values="240;270;230;260;240"
          dur={`${baseSpeed.circle3R}s`}
          repeatCount="indefinite"
        />
      </circle>

      <circle
        cx="1300"
        cy="190"
        r="210"
        fill="url(#smoke4)"
        filter="url(#blur-soft)"
        opacity="0.83"
      >
        <animate
          attributeName="cx"
          values="1300;1280;1320;1290;1300"
          dur={`${baseSpeed.circle4Cx}s`}
          repeatCount="indefinite"
        />
        <animate
          attributeName="cy"
          values="190;210;180;200;190"
          dur={`${baseSpeed.circle4Cy}s`}
          repeatCount="indefinite"
        />
        <animate
          attributeName="r"
          values="210;240;200;230;210"
          dur={`${baseSpeed.circle4R}s`}
          repeatCount="indefinite"
        />
      </circle>

      {/* Smaller accent circles for depth */}
      <circle
        cx="450"
        cy="280"
        r="160"
        fill="url(#smoke5)"
        filter="url(#blur-smoke)"
        opacity="0.75"
      >
        <animate
          attributeName="cx"
          values="450;470;430;460;450"
          dur={`${baseSpeed.circle5Cx}s`}
          repeatCount="indefinite"
        />
        <animate
          attributeName="cy"
          values="280;295;270;290;280"
          dur={`${baseSpeed.circle5Cy}s`}
          repeatCount="indefinite"
        />
        <animate
          attributeName="r"
          values="160;180;150;175;160"
          dur={`${baseSpeed.circle5R}s`}
          repeatCount="indefinite"
        />
      </circle>

      <circle
        cx="1100"
        cy="100"
        r="170"
        fill="url(#smoke1)"
        filter="url(#blur-smoke)"
        opacity="0.78"
      >
        <animate
          attributeName="cx"
          values="1100;1120;1080;1110;1100"
          dur={`${baseSpeed.circle6Cx}s`}
          repeatCount="indefinite"
        />
        <animate
          attributeName="cy"
          values="100;115;90;110;100"
          dur={`${baseSpeed.circle6Cy}s`}
          repeatCount="indefinite"
        />
        <animate
          attributeName="r"
          values="170;190;160;185;170"
          dur={`${baseSpeed.circle6R}s`}
          repeatCount="indefinite"
        />
      </circle>

      <circle
        cx="800"
        cy="320"
        r="150"
        fill="url(#smoke2)"
        filter="url(#blur-smoke)"
        opacity="0.72"
      >
        <animate
          attributeName="cx"
          values="800;815;785;810;800"
          dur={`${baseSpeed.circle7Cx}s`}
          repeatCount="indefinite"
        />
        <animate
          attributeName="cy"
          values="320;335;310;330;320"
          dur={`${baseSpeed.circle7Cy}s`}
          repeatCount="indefinite"
        />
        <animate
          attributeName="r"
          values="150;170;140;165;150"
          dur={`${baseSpeed.circle7R}s`}
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
}
