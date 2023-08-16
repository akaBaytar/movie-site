export function getData() {
  const trendContainer = document.querySelector(".trend-container");
  const trendCards = localStorage.getItem("trends")
    ? JSON.parse(localStorage.getItem("trends"))
    : [];

  const moodContainer = document.querySelector(".in-the-mood-wrapper .card-container");
  const moodCards = localStorage.getItem("moods")
    ? JSON.parse(localStorage.getItem("moods"))
    : [];

  const nowShowingContainer = document.querySelector(".now-showing-wrapper .card-container");
  const nowShowingCards = localStorage.getItem("now-showing")
    ? JSON.parse(localStorage.getItem("now-showing"))
    : [];

  const leavingSoonContainer = document.querySelector(".leaving-soon-wrapper .card-container");
  const leavingSoonCards = localStorage.getItem("leaving-soon")
    ? JSON.parse(localStorage.getItem("leaving-soon"))
    : [];

  const countriesContainer = document.querySelector(".cultures-wrapper .card-container");
  const countriesCards = localStorage.getItem("countries")
    ? JSON.parse(localStorage.getItem("countries"))
    : [];

  function trendCardsFunc() {
    let results = "";
    trendCards.forEach((card) => {
      results += `
    <div class="cards-container">
        <div class="numbers">
            <p class="number">${card.id}</p>
        </div>
        <div class="single-card-container">
            <div class="single-card">
                <div class="front">
                <img src="${card.img}" alt="Trend Films">
                </div>
                <div class="back">
                    <div class="content">
                        <h5 class="eng-title">${card.name.engName}</h5>
                        <h6 class="title">${card.name.orgName}</h6>
                        <p class="director">Directed by: 
                            <strong>${card.director}</strong>
                        </p>
                        <p class="country">${card.country}
                            <span class="date">${card.meta.date}</span>
                        </p>
                        <span class="genre">${card.meta.genre}</span>
                        <span class="time"><i class="bi bi-clock"></i>${card.meta.time}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
      `;
    });
    trendContainer.innerHTML = results;
  }
  trendCardsFunc();

  function moodCardsFunc() {
    let results = "";
    moodCards.forEach((card) => {
      results += `
        <div class="card" id="card${card.id}">
          <img
            src="${card.img}"
            alt="Mood Card"
          />
          <h5 class="card-title">${card.desc}</h5>
        </div>
      `;
    });
    moodContainer.innerHTML = results;
  }
  moodCardsFunc();

  function nowShowingFunc() {
    let results = "";
    nowShowingCards.forEach((card) =>{
      results += `
      <div class="card" id="card${card.id}">
              <img src="${card.img}" alt="Now Showing">
              <div class="card-meta">
                <h6 class="movie-id">#<span class="card-id">${card.id}</span></h6>
                <h5 class="movie-title">${card.name.engName}</h5>
                <h6 class="movie-subtitle">${card.name.orgName}</h6>
                <p class="movie-director">${card.director}</p>
                <p class="movie-countries">${card.meta.countries} <span class="movie-year">${card.meta.date}</span></p>
              </div>
              <i class="bi bi-play-circle"></i>
            </div>
      `;
    });
    nowShowingContainer.innerHTML = results;
  }
  nowShowingFunc();

  function leavingSoonFunc() {
    let results = "";
    leavingSoonCards.forEach((card) =>{
      results += `
      <div class="card" id="card${card.id}">
        <div class="leaving-date">Leaving in <span>${card.meta.leavingDate}</span> days.</div>
        <img src="${card.img}" alt="Now Showing">
        <div class="card-meta">
          <h5 class="movie-title">${card.name.engName}</h5>
          <h6 class="movie-subtitle">${card.name.orgName}</h6>
          <p class="movie-director">${card.director}</p>
          <p class="movie-countries">${card.meta.countries} 
            <span class="movie-year">${card.meta.date}</span>
          </p>
        </div>
        <i class="bi bi-play-circle"></i>
      </div>
      `;
    })
    leavingSoonContainer.innerHTML = results;
  }
  leavingSoonFunc();

  function countriesCardsFunc() {
    let results = "";
    countriesCards.forEach((card) => {
      results += `
        <div class="card" id="card${card.id}">
          <img
            src="${card.img}"
            alt="Culture Card"
          />
          <h5 class="card-title">${card.name}</h5>
        </div>
      `;
    });
    countriesContainer.innerHTML = results;
  }
  countriesCardsFunc();
}

