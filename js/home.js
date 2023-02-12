function profilePopUp() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

// echar js
var dom = document.getElementById("container");
var myChart = echarts.init(dom);
var app = {};
option = null;

option = {
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b}: {c} ({d}%)",
  },
  legend: {
    orient: "vertical",
    x: "right",
    data: ["Total client", "Active", "Online", "Disabled"],
  },
  series: [
    {
      name: "Total",
      type: "pie",
      radius: ["50%", "70%"],
      avoidLabelOverlap: false,
      label: {
        normal: {
          formatter(v) {
            let text = v.name;
            return text.length < 4
              ? text
              : `${text.slice(0, 4)}\n${text.slice(4)}`;
          },
        },
        emphasis: {
          show: true,
          textStyle: {
            fontSize: "15",
            fontWeight: "bold",
          },
        },
      },
      labelLine: {
        normal: {
          show: true,
        },
      },
      data: [
        { value: 310, name: "Total client" },
        { value: 300, name: "Active" },
        { value: 290, name: "Online" },
        {
          value: 50,
          name: "Disabled",
        },
      ],
    },
  ],
};
if (option && typeof option === "object") {
  myChart.setOption(option, true);
}

// --table---
