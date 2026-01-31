export default function SectionAnimatedBg({ speed = 1 }) {
  const baseSpeed = {
    gradient1: 8 / speed,
    gradient2: 7 / speed,
    gradient3: 9 / speed,
    gradient4: 7.5 / speed,
    gradient5: 8.5 / speed,
    rect: 12 / speed,
    circle1: 15 / speed,
    circle2: 18 / speed,
    circle3: 16 / speed,
    circle4: 14 / speed,
    circle5: 17 / speed,
    circle6: 19 / speed,
    circle7: 13 / speed,
  };

  return (
    <svg
      className="w-full h-full"
      viewBox="0 0 1600 400"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Blue gradient for left/right areas */}
        <radialGradient id="smoke1" cx="50%" cy="50%">
          <stop offset="0%" style={{ stopColor: "#a8e0f0", stopOpacity: 1 }}>
            <animate
              attributeName="stop-color"
              values="#a8e0f0;#90d5eb;#b5e5f3;#a8e0f0"
              dur={`${baseSpeed.gradient1}s`}
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="50%" style={{ stopColor: "#c8e9ef", stopOpacity: 0.7 }}>
            <animate
              attributeName="stop-color"
              values="#c8e9ef;#b0e0ec;#d0ecf2;#c8e9ef"
              dur={`${baseSpeed.gradient1}s`}
              repeatCount="indefinite"
            />
          </stop>
          <stop
            offset="100%"
            style={{ stopColor: "#d1f0f5", stopOpacity: 0.3 }}
          />
        </radialGradient>

        {/* Green gradient for center */}
        <radialGradient id="smoke2" cx="50%" cy="50%">
          <stop offset="0%" style={{ stopColor: "#c5e58a", stopOpacity: 1 }}>
            <animate
              attributeName="stop-color"
              values="#c5e58a;#b8df78;#d0e895;#c5e58a"
              dur={`${baseSpeed.gradient2}s`}
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="50%" style={{ stopColor: "#d8eba3", stopOpacity: 0.7 }}>
            <animate
              attributeName="stop-color"
              values="#d8eba3;#cce590;#e0edb5;#d8eba3"
              dur={`${baseSpeed.gradient2}s`}
              repeatCount="indefinite"
            />
          </stop>
          <stop
            offset="100%"
            style={{ stopColor: "#e5f0c0", stopOpacity: 0.3 }}
          />
        </radialGradient>

        {/* Transition gradient - blue-green */}
        <radialGradient id="smoke3" cx="50%" cy="50%">
          <stop offset="0%" style={{ stopColor: "#b5dfc8", stopOpacity: 0.95 }}>
            <animate
              attributeName="stop-color"
              values="#b5dfc8;#a5d8bd;#c0e5d0;#b5dfc8"
              dur={`${baseSpeed.gradient3}s`}
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="50%" style={{ stopColor: "#c8e9d5", stopOpacity: 0.6 }}>
            <animate
              attributeName="stop-color"
              values="#c8e9d5;#b8e0c8;#d0ecdb;#c8e9d5"
              dur={`${baseSpeed.gradient3}s`}
              repeatCount="indefinite"
            />
          </stop>
          <stop
            offset="100%"
            style={{ stopColor: "#d8f0e5", stopOpacity: 0.25 }}
          />
        </radialGradient>

        {/* Accent gradient */}
        <radialGradient id="smoke4" cx="50%" cy="50%">
          <stop offset="0%" style={{ stopColor: "#95d5e0", stopOpacity: 0.9 }}>
            <animate
              attributeName="stop-color"
              values="#95d5e0;#85ccd8;#a0dce5;#95d5e0"
              dur={`${baseSpeed.gradient4}s`}
              repeatCount="indefinite"
            />
          </stop>
          <stop
            offset="60%"
            style={{ stopColor: "#b5e5ed", stopOpacity: 0.5 }}
          />
          <stop
            offset="100%"
            style={{ stopColor: "#d1f0f5", stopOpacity: 0.2 }}
          />
        </radialGradient>

        {/* Accent gradient green */}
        <radialGradient id="smoke5" cx="50%" cy="50%">
          <stop offset="0%" style={{ stopColor: "#b8e085", stopOpacity: 0.9 }}>
            <animate
              attributeName="stop-color"
              values="#b8e085;#a8d575;#c5e890;#b8e085"
              dur={`${baseSpeed.gradient5}s`}
              repeatCount="indefinite"
            />
          </stop>
          <stop
            offset="50%"
            style={{ stopColor: "#d0e8a0", stopOpacity: 0.6 }}
          />
          <stop
            offset="100%"
            style={{ stopColor: "#e0edb5", stopOpacity: 0.2 }}
          />
        </radialGradient>

        <filter id="blur-smoke">
          <feGaussianBlur in="SourceGraphic" stdDeviation="30" />
        </filter>

        <filter id="blur-soft">
          <feGaussianBlur in="SourceGraphic" stdDeviation="45" />
        </filter>
      </defs>

      {/* Base background - neutral tone */}
      <rect width="1600" height="400" fill="#ddedb5" rx="20">
        <animate
          attributeName="fill"
          values="#ddedb5;#d5ead8;#e0eec0;#ddedb5"
          dur={`${baseSpeed.rect}s`}
          repeatCount="indefinite"
        />
      </rect>

      {/* LEFT SECTION - Blue tones */}
      <circle
        cx="200"
        cy="200"
        r="280"
        fill="url(#smoke1)"
        filter="url(#blur-soft)"
        opacity="0.85"
      >
        <animate
          attributeName="cx"
          values="200;350;150;280;200"
          dur={`${baseSpeed.circle1}s`}
          repeatCount="indefinite"
        />
        <animate
          attributeName="cy"
          values="200;100;280;150;200"
          dur={`${baseSpeed.circle1}s`}
          repeatCount="indefinite"
        />
        <animate
          attributeName="r"
          values="280;350;240;310;280"
          dur={`${baseSpeed.circle1}s`}
          repeatCount="indefinite"
        />
      </circle>

      <circle
        cx="350"
        cy="280"
        r="200"
        fill="url(#smoke4)"
        filter="url(#blur-smoke)"
        opacity="0.75"
      >
        <animate
          attributeName="cx"
          values="350;480;320;420;350"
          dur={`${baseSpeed.circle5}s`}
          repeatCount="indefinite"
        />
        <animate
          attributeName="cy"
          values="280;180;340;240;280"
          dur={`${baseSpeed.circle5}s`}
          repeatCount="indefinite"
        />
        <animate
          attributeName="r"
          values="200;260;180;230;200"
          dur={`${baseSpeed.circle5}s`}
          repeatCount="indefinite"
        />
      </circle>

      {/* CENTER SECTION - Green tones */}
      <circle
        cx="800"
        cy="200"
        r="300"
        fill="url(#smoke2)"
        filter="url(#blur-soft)"
        opacity="0.88"
      >
        <animate
          attributeName="cx"
          values="800;680;920;750;800"
          dur={`${baseSpeed.circle2}s`}
          repeatCount="indefinite"
        />
        <animate
          attributeName="cy"
          values="200;300;100;250;200"
          dur={`${baseSpeed.circle2}s`}
          repeatCount="indefinite"
        />
        <animate
          attributeName="r"
          values="300;380;260;340;300"
          dur={`${baseSpeed.circle2}s`}
          repeatCount="indefinite"
        />
      </circle>

      <circle
        cx="700"
        cy="120"
        r="180"
        fill="url(#smoke5)"
        filter="url(#blur-smoke)"
        opacity="0.72"
      >
        <animate
          attributeName="cx"
          values="700;820;600;760;700"
          dur={`${baseSpeed.circle6}s`}
          repeatCount="indefinite"
        />
        <animate
          attributeName="cy"
          values="120;40;200;80;120"
          dur={`${baseSpeed.circle6}s`}
          repeatCount="indefinite"
        />
        <animate
          attributeName="r"
          values="180;240;160;210;180"
          dur={`${baseSpeed.circle6}s`}
          repeatCount="indefinite"
        />
      </circle>

      {/* RIGHT SECTION - Blue tones */}
      <circle
        cx="1400"
        cy="200"
        r="280"
        fill="url(#smoke1)"
        filter="url(#blur-soft)"
        opacity="0.85"
      >
        <animate
          attributeName="cx"
          values="1400;1250;1450;1320;1400"
          dur={`${baseSpeed.circle3}s`}
          repeatCount="indefinite"
        />
        <animate
          attributeName="cy"
          values="200;300;100;250;200"
          dur={`${baseSpeed.circle3}s`}
          repeatCount="indefinite"
        />
        <animate
          attributeName="r"
          values="280;350;240;310;280"
          dur={`${baseSpeed.circle3}s`}
          repeatCount="indefinite"
        />
      </circle>

      <circle
        cx="1250"
        cy="280"
        r="200"
        fill="url(#smoke4)"
        filter="url(#blur-smoke)"
        opacity="0.75"
      >
        <animate
          attributeName="cx"
          values="1250;1120;1280;1180;1250"
          dur={`${baseSpeed.circle4}s`}
          repeatCount="indefinite"
        />
        <animate
          attributeName="cy"
          values="280;360;180;320;280"
          dur={`${baseSpeed.circle4}s`}
          repeatCount="indefinite"
        />
        <animate
          attributeName="r"
          values="200;260;180;230;200"
          dur={`${baseSpeed.circle4}s`}
          repeatCount="indefinite"
        />
      </circle>

      {/* TRANSITION areas - Blue-green blend */}
      <circle
        cx="550"
        cy="200"
        r="220"
        fill="url(#smoke3)"
        filter="url(#blur-soft)"
        opacity="0.7"
      >
        <animate
          attributeName="cx"
          values="550;650;480;600;550"
          dur={`${baseSpeed.circle7}s`}
          repeatCount="indefinite"
        />
        <animate
          attributeName="cy"
          values="200;300;120;260;200"
          dur={`${baseSpeed.circle7}s`}
          repeatCount="indefinite"
        />
        <animate
          attributeName="r"
          values="220;280;190;250;220"
          dur={`${baseSpeed.circle7}s`}
          repeatCount="indefinite"
        />
      </circle>

      <circle
        cx="1050"
        cy="200"
        r="220"
        fill="url(#smoke3)"
        filter="url(#blur-soft)"
        opacity="0.7"
      >
        <animate
          attributeName="cx"
          values="1050;950;1120;1000;1050"
          dur={`${baseSpeed.circle7}s`}
          repeatCount="indefinite"
        />
        <animate
          attributeName="cy"
          values="200;300;100;260;200"
          dur={`${baseSpeed.circle7}s`}
          repeatCount="indefinite"
        />
        <animate
          attributeName="r"
          values="220;280;190;250;220"
          dur={`${baseSpeed.circle7}s`}
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
}
