import { hards } from './Hards';
import * as IoIcons from "react-icons/io";
import { useRef } from 'react';
import './HardsSkills.css';

function Hards() {
    const carousel = useRef(null);

    const handleLeftCLick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    };

    const handleRightCLick = (e) => {
        e.preventDefault();

        carousel.current.scrollLeft += carousel.current.offsetWidth;
    }

    return (
            <div className='container-hards'>
                <h1 className='hards-title' id="hards">Hard Skills</h1>
                <div className="carousel" ref={carousel}>
                <IoIcons.IoIosArrowDropleftCircle className='arrow-left' onClick={handleLeftCLick}/>
                <IoIcons.IoIosArrowDroprightCircle className='arrow-right' onClick={handleRightCLick}/>
                    {hards.map((e) => {
                        return (
                            <div className='item' key={e.title}>
                                <div className='title'>
                                    <h1>{e.title}</h1>
                                </div>
                                <a href={e.path} target="blank">
                                <div className="image">
                                    <picture>
                                        <img src={e.url} alt={e.title} />
                                    </picture>
                                </div>
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>
    );
};

export default Hards;