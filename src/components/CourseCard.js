import { React, useContext, useRef, useEffect } from "react";
import { IDContext } from "../Contexts/CourseIDContext";
import { CourseContext } from "../Contexts/CoursesContext";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import PopOverCard from "./PopOverCard";
function CourseCard({ course }) {
  const { id } = useContext(IDContext);
  const { summary } = useContext(CourseContext);
  const popover = (props) => (
    <Popover {...props}>
      <PopOverCard summary={course} />
    </Popover>
  );
  return (
    <OverlayTrigger
      className="tippycard"
      overlay={popover}
      placement="top-end"
      trigger={["hover"]}
    >
      <div className="course-preview">
        <div className="course-img">
          <a href="#">
            <img src={course.image_480x270} alt="" />
          </a>
        </div>
        <div className="course-info">
          <div className="course-description">{course.title}</div>
          <div className="course-author">
            {course.visible_instructors.map((element, i) => {
              let tmp = element.title;
              if (i != course.visible_instructors.length - 1) tmp += ", ";
              return tmp;
            })}
          </div>
          <div className="course-rate">
            <span className="checked">
              {Math.round(10 * course.avg_rating_recent) / 10}
            </span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star-half-full checked"></span>
            <span className="students">({course.num_reviews})</span>
          </div>
          <span className="course-price">
            {course.price.discount_price.price_string}
          </span>
          <span className="course-price old">
            {course.price.list_price.price_string}
          </span>
        </div>
      </div>
    </OverlayTrigger>
  );
}

export default CourseCard;
