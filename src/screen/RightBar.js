import React, {useState} from "react";
import paw from '../img/paw.JPG'
import cou from "../img/cou.jpg";
function RightBar() {
  const [popularCourses, setPopularCourses] = useState([
    {
      id: 1,
      title: "math for waec",
      tutor: {
        ID:1,
        name: "lawal fawaz",
        userName: "@lawal",
        dp: cou,
      },
      duration: "1h3mins",
      poster: paw,
    },
    {
      id: 2,
      title: "jamb past question review",
      tutor: {
        ID:2,
        name: "james rodriges",
        userName: "@james",
        dp: paw,
      },
      duration: "30mins",
      poster: cou,
    },
    {
      id: 2,
      title: "jamb past question review",
      tutor: {
        ID:2,
        name: "james rodriges",
        userName: "@james",
        dp: paw,
      },
      duration: "30mins",
      poster: cou,
    },
  ]);
  var courseList = [];
  for (let i = 0; i < popularCourses.length; i++) {
    courseList.push(
      <a href="#" key={"popular-courses-" + 1}>
        <div
          className="block div rel"
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
              <h2 className="s15 fontb cfff name">
                {popularCourses[i].tutor.name}
              </h2>
              <h2 className="s13 fontn cfff uname">
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
            <h2 className="s15 fontb cfff name">
              {popularCourses[i].title}
            </h2>
          </div>
        </div>
      </a>
    );
  }
  return (
    <div className="right-bar">
      <div className="section-b section sticky">
        <div className="title s24 fontb s20">
          Advance <span className="fontn black">search</span>
        </div>
        <div className="search-box rel flex">
          <input
            type="text"
            placeholder="start writing something"
            className="qry s15 fontb"
          />
          <button className="go s15 fontb">find</button>
        </div>
      </div>

      <div className="section-b section rel">
       
        <div className="courses rel flex">
          <div className="course-a rel">
          {courseList[0]}
          </div>
          <div className="flex cols">
            
          {courseList[1]}
            {courseList[1]}
            {courseList[1]}
            {courseList[1]}
            {courseList[1]}
            {courseList[1]}
            {courseList[1]}
          {courseList[1]}
          
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightBar;
