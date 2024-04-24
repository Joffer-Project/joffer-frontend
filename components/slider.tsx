import React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Talent } from "@/types"

interface SliderProps {
  data: Talent | undefined | null
}

const Slider: React.FC<SliderProps> = ({ data }) => {
  const notFoundUrl = '/images/slider/404.png'

  const images = [data?.avatarUrl, data?.image2Url, data?.image3Url]

  return (
    <Carousel className="w-full h-full">
      <CarouselContent>
        {images.map((url, index) => (
          <CarouselItem key={index}>
            <div className="p-0 h-full">
              <Card className="h-full">
                <CardContent className="flex 
                 items-center justify-center
                 h-[100%]
                 
                 ">
                  <img src={url ? url : notFoundUrl} alt="" className="w-full h-full object-cover" />
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