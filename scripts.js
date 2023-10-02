$(document).ready(function () {
  var spinner = ` <div class="d-flex justify-content-center">
                    <div class="spinner-border text-light" role="status" style="width: 5rem; height: 5rem; border-width: .7em;">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>`;

  var loader = document.querySelector(".loader");
  loader.innerHTML = spinner;

  $.ajax({
    url: "https://smileschool-api.hbtn.info/quotes",
    method: "GET",
    success: function (res) {
      let x = document.querySelector(".carousel-inner");
      x.innerHTML = "";

      loader.style.display = "none";
      var div = `
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
        </div>
      </div>
      `;
      x.insertAdjacentHTML("beforeend", div);

      for (var i = 0; i < res.length; i++) {
        var secondDiv = `
        <div class="carousel-item ${i == 0 ? "active" : ""}">
            <div class="row mx-auto align-items-center">
                <div class="col-12 col-sm-2 col-lg-2 offset-lg-1 text-center">
                    <img
                    src=${res[i].pic_url}
                    class="d-block align-self-center"
                    alt="Carousel Pic 1"
                    />
                </div>

                <div class="col-12 col-sm-7 offset-sm-2 col-lg-9 offset-lg-0">
                    <div class="quote-text">
                        <p class="text-white">
                            ${res[i].text}
                        </p>
                        <h4 class="text-white font-weight-bold">${
                          res[i].name
                        }</h4>
                        <span class="text-white">${res[i].title}</span>
                    </div>
                </div>
            </div>
        </div>
        `;
        x.insertAdjacentHTML("beforeend", secondDiv);
      }
    },
  });

  // Most Popular Tutorials

  var loader_1 = document.querySelector(".zab");
  loader_1.innerHTML = "";
  $.ajax({
    url: "https://smileschool-api.hbtn.info/popular-tutorials",
    method: "GET",
    success: function (res) {
      let x = document.querySelector("#as");
      x.innerHTML = "";

      loader_1.style.display = "none";

      let z = `
            <div id="carouselExampleControls2" class="carousel slide" data-ride="false">
              <div class="carousel-inner">
              </div>
            </div>
    `;

      x.insertAdjacentHTML("beforeend", z);

      for (let i = 0; i < res.length; i++) {
        res[i]["sub_title"] = res[i]["sub-title"];
        console.log(res[i]);
        var card = `
            <div class="carousel-item ${i == 0 ? "active" : ""}">
              <div class="row align-items-center mx-auto">
                <div
                class="col-12 col-sm-6 col-md-6 col-lg-3 d-flex justify-content-center justify-content-md-end justify-content-lg-center"
                >
                <div class="card">
                  <img
                    src="${res[i].thumb_url}"
                    class="card-img-top"
                    alt="Video thumbnail"
                  />
                  <div class="card-img-overlay text-center">
                    <img
                      src="images/play.png"
                      alt="Play"
                      width="64px"
                      class="align-self-center play-overlay"
                    />
                  </div>
                  <div class="card-body">
                    <h5 class="card-title font-weight-bold">
                      ${res[i].title}
                    </h5>
                    <p class="card-text text-muted">
                      ${res[i].sub_title}
                    </p>
                    <div class="creator d-flex align-items-center">
                      <img
                        src="${res[i].author_pic_url}"
                        alt="Creator of
                        Video"
                        width="30px"
                        class="rounded-circle"
                      />
                      <h6 class="pl-3 m-0 main-color">${res[i].author}</h6>
                    </div>
                    <div class="info pt-3 d-flex justify-content-between">
                      <div class="rating">
                        <img
                          src="images/star_on.png"
                          alt="star on"
                          width="15px"
                        />
                        <img
                          src="images/star_on.png"
                          alt="star on"
                          width="15px"
                        />
                        <img
                          src="images/star_on.png"
                          alt="star on"
                          width="15px"
                        />
                        <img
                          src="images/star_on.png"
                          alt="star on"
                          width="15px"
                        />
                        <img
                          src="images/star_off.png"
                          alt="star on"
                          width="15px"
                        />
                      </div>
                      <span class="main-color">${res[i].duration}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="col-sm-6 col-md-6 col-lg-3 d-none d-sm-flex justify-content-md-start justify-content-lg-center"
              >
                <div class="card">
                  <img
                    src="${res[i + 1].thumb_url}"
                    class="card-img-top"
                    alt="Video thumbnail"
                  />
                  <div class="card-img-overlay text-center">
                    <img
                      src="images/play.png"
                      alt="Play"
                      width="64px"
                      class="align-self-center play-overlay"
                    />
                  </div>
                  <div class="card-body">
                    <h5 class="card-title font-weight-bold">${
                      res[i + 1].title
                    }</h5>
                    <p class="card-text text-muted">
                    ${res[i].sub_title}
                    </p>
                    <div class="creator d-flex align-items-center">
                      <img
                        src="${res[i + 1].author_pic_url}"
                        alt="Creator of
                        Video"
                        width="30px"
                        class="rounded-circle"
                      />
                      <h6 class="pl-3 m-0 main-color">${res[i].author}</h6>
                    </div>
                    <div class="info pt-3 d-flex justify-content-between">
                      <div class="rating">
                        <img
                          src="images/star_on.png"
                          alt="star on"
                          width="15px"
                        />
                        <img
                          src="images/star_on.png"
                          alt="star on"
                          width="15px"
                        />
                        <img
                          src="images/star_on.png"
                          alt="star on"
                          width="15px"
                        />
                        <img
                          src="images/star_on.png"
                          alt="star on"
                          width="15px"
                        />
                        <img
                          src="images/star_off.png"
                          alt="star on"
                          width="15px"
                        />
                      </div>
                      <span class="main-color">${res[i + 1].duration}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-3 d-none d-lg-flex justify-content-center">
                <div class="card">
                  <img
                    src="${res[i + 2].thumb_url}"
                    class="card-img-top"
                    alt="Video thumbnail"
                  />
                  <div class="card-img-overlay text-center">
                    <img
                      src="images/play.png"
                      alt="Play"
                      width="64px"
                      class="align-self-center play-overlay"
                    />
                  </div>
                  <div class="card-body">
                    <h5 class="card-title font-weight-bold">
                    ${res[i + 2].title}
                    </h5>
                    <p class="card-text text-muted">
                    ${res[i].sub_title}
                    </p>
                    <div class="creator d-flex align-items-center">
                      <img
                        src="${res[i + 2].author_pic_url}"
                        alt="Creator of
                        Video"
                        width="30px"
                        class="rounded-circle"
                      />
                      <h6 class="pl-3 m-0 main-color">${res[i].author}</h6>
                    </div>
                    <div class="info pt-3 d-flex justify-content-between">
                      <div class="rating">
                        <img
                          src="images/star_on.png"
                          alt="star on"
                          width="15px"
                        />
                        <img
                          src="images/star_on.png"
                          alt="star on"
                          width="15px"
                        />
                        <img
                          src="images/star_on.png"
                          alt="star on"
                          width="15px"
                        />
                        <img
                          src="images/star_on.png"
                          alt="star on"
                          width="15px"
                        />
                        <img
                          src="images/star_off.png"
                          alt="star on"
                          width="15px"
                        />
                      </div>
                      <span class="main-color">${res[i + 2].duration}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-3 d-none d-lg-flex justify-content-center">
                <div class="card">
                  <img
                    src="${
                      i + 3 < res.length
                        ? res[i + 3].thumb_url
                        : res[i].thumb_url
                    }"
                    class="card-img-top"
                    alt="Video thumbnail"
                  />
                  <div class="card-img-overlay text-center">
                    <img
                      src="images/play.png"
                      alt="Play"
                      width="64px"
                      class="align-self-center play-overlay"
                    />
                  </div>
                  <div class="card-body">
                    <h5 class="card-title font-weight-bold">${
                      i + 3 < res.length ? res[i + 3].title : res[i].title
                    }</h5>
                    <p class="card-text text-muted">
                    ${res[i].sub_title}
                    </p>
                    <div class="creator d-flex align-items-center">
                      <img
                        src="${
                          i + 3 < res.length
                            ? res[i + 3].author_pic_url
                            : res[i].author_pic_url
                        }"
                        alt="Creator of
                        Video"
                        width="30px"
                        class="rounded-circle"
                      />
                      <h6 class="pl-3 m-0 main-color">${res[i].author}</h6>
                    </div>
                    <div class="info pt-3 d-flex justify-content-between">
                      <div class="rating">
                        <img
                          src="images/star_on.png"
                          alt="star on"
                          width="15px"
                        />
                        <img
                          src="images/star_on.png"
                          alt="star on"
                          width="15px"
                        />
                        <img
                          src="images/star_on.png"
                          alt="star on"
                          width="15px"
                        />
                        <img
                          src="images/star_on.png"
                          alt="star on"
                          width="15px"
                        />
                        <img
                          src="images/star_off.png"
                          alt="star on"
                          width="15px"
                        />
                      </div>
                      <span class="main-color">${res[i + 3].duration}</span>
                    </div>
                  </div>
                </div>
              </div>

                
              </div>
            </div>
          `;
        x.insertAdjacentHTML("beforeend", card);
      }
    },
  });

  // Latest Popular Tutorials

  // var loader_1 = document.querySelector(".zab");
  loader_1.innerHTML = "";
  $.ajax({
    url: "https://smileschool-api.hbtn.info/latest-videos",
    method: "GET",
    success: function (res) {
      let x = document.querySelector("#asb");
      x.innerHTML = "";

      loader_1.style.display = "none";

      let z = `
            <div id="carouselExampleControls2" class="carousel slide" data-ride="false">
              <div class="carousel-inner">
              </div>
            </div>
    `;

      x.insertAdjacentHTML("beforeend", z);

      for (let i = 0; i < res.length; i++) {
        res[i]["sub_title"] = res[i]["sub-title"];
        console.log(res[i]);
        var card = `
            <div class="carousel-item ${i == 0 ? "active" : ""}">
              <div class="row align-items-center mx-auto">
                <div
                class="col-12 col-sm-6 col-md-6 col-lg-3 d-flex justify-content-center justify-content-md-end justify-content-lg-center"
                >
                <div class="card">
                  <img
                    src="${res[i].thumb_url}"
                    class="card-img-top"
                    alt="Video thumbnail"
                  />
                  <div class="card-img-overlay text-center">
                    <img
                      src="images/play.png"
                      alt="Play"
                      width="64px"
                      class="align-self-center play-overlay"
                    />
                  </div>
                  <div class="card-body">
                    <h5 class="card-title font-weight-bold">
                      ${res[i].title}
                    </h5>
                    <p class="card-text text-muted">
                      ${res[i].sub_title}
                    </p>
                    <div class="creator d-flex align-items-center">
                      <img
                        src="${res[i].author_pic_url}"
                        alt="Creator of
                        Video"
                        width="30px"
                        class="rounded-circle"
                      />
                      <h6 class="pl-3 m-0 main-color">${res[i].author}</h6>
                    </div>
                    <div class="info pt-3 d-flex justify-content-between">
                      <div class="rating">
                        <img
                          src="images/star_on.png"
                          alt="star on"
                          width="15px"
                        />
                        <img
                          src="images/star_on.png"
                          alt="star on"
                          width="15px"
                        />
                        <img
                          src="images/star_on.png"
                          alt="star on"
                          width="15px"
                        />
                        <img
                          src="images/star_on.png"
                          alt="star on"
                          width="15px"
                        />
                        <img
                          src="images/star_off.png"
                          alt="star on"
                          width="15px"
                        />
                      </div>
                      <span class="main-color">${res[i].duration}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="col-sm-6 col-md-6 col-lg-3 d-none d-sm-flex justify-content-md-start justify-content-lg-center"
              >
                <div class="card">
                  <img
                    src="${res[i + 1].thumb_url}"
                    class="card-img-top"
                    alt="Video thumbnail"
                  />
                  <div class="card-img-overlay text-center">
                    <img
                      src="images/play.png"
                      alt="Play"
                      width="64px"
                      class="align-self-center play-overlay"
                    />
                  </div>
                  <div class="card-body">
                    <h5 class="card-title font-weight-bold">${
                      res[i + 1].title
                    }</h5>
                    <p class="card-text text-muted">
                    ${res[i].sub_title}
                    </p>
                    <div class="creator d-flex align-items-center">
                      <img
                        src="${res[i + 1].author_pic_url}"
                        alt="Creator of
                        Video"
                        width="30px"
                        class="rounded-circle"
                      />
                      <h6 class="pl-3 m-0 main-color">${res[i].author}</h6>
                    </div>
                    <div class="info pt-3 d-flex justify-content-between">
                      <div class="rating">
                        <img
                          src="images/star_on.png"
                          alt="star on"
                          width="15px"
                        />
                        <img
                          src="images/star_on.png"
                          alt="star on"
                          width="15px"
                        />
                        <img
                          src="images/star_on.png"
                          alt="star on"
                          width="15px"
                        />
                        <img
                          src="images/star_on.png"
                          alt="star on"
                          width="15px"
                        />
                        <img
                          src="images/star_off.png"
                          alt="star on"
                          width="15px"
                        />
                      </div>
                      <span class="main-color">${res[i + 1].duration}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-3 d-none d-lg-flex justify-content-center">
                <div class="card">
                  <img
                    src="${res[i + 2].thumb_url}"
                    class="card-img-top"
                    alt="Video thumbnail"
                  />
                  <div class="card-img-overlay text-center">
                    <img
                      src="images/play.png"
                      alt="Play"
                      width="64px"
                      class="align-self-center play-overlay"
                    />
                  </div>
                  <div class="card-body">
                    <h5 class="card-title font-weight-bold">
                    ${res[i + 2].title}
                    </h5>
                    <p class="card-text text-muted">
                    ${res[i].sub_title}
                    </p>
                    <div class="creator d-flex align-items-center">
                      <img
                        src="${res[i + 2].author_pic_url}"
                        alt="Creator of
                        Video"
                        width="30px"
                        class="rounded-circle"
                      />
                      <h6 class="pl-3 m-0 main-color">${res[i].author}</h6>
                    </div>
                    <div class="info pt-3 d-flex justify-content-between">
                      <div class="rating">
                        <img
                          src="images/star_on.png"
                          alt="star on"
                          width="15px"
                        />
                        <img
                          src="images/star_on.png"
                          alt="star on"
                          width="15px"
                        />
                        <img
                          src="images/star_on.png"
                          alt="star on"
                          width="15px"
                        />
                        <img
                          src="images/star_on.png"
                          alt="star on"
                          width="15px"
                        />
                        <img
                          src="images/star_off.png"
                          alt="star on"
                          width="15px"
                        />
                      </div>
                      <span class="main-color">${res[i + 2].duration}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-3 d-none d-lg-flex justify-content-center">
                <div class="card">
                  <img
                    src="${
                      i + 3 < res.length
                        ? res[i + 3].thumb_url
                        : res[i].thumb_url
                    }"
                    class="card-img-top"
                    alt="Video thumbnail"
                  />
                  <div class="card-img-overlay text-center">
                    <img
                      src="images/play.png"
                      alt="Play"
                      width="64px"
                      class="align-self-center play-overlay"
                    />
                  </div>
                  <div class="card-body">
                    <h5 class="card-title font-weight-bold">${
                      i + 3 < res.length ? res[i + 3].title : res[i].title
                    }</h5>
                    <p class="card-text text-muted">
                    ${res[i].sub_title}
                    </p>
                    <div class="creator d-flex align-items-center">
                      <img
                        src="${
                          i + 3 < res.length
                            ? res[i + 3].author_pic_url
                            : res[i].author_pic_url
                        }"
                        alt="Creator of
                        Video"
                        width="30px"
                        class="rounded-circle"
                      />
                      <h6 class="pl-3 m-0 main-color">${res[i].author}</h6>
                    </div>
                    <div class="info pt-3 d-flex justify-content-between">
                      <div class="rating">
                        <img
                          src="images/star_on.png"
                          alt="star on"
                          width="15px"
                        />
                        <img
                          src="images/star_on.png"
                          alt="star on"
                          width="15px"
                        />
                        <img
                          src="images/star_on.png"
                          alt="star on"
                          width="15px"
                        />
                        <img
                          src="images/star_on.png"
                          alt="star on"
                          width="15px"
                        />
                        <img
                          src="images/star_off.png"
                          alt="star on"
                          width="15px"
                        />
                      </div>
                      <span class="main-color">${res[i + 3].duration}</span>
                    </div>
                  </div>
                </div>
              </div>

                
              </div>
            </div>
          `;
        x.insertAdjacentHTML("beforeend", card);
      }
    },
  });
});
