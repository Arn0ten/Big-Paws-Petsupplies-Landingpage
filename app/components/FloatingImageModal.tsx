"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

interface FloatingImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  alt?: string;
  description?: string;
  additionalInfo?: string;
  price?: string;
}

export default function FloatingImageModal({
  isOpen,
  onClose,
  imageSrc,
  alt = "Image",
  description,
  additionalInfo,
  price,
}: FloatingImageModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="relative bg-background rounded-lg shadow-xl max-w-[95vw] max-h-[95vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-2 right-2 z-10 p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-75 transition-colors"
              aria-label="Close modal"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="relative w-full max-h-[80vh] overflow-auto">
              <div className="relative w-full" style={{ minHeight: "300px" }}>
                <Image
                  src={imageSrc || "/placeholder.svg"}
                  alt={alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 80vw, 70vw"
                />
              </div>
              {(description || additionalInfo || price) && (
                <div className="p-4 bg-background">
                  {description && (
                    <p className="text-base mb-2">{description}</p>
                  )}
                  {additionalInfo && (
                    <p className="text-sm text-muted-foreground mb-2">
                      {additionalInfo}
                    </p>
                  )}
                  {price && (
                    <p className="text-lg font-bold text-primary">{price}</p>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
