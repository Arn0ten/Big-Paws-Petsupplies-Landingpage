"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

interface FloatingImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  alt: string;
  description: string;
  additionalInfo?: string;
  price?: string;
}

export default function FloatingImageModal({
  isOpen,
  onClose,
  imageSrc,
  alt,
  description,
  additionalInfo,
  price,
}: FloatingImageModalProps) {
  const [isLongPress, setIsLongPress] = useState(false);
  const [longPressTimer, setLongPressTimer] = useState<NodeJS.Timeout | null>(
    null,
  );

  useEffect(() => {
    return () => {
      if (longPressTimer) {
        clearTimeout(longPressTimer);
      }
    };
  }, [longPressTimer]);

  const handleTouchStart = () => {
    const timer = setTimeout(() => {
      setIsLongPress(true);
    }, 500);
    setLongPressTimer(timer);
  };

  const handleTouchEnd = () => {
    if (longPressTimer) {
      clearTimeout(longPressTimer);
    }
    setIsLongPress(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative bg-background rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-2 right-2 z-10 p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-75 transition-colors"
            >
              <X size={24} />
            </button>
            <div className="relative w-full h-64 sm:h-80 md:h-96">
              <Image
                src={imageSrc || "/placeholder.svg"}
                alt={alt}
                fill
                className="object-cover"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                onMouseDown={handleTouchStart}
                onMouseUp={handleTouchEnd}
                onMouseLeave={handleTouchEnd}
              />
            </div>
            <div className="p-4 overflow-y-auto flex-grow">
              <h3 className="text-lg font-semibold mb-2">{alt}</h3>
              <p className="text-muted-foreground mb-2">{description}</p>
              {additionalInfo && (
                <p className="text-sm text-muted-foreground mb-2">
                  {additionalInfo}
                </p>
              )}
              {price && (
                <p className="text-lg font-bold text-primary">{price}</p>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
