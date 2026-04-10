import React from "react";
import NavbarSection from "./NavbarSection";
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

function LandingPage() {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <BoardMembers />
      <MemberBenefits />
      <TalentPublication />
      <KgfKingdom />
      <Events />
      <Footer />
    </>
  );
}
export default LandingPage;
