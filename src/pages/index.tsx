import { LandingButton, NavbarButton } from "@/components/button";
import { Wave, WaveArray } from "@/components/waves";

export default function Home() {
    return (
        <>
            <section id="landing">
                <div id="styling-wrapper">
                    <div id='navigation-bar'>
                        <div id="styling-wrapper">
                            <NavbarButton array={['Home']} />
                            <NavbarButton array={['Projects']} />
                            <NavbarButton array={['Resume']} />
                            <NavbarButton array={['Contact']} />
                        </div>
                    </div>
                    <div id="landing-content">
                        <div id="text-container">
                            <a>Natalie Pahwa</a>
                            <a>FrontEnd Developer</a>
                        </div>
                        <div id="button-container"> 
                            <LandingButton array={['Resume']} />
                            <LandingButton array={['Projects']} />
                        </div>
                    </div>
                </div>
                <Wave fill="0" svg={WaveArray[0]}/>
            </section>
            <section id="about-me">
                <div id="styling-wrapper">
                    <div id="image-container">
                        <a>image</a>
                    </div>
                    <div id="text-container">
                        <a>About me</a>
                        <a>text</a>
                    </div>
                </div>
            </section>
            <section id="projects">
                <Wave fill='0' svg={WaveArray[1]} />
                <div id="styling-wrapper">
                    <div id="carousel-container">
                        <a>image1</a>
                        <a>image2</a>
                        <a>image3</a>
                    </div>
                    <a> carousel button </a>
                </div>
                <Wave fill='0' svg={WaveArray[2]} />
            </section>
            <section id="experience">
                <div id="styling-wrapper">
                    <div id="table-styling">
                        <a>element1</a>
                        <a>element2</a>
                        <a>element3</a>
                    </div>
                </div>
            </section>
            <section id="footer">
                <Wave fill='0' svg={WaveArray[3]} />
                <div id="style-wrapper">
                    <a>footer</a>
                </div>
            </section>
        </>
    )
}
