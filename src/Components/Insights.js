import React from "react";
import Blog from "./Blog";
import ClientStories from "./ClientStories";
import CaseStudy from "./CaseStudy";
import "./Insights.css"
const Insights = () => {
  return (
    <div className="Insight" >
 
      <Blog></Blog>
      <ClientStories></ClientStories>
      <CaseStudy></CaseStudy>
    </div>
  );
};

export default Insights;
