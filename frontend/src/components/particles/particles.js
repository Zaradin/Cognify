// import { useEffect, useState } from "react";
// import Particles from "@tsparticles/react";
// import { initParticlesEngine } from "@tsparticles/react";
// import { loadSlim } from "@tsparticles/slim"; // Import only the slim version to reduce bundle size

// const ParticlesComponent = () => {
//     const [init, setInit] = useState(false);

//     // This effect runs only once when the component is mounted
//     useEffect(() => {
//         initParticlesEngine(async (engine) => {
//             // Initialize the tsParticles engine and load the slim version
//             await loadSlim(engine);
//         }).then(() => {
//             setInit(true); // Set the particles to load after initialization
//         });
//     }, []);

//     const particlesLoaded = (container) => {
//         console.log(container); // Optionally handle particles loaded event
//     };

//     return (
//         init && (
//             <Particles
//                 id="tsparticles"
//                 particlesLoaded={particlesLoaded}
//                 options={{
//                     background: {
//                         color: {
//                             value: "#0d47a1", // Background color
//                         },
//                     },
//                     particles: {
//                         number: { value: 100 },
//                         size: { value: 3 },
//                         move: {
//                             enable: true,
//                             speed: 1,
//                         },
//                         shape: {
//                             type: "circle",
//                         },
//                         color: {
//                             value: "#ffffff", // Particle color
//                         },
//                     },
//                 }}
//             />
//         )
//     );
// };

// export default ParticlesComponent;
