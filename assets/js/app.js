// =========== scroll animaion config =========== //
AOS.init({
  delay: 300,
  duration: 1000,
  once: true,
  disable: "mobile",
});

// =========== Sidebar Menu =========== //
let SidebarShow = {
  transform: "translateX(0%)",
  opacity: "1",
  visibility: "visible",
};
let SidebarHide = {
  transform: "translateX(-100%)",
  opacity: "0",
  visibility: "hidden",
};

// close/open sidebar functions
function openSidebar() {
  var obj = document.getElementById("mySidebar");
  Object.assign(obj.style, SidebarShow);
  document.getElementById("overlayClass").style.width = "100%";
}

function closeSidebar() {
  var obj = document.getElementById("mySidebar");
  Object.assign(obj.style, SidebarHide);
  document.getElementById("overlayClass").style.width = "0%";
}

// hide/show sidebar on windows resize
$(window).resize(function () {
  if ($(window).width() > 991.98) {
    var obj = document.getElementById("mySidebar");
    Object.assign(obj.style, SidebarHide);
    document.getElementById("overlayClass").style.width = "0%";
  }
});

// Device Type
const isMobile = () => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return true;
  }
  if (
    /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua
    )
  ) {
    return true;
  }
  return false;
};

// Rating Function
const calc_rating = (rate_num = 5, rating_el) => {
  if ($(`${rating_el} svg`).length) return;
  if (rate_num > 5) rate_num = 5;
  if (typeof rating_el !== "string") {
    throw new Error(
      `Type of argument: rating_el must be string. // like '#yourElement'`
    );
  }
  rate_num = Math.abs(rate_num);
  let filled = `<span class="rating-star"
  ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" /></svg></span>`,
    outlined = `<span class="rating-star"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" /></svg></span>`,
    half = `<span class="rating-star"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,15.4V6.1L13.71,10.13L18.09,10.5L14.77,13.39L15.76,17.67M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" /></svg></span>`;

  let integer = parseInt(rate_num);
  let decimal = rate_num % 1;
  for (let i = 0; i < integer; i++) {
    $(`${rating_el}`).append(filled);
  }
  if (decimal) {
    if (decimal > 0.5) {
      $(`${rating_el}`).append(filled);
    } else {
      $(`${rating_el}`).append(half);
    }
  }
  for (let i = 0; i < parseInt(5 - rate_num); i++) {
    $(`${rating_el}`).append(outlined);
  }
};

// counter
let counter_running = {};
const counter = (current) => {
  function cb(e, i) {
    let count_from = Number(e.getAttribute("data-count-from")) || 0,
      count_to = Number(e.getAttribute("data-count-to")) || 0,
      delay = Number(e.getAttribute("data-count-delay")) || 10,
      step = Number(e.getAttribute("data-count-step")) || 1;

    let interval = setInterval(() => {
      count_from += step;
      $(e).text(count_from);
      if (count_from >= count_to) {
        $(e).text(count_to);
        clearInterval(interval);
        counter_running[i] = false;
      }
    }, delay);
  }
  current
    ? cb($(current).get(0))
    : $("[data-count]").each((i, e) => {
        if (counter_running[i]) return;
        cb(e, i);
        counter_running[i] = true;
      });
};

// tabs

$(() => {
  $(".tab").click((e) => {
    const data   = $(e.currentTarget).attr("data-tab");
    const group = $(e.currentTarget).attr("tab-group");
    $(`[${group}] .tab`).removeClass("active")
    $(e.currentTarget).addClass("active")
    $(`[${group}] .tab-view`).addClass("d-none");
    $(`[${group}] .tab-view[data-tab="${data}"]`).removeClass("d-none");
  });
});
