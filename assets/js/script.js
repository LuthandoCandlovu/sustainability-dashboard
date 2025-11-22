// Initialize charts and functionality
document.addEventListener("DOMContentLoaded", function () {
  // Carbon Footprint Chart
  const carbonCtx = document.getElementById("carbonChart").getContext("2d");
  const carbonChart = new Chart(carbonCtx, {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "Carbon Footprint (t)",
          data: [4.5, 4.3, 4.1, 4.0, 4.1, 4.2],
          borderColor: "#FF6B6B",
          backgroundColor: "rgba(255, 107, 107, 0.1)",
          tension: 0.4,
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          beginAtZero: false,
          min: 3.5,
        },
      },
    },
  });

  // Energy Usage Chart
  const energyCtx = document.getElementById("energyChart").getContext("2d");
  const energyChart = new Chart(energyCtx, {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "Energy Usage (kWh)",
          data: [380, 360, 340, 330, 325, 320],
          borderColor: "#FFD166",
          backgroundColor: "rgba(255, 209, 102, 0.1)",
          tension: 0.4,
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          beginAtZero: false,
          min: 300,
        },
      },
    },
  });

  // Water Consumption Chart
  const waterCtx = document.getElementById("waterChart").getContext("2d");
  const waterChart = new Chart(waterCtx, {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "Water Consumption (L)",
          data: [5200, 5000, 4800, 4700, 4600, 4500],
          borderColor: "#06D6A0",
          backgroundColor: "rgba(6, 214, 160, 0.1)",
          tension: 0.4,
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          beginAtZero: false,
          min: 4000,
        },
      },
    },
  });

  // Waste Management Chart
  const wasteCtx = document.getElementById("wasteChart").getContext("2d");
  const wasteChart = new Chart(wasteCtx, {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "Recycling Rate (%)",
          data: [60, 62, 63, 64, 66, 68],
          borderColor: "#20B2AA",
          backgroundColor: "rgba(32, 178, 170, 0.1)",
          tension: 0.4,
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          beginAtZero: false,
          min: 55,
          max: 75,
        },
      },
    },
  });

  // Simulate real-time data updates
  setInterval(() => {
    // Update carbon footprint with random variation
    const carbonData = carbonChart.data.datasets[0].data;
    const newCarbonValue = 4.2 + (Math.random() * 0.4 - 0.2);
    carbonData.push(newCarbonValue);
    carbonData.shift();
    carbonChart.update();

    document.querySelector(".carbon-footprint .stat-value").textContent =
      newCarbonValue.toFixed(1) + " t";

    // Update energy usage with random variation
    const energyData = energyChart.data.datasets[0].data;
    const newEnergyValue = 320 + (Math.random() * 40 - 20);
    energyData.push(newEnergyValue);
    energyData.shift();
    energyChart.update();

    document.querySelector(".energy-usage .stat-value").textContent =
      Math.round(newEnergyValue) + " kWh";

    // Update water consumption with random variation
    const waterData = waterChart.data.datasets[0].data;
    const newWaterValue = 4500 + (Math.random() * 400 - 200);
    waterData.push(newWaterValue);
    waterData.shift();
    waterChart.update();

    document.querySelector(".water-consumption .stat-value").textContent =
      Math.round(newWaterValue) + " L";

    // Update waste management with random variation
    const wasteData = wasteChart.data.datasets[0].data;
    const newWasteValue = 68 + (Math.random() * 4 - 2);
    wasteData.push(newWasteValue);
    wasteData.shift();
    wasteChart.update();

    document.querySelector(".waste-management .stat-value").textContent =
      Math.round(newWasteValue) + "%";
  }, 5000);

  // Add interactive functionality to metric selector
  document
    .getElementById("metricSelector")
    .addEventListener("change", function (e) {
      const metric = e.target.value;
      const mapPlaceholder = document.querySelector(".map-placeholder");

      const metricTexts = {
        carbon: "Carbon Emissions Heat Map",
        forest: "Global Forest Cover Analysis",
        renewable: "Renewable Energy Adoption Map",
        water: "Water Quality Index Visualization",
      };

      mapPlaceholder.innerHTML = `
            <i class="fas fa-globe-americas" style="font-size: 3rem; margin-right: 15px;"></i>
            ${metricTexts[metric]}
        `;
    });

  // Add button functionality
  document.querySelectorAll(".action-btn").forEach((button) => {
    button.addEventListener("click", function () {
      const buttonText = this.textContent;
      alert(
        `Thank you for your interest in "${buttonText}"! This feature would connect to backend services in a full implementation.`
      );
    });
  });
});
