import React from "react";
import HeroSection from "./HeroSection";
import AboutUs from "./AboutUs";
import BoardMembers from "./BoardMembers";
import MemberBenefits from "./MemberBenifits";
import TalentPublication from "./TalentPublication";
import KgfKingdom from "./KgfKingdom";
import Events from "./Events";
import Footer from "./Footer";
import GlobalNetwork from "../Services/GlobalNetwork";
import FamilyTree from "../Pages/FamilyTree";
import Donate from "./Donate";
import NavbarSection from "./NavbarSection";


function LandingPage() {
  return (
    <>
      <NavbarSection/>
      <HeroSection />
      <AboutUs />
      <BoardMembers />
      <MemberBenefits />
      <TalentPublication />
      <KgfKingdom />
      <Events/>
      <Donate/>
      <Footer /> 
     
    </>
  );
}
export default LandingPage;
