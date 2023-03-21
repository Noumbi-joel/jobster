import React from "react";

export type ScreenHeaderBtnProps = {
  iconUrl: ImageSourcePropType;
  dimension: string;
  handlePress?: GestureResponderEvent;
};

export type ScreenHeaderStyleProps = {
  btnContainer: ViewStyle;
  btnImg: ImageStyle;
};

export type WelcomeStyleProps = {
  container: ViewStyle;
  userName: TextStyle;
  welcomeMessage: TextStyle;
  searchContainer: ViewStyle;
  searchWrapper: ViewStyle;
  searchInput: TextStyle;
  searchBtn: ViewStyle;
  searchBtnImage: ImageStyle;
  tabsContainer: ViewStyle;
  tab: ViewStyle;
  tabText: TextStyle;
};

export type PopularJobsStyleProps = {
  container: ViewStyle;
  header: ViewStyle;
  headerTitle: TextStyle;
  headerBtn: TextStyle;
  cardsContainer: ViewStyle;
};

export type PopularJobCardStyleProps = {
  container: ViewStyle;
  logoContainer: ViewStyle;
  logoImage: ImageStyle;
  companyName: TextStyle;
  infoContainer: ViewStyle;
  jobName: TextStyle;
  infoWrapper: ViewStyle;
  publisher: TextStyle;
  location: TextStyle;
};

export type FetchProps = {
  endpoint: string;
  query: Object;
};

export type Job = {
  job_id: string;
  employer_logo: string;
  employer_name: string;
  job_title: string;
  job_country: string;
  job_employment_type: string;
};

export type PopularJobCardProps = {
  item: Job;
  selectedJob?: Job;
  handleCardPress?: GestureResponderEvent;
};

export type NearbyJobCardProps = {
  job: Job;
  handleNavigate: GestureResponderEvent;
};

export type CompanyProps = {
  companyLogo: string;
  jobTitle: string;
  companyName: string;
  location: string;
};

export type TabsProps = {
  tabs: Array;
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
};

export type SpecificsProps = {
  title: string;
  points: string[];
};
