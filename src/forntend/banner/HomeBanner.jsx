import React, { useState, useEffect } from 'react';
import BannerService from '../../services/bannerServices';

const HomeBanner = () => {
    const [banners, setBanners] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    console.log("banners----------->", banners);

    useEffect(() => {
        const getBanner = async () => {
            try {
                const response = await BannerService.getbanner();
                let bannerData = response?.data || response;

                bannerData = Array.isArray(bannerData) ? bannerData : [bannerData];
                bannerData = bannerData.filter(Boolean);

                bannerData = bannerData.map(banner => ({
                    ...banner,
                    image: banner.image,
                }));
                // console.log("++++++++++", bannerData);

                setBanners(bannerData);
                setError(null);
            } catch (error) {
                console.error("Error fetching banners:", error);
                setError('Failed to load banners. Please try again later.');
                setBanners([]);
            } finally {
                setLoading(false);
            }
        };

        getBanner();
    }, []);

    if (loading) {
        return (
            <section className="ec-banner section">
                <div className="banner-loading">Loading banners...</div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="ec-banner section">
                <div className="banner-error alert alert-warning">{error}</div>
            </section>
        );
    }

    return (
        <section className="ec-banner section">
            <h2 className="d-none">Banner</h2>
            <div className="ec-banners">
                <div className="ec-banner-right col-sm-12">
                    {banners.length > 0 ? (
                        banners.map((banner, index) => (
                            <div key={index} className="ec-banner-block ec-banner-block-2 col-sm-12">
                                <div className="banner-block">
                                    <img
                                       src={`${process.env.REACT_APP_API_BASE_URL}/${banner.image}`}
                                        alt={banner.altText || `Banner ${index + 1}`}
                                        loading="lazy"
                                    onError={(e) => {
                                        e.target.src = '/admin/image/default-banner.jpg';
                                        e.target.alt = 'Default banner';
                                    }}
                                    />

                                    <img
                                        className="main-image"
                                        src={`${process.env.REACT_APP_API_BASE_URL}/${banners.images}`}
                                        alt={banners.name}
                                    />

                                    <div />
                                    {(banner.title || banner.message) && (
                                        <div className="banner-content">
                                            {/* {banner.title && <h3>{banner.title}</h3>}
                                            {banner.message && <p>{banner.message}</p>} */}
                                            {banner.buttonText && (
                                                <a href={banner.buttonLink || '#'} className="btn btn-primary">
                                                    {banner.buttonText}
                                                </a>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>


                        ))
                    ) : (
                        <div className="ec-banner-block ec-banner-block-2 col-sm-12">
                            <div className="banner-block">
                                <img
                                    src={`${process.env.REACT_APP_API_BASE_URL}/Uploads/${banners.image}`}
                                    alt={banners.image || "Banner Image"}
                                    onError={(e) => {
                                        e.target.src = 'admin/image/default-banner.jpg'; 
                                        e.target.alt = 'Default banner'; // Fallback alt text
                                    }}
                                />
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </section >



    );
};

export default HomeBanner;
