import { getData } from "./getData.js";

export function setData() {
  (async () => {
    const trendMovies = await fetch("/assets/script/database/trends.json");
    const trendData = await trendMovies.json();

    const moodMovies = await fetch("/assets/script/database/mood.json");
    const moodData = await moodMovies.json();

    const nowShowing = await fetch("/assets/script/database/nowShowing.json");
    const nowShowingData = await nowShowing.json();

    const leavingSoon = await fetch("/assets/script/database/leavingSoon.json");
    const leavingSoonData = await leavingSoon.json();

    const countries = await fetch("/assets/script/database/countries.json");
    const countriesData = await countries.json();

    trendData 
      ? localStorage.setItem("trends", JSON.stringify(trendData)) 
      : [];
    
    moodData 
      ? localStorage.setItem("moods", JSON.stringify(moodData)) 
      : [];
    
    nowShowingData
      ? localStorage.setItem("now-showing", JSON.stringify(nowShowingData))
      : [];

    leavingSoonData
      ? localStorage.setItem("leaving-soon" , JSON.stringify(leavingSoonData))
      : [];

    countriesData
      ? localStorage.setItem("countries" , JSON.stringify(countriesData))
      : [];
      
    getData(trendData, trendData, nowShowingData, leavingSoonData, countriesData);
  })();
}
