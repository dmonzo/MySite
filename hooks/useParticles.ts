"use client"

import { useEffect } from 'react'
import { type Container, type Engine } from "@tsparticles/engine"

export const useParticles = () => {
  useEffect(() => {
    const initParticles = async () => {
      try {
        const { tsParticles } = await import("@tsparticles/engine")
        const { loadSlim } = await import("@tsparticles/slim")
        
        await loadSlim(tsParticles)
        
        const container = await tsParticles.load({
          id: "particles-js",
          options: {
            background: {
              color: {
                value: "transparent"
              }
            },
            particles: {
              number: {
                value: 80,
                density: {
                  enable: true
                }
              },
              color: {
                value: "#ffffff"
              },
              shape: {
                type: "circle"
              },
              opacity: {
                value: 0.5
              },
              size: {
                value: 3
              },
              links: {
                enable: true,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1
              },
              move: {
                enable: true,
                speed: 6,
                direction: "none",
                random: false,
                straight: false,
                outModes: {
                  default: "out"
                }
              }
            },
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: "repulse"
                },
                onClick: {
                  enable: true,
                  mode: "push"
                },
                resize: {
                  enable: true,
                  delay: 0.5
                }
              },
              modes: {
                repulse: {
                  distance: 200,
                  duration: 0.4
                },
                push: {
                  quantity: 4
                }
              }
            }
          }
        })

        return container
      } catch (error) {
        console.error("Error initializing particles:", error)
        return null
      }
    }

    const containerPromise = initParticles()

    return () => {
      const cleanup = async () => {
        const container = await containerPromise
        if (container) {
          await container.destroy()
        }
      }
      cleanup()
    }
  }, [])
}

