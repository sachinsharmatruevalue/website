import BannerServices from '../../services/homesliderservices ';
import React, { useEffect, useState } from 'react';

const SaleBanner = () => {
    const [banners, setBanners] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchBanners = async () => {
        try {
          const response = await BannerServices.getBanner(); // ✅ Use the correct method
          setBanners(response.data);
        } catch (error) {
          console.error("Error fetching banners:", error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchBanners();
    }, []);
  
    return (
      <>
        {/* Banner Section */}
        <section className="ec-banner section">
          <h2 className="d-none">Banner</h2>
  
          <div className="ec-banners">
            <div className="ec-banner-right col-sm-12">
              <div className="ec-banner-block ec-banner-block-2 col-sm-12">
                <div className="banner-block">
                  {loading ? (
                    <p>Loading...</p>
                  ) : banners.length > 0 ? (
                    banners.map((banner, index) => (
                      <img
                        key={index}
                        src={`${process.env.REACT_APP_API_BASE_URL}/${banner.image}`}
                        alt={banner.title || "Banner"}
                        style={{ width: "100%", borderRadius: "10px" }}
                      />
                    ))
                  ) : (
                    <p>No banners available</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };

export default SaleBanner
