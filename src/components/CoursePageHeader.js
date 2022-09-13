import { React, useState } from "react";
import "../components_styles/Coursepgheader.css";
import parse from "html-react-parser";
import SideCard from "./SideCard";
function CoursePageHeader({ obj_sum, obj_data, CalcRate }) {
  // get the percentage of disscount

  return (
    <>
      <div className="container-fluid page-header ">
        <div className="container-fluid page-header-content">
          <div className="path">
            <a href="">Development</a>
            <span className="arrow">&#10148;</span>
            <a href="">Programing Language</a>
            <span className="arrow">&#10148;</span>
            <a href="">Python</a>
          </div>
          <img
            class="cover_image-hidden"
            src="https://img-c.udemycdn.com/course/750x422/394676_ce3d_5.jpg"
            alt="Course img"
          ></img>
          <h1 className="crstitle">{obj_sum.title}</h1>
          <p className="crsheadline">{obj_sum.headline}</p>
          <div className="rate">
            <span className="checked">
              {Math.round(10 * obj_sum.avg_rating_recent) / 10}
            </span>
            {CalcRate(obj_sum.avg_rating_recent).map((cls) => {
              return parse(cls);
            })}
            <a className="str-rate" href="">
              ({obj_sum.num_reviews} ratings)
            </a>
            <span className="std">{obj_sum.num_subscribers} students</span>
          </div>
          <div className="authors">
            <span className="createdby">Created by</span>
            {obj_sum.visible_instructors.map((element, i) => {
              let tmp = ` <a href="">` + element.title + "</a>";
              if (i != obj_sum.visible_instructors.length - 1) tmp += ", ";
              return parse(tmp);
            })}
          </div>

          <div className="extra-data">
            <span className="lst-update">
              <i
                className="fa fa-exclamation-circle "
                style={{ paddingRight: "10px" }}
                aria-hidden="true"
              ></i>{" "}
              Last updated {obj_sum.last_update_date}{" "}
            </span>
            <span className="lang">
              <i className="fa fa-globe" style={{ paddingRight: "10px" }}></i>
              <span className="lang-txt"> English </span>
            </span>
            <span className="subtitle">
              <i
                className="fa fa-cc "
                style={{ paddingRight: "10px" }}
                aria-hidden="true"
              ></i>
              <span className="subtitle">English </span>
            </span>
          </div>
        </div>
        <div className="buy-box">
          <span className="cur-price">
            {obj_sum.price.discount_price.price_string}
          </span>
          <button type="button" className="btn addtocart">
            Add to cart
          </button>
          <div className="gurantee">30-Day-Money-Back gurantee</div>
          <div className="flx">
            <a href="#">Share</a>
            <a href="#">Gift this course</a>
            <a href="#">Apply coupon</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default CoursePageHeader;
