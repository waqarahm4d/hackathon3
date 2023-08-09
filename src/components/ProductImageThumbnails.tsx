'use client'
import Image, { StaticImageData } from "next/image";
import React , {useState} from "react";
import m1 from 'public/event1.webp'
import m2 from 'public/event2.webp'

interface IImage {
    image: string | string[] | StaticImageData[] | any;
  }
  

function ProductImageThumbnails({image}: IImage) {
    const [path, setPath] = useState("")
  return (
    <div className="product_images flex-1 flex flex-col items-center">
      <div className="main_image mb-4">
        <Image src={path ? path : image[0]} alt="" width={500} height={400} className="" />
      </div>
      <div className="thumbnails flex flex-row gap-4 px-4 justify-center ">
        {
          image.map((thumb:string,i:number) => (
            <Image key={i} src={thumb} onClick={()=>setPath(thumb)} alt="" width={100} height={60} className="thumbnail cursor-pointer rounded border border-[#cfcfcf] border-solid" />
          ))
        }
        
      </div>
    </div>
  );
}

export default ProductImageThumbnails;
