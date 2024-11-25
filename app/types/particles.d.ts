interface ParticlesConfig {
    particles: {
      number: {
        value: number;
        density: {
          enable: boolean;
          value_area: number;
        };
      };
      color: {
        value: string;
      };
      shape: {
        type: string;
        stroke: {
          width: number;
          color: string;
        };
      };
      opacity: {
        value: number;
        random: boolean;
        anim: {
          enable: boolean;
          speed: number;
          opacity_min: number;
          sync: boolean;
        };
      };
      size: {
        value: number;
        random: boolean;
        anim: {
          enable: boolean;
          speed: number;
          size_min: number;
          sync: boolean;
        };
      };
      line_linked: {
        enable: boolean;
        distance: number;
        color: string;
        opacity: number;
        width: number;
      };
      move: {
        enable: boolean;
        speed: number;
        direction: string;
        random: boolean;
        straight: boolean;
        out_mode: string;
        bounce: boolean;
        attract: {
          enable: boolean;
          rotateX: number;
          rotateY: number;
        };
      };
    };
    interactivity: {
      detect_on: string;
      events: {
        onhover: {
          enable: boolean;
          mode: string;
        };
        onclick: {
          enable: boolean;
          mode: string;
        };
        resize: boolean;
      };
      modes: {
        grab: {
          distance: number;
          line_linked: {
            opacity: number;
          };
        };
        bubble: {
          distance: number;
          size: number;
          duration: number;
          opacity: number;
          speed: number;
        };
        repulse: {
          distance: number;
          duration: number;
        };
        push: {
          particles_nb: number;
        };
        remove: {
          particles_nb: number;
        };
      };
    };
    retina_detect: boolean;
  }
  
  interface IParticlesJS {
    (elementId: string, config: ParticlesConfig): void;
  }
  
  interface ParticlesInstance {
    fn: {
      vendors: {
        destroypJS: () => void;
      };
    };
  }
  
  declare global {
    interface Window {
      particlesJS: IParticlesJS;
      pJSDom: Array<{
        pJS: ParticlesInstance;
      }>;
    }
  }
  
  declare module 'particles.js' {
    export = {};
  }
  
  