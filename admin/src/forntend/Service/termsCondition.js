import React, { useEffect, useState } from 'react';
import HomeHeader from '../HomeHeader';
import Footer from '../Footer';

import TermConditions from '../../services/appPolicyServices';

const TermCondition = () => {
    const [TermConditionData, setTermConditionData] = useState(null);
    const [language, setLanguage] = useState('en'); // en = English, hi = Hindi

    useEffect(() => {
        const fetchAbout = async () => {
            try {
                const response = await TermConditions.getTermCondition();
                console.log('About API response:', response); // 👈 check what comes back
                setTermConditionData(response?.data?.data || response?.data);
            } catch (error) {
                console.error('Error fetching about data:', error);
            }
        };
    
        fetchAbout();
    }, []);

    const getTitle = () => {
        return language === 'en' ? TermConditionData?.Title : TermConditionData?.HindiTitle;
    };

    const getContent = () => {
        const text = language === 'en' ? TermConditionData?.English : TermConditionData?.Hindi;
        return text?.replace(/\n/g, '<br />'); // Convert \n to HTML line breaks
    };

    return (
        <>
            <HomeHeader />

            <div className="sticky-header-next-sec ec-breadcrumb section-space-mb">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="row ec_breadcrumb_inner">
                                <div className="col-md-6 col-sm-12">
                                    <h2 className="ec-breadcrumb-title">{'TermCondition'}</h2>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <ul className="ec-breadcrumb-list">
                                        <li className="ec-breadcrumb-item">
                                            <a href="/">Home</a>
                                        </li>
                                        <li className="ec-breadcrumb-item active">{'TermCondition'}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="ec-page-content section-space-p">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="section-title">
                               
                                <p className="sub-title mb-3">
                                    {language === 'en'
                                        ? 'About our business firm'
                                        : 'हमारे व्यापार फर्म के बारे में'}
                                </p>
                                <button
                                    className="btn btn-outline-primary mt-2"
                                    onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
                                >
                                    Switch to {language === 'en' ? 'Hindi' : 'English'}
                                </button>
                            </div>
                        </div>

                        <div className="ec-common-wrapper">
                            <div className="row">
                                <div className="col-md-6 ec-cms-block ec-abcms-block text-center">
                                    <div className="ec-cms-block-inner">
                                        <img
                                            className="a-img"
                                            src="assets/images/offer-image/1.jpg"
                                            alt="about"
                                        />
                                    </div>
                                </div>

                                <div className="col-md-6 ec-cms-block ec-abcms-block text-center">
                                    <div className="ec-cms-block-inner">
                                        <h3 className="ec-cms-block-title mt-4" style={{fontSize:'15px'}}>{getTitle()}</h3>
                                        {TermConditionData ? (
                                            <div
                                                style={{ textAlign: 'left' }}
                                                dangerouslySetInnerHTML={{ __html: getContent() }}
                                            />
                                        ) : (
                                            <p>Loading content...</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default TermCondition;
