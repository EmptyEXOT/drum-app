import React from 'react';
import {Navbar} from "@/widgets/Navbar";
import {HeaderSection} from "./Sections/Header/HeaderSection";
import {AboutSection} from "@/pages/MainPage/Sections/AboutSection/AboutSection";
import {HardwareSection} from "@/pages/MainPage/Sections/HardwareSection/HardwareSection";
import {InvitationSection} from "@/pages/MainPage/Sections/InvitationSection/InvitationSection";
import {Footer} from "@/widgets/Footer/ui/Footer";
import {StatsView} from "@/widgets/shows/Stats/ui/StatsView";
import {ThemeSwitch} from "@/widgets/ThemeSwitch/ui/ThemeSwitch";

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