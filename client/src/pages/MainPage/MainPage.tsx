import React from 'react';
import {Navbar} from "@/widgets/Navbar";
import {HeaderSection} from "./Sections/Header/HeaderSection";
import {AboutSection} from "./Sections/AboutSection/AboutSection";
import {HardwareSection} from "./Sections/HardwareSection/HardwareSection";
import {InvitationSection} from "./Sections/InvitationSection/InvitationSection";
import {Footer} from "@/widgets/Footer/ui/Footer";

const MainPage = () => {
    return (
        <>
            <Navbar/>
            <HeaderSection/>
            <AboutSection/>
            <HardwareSection/>
            <InvitationSection/>
            <Footer/>
        </>
    )
};

export default MainPage