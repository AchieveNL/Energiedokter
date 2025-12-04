"use client";

import { useEffect, useRef, useState } from "react";

const vertexShader = `
attribute vec2 uv;
attribute vec2 position;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0, 1);
}
`;

const fragmentShader = `
precision highp float;
uniform float uTime;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uResolution;
uniform vec2 uMouse;
uniform float uAmplitude;
uniform float uSpeed;
uniform float uColorBalance;
varying vec2 vUv;
void main() {
  float mr = min(uResolution.x, uResolution.y);
  vec2 uv = (vUv.xy * 2.0 - 1.0) * uResolution.xy / mr;
  uv += (uMouse - vec2(0.5)) * uAmplitude;
  float d = -uTime * 0.5 * uSpeed;
  float a = 0.0;
  for (float i = 0.0; i < 8.0; ++i) {
    a += cos(i - d - a * uv.x);
    d += sin(uv.y * i + a);
  }
  d += uTime * 0.5 * uSpeed;
  vec3 col = vec3(cos(uv * vec2(d, a)) * 0.6 + 0.4, cos(a + d) * 0.5 + 0.5);
  float mixFactor = cos(col.x * cos(d) * 0.5 + 0.5);
  // Adjust mix factor based on color balance
  mixFactor = mixFactor * (1.0 - uColorBalance) + uColorBalance;
  col = mix(uColor1, uColor2, mixFactor);
  gl_FragColor = vec4(col, 1.0);
}
`;

interface IridescenceProps {
  speed?: number;
  amplitude?: number;
  mouseReact?: boolean;
  colorBalance?: number; // 0.0 = all color1, 1.0 = all color2, 0.5 = balanced
}

// Convert hex to RGB normalized values (0-1)
const hexToRgb = (hex: string): [number, number, number] => {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  return [r, g, b];
};

const COLOR_2 = hexToRgb("#F0F8E2"); // Light greenish-yellow
const COLOR_1 = hexToRgb("#81d0d653"); // Teal blue

export default function Iridescence({
  speed = 1.0,
  amplitude = 0.1,
  mouseReact = true,
  colorBalance = 0.5,
}: IridescenceProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePos = useRef({ x: 0.5, y: 0.5 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    // Small delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      const gl = canvas.getContext("webgl", { preserveDrawingBuffer: true });
      if (!gl) return;

      gl.clearColor(1, 1, 1, 1);

      // Create shader program
      const createShader = (type: number, source: string) => {
        const shader = gl.createShader(type);
        if (!shader) return null;
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
          console.error("Shader compile error:", gl.getShaderInfoLog(shader));
          gl.deleteShader(shader);
          return null;
        }
        return shader;
      };

      const vertShader = createShader(gl.VERTEX_SHADER, vertexShader);
      const fragShader = createShader(gl.FRAGMENT_SHADER, fragmentShader);

      if (!vertShader || !fragShader) return;

      const program = gl.createProgram();
      if (!program) return;

      gl.attachShader(program, vertShader);
      gl.attachShader(program, fragShader);
      gl.linkProgram(program);

      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error("Program link error:", gl.getProgramInfoLog(program));
        return;
      }

      gl.useProgram(program);

      // Create triangle geometry
      const positions = new Float32Array([-1, -1, 3, -1, -1, 3]);
      const uvs = new Float32Array([0, 0, 2, 0, 0, 2]);

      const posBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

      const posLoc = gl.getAttribLocation(program, "position");
      gl.enableVertexAttribArray(posLoc);
      gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

      const uvBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, uvBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, uvs, gl.STATIC_DRAW);

      const uvLoc = gl.getAttribLocation(program, "uv");
      gl.enableVertexAttribArray(uvLoc);
      gl.vertexAttribPointer(uvLoc, 2, gl.FLOAT, false, 0, 0);

      // Get uniform locations
      const uTime = gl.getUniformLocation(program, "uTime");
      const uColor1 = gl.getUniformLocation(program, "uColor1");
      const uColor2 = gl.getUniformLocation(program, "uColor2");
      const uResolution = gl.getUniformLocation(program, "uResolution");
      const uMouse = gl.getUniformLocation(program, "uMouse");
      const uAmplitude = gl.getUniformLocation(program, "uAmplitude");
      const uSpeed = gl.getUniformLocation(program, "uSpeed");
      const uColorBalance = gl.getUniformLocation(program, "uColorBalance");

      // Set initial uniforms
      gl.uniform3f(uColor1, ...COLOR_1);
      gl.uniform3f(uColor2, ...COLOR_2);
      gl.uniform2f(uMouse, mousePos.current.x, mousePos.current.y);
      gl.uniform1f(uAmplitude, amplitude);
      gl.uniform1f(uSpeed, speed);
      gl.uniform1f(uColorBalance, colorBalance);

      const resize = () => {
        if (!canvas.offsetWidth || !canvas.offsetHeight) return;

        const scale = window.devicePixelRatio || 1;
        const width = canvas.offsetWidth * scale;
        const height = canvas.offsetHeight * scale;

        canvas.width = width;
        canvas.height = height;

        gl.viewport(0, 0, width, height);
        gl.uniform3f(uResolution, width, height, width / height);
      };

      // Initial resize
      resize();

      // Use ResizeObserver for better detection
      const resizeObserver = new ResizeObserver(() => {
        resize();
      });

      resizeObserver.observe(canvas);
      window.addEventListener("resize", resize);

      let animateId: number;
      const update = (t: number) => {
        animateId = requestAnimationFrame(update);

        gl.uniform1f(uTime, t * 0.001);

        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.drawArrays(gl.TRIANGLES, 0, 3);
      };

      animateId = requestAnimationFrame(update);

      const handleMouseMove = (e: MouseEvent) => {
        const rect = canvas.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = 1.0 - (e.clientY - rect.top) / rect.height;
        mousePos.current = { x, y };
        gl.uniform2f(uMouse, x, y);
      };

      if (mouseReact) {
        canvas.addEventListener("mousemove", handleMouseMove);
      }

      return () => {
        cancelAnimationFrame(animateId);
        resizeObserver.disconnect();
        window.removeEventListener("resize", resize);
        if (mouseReact) {
          canvas.removeEventListener("mousemove", handleMouseMove);
        }
        gl.getExtension("WEBGL_lose_context")?.loseContext();
      };
    }, 50); // 50ms delay

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isClient, speed, amplitude, mouseReact, colorBalance]);

  return <canvas ref={canvasRef} className="w-full h-full" />;
}


