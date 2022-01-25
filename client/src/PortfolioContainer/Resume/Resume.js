import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilites/ScreenHeading/ScreenHeading";
import ScrollService from '../../utilites/ScrollService'
import Animations from "../../utilites/Animations";
import "./Resume.css" ;


export default function Resume (props)  {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    )
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 50 },
    { skill: "React JS", ratingPercentage: 20 },
    { skill: "Python", ratingPercentage: 40 },
    { skill: "C#", ratingPercentage: 60 },
    { skill: "Node JS", ratingPercentage: 20 },
    { skill: "SQL", ratingPercentage: 30 },
    { skill: "Boot Strap", ratingPercentage: 50 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 80 },
  ];

  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2021", toDate: "2022" },
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place.",
      subHeading: "Technologies Used: React JS, Bootstrap",
    },
    {
      title: "Entity FrameWork Project ",
      duration: { fromDate: "2021", toDate: "2022" },
      description:
        "Using Agile/Scrum methodology in a two week sprint with other developers we designed a web application for a theater company.",
      subHeading:
        "Technologies Used:  C#, Bootstrap, CSS, and the MVC Framework",
    },
    {
      title: "Python Web App Project ",
      duration: { fromDate: "2021", toDate: "2022" },
      description:
        "A project developing a web application using Django Framework. It consisted of a bunch of different hobbies which each sub-app tracked a different hobby that we got to choose ourselves. I created a app based on different sushi recipes with users being able to create, edit, delete, and save the recipes to a database.",
      subHeading:
        "Technologies Used: Python, Bootstrap, and the Django Framework",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"The Tech Academy, Portland OR."}
        subHeading={"Completion Certificate of Software Developer Boot Camp Graduate"}
        fromDate={"2021"}
        toDate={"2022"}
      />

      <ResumeHeading
        heading={"Foster High School "}
        subHeading={"High School Diploma "}
        fromDate={"2005"}
        toDate={"2001"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Prosper IT Consulting"}
          subHeading={"FULL STACK DEVELOPER INTERN"}
          fromDate={"2021"}
          toDate={"2022"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
          - Worked on a project with other team members to build software designed for a theater company to manage its website content. Made use of C#, CSS, and the ASP.NET MVC framework.
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
          - Assembled a project with other team members on developing a web application using Django Framework and Python. The application I was focused on was based around recipes that the user could create, edit, and post to the page and share with other users.
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Music"
        description="I have been playing in bands since I was in high school, I have toured all around the country and helped produce many records."
      />
      <ResumeHeading
        heading="History"
        description="I am fascinated with history and geography. Any documentary be it cultural history or the history of technology, I treasure being able to dive into learning all there is about it."
      />
      <ResumeHeading
        heading="Cooking"
        description="I love to prepare all cuisines! I have been learning everything there is to know about making food from all over the world from my different mentors around town and a far."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

