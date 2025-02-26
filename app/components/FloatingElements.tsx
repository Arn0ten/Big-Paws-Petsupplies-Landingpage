"use client";

import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PawPrint, Cat } from "lucide-react";

interface FloatingElement {
  id: number;
  x: number;
  y: number;
  scale: number;
  rotation: number;
  type: "paw" | "cat" | "claw";
  color: string;
}

const colors = [
  "#8B4513", // Brown
  "#D2691E", // Chocolate
  "#CD853F", // Peru
  "#DEB887", // Burlywood
  "#A0522D", // Sienna
];

export default function FloatingElements() {
  const [elements, setElements] = useState<FloatingElement[]>([]);

  const createElements = useCallback(() => {
    const newElements: FloatingElement[] = [];
    const count = Math.floor(window.innerWidth / 200);

    for (let i = 0; i < count; i++) {
      newElements.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        scale: Math.random() * 0.5 + 0.5,
        rotation: Math.random() * 360,
        type: Math.random() > 0.5 ? "paw" : "cat",
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
    setElements(newElements);
  }, []);

  useEffect(() => {
    createElements();
    window.addEventListener("resize", createElements);
    return () => window.removeEventListener("resize", createElements);
  }, [createElements]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute"
          initial={{
            x: element.x,
            y: -100,
            scale: element.scale,
            rotate: element.rotation,
            opacity: 0,
          }}
          animate={{
            y: window.innerHeight + 100,
            opacity: [0, 0.2, 0.2, 0],
            rotate: element.rotation + 360,
          }}
          transition={{
            duration: Math.random() * 20 + 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            delay: Math.random() * 20,
          }}
          style={{ color: element.color }}
        >
          {element.type === "paw" ? (
            <PawPrint className="w-8 h-8 md:w-12 md:h-12" />
          ) : (
            <Cat className="w-8 h-8 md:w-12 md:h-12" />
          )}
        </motion.div>
      ))}
    </div>
  );
}
