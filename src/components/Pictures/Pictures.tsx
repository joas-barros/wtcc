import React from 'react';
import { useState } from "react";
import { Pagination } from 'antd';
import { Image } from 'antd';


interface PictureProps {
    scr: string;
    alt: string;
    subtitle: string;
    page: number;
    }


const pictures = [
    {
        scr: require("../../assets/pictures/01/nepal1.jpg"),
        alt: "Nepal1",
        subtitle: "Nepal",
        page: 1
    },
    {
        scr: require("../../assets/pictures/01/nepal2.jpg"),
        alt: "Nepal2",
        subtitle: "Nepal",
        page: 1
    },
    {
        scr: require("../../assets/pictures/01/nepal3.jpg"),
        alt: "Nepal3",
        subtitle: "Nepal",
        page: 1
    },
    {
        scr: require("../../assets/pictures/01/nepal4.jpg"),
        alt: "Nepal4",
        subtitle: "Nepal",
        page: 1
    },
    {
        scr: require("../../assets/pictures/01/nepal5.jpg"),
        alt: "Nepal5",
        subtitle: "Nepal",
        page: 1
    },
    {
        scr: require("../../assets/pictures/01/nepal6.jpg"),
        alt: "Nepal6",
        subtitle: "Nepal",
        page: 1
    },
    {
        scr: require("../../assets/pictures/02/bolivia1.png"),
        alt: "Bolivia1",
        subtitle: "Bolivia",
        page: 2
    },
    {
        scr: require("../../assets/pictures/02/bolivia2.png"),
        alt: "Bolivia2",
        subtitle: "Bolivia",
        page: 2
    },
    {
        scr: require("../../assets/pictures/02/bolivia3.png"),
        alt: "Bolivia3",
        subtitle: "Bolivia",
        page: 2
    },
    {
        scr: require("../../assets/pictures/02/bolivia4.png"),
        alt: "Bolivia4",
        subtitle: "Bolivia",
        page: 2
    },
    {
        scr: require("../../assets/pictures/02/bolivia5.png"),
        alt: "Bolivia5",
        subtitle: "Bolivia",
        page: 2
    },
    {
        scr: require("../../assets/pictures/02/bolivia6.png"),
        alt: "Bolivia6",
        subtitle: "Bolivia",
        page: 2
    },
    {
        scr: require("../../assets/pictures/03/guatemala1.png"),
        alt: "Gualtemala1",
        subtitle: "Guatemala",
        page: 3
    },
    {
        scr: require("../../assets/pictures/03/guatemala2.png"),
        alt: "Gualtemala2",
        subtitle: "Guatemala",
        page: 3
    },
    {
        scr: require("../../assets/pictures/03/guatemala3.png"),
        alt: "Gualtemala3",
        subtitle: "Guatemala",
        page: 3
    },
    {
        scr: require("../../assets/pictures/03/guatemala4.png"),
        alt: "Gualtemala4",
        subtitle: "Guatemala",
        page: 3
    },
    {
        scr: require("../../assets/pictures/03/guatemala5.png"),
        alt: "Gualtemala5",
        subtitle: "Guatemala",
        page: 3
    },
    {
        scr: require("../../assets/pictures/03/guatemala6.png"),
        alt: "Gualtemala6",
        subtitle: "Guatemala",
        page: 3
    },
    {
        scr: require("../../assets/pictures/04/Vietnam1.png"),
        alt: "Vietnam1",
        subtitle: "Vietnam",
        page: 4
    },
    {
        scr: require("../../assets/pictures/04/Vietnam2.png"),
        alt: "Vietnam2",
        subtitle: "Vietnam",
        page: 4
    },
    {
        scr: require("../../assets/pictures/04/Vietnam3.png"),
        alt: "Vietnam3",
        subtitle: "Vietnam",
        page: 4
    },
    {
        scr: require("../../assets/pictures/04/Vietnam4.png"),
        alt: "Vietnam4",
        subtitle: "Vietnam",
        page: 4
    },
    {
        scr: require("../../assets/pictures/04/Vietnam5.png"),
        alt: "Vietnam5",
        subtitle: "Vietnam",
        page: 4
    },
    {
        scr: require("../../assets/pictures/04/Vietnam6.png"),
        alt: "Vietnam6",
        subtitle: "Vietnam",
        page: 4
    },
    {
        scr: require("../../assets/pictures/05/Argentina1.png"),
        alt: "Argentina1",
        subtitle: "Argentina",
        page: 5
    },
    {
        scr: require("../../assets/pictures/05/Argentina2.png"),
        alt: "Argentina2",
        subtitle: "Argentina",
        page: 5
    },
    {
        scr: require("../../assets/pictures/05/Argentina3.png"),
        alt: "Argentina3",
        subtitle: "Argentina",
        page: 5
    },
    {
        scr: require("../../assets/pictures/05/Argentina4.png"),
        alt: "Argentina4",
        subtitle: "Argentina",
        page: 5
    },
    {
        scr: require("../../assets/pictures/05/Argentina5.png"),
        alt: "Argentina5",
        subtitle: "Argentina",
        page: 5
    },
    {
        scr: require("../../assets/pictures/05/Argentina6.png"),
        alt: "Argentina6",
        subtitle: "Argentina",
        page: 5
    }
];

const Pictures = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const imagePerPaage = 6;
    const totalImages = pictures.length;
    const totalPages = Math.ceil(totalImages / imagePerPaage);
    
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    }

    const renderPictures = () => {
        const start = (currentPage - 1) * imagePerPaage;
        const end = start + imagePerPaage;
        const currentPictures = pictures.slice(start, end);

        return currentPictures.map((picture, index) => {
            return (
                <div key={index} className="flex-col">
                    <Image
                        width={400}
                        height={250}
                        src={picture.scr}
                        alt={picture.alt}
                        style={{ borderRadius: "1.5rem" }}
                    />
                    <div>{picture.subtitle}</div>
                </div>
            );
        });
    }

    return (
        <div className="flex items-center flex-col gap-10 pt-36">
            <h1 className="w-48 text-4xl bg-yellow-300 uppercase rounded-lg px-1 mb-2 ">Galeria</h1>
            <div className="flex justify-center gap-10 flex-wrap">
                <Image.PreviewGroup>
                    {renderPictures()}
                </Image.PreviewGroup>
            </div>
            <Pagination 
                current={currentPage}
                total={totalPages * 10}
                onChange={handlePageChange}
            />
        </div>
    );
};

export default Pictures;