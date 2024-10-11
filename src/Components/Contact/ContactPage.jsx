import React, { useState } from 'react';
import './ContactPage.css';
import img from './img.png'
const ContactPage = () => {
    const [currentPlatform, setCurrentPlatform] = useState(null);

    const handlePlatformClick = (platform) => {
        setCurrentPlatform(platform);
    };

    return (
        <div className="content">
            <div className="social">
                <button className="i" id="fbBtn" onClick={() => handlePlatformClick('facebook')} title="Facebook" >
                    <i className="fa-brands fa-facebook-f" />
                </button>
                <button className="i" id="ytBtn" onClick={() => handlePlatformClick('youtube')} title="Youtube" >
                    <i className="fa-brands fa-youtube" />
                </button>
                <button className="i" id="waBtn" onClick={() => handlePlatformClick('whatsapp')} title="WhatsApp">
                    <i className="fa-brands fa-whatsapp" />
                </button>
                <button className="i" id="tgBtn" onClick={() => handlePlatformClick('telegram')} title="Telegram">
                    <i className="fa-brands fa-telegram" />
                </button>
                <button className="i" id="liBtn" onClick={() => handlePlatformClick('linkedin')} title="Linked In" >
                    <i className="fa-brands fa-linkedin-in" />
                </button>
            </div>
            <div id="main">
                <div className="contact" id="contact">
                    <h1>get in touch</h1>
                    <form action="">
                        <div className="name">
                            <div className="FN">
                                <input
                                    type="text"
                                    className="First-Name"
                                    placeholder="First Name"
                                    required
                                />
                                <span>First Name</span>
                            </div>
                            <div className="LN">
                                <input
                                    type="text"
                                    className="Last-Name"
                                    placeholder="Last Name"
                                    required
                                />
                                <span>Last Name</span>
                            </div>
                        </div>
                        <div className="email">
                            <input
                                type="email"
                                className="Email"
                                placeholder="Email"
                                required
                            />
                            <span>Email</span>
                        </div>
                        <div className="subject">
                            <input
                                type="text"
                                className="Subject"
                                placeholder="Subject"
                                required
                            />
                            <span>Subject</span>
                        </div>
                        <div className="massage">
                            <textarea
                                className="Massage"
                                placeholder="Massage"
                                required
                            />
                            <span>Massage</span>
                        </div>
                        <div className="send">
                            <button className="send">
                                <i class="fa-solid fa-paper-plane" />
                                send
                            </button>
                        </div>
                    </form>
                </div>
                <div className="icon">
                    <img src={img} alt="" />
                </div>
                {currentPlatform === 'facebook' && (
                    <div className="platform" id="fbPage">
                        <span onClick={() => handlePlatformClick(null)} title="close" className='close' >
                            <i class="fa-solid fa-xmark" />
                        </span>

                        <h2 className="name">Facebook</h2>
                        <p className="description">
                            Follow us on Facebook for highlights of our significant achievements and key posts. Stay connected and engaged with our activities and initiatives.

                        </p>
                        <a href='https://www.facebook.com/shbab.btsad.shbab' className="link" target='blank'>
                            [ Facebook Link ]
                        </a>
                    </div>
                )}
                {currentPlatform === 'youtube' && (
                    <div className="platform" id="ytPage">
                        <span onClick={() => handlePlatformClick(null)} title="close" className='close' >
                            <i class="fa-solid fa-xmark" />
                        </span>
                        <h2 className="name">YouTube</h2>
                        <p className="description">
                            Subscribe our YouTube channel for informative videos on scholarships and diverse content to inspire your educational journey!

                        </p>
                        <a href='https://www.youtube.com/@shbab_btsad_shbab' className="link" target='blank'>
                            [ you tube channel link ]
                        </a>
                    </div>
                )}
                {currentPlatform === 'whatsapp' && (
                    <div className="platform" id="waPage">
                        <span onClick={() => handlePlatformClick(null)} title="close" className='close' >
                            <i class="fa-solid fa-xmark" />
                        </span>
                        <h2 className="name">WhatsApp</h2>
                        <p className="description">
                            Join our WhatsApp channel for updates on our activities and opportunities, including scholarships, competitions, courses, and programs. The same content is shared in our WhatsApp groups for quick access and interaction.

                        </p>
                        <a href="https://whatsapp.com/channel/0029VaaIxne4inonDidw7m1H" className="link" target='blank'>
                            [ WhatsApp Chanel Link ]

                        </a>

                    </div>
                )}
                {currentPlatform === 'telegram' && (
                    <div className="platform" id="tgPage">
                        <span onClick={() => handlePlatformClick(null)} title="close" className='close' >
                            <i class="fa-solid fa-xmark" />
                        </span>
                        <h2 className="name">Telegram</h2>
                        <p className="description">
                            Join our Telegram channel to stay updated on our activities and available opportunities, including scholarships, competitions, and courses. You can also ask your questions in the available chat group.

                        </p>
                        <a href='https://t.me/shbab_btsad_shbab' className="link" target='blank'>
                            [ Telegram Channel link ]
                        </a>
                        <a href='https://t.me/ask_shbab_btsad_shbab' className="link" target='blank'>
                            [ Telegram Chat link ]

                        </a>
                    </div>
                )}
                {currentPlatform === 'linkedin' && (
                    <div className="platform" id="liPage">
                        <span onClick={() => handlePlatformClick(null)} title="close" className='close' >
                            <i class="fa-solid fa-xmark" />
                        </span>
                        <h2 className="name">LinkedIn</h2>
                        <p className="description">
                            Follow us on LinkedIn to stay updated on important events and unique opportunities for youth. Join our professional community dedicated to youth development.

                        </p>
                        <a href='https://www.linkedin.com/company/shbab-btsad-shbab-in/' className="link" target='blank'>
                            [ Linkedin Link ]

                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ContactPage;