import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function Slider() {
  const images = [
    "/images/slider/tesla1.jpg",
    "/images/slider/tesla2.jpg",
    "/images/slider/tesla3.jpg",
  ]

  return (
    <Carousel className="w-full">
      <CarouselContent>
        {images.map((url, index) => (
          <CarouselItem key={index}>
            <div className="p-0">
              <Card>
                <CardContent className="flex h-[250px] items-center justify-center p-0">
                  <img src={url} alt="" className="w-full h-full object-cover rounded-lg" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
