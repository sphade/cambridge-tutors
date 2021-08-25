import paw from "../img/course-1.svg";

import teacher1 from "../img/teacher-1.png";
import video from "../img/video.mp4";
import student4 from "../img/student-4.png";
import student2 from "../img/student-2.png";
import student3 from "../img/student-3.png";
import React, { useState } from "react";
import d3 from "../img/d3.jpg";
function Course(props) {
  const courseID = props.match.params.id;

  const [course, setCourse] = useState({
    id: 1,
    title: "math for waec",
    about:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident porro necessitatibus quam deserunt quibusdam et facilis consectetur dolorem, maxime dolor molestias reprehenderit quod, quos tempora <br/>consequatur nemo eligendi minus illo.",
    tutor: {
      ID: 1,
      name: "mrs idowu",
      userName: "@lawal",
      dp: teacher1,
    },
    duration: "1h3mins",
    poster: d3,
    video: [
      {
        id: 1,
        title: "introduction",
        duration: " 3 mins 25sec",
      },
      {
        id: 2,
        title: "inequality",
        duration: " 30 mins ",
      },
      {
        id: 3,
        title: "polynomial",
        duration: " 51 mins 37sec",
      },
      {
        id: 4,
        title: "surds",
        duration: " 21 mins 20sec",
      },
      {
        id: 5,
        title: "logarithm",
        duration: " 10 mins 5sec",
      },
    ],
  });
  var courseVideos = [];
  for (let i = 0; i < course.video.length; i++) {
    courseVideos.push(
      <a href="#" className="noul  rel flex" key={"courseVideo-" + i}>
        <div className="id s20 fontn cfff">{course.video[i].id}</div>
        <div className="meta rel">
          <h1 className="s15 fontb lbl c333 "> {course.video[i].title}</h1>
          <h1 className="s13 fontn duration c777">
            {course.video[i].duration}
          </h1>
        </div>
      </a>
    );
  }

  return (
    <div className="coursePage rel flex">
      <div className="course-info rel">
        <div className="tutor rel aic flex">
          <div className="pic">
            <img src={course.tutor.dp} alt="" />
          </div>

          <div className="meta rel">
            <h2 className="s20 name fontb c333">{course.tutor.name}</h2>
            <h2 className="s15 uname fontb c777">{course.tutor.userName}</h2>
          </div>
        </div>
        <div className="course-meta">
          <h2 className="s25 c333 fontb title">{course.title}</h2>
          <p className="s20 fontn c777 about"> {course.about}</p>
        </div>

        <div className="section-b section rel">
          <div className="title  fontb s20">
            course
            <span className="fontn black s20"> achievement </span>
          </div>

          <div className="video-stats flex">
            <div className="point flex">
              <div class="fas fa-user-graduate    purple"></div>

              <h2 className="label  s15 c333 fontb"> student</h2>
              <h2 className="label  s13 c777 fontb"> 105</h2>
            </div>
            <div className="point flex">
              <div class="fas fa-infinity    blue"></div>

              <h2 className="label  s15 c333 fontb"> completion</h2>
              <h2 className="label  s13 c777 fontb"> 100%</h2>
            </div>
            <div className="point flex">
              <div class="fas fa-star    green"></div>

              <h2 className="label  s15 c333 fontb"> rating</h2>
              <h2 className="label  s13 c777 fontb"> 43%</h2>
            </div>
          </div>
        </div>

        <div className="section-b section rel courseVideos">
          <div className="title s24 fontb s20">
            course
            <span className="fontn black"> details </span>
          </div>

          <div className="course-videos flex aic">{courseVideos}</div>
        </div>
      </div>
      <div className="course-preview rel">
        <div className="player rel">
          <video src={video} poster={course.poster}></video>
          <div className="ctrls abs flex aic">
            <button className="fas fa-pause   pp "></button>
            <div className="timer rel fontb s15 cfff">02:54 / 09:55</div>
            <div className="slider rel">
              <div className="prog rel">
                <div className="bar rel">
                  <div className="knob abs"></div>
                </div>
              </div>
            </div>

            <button className="fas fa-volume-up   vol "></button>

            <button className="fas fa-window-maximize   fs "></button>
          </div>
        </div>
        <div className=" flex rel extra-block">
          <div className="chat rel ">
            <div className="section-b section rel courseVideos">
              <div className="title s24 fontb s20">
                quick
                <span className="fontn black"> chat </span>
              </div>

              <div className="messages flex aic">
                <div className="bubble rel">
                  <h2 className="txt ibl s15 c33 ">i am a newbie</h2>
                </div>

                <div className="bubble rel mine">
                  <h2 className="txt ibl s15 c33">
                    this course is awesome, i learned a lot
                  </h2>
                </div>

                <div className="bubble rel mine">
                  <h2 className="txt ibl s15 c33">what do you mean by x+3</h2>
                </div>

                <div className="bubble rel mine">
                  <h2 className="txt ibl s15 c33">great introduction</h2>
                </div>

                <div className="bubble rel">
                  <h2 className="txt ibl s15 c33">
                    nice, can't wait for the next module
                  </h2>
                </div>

                <div className="bubble rel">
                  <h2 className="txt ibl s15 c333 ">
                    this course is well explained
                  </h2>
                </div>

                <div className="bubble rel">
                  <h2 className="txt ibl s15 c33">cun u sub for x instead</h2>
                </div>
              </div>
              <div className="right-bar">
                

                <div className="section-b section sticky">
                
                  <div className="search-box rel flex">
                    <input
                      type="text"
                      placeholder="start writing something"
                      className="qry s15 fontb"
                    />
                    <button className="go s15 fontb">comment</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="now-watching rel">
            <div className="tooltip  s20 fontb cfff">67 live now</div>
            <div className="section-b section rel courseVideos">
              <div className="title s24 fontb s20">
                now
                <span className="fontn black"> watching </span>
              </div>
              <div className="you-list">
                <div className="you rel aic flex">
                  <div className="pic">
                    <img src={student4} alt="" className="bl" />
                  </div>

                  <div className="meta rel">
                    <h2 className="s20 name fontb c333">adesanya</h2>
                    <h2 className="s15 uname fontb c777">@israel</h2>
                  </div>
                </div>

                <div className="you rel aic flex">
                  <div className="pic">
                    <img src={student3} alt="" className="bl" />
                  </div>

                  <div className="meta rel">
                    <h2 className="s20 name fontb c333">adesanya</h2>
                    <h2 className="s15 uname fontb c777">@israel</h2>
                  </div>
                </div>

                <div className="you rel aic flex">
                  <div className="pic">
                    <img src={student2} alt="" className="bl" />
                  </div>

                  <div className="meta rel">
                    <h2 className="s20 name fontb c333">adesanya</h2>
                    <h2 className="s15 uname fontb c777">@israel</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Course;
