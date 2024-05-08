import { motion } from "framer-motion"
import { ReactNode } from "react"

export default function Inner({ children }: { children: ReactNode }) {
    const animation = (variants: any) => {
        return {
            initial: "initial",
            animate: "enter",
            exit: "exit",
            variants,
        }
    }
    const overlay = {
        initial: {
            transform: "translate3D(0, 0, 0)",
        },
        enter: {
            transform: "translate3D(0, -100vh, 0)",
            transition: {
                duration: 0.8,
                ease: [0,0,.5,1],
            },
        },
        exit: {
            transform: ["translate3D(0, 100vh, 0)", "translate3D(0, 0, 0)"],
            transition: {
                duration: 0.8,
                ease: [.5,0,1,1],
            },
        }
    }

    const inner = {
        initial: {
            scale: 0.8,
        },
        enter: {
            scale: 1,
            transition: {
                duration: .8
            }
        },
        exit: {
            transform: "translate3D(0, 160px, 0)",
            opacity: 0,
            transition: {
                duration: .8,
            },
        }
    }

    return (
        <main className="page">
            <motion.div
                {...animation(overlay)}
                className="h-screen w-screen bg-red-700 absolute pointer-events-none z-10"
            ></motion.div>
            <motion.div {...animation(inner)}>{children}</motion.div>
        </main>
    )
}
