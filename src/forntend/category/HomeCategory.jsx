import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import axios from 'axios';
import CategoryServices from '../../services/categoryServices'

const HomeCategory = () => {
    const [categories, setCategories] = useState([]);
    // const [loading, setLoading] = useState(true);

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    useEffect(() => {
        const getCategory = async () => {
            try {
                const response = await CategoryServices.getCategory();
                // console.log("------->", response);
                // return

                setCategories(response.data);
            } catch (error) {
                console.error("Failed to fetch Category", error);
            }
        };
        getCategory();

    }, []);


    return (
        <section className="section ec-category-section section-space-p" style={{background:' #ffffff'}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 section-title-block" >
                        <div className="section-title">
                            <h2 className="ec-title">Browse By Categories</h2>
                            <p className="sub-title">Check out our featured products.</p>
                        </div>
                    </div>
                </div>

                <div className="row" >
                    <div className="ec_cat_slider">
                        <Slider {...sliderSettings} >
                            {(
                                categories.length > 0 ? (
                                    categories && categories.map((category) => (
                                        <div className="ec_cat_content" key={category._id}>
                                            <div className="ec_cat_inner" style={{ 'padding-right': ' 356px','margin-top': '100px'}}>
                                                <div className="ec-cat-image"style={{'display':'flex'}}>
                                                    <img
                                                        src={`${process.env.REACT_APP_API_BASE_URL}/${category.image}`} // Concatenate base URL and image path
                                                        alt={category.name}
                                                    />
                                                </div>
                                                <div className="ec-cat-desc">
                                                    <span className="ec-section-btn">
                                                        <Link to={`/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}>
                                                            {category.name}
                                                        </Link>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div>No categories found.</div>
                                )
                            )}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeCategory;
