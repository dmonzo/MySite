declare module 'particles.js' {
    const particlesJS: any;
    export = particlesJS;
  }
  
  declare global {
    interface Window {
      particlesJS: any;
      pJSDom: {
        pJS: {
          fn: {
            vendors: {
              destroypJS: () => void;
            };
          };
        };
      }[];
    }
  }
  
  