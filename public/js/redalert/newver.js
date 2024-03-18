// קבלת מידע על התרעות
const getAlerts = async () => {
    const response = await fetch("https://tchumim.com/topic/15050/%D7%A7%D7%91%D7%9C%D7%AA-%D7%92%D7%99%D7%A9%D7%94-%D7%9C-api-%D7%A9%D7%9C-%D7%A4%D7%99%D7%A7%D7%95%D7%93-%D7%94%D7%A2%D7%95%D7%A8%D7%A3-%D7%91%D7%93%D7%A8%D7%9A-%D7%A2%D7%95%D7%A7%D7%A4%D7%AA-%D7%90%D7%9D-%D7%90%D7%99%D7%9F-%D7%92%D7%99%D7%A9%D7%94-%D7%A8%D7%A9%D7%9E%D7%99%D7%AA-%D7%A9%D7%9C%D7%94%D7%9D");
    const data = await response.json();
    return data;
};

// עדכון ממשק המשתמש עם התרעות
const updateAlerts = (alerts) => {
    const alertsElement = document.getElementById("alerts");
    alertsElement.innerHTML = "";

    alerts.forEach((alert) => {
        const alertElement = document.createElement("div");
        alertElement.classList.add("alert");
        alertElement.textContent = `צבע אדום באזור ${alert.location}!`;

        alertsElement.appendChild(alertElement);
    });
};

// הפעלת המערכת
const init = async () => {
    const alerts = await getAlerts();
    updateAlerts(alerts);

    // עדכון התרעות באופן אוטומטי
    setInterval(async () => {
        const alerts = await getAlerts();
        updateAlerts(alerts);
    }, 10000); // 10 שניות
};

init();
