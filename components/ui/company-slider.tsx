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

const CompanySlider: React.FC<SliderProps> = ({ data }) => {
  const notFoundUrl = '/images/slider/404.png'

  const images = [data?.image2Url, data?.image4Url, data?.image3Url]

  return (
    <Carousel className="w-full">
      <CarouselContent>
        {images.map((url, index) => (
          <CarouselItem key={index}>
            <div className="p-0">
              <Card>
                <CardContent className="flex 
                 items-center justify-center p-0
                 sm:h-[250px]
                 xls:h-[350px]
                 ">
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


export default CompanySlider