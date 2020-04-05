import React from "react";
import "./react-carousel.styles.scss";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import Container from "../container/container.component";
import {connect} from "react-redux";

const ReactCarousel = (props) => {
    const {slider_items, responsive} = props;

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
                slider_items.map(({id, ...otherProps}) => (
                    <Container key={id} {...otherProps}/>
                ))
            }
        </Carousel>
    )
};

const mapStateToProps = (state) => ({
    slider_items: state.projects.project_list,
    responsive: state.responsive,
});

export default connect(mapStateToProps)(ReactCarousel);