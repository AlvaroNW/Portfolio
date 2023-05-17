import Carousel from "react-bootstrap/Carousel";
import { BsCodeSlash, BsFillPlayCircleFill } from "react-icons/bs";





function ProjectCarousel() {
    return (
        <Carousel id="carousel" variant="dark" pause={"hover"}>
            <Carousel.Item className="carousel-item" interval={5000}>
                <img
                    className="d-block w-100"
                    src="public\Beehive.PNG"
                    alt="Beehive Joint Investing Project"
                />
                <Carousel.Caption id="carousel-caption1">
                    <p>
                        Beehive Joint Investing is a collaboration stock portfolio builder.
                    </p>
                    <div className="tech-stack">
                        <h5>Tech Stack</h5>
                        <span className="label">REACT</span>
                        <span className="label">Node/Express</span>
                        <span className="label">PostgreSQL</span>
                    </div>
                    <div className="carousel-buttons">
                        <button className="carousel-button"> Live Demo</button>
                        <button className="carousel-button"> <BsCodeSlash /> Source Code</button>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src="public\Cooking.PNG"
                    alt="Cooking in Style Project"
                />
                <Carousel.Caption id="carousel-caption2">
                    <h3>Cooking in Style</h3>
                    <p>
                        Cookign in Style is a web Cookbook using Contentful as a CMS system.
                    </p>
                    <div className="tech-stack">
                        <h5>Tech Stack</h5>
                        <span className="label">REACT</span>
                        <span className="label">CONTENTFUL</span>
                    </div>
                    <div className="carousel-buttons">
                        <button className="carousel-button"> Live Demo</button>
                        <button className="carousel-button"><BsCodeSlash /> Source Code </button>
                    </div>


                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default ProjectCarousel;
