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
          <stop offset="100%" style={{ stopColor: "#d1f0f5", stopOpacity: 0.3 }} />
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
          <stop offset="100%" style={{ stopColor: "#e5f0c0", stopOpacity: 0.3 }} />
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
          <stop offset="100%" style={{ stopColor: "#d8f0e5", stopOpacity: 0.25 }} />
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
          <stop offset="60%" style={{ stopColor: "#b5e5ed", stopOpacity: 0.5 }} />
          <stop offset="100%" style={{ stopColor: "#d1f0f5", stopOpacity: 0.2 }} />
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
          <stop offset="50%" style={{ stopColor: "#d0e8a0", stopOpacity: 0.6 }} />
          <stop offset="100%" style={{ stopColor: "#e0edb5", stopOpacity: 0.2 }} />
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
          values="200;280;320;250;200"
          dur={`${baseSpeed.circle1Cx}s`}
          repeatCount="indefinite"
        />
        <animate
          attributeName="cy"
          values="200;180;220;210;200"
          dur={`${baseSpeed.circle1Cy}s`}
          repeatCount="indefinite"
        />
        <animate
          attributeName="r"
          values="280;310;270;300;280"
          dur={`${baseSpeed.circle1R}s`}
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
          values="350;420;480;400;350"
          dur={`${baseSpeed.circle5Cx}s`}
          repeatCount="indefinite"
        />
        <animate
          attributeName="cy"
          values="280;260;295;275;280"
          dur={`${baseSpeed.circle5Cy}s`}
          repeatCount="indefinite"
        />
        <animate
          attributeName="r"
          values="200;220;190;215;200"
          dur={`${baseSpeed.circle5R}s`}
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
          values="800;750;850;780;800"
          dur={`${baseSpeed.circle2Cx}s`}
          repeatCount="indefinite"
        />
        <animate
          attributeName="cy"
          values="200;240;160;220;200"
          dur={`${baseSpeed.circle2Cy}s`}
          repeatCount="indefinite"
        />
        <animate
          attributeName="r"
          values="300;330;290;320;300"
          dur={`${baseSpeed.circle2R}s`}
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
          values="700;760;640;720;700"
          dur={`${baseSpeed.circle6Cx}s`}
          repeatCount="indefinite"
        />
        <animate
          attributeName="cy"
          values="120;80;140;100;120"
          dur={`${baseSpeed.circle6Cy}s`}
          repeatCount="indefinite"
        />
        <animate
          attributeName="r"
          values="180;200;170;195;180"
          dur={`${baseSpeed.circle6R}s`}
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
          values="1400;1320;1280;1350;1400"
          dur={`${baseSpeed.circle3Cx}s`}
          repeatCount="indefinite"
        />
        <animate
          attributeName="cy"
          values="200;220;180;210;200"
          dur={`${baseSpeed.circle3Cy}s`}
          repeatCount="indefinite"
        />
        <animate
          attributeName="r"
          values="280;310;270;300;280"
          dur={`${baseSpeed.circle3R}s`}
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
          values="1250;1180;1120;1200;1250"
          dur={`${baseSpeed.circle4Cx}s`}
          repeatCount="indefinite"
        />
        <animate
          attributeName="cy"
          values="280;295;265;285;280"
          dur={`${baseSpeed.circle4Cy}s`}
          repeatCount="indefinite"
        />
        <animate
          attributeName="r"
          values="200;220;190;215;200"
          dur={`${baseSpeed.circle4R}s`}
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
          values="550;600;580;520;550"
          dur={`${baseSpeed.circle7Cx}s`}
          repeatCount="indefinite"
        />
        <animate
          attributeName="cy"
          values="200;240;160;180;200"
          dur={`${baseSpeed.circle7Cy}s`}
          repeatCount="indefinite"
        />
        <animate
          attributeName="r"
          values="220;240;210;235;220"
          dur={`${baseSpeed.circle7R}s`}
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
          values="1050;1000;1080;1020;1050"
          dur={`${baseSpeed.circle7Cx}s`}
          repeatCount="indefinite"
        />
        <animate
          attributeName="cy"
          values="200;240;160;220;200"
          dur={`${baseSpeed.circle7Cy}s`}
          repeatCount="indefinite"
        />
        <animate
          attributeName="r"
          values="220;240;210;235;220"
          dur={`${baseSpeed.circle7R}s`}
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
}