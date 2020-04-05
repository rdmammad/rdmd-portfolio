import React from "react";
import "./contact.styles.scss";
import Informational from "../../components/informational/informational.component";
import CustomIcon from "../../components/custom-icon/custom-icon.component";
import {connect} from "react-redux";

const Contact = ({socials}) => (
    <section id="contact">
        <Informational title="Contact">
            <Informational title="Feel Free To Contact Me If You Have Any Question:" sub_class="sub-block">
                <div className="rdmammad__sicials">
                    {
                        socials.map(({id, title, image_path, url}) =>
                            <CustomIcon
                                key={id}
                                title={title}
                                image_path={image_path}
                                href={url}
                                target="_blank"
                            />
                        )
                    }
                </div>
            </Informational>
        </Informational>
    </section>
);

const mapStateToProps = ({socials}) => ({
    socials: socials.socials_list,
});

export default connect(mapStateToProps)(Contact);