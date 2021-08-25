import React, { useState,useEffect } from "react";
import d3 from "../img/d3.jpg";
// import d from "../img/download.png";
// import c3 from "../img/course-3.svg";
import c4 from "../img/course-4.svg";
// import c6 from "../img/course-6.svg";
import d2 from "../img/d2.png";
import d1 from "../img/d1.jpg";
import t1 from "../img/teacher-1.png";
import t2 from "../img/teacher-2.png";
import t3 from "../img/teacher-3.png";
import { NavLink } from "react-router-dom";

function Home() {

  useEffect(() => {
    document.title='cambride-tutorials'
})
  const [teacher, setTeacher] = useState([
    {
      id: 1,
      name: "mr idowu",
      subject: "math",
      img: t1,
    },
    {
      id: 2,
      name: "pelumi",
      subject: "english",
      img: t2,
    },
    {
      id: 3,
      name: "feranmi",
      subject: "physic",
      img: t3,
    },
  ]);
  let teacherProfile = [];
  for (let i = 0; i < teacher.length; i++) {
    teacherProfile.push(
      <div className="info flex">
        <div className="profilePic">
          <img src={teacher[i].img} />
        </div>
        <div className="details">
          <h1 className="fontb s20 orange">{teacher[i].name}</h1>
          <h3 className="fontn s15">{teacher[i].subject}</h3>
        </div>
      </div>
    );
  }

  const [popularCourses, setPopularCourses] = useState([
    {
      id: 1,
      title: "math for waec",
      tutor: {
        ID: 1,
        name: "lawal fawaz",
        userName: "@lawal",
        dp: t2,
      },
      duration: "1h3mins",
      poster: d3,
    },
    {
      id: 2,
      title: "jamb past question review",
      tutor: {
        ID: 2,
        name: "james rodriges",
        userName: "@james",
        dp: t3,
      },
      duration: "30mins",
      poster: c4,
    },
  ]);
  var courseList = [];
  for (let i = 0; i < popularCourses.length; i++) {
    courseList.push(
      <NavLink
        to={"/course/" + popularCourses[i].id}
        key={"popular-courses-" + 1}
      >
        <div
          className="block rel"
          style={{
            background:
              "#e2e2e2 url( " +
              popularCourses[i].poster +
              ") no-repeat center center ",
          }}
        >
          <div className="user abs flex aic">
            <div className="pic">
              <img src={popularCourses[i].tutor.dp} className="bl" alt="" />
            </div>
            <div className="meta rel">
              <h2 className="s20 fontb cfff name">
                {popularCourses[i].tutor.name}
              </h2>
              <h2 className="s15 fontn cfff uname">
                {popularCourses[i].tutor.userName}
              </h2>
            </div>
          </div>
          <div className="dura abs">
            <h2 className="s13 fontb cfff name">
              {popularCourses[i].duration}
            </h2>
          </div>
          <div className="title abs">
            <h2 className="s15 fontb cfff name">{popularCourses[i].title}</h2>
          </div>
        </div>
      </NavLink>
    );
  }
  var tutorList = [];

  for (let i = 0; i < 8; i++) {
    tutorList.push(
      <button className="tutor rel " key={"tutor-live." + i}>
        {" "}
        <img src={d3} className="tutor-live" />{" "}
      </button>
    );
  }
  return (
    <div className="home rel">
      <div className="section rel">
        <div className="right-bar">
          <div className="title s24 fontb">
            streassming <span className="fontn black s13">now</span>
          </div>

          <div className="tutors rel flex">{tutorList}</div>
          <div className="section-b section ">
            
            <div className="search-box rel flex">
              <input
                type="text"
                placeholder="start writing something"
                className="qry s15 fontb"
              />
              <button className="go s15 fontb">find</button>
            </div>
          </div>
        </div>
      </div>

      <div className="section-b section rel">
        <div className="title s24 fontb s20">
          popular <span className="fontn black">this week</span>
        </div>
        <div className="courses rel flex">{courseList}</div>
      </div>
      <h1 className="fontb s20 your-tutors">your tutors</h1>
      <div className="teachers">{teacherProfile}</div>
    </div>
  );
}

export default Home;
