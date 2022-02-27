import Gallery from "react-photo-gallery";
import { useEffect, useState } from "react";

export default function _Gallery() {
    const [photos, setPhotos] = useState<Array<any>>([]);

    function processPhotos(res: Array<any>): Array<any> {
        let p: Array<any> = [];
        res.forEach((imageDetails: any) => {
            p.push({
                src: imageDetails.download_url,
                height: Math.floor(Math.random() * 2) + 4,
                width: Math.floor(Math.random() * 2) + 4,
            });
        });
        return p;
    }

    useEffect(() => {
        fetch("https://picsum.photos/v2/list?limit=20")
            .then((res: any) => res.json())
            .then((res: any) => setPhotos(processPhotos(res)));
    }, []);

    return (
        <div className="flex flex-col w-full p-6 items-center justify-center">
            <div className="text-4xl text-center mb-8">Explore</div>
            <Gallery photos={photos} />
        </div>
    );
}
