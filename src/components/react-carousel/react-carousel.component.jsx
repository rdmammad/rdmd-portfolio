import React from "react";
import "./react-carousel.styles.scss";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import Container from "../container/container.component";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: {max: 4000, min: 3000},
        items: 5,
        // slidesToSlide: 3,
    },
    desktop: {
        breakpoint: {max: 3000, min: 1024},
        items: 3,
    },
    tablet: {
        breakpoint: {max: 1024, min: 464},
        items: 2,
        // slidesToSlide: 1,
    },
    mobile: {
        breakpoint: {max: 464, min: 0},
        items: 1,
    },
};

class ReactCarousel extends React.Component {
    constructor() {
        super();

        this.state = {
            container_items: [
                {
                    id: 1,
                    title: "testour",
                    img: require("../../assets/testour.png"),
                },
                {
                    id: 2,
                    title: "doublemat",
                    img: require("../../assets/doublemat.png"),
                },
                {
                    id: 3,
                    title: "cartoon-friends",
                    img: require("../../assets/cartoon_friends.png"),
                },
                {
                    id: 4,
                    title: "daku drilling school",
                    img: require("../../assets/bds.png"),
                },
                {
                    id: 5,
                    title: "rdmd-clothing",
                    img: require("../../assets/rdmd-clothing.png"),
                },
            ],
        };
    }

    render() {
        const {container_items} = this.state;

        return (
            <Carousel
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                containerClass="carousel-container"
                autoPlaySpeed={3000}
                transitionTime={3000}
                keyBoardControl={true}
                autoPlay={true}
                stopOnHover={true}
                removeArrowOnDeviceType={["tablet", "mobile", "superLargeDesktop", "desktop"]}
                // focusOnSelect={true}
            >
                {
                    container_items.map(({id, ...otherProps}) => (
                        <Container key={id} {...otherProps}/>
                    ))
                }
            </Carousel>
        )
    }
}

export default ReactCarousel;