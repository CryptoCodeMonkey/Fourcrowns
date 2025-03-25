"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface AutoScrollGalleryProps {
  images: {
    src: string
    alt: string
  }[]
  className?: string
  speed?: number // pixels per second
}

export default function AutoScrollGallery({ images, className, speed = 30 }: AutoScrollGalleryProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const [isTouching, setIsTouching] = useState(false)
  const [duplicatedImages, setDuplicatedImages] = useState<typeof images>([])

  // Duplicate images to create seamless loop
  useEffect(() => {
    setDuplicatedImages([...images, ...images])
  }, [images])

  useEffect(() => {
    if (!scrollRef.current) return

    // Calculate animation duration based on content width and desired speed
    const updateAnimationDuration = () => {
      const scrollContainer = scrollRef.current
      if (!scrollContainer) return

      const containerWidth = scrollContainer.scrollWidth / 2
      const durationInSeconds = containerWidth / speed

      scrollContainer.style.setProperty("--scroll-duration", `${durationInSeconds}s`)
    }

    // Update animation duration on resize
    updateAnimationDuration()
    window.addEventListener("resize", updateAnimationDuration)

    return () => {
      window.removeEventListener("resize", updateAnimationDuration)
    }
  }, [duplicatedImages, speed])

  return (
    <div
      className={cn("relative overflow-hidden w-full", className)}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onTouchStart={() => setIsTouching(true)}
      onTouchEnd={() => setIsTouching(false)}
    >
      <div
        ref={scrollRef}
        className={cn(
          "flex gap-4 py-4 whitespace-nowrap",
          "animate-scroll",
          (isHovering || isTouching) && "animate-pause",
        )}
        style={{
          animationDuration: "var(--scroll-duration)",
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
          animationPlayState: isHovering || isTouching ? "paused" : "running",
        }}
      >
        {duplicatedImages.map((image, i) => (
          <div key={`${image.src}-${i}`} className="relative h-48 w-72 flex-shrink-0 rounded-lg overflow-hidden">
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
              sizes="(max-width: 768px) 80vw, 288px"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

