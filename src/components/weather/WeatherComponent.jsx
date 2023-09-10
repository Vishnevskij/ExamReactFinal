import { useMemo } from "react";
import {useFetchData} from "../../hooks/useFetchData";
import { useState } from "react";
import { useEffect } from "react";
import { WeatherItem } from "./WeatherItem";
import styles from "../../../src/styles.module.css";




export const WeatherComponent = () => {
  
  const [value, setValue] = useState("");
  const [data, setData] = useState(undefined);
 

  const options = useMemo(
    () => ({
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "c5219520c6msh261d7f2b846450bp1bfa2ajsn6d49425d6756",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    }),
    []
  );
  const result = useFetchData(
    `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${value}&days=3`,
    options,
    false
  );

  const onBTNClick = ()=> {
    result().then((data) => setData(data));
    setValue("");
  } 


  return ( <div className={styles.mainView}>
    <div className={styles.searchItem}>
      
        <input
          placeholder="Enter your city"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <button onClick={onBTNClick}>Search</button>
      </div>

      {data ? <WeatherItem data={data}/> : null}
    </div>
  );
};