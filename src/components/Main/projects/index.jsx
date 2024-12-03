import "./index.scss"
import { useEffect, useState } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Project = () => {
    const [BaseData, setBaseData] = useState([])

    useEffect(() => {
        setBaseData(require("../../../Project.json"))
    }, [])

    const data = BaseData.map(item => {
        return (
            <div className="project" id={item.id} key={item.id}>
                <h1>{item.Title}</h1>
                <div className="Body__project">
                    <ul>
                        <li><h2>Git: <a href={item.LinkGit}>{item.LinkGit}</a></h2></li>
                        <li><h2>Продолжительность: <p>{item.Time}</p></h2></li>
                        <li><h2>Технологии: <p>{item.technologies}</p></h2></li>
                        <li><h2>Достижения: <p>{item.achievements}</p></h2></li>
                    </ul>
                </div>
            </div>
        )
    })

    const settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        className: "Slider"
    }

    return ( 
        <div className="projects" id="project">
            <div className="container">
                <h1 className="headings">Портфолио</h1>
                <Slider {...settings}>
                    {data}
                </Slider>
            </div>
        </div>
    );
}
 
export default Project;