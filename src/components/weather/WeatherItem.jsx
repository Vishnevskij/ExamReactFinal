import React from "react";
import { useMemo } from "react";
import { useFetchData } from "../../hooks/useFetchData";
import { useState } from "react";
import { useEffect } from "react";
import styles from "../../styles.module.css";
import { FaSun } from "react-icons/fa";
import { FaPooStorm } from "react-icons/fa";
import { BsCloudRainHeavyFill } from "react-icons/bs";
import { BsFillCloudsFill } from "react-icons/bs";
import { BsCloudSnowFill } from "react-icons/bs";

export const WeatherItem = ({ data }) => {
  const { location, current, forecast } = data;
  const [isMetric, setIsMetric] = useState(true);

  console.log(data, "DATA!!!!");

  const iconSize = 50;

  return (
    <div className={styles.nowCard}>
      <div className={styles.leftSide}>
        <div className={styles.section1}>
          <h1>{location.name}</h1>
          <span>{location.country}</span>

          <img
            width="150px"
            src={
              forecast.forecastday[0].day.condition.text
                .toLowerCase()
                .includes("sun") &&
              "https://cdn.pixabay.com/photo/2012/04/10/16/49/sun-26344_1280.png"
            }
          />
          <img
            width="150px"
            src={
              forecast.forecastday[0].day.condition.text
                .toLowerCase()
                .includes("storm") &&
              "https://cdn.pixabay.com/photo/2013/04/01/09/22/thunderstorm-98541_1280.png"
            }
          />
          <img
            width="150px"
            src={
              forecast.forecastday[0].day.condition.text
                .toLowerCase()
                .includes("rain") &&
              "https://cdn.pixabay.com/photo/2012/04/18/13/22/cloud-37011_1280.png"
            }
          />
          <img
            width="150px"
            src={
              forecast.forecastday[0].day.condition.text
                .toLowerCase()
                .includes("cloud") &&
              "https://cdn.pixabay.com/photo/2012/04/18/13/21/clouds-37009_1280.png"
            }
          />
          <img
            width="150px"
            src={
              forecast.forecastday[0].day.condition.text
                .toLowerCase()
                .includes("snow") &&
              "https://cdn.pixabay.com/photo/2012/04/18/13/23/cloudy-37012_1280.png"
            }
          />
          <p>{isMetric ? `${current.temp_c} С°` : `${current.temp_f} F°`}</p>
        </div>

        <div className={styles.section2}>
          <h2>TODAYS FORECAST</h2>

          <div className={styles.hourlyForecast}>
            <div className={styles.sixAM}>
              <p>6:00 AM</p>
              <h3>
                {isMetric
                  ? `${forecast.forecastday[0].hour[6].temp_c} С°`
                  : `${forecast.forecastday[0].hour[6].temp_f} F°`}
              </h3>{" "}
            </div>

            <div className={styles.nineAM}>
              <p>9:00 AM</p>
              <h3>
                {isMetric
                  ? `${forecast.forecastday[0].hour[9].temp_c} С°`
                  : `${forecast.forecastday[0].hour[9].temp_f} F°`}
              </h3>
            </div>

            <div className={styles.twelveAM}>
              <p>12:00 AM</p>
              <h3>
                {isMetric
                  ? `${forecast.forecastday[0].hour[12].temp_c} С°`
                  : `${forecast.forecastday[0].hour[12].temp_f} F°`}
              </h3>
            </div>

            <div className={styles.threePM}>
              <p>3:00 PM</p>
              <h3>
                {isMetric
                  ? `${forecast.forecastday[0].hour[15].temp_c} С°`
                  : `${forecast.forecastday[0].hour[15].temp_f} F°`}
              </h3>
            </div>

            <div className={styles.sixPM}>
              <p>6:00 PM</p>
              <h3>
                {" "}
                {isMetric
                  ? `${forecast.forecastday[0].hour[18].temp_c} С°`
                  : `${forecast.forecastday[0].hour[18].temp_f} F°`}
              </h3>
            </div>

            <div className={styles.ninePM}>
              <p>9:00 PM</p>
              <h3>
                {isMetric
                  ? `${forecast.forecastday[0].hour[21].temp_c} С°`
                  : `${forecast.forecastday[0].hour[21].temp_f} F°`}
              </h3>
            </div>
          </div>
        </div>

        <div className={styles.section3}>
          <div className={styles.conditionsSection}>
            <h2>AIR CONDITIONS</h2>
            <button onClick={() => setIsMetric(!isMetric)}>
              {isMetric ? "Metric" : "Imperical"}
            </button>
          </div>

          <div className={styles.conditionInfo}>
            <div className={styles.infoRow1}>
              <div className={styles.leftRow1}>
                <p>Real Feel</p>
                <span>
                  {isMetric
                    ? `${current.feelslike_c} С°`
                    : `${current.feelslike_f} F°`}
                </span>
              </div>
              <div className={styles.leftRow2}>
                <p>Wind</p>
                <span>
                  {isMetric
                    ? `${forecast.forecastday[0].day.maxwind_kph} KP/H`
                    : `${forecast.forecastday[0].day.maxwind_mph} MP/H`}{" "}
                </span>
              </div>
            </div>

            <div className={styles.infoRow2}>
              <div className={styles.rightRow1}>
                <p>Chance of rain</p>
                <span>
                  {forecast.forecastday[0].day.daily_chance_of_rain} %
                </span>
              </div>
              <div className={styles.rightRow2}>
                <p>UV Index</p>
                <span>{forecast.forecastday[0].day.uv}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.rightSide}>
        <div className={styles.rigthSideHeader}>
          <h2>3-DAYS FORECAST</h2>
        </div>

        <div className={styles.rightDay1}>
          <div>
            <p>Today</p>
          </div>

          <span>
            {forecast.forecastday[0].day.condition.text
              .toLowerCase()
              .includes("sun") && <FaSun size={iconSize} />}
          </span>
          <span>
            {forecast.forecastday[0].day.condition.text
              .toLowerCase()
              .includes("storm") && <FaPooStorm size={iconSize} />}
          </span>
          <span>
            {forecast.forecastday[0].day.condition.text
              .toLowerCase()
              .includes("rain") && <BsCloudRainHeavyFill size={iconSize} />}
          </span>
          <span>
            {forecast.forecastday[0].day.condition.text
              .toLowerCase()
              .includes("cloud") && <BsFillCloudsFill size={iconSize} />}{" "}
          </span>
          <span>
            {forecast.forecastday[0].day.condition.text
              .toLowerCase()
              .includes("snow") && <BsCloudSnowFill size={iconSize} />}
          </span>

          <div>
            <span>
              {isMetric
                ? `${forecast.forecastday[0].day.maxtemp_c} С°`
                : `${forecast.forecastday[0].day.maxtemp_f} F°`}
            </span>
            <span className={styles.grey}>
              /{" "}
              {isMetric
                ? `${forecast.forecastday[0].day.mintemp_c} С°`
                : `${forecast.forecastday[0].day.mintemp_f} F°`}
            </span>
          </div>
        </div>

        <div className={styles.rightDay2}>
          <div>
            <p>Tomorrow</p>
          </div>

          <span>
            {forecast.forecastday[1].day.condition.text
              .toLowerCase()
              .includes("sun") && <FaSun size={iconSize} />}
          </span>
          <span>
            {forecast.forecastday[1].day.condition.text
              .toLowerCase()
              .includes("storm") && <FaPooStorm size={iconSize} />}
          </span>
          <span>
            {forecast.forecastday[1].day.condition.text
              .toLowerCase()
              .includes("rain") && <BsCloudRainHeavyFill size={iconSize} />}
          </span>
          <span>
            {forecast.forecastday[1].day.condition.text
              .toLowerCase()
              .includes("cloud") && <BsFillCloudsFill size={iconSize} />}{" "}
          </span>
          <span>
            {forecast.forecastday[1].day.condition.text
              .toLowerCase()
              .includes("snow") && <BsCloudSnowFill size={iconSize} />}
          </span>

          <div>
            <span>
              {isMetric
                ? `${forecast.forecastday[1].day.maxtemp_c} С°`
                : `${forecast.forecastday[1].day.maxtemp_f} F°`}
            </span>
            <span className={styles.grey}>
              /{" "}
              {isMetric
                ? `${forecast.forecastday[1].day.mintemp_c} С°`
                : `${forecast.forecastday[1].day.mintemp_f} F°`}
            </span>
          </div>
        </div>

        <div className={styles.rightDay3}>
          <div>
            <p>Overmorrow</p>
          </div>

          <span>
            {forecast.forecastday[2].day.condition.text
              .toLowerCase()
              .includes("sun") && <FaSun size={iconSize} />}
          </span>
          <span>
            {forecast.forecastday[2].day.condition.text
              .toLowerCase()
              .includes("storm") && <FaPooStorm size={iconSize} />}
          </span>
          <span>
            {forecast.forecastday[2].day.condition.text
              .toLowerCase()
              .includes("rain") && <BsCloudRainHeavyFill size={iconSize} />}
          </span>
          <span>
            {forecast.forecastday[2].day.condition.text
              .toLowerCase()
              .includes("cloud") && <BsFillCloudsFill size={iconSize} />}{" "}
          </span>
          <span>
            {forecast.forecastday[2].day.condition.text
              .toLowerCase()
              .includes("snow") && <BsCloudSnowFill size={iconSize} />}
          </span>

          <div>
            <span>
              {isMetric
                ? `${forecast.forecastday[2].day.maxtemp_c} С°`
                : `${forecast.forecastday[2].day.maxtemp_f} F°`}
            </span>
            <span className={styles.grey}>
              /{" "}
              {isMetric
                ? `${forecast.forecastday[2].day.mintemp_c} С°`
                : `${forecast.forecastday[2].day.mintemp_f} F°`}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
