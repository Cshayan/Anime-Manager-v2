import React from "react";
import Header from "../Header/Header";
import DashboardContent from "./DashboardContent";
import DrawerContainer from "../../containers/CustomDrawerContainer/DrawerContainer";
import ThemeDialog from "../utilityComponents/ThemeDialog";
import LogoutDialog from "../utilityComponents/LogoutDialog";
import AnimeDeleteDialog from "../utilityComponents/DeleteAnimeDialog";

const DashboardComponent = () => {
  return (
    <>
      <DrawerContainer />
      <Header isBackButtonRequired isSearchBarRequired isAvatarPopUpRequired />
      <DashboardContent />
      <ThemeDialog />
      <LogoutDialog />
      <AnimeDeleteDialog />
    </>
  );
};

export default DashboardComponent;
