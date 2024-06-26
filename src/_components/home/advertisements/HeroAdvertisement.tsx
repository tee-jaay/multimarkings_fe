"use client";
import React from "react"
import Image from "next/image";

const HeroAdvertisement: React.FC = () => {
    return (
        <div id="hero_advertisement" className="mt-2">
            <Image src={"https://picsum.photos/769/193"} alt="banner adv" width={769} height={193} />
        </div>
    )
}

export default HeroAdvertisement;