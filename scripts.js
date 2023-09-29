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
