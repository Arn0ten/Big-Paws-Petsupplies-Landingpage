            
              function createChart(ctx, type, labels, data, label) {
                return new Chart(ctx, {
                  type: type,
                  data: {
                    labels: labels,
                    datasets: [
                      {
                        label: label,
                        data: data,
                        backgroundColor: [
                          "rgba(54, 162, 235, 0.5)",
                          "rgba(255, 99, 132, 0.5)",
                          "rgba(255, 206, 86, 0.5)",
                          "rgba(86, 255, 114, 0.5)",
                          "rgba(255, 86, 86, 0.5)",
                          
                        ],
                        borderColor: [
                          "rgba(54, 162, 235, 1)",
                          "rgba(255, 99, 132, 1)",
                          "rgba(255, 206, 86, 1)",
                          "rgba(86, 255, 114, 0.5)",
                          "rgba(255, 86, 86, 0.5)",
                        ],
                        borderWidth: 1,
                      },
                    ],
                  },
                  options: { responsive: true, maintainAspectRatio: false },
                });
              }

              document.addEventListener("DOMContentLoaded", function () {
                createChart(
                  document.getElementById("requestsTrendChart"),
                  "line",
                  ["Jan", "Feb", "Mar", "Apr", "May"],
                  [50, 75, 100, 80, 120],
                  "Requests Over Time"
                );
                createChart(
                  document.getElementById("checkInsVsCheckoutsChart"),
                  "bar",
                  ["Dogs", "Cats", "Others"],
                  [40, 30, 10],
                  "Check-Ins vs. Checkouts"
                );
                createChart(
                  document.getElementById("boardingByTypeChart"),
                  "pie",
                  ["Short-Term", "Long-Term"],
                  [60, 40],
                  "Boarding Type Distribution"
                );
                createChart(
                  document.getElementById("mostRequestedChart"),
                  "doughnut",
                  ["Photos", "Video", "Grooming", "Extra Days", "Extra Hours"],
                  [20, 25, 30, 15, 10],
                  "Most Requested"
                );
              });

              document
                .getElementById("analyticsFilter")
                .addEventListener("change", function () {
                  document.getElementById(
                    "checkinsCheckoutsChartContainer"
                  ).style.display = "none";
                  document.getElementById(
                    "boardingByTypeChartContainer"
                  ).style.display = "none";
                  document.getElementById(
                    "mostRequestedChartContainer"
                  ).style.display = "none";

                  if (this.value === "checkinsCheckouts") {
                    document.getElementById(
                      "checkinsCheckoutsChartContainer"
                    ).style.display = "block";
                    document.getElementById("analyticsCardTitle").innerText =
                      "Pet Check-Ins vs. Checkouts";
                  } else if (this.value === "boardingByType") {
                    document.getElementById(
                      "boardingByTypeChartContainer"
                    ).style.display = "block";
                    document.getElementById("analyticsCardTitle").innerText =
                      "Pet Boarding by Type";
                  } else if (this.value === "requestedServices") {
                    document.getElementById(
                      "mostRequestedChartContainer"
                    ).style.display = "block";
                    document.getElementById("analyticsCardTitle").innerText =
                      "Most Most Requested";
                  } else {
                    document.getElementById(
                      "checkinsCheckoutsChartContainer"
                    ).style.display = "block";
                    document.getElementById(
                      "boardingByTypeChartContainer"
                    ).style.display = "block";
                    document.getElementById(
                      "mostRequestedChartContainer"
                    ).style.display = "block";
                    document.getElementById("analyticsCardTitle").innerText =
                      "Monthly Analytics";
                      
                      
                  }
                });

              //Daily Sales Chart example data kay para ing ani format nato sunod
              var dailySalesChart = document
                .getElementById("dailySalesChart")
                .getContext("2d");

              var myDailySalesChart = new Chart(dailySalesChart, {
                type: "line",
                data: {
                  labels: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                  ],
                  datasets:[ {
                    label: "Sales Analytics", fill: !0, backgroundColor: "rgba(16, 192, 54, 0.2)", borderColor: "#fff", borderCapStyle: "butt", borderDash: [], borderDashOffset: 0, pointBorderColor: "#fff", pointBackgroundColor: "#fff", pointBorderWidth: 1, pointHoverRadius: 5, pointHoverBackgroundColor: "#fff", pointHoverBorderColor: "#fff", pointHoverBorderWidth: 1, pointRadius: 1, pointHitRadius: 5, data: [65, 59, 80, 81, 56, 55, 40, 35, 30]
                }]
                },
                options : {
                    maintainAspectRatio:!1, legend: {
                        display: !1
                    }
                    , animation: {
                        easing: "easeInOutBack"
                    }
                    , scales: {
                        yAxes:[ {
                            display:!1, ticks: {
                                fontColor: "rgba(0,0,0,0.5)", fontStyle: "bold", beginAtZero: !0, maxTicksLimit: 10, padding: 0
                            }
                            , gridLines: {
                                drawTicks: !1, display: !1
                            }
                        }
                        ], xAxes:[ {
                            display:!1, gridLines: {
                                zeroLineColor: "transparent"
                            }
                            , ticks: {
                                padding: -20, fontColor: "rgba(0, 0, 0, 0.2)", fontStyle: "bold"
                            }
                        }
                        ]
                    }
                }
              });