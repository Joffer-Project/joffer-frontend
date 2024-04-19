import React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Company } from "@/types"

interface SliderProps {
  data: Company | undefined | null
}

const Slider: React.FC<SliderProps> = ({ data }) => {
  const notFoundUrl = '/images/slider/404.png'

  const images = [data?.slider1Url, data?.slider2Url, data?.slider3Url]

  return (
    <Carousel className="w-full">
      <CarouselContent>
        {images.map((url, index) => (
          <CarouselItem key={index}>
            <div className="p-0">
              <Card>
                <CardContent className="flex h-[250px] items-center justify-center p-0">
                  <img src={url ? url : notFoundUrl} alt="" className="w-full h-full object-cover rounded-lg" />
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


export default Slider