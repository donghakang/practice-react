//@flow
import React, { useState, useEffect } from "react";
import { Shaders, Node } from "gl-react";
import { Surface } from "gl-react-dom";

const shaders = Shaders.create({
  FBM: {
    frag: `
    precision mediump float;
    
    varying vec2 uv;
    uniform vec2 u_resolution;
    uniform vec2 u_center;
    uniform float u_time;
    uniform float u_radius;
    
    float variation(vec2 v1, vec2 v2, float strength, float speed) {
      return sin(
            dot(normalize(v1), normalize(v2)) * strength * speed
        ) / 100.0;
    }
    
    vec3 paintCircle (vec2 uv, vec2 center, float rad, float width) {
        
        vec2 diff = center-uv;
        float len = length(diff);
    
        len += variation(diff, vec2(0.0, 1.0), 2.0, 2.0);
        len -= variation(diff, vec2(1.0, 0.0), 2.0, 2.0);
        
        float circle = smoothstep(rad, rad+width, len);
        return vec3(circle);
    }

    void main () {
      vec2 p = (2.0 * gl_FragCoord.xy - u_resolution) / max(u_resolution.x, u_resolution.y);

      for (int i = 1; i < 20; i ++) {
        vec2 newp = p + u_time * 0.001;
        newp.x += 0.9 / float(i) * sin(float(i) * p.y + u_time / 50.0 + 0.3 * float(i)) + 0.5;
        newp.y += 0.6 / float(i) * sin(float(i) * p.x + u_time / 25.0 + 0.3 * float(i+10)) - 0.5;
        p = newp;
      }

      vec3 col = vec3(0.4, 0.075 * sin(3.0 * p.y) + 0.5, 0.9);

      // circle
      // float d = 2. * distance(uv, vec2(0.5));
      // vec4 color = mix(vec4(col, 1.0), vec4(0.), step(1., d));

      
      vec4 color = vec4(col, 1.);
    
      // distorted circle
      // float radius = 0.6;

      color += vec4(paintCircle(uv, u_center, u_radius, .01), 1.);

      gl_FragColor = color;
      // gl_FragColor = vec4(paintCircle(uv, center, u_radius, .01), 1.);
    }

    `,
  },
});

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

const MarbleEffect = (props) => {
  const [time, setTime] = useState(0);
  const [dim, setDim] = useState(getWindowDimensions());

  useEffect(() => {
    let startT;
    let h;
    function loop(t) {
      h = requestAnimationFrame(loop);
      if (!startT) startT = t;
      setTime((t - startT) / 100);
    }
    h = requestAnimationFrame(loop);

    return () => cancelAnimationFrame(h);
  }, []);

  useEffect(() => {
    function handleResize() {
      setDim(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div style={{ marginLeft: "0px" }}>
      {dim.width > dim.height ? (
        <Surface width={dim.height} height={dim.height}>
          <Node
            shader={shaders.FBM}
            uniforms={{
              u_resolution: [300, 300],
              u_time: time,
              u_center: [0.3, 0.3],
              u_radius: 0.6,
            }}
          />
        </Surface>
      ) : (
        <Surface width={dim.width + 200} height={dim.width + 200}>
          <Node
            shader={shaders.FBM}
            uniforms={{
              u_resolution: [300, 300],
              u_time: time,
              u_center: [0.5, 0.5],
              u_radius: 0.4,
            }}
          />
        </Surface>
      )}
    </div>
  );
};

// module.exports = HelloGL;
export default MarbleEffect;
