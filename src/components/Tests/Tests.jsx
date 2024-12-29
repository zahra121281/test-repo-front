import React from "react";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Tests.css";

const Tests = () => {
  return (
    <div className="bg-dark-custom m-5 rounded rounded-5">
    <div className="container-fluid services py-5">
      <html>
        <head>
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
            rel="stylesheet"
          />
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
            rel="stylesheet"
          />
        </head>
      </html>
      <h1 className="TestHeader">تست‌ها</h1>
      <div className="container py-48">
        <div className="row g-5 services-inner">
          <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".3s">
            <div className="services-item-test">
              <div className="p-4 text-center services-content-test">
                <div className="services-content-test-icon">
                  <i
                    className="fa fa-user fa-7x mb-4"
                    style={{ color: "#63ad97" }}
                  ></i>
                  <h5 className="TestName">تست‌های فردی</h5>
                  <HashLink
                    to="/TestPage#testTitle"
                    className="btn btn-secondary text-white px-5 py-3 rounded-pill"
                    style={{ fontFamily: "Ios15Medium" }}
                  >
                    دیدن تست‌ها
                  </HashLink>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".3s">
            <div className="services-item-test">
              <div className="p-4 text-center services-content-test">
                <div className="services-content-test-icon">
                  <i className="fa fa-book fa-7x mb-4"
                    style={{ color: "#63ad97" }}
                    ></i>
                  <h5 className="TestName">تست های تحصیلی</h5>
                  <HashLink
                    to="/TestPage#testTitle"
                    className="btn btn-secondary text-white px-5 py-3 rounded-pill"
                    style={{ fontFamily: "Ios15Medium" }}
                  >
                    دیدن تست‌ها
                  </HashLink>
                  {/* <a
                    href="http://localhost:5173/TestPage#testTitle"
                    className="btn btn-secondary text-white px-5 py-3 rounded-pill"
                  >
                    دیدن تست‌ها
                  </a> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".3s">
            <div className="services-item-test">
              <div className="p-4 text-center services-content-test">
                <div className="services-content-test-icon">
                  <i
                    className="fa fa-venus-double fa-7x mb-4"
                    style={{ color: "#63ad97" }}
                  ></i>
                  <h5 className="TestName">تست‌های پیش از ازدواج</h5>
                  <HashLink
                    to="/TestPage#testTitle2"
                    className="btn btn-secondary text-white px-5 py-3 rounded-pill"
                    style={{ fontFamily: "Ios15Medium" }}
                  >
                    دیدن تست‌ها
                  </HashLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Tests;