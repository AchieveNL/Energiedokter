export default function AnimatedBg() {
  return (
    <svg
      className="w-full h-full"
      viewBox="0 0 1600 600"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="grad1" cx="30%" cy="40%">
          <stop offset="0%" style={{ stopColor: "#cfeedd", stopOpacity: 1 }}>
            <animate
              attributeName="stop-color"
              values="#cfeedd;#d9eecd;#d2f0f4;#cfeedd"
              dur="20s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="50%" style={{ stopColor: "#d0eedc", stopOpacity: 1 }}>
            <animate
              attributeName="stop-color"
              values="#d0eedc;#dcedab;#d8eecc;#d0eedc"
              dur="20s"
              repeatCount="indefinite"
            />
          </stop>
          <stop
            offset="100%"
            style={{ stopColor: "#d2f0f4", stopOpacity: 0.8 }}
          >
            <animate
              attributeName="stop-color"
              values="#d2f0f4;#e0ec9a;#cfeedd;#d2f0f4"
              dur="20s"
              repeatCount="indefinite"
            />
          </stop>
        </radialGradient>

        <radialGradient id="grad2" cx="70%" cy="60%">
          <stop offset="0%" style={{ stopColor: "#e0ec9a", stopOpacity: 1 }}>
            <animate
              attributeName="stop-color"
              values="#e0ec9a;#d2f0f4;#d9eecd;#e0ec9a"
              dur="18s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="50%" style={{ stopColor: "#dcedab", stopOpacity: 1 }}>
            <animate
              attributeName="stop-color"
              values="#dcedab;#cfeedd;#d8eecc;#dcedab"
              dur="18s"
              repeatCount="indefinite"
            />
          </stop>
          <stop
            offset="100%"
            style={{ stopColor: "#d9eecd", stopOpacity: 0.8 }}
          >
            <animate
              attributeName="stop-color"
              values="#d9eecd;#d0eedc;#e0ec9a;#d9eecd"
              dur="18s"
              repeatCount="indefinite"
            />
          </stop>
        </radialGradient>

        <radialGradient id="grad3" cx="50%" cy="50%">
          <stop offset="0%" style={{ stopColor: "#d8eecc", stopOpacity: 0.9 }}>
            <animate
              attributeName="stop-color"
              values="#d8eecc;#e0ec9a;#d0eedc;#d8eecc"
              dur="22s"
              repeatCount="indefinite"
            />
          </stop>
          <stop
            offset="100%"
            style={{ stopColor: "#d2f0f4", stopOpacity: 0.7 }}
          >
            <animate
              attributeName="stop-color"
              values="#d2f0f4;#d9eecd;#cfeedd;#d2f0f4"
              dur="22s"
              repeatCount="indefinite"
            />
          </stop>
        </radialGradient>

        <filter id="blur">
          <feGaussianBlur in="SourceGraphic" stdDeviation="80" />
        </filter>
      </defs>

      <rect width="1600" height="600" fill="#d2f0f4" rx="20">
        <animate
          attributeName="fill"
          values="#d2f0f4;#d8eecc;#d9eecd;#d2f0f4"
          dur="25s"
          repeatCount="indefinite"
        />
      </rect>

      <circle
        cx="400"
        cy="250"
        r="350"
        fill="url(#grad1)"
        filter="url(#blur)"
        opacity="0.8"
      >
        <animate
          attributeName="cx"
          values="400;450;380;400"
          dur="30s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="cy"
          values="250;280;230;250"
          dur="35s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="r"
          values="350;380;340;350"
          dur="28s"
          repeatCount="indefinite"
        />
      </circle>

      <circle
        cx="1200"
        cy="400"
        r="400"
        fill="url(#grad2)"
        filter="url(#blur)"
        opacity="0.9"
      >
        <animate
          attributeName="cx"
          values="1200;1150;1220;1200"
          dur="32s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="cy"
          values="400;430;380;400"
          dur="38s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="r"
          values="400;420;390;400"
          dur="30s"
          repeatCount="indefinite"
        />
      </circle>

      <circle
        cx="800"
        cy="300"
        r="300"
        fill="url(#grad3)"
        filter="url(#blur)"
        opacity="0.7"
      >
        <animate
          attributeName="cx"
          values="800;820;780;800"
          dur="34s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="cy"
          values="300;320;280;300"
          dur="36s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="r"
          values="300;330;290;300"
          dur="32s"
          repeatCount="indefinite"
        />
      </circle>

      <circle
        cx="200"
        cy="500"
        r="250"
        fill="#d9eecd"
        filter="url(#blur)"
        opacity="0.6"
      >
        <animate
          attributeName="fill"
          values="#d9eecd;#e0ec9a;#cfeedd;#d9eecd"
          dur="24s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="cx"
          values="200;230;180;200"
          dur="36s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="cy"
          values="500;520;480;500"
          dur="40s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="r"
          values="250;270;240;250"
          dur="26s"
          repeatCount="indefinite"
        />
      </circle>

      <circle
        cx="1400"
        cy="200"
        r="280"
        fill="#cfeedd"
        filter="url(#blur)"
        opacity="0.7"
      >
        <animate
          attributeName="fill"
          values="#cfeedd;#d2f0f4;#dcedab;#cfeedd"
          dur="26s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="cx"
          values="1400;1380;1420;1400"
          dur="38s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="cy"
          values="200;220;180;200"
          dur="42s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="r"
          values="280;300;270;280"
          dur="28s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
}
