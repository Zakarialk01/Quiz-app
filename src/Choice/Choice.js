import React from "react";
import { withRouter, Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Choice.css";

import Navbar from "../navbar/Navbar";

function Choice() {
  React.useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <Navbar />
      <h1 className="h1">Web developement :</h1>
      <div className="flex-choice" data-aos="zoom-in" data-aos-duration="2000">
        <div class="choice">
          <img
            src="data:image/png;base64,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"
            alt="quiz choice"
          />

          <p>
            <button>
              <Link
                style={{
                  textDecoration: "none",
                  fontSize: "20px",
                  color: "white",
                }}
                to="/react"
              >
                {" "}
                Pass the quiz
              </Link>
            </button>
          </p>
        </div>
        <div class="choice">
          <img
            src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/courses/1603881/14570827997997_illu-cours_html5-css3.png"
            alt="quiz choice"
          />

          <p>
            <button>
              <Link
                style={{
                  textDecoration: "none",
                  fontSize: "20px",
                  color: "white",
                }}
                to="/html"
              >
                {" "}
                Pass the quiz
              </Link>
            </button>
          </p>
        </div>

        <div class="choice">
          <img
            src="data:image/jpeg;base64,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"
            alt="quiz choice"
          />

          <p>
            <button>
              {" "}
              <Link
                style={{
                  textDecoration: "none",
                  fontSize: "20px",
                  color: "white",
                }}
                to="/css"
              >
                {" "}
                Pass the quiz
              </Link>
            </button>
          </p>
        </div>
      </div>
      <h1 className="h1">General culture :</h1>
      <div className="flex-choice" data-aos="zoom-in" data-aos-duration="2000">
        <div class="choice">
          <img
            src="http://aptitude.brainkart.com/media/subject/article-Logical-Reasoning-3iC.jpg"
            alt="quiz choice"
          />

          <p>
            <button>
              <Link
                style={{
                  textDecoration: "none",
                  fontSize: "20px",
                  color: "white",
                }}
                to="/geo"
              >
                {" "}
                Pass the quiz
              </Link>
            </button>
          </p>
        </div>
        <div class="choice">
          <img
            src="https://i.pinimg.com/originals/8d/ab/70/8dab706df73c19854caedcee616afd1d.jpg"
            alt="quiz choice"
          />

          <p>
            <button>
              <Link
                style={{
                  textDecoration: "none",
                  fontSize: "20px",
                  color: "white",
                }}
                to="/football"
              >
                {" "}
                Pass the quiz
              </Link>
            </button>
          </p>
        </div>

        <div class="choice">
          <img
            src="https://media.cdnandroid.com/item_images/65046/imagen-countries-capitals-quiz-0thumb.jpeg"
            alt="quiz choice"
          />

          <p>
            <button>
              {" "}
              <Link
                style={{
                  textDecoration: "none",
                  fontSize: "20px",
                  color: "white",
                }}
                to="/capital"
              >
                {" "}
                Pass the quiz
              </Link>
            </button>
          </p>
        </div>
      </div>
      <div className="h3">
        <div>
          <p>
            © Copyright 2021. LOUKILIZAKARIA All Rights Reserved.{" "}
            <a>Mentions légales</a> | <a> Politique de confidentialité</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Choice);
