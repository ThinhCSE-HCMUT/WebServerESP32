let allData = [];

const fetchData = async () => {
    const response = await fetch("/table", {
        method: "GET",
    });
    if (response.ok) {
        allData = await response.json();
        renderTable();
    }
};

const renderTable = () => {
    const tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = allData
        .map(
            (data, index) => `
        <tr>
            <td>${index + 1}</td>
            <td>${data.cardID}</td>
            <td>${data.name}</td>
            <td>${data.date}</td>
            <td>${data.time}</td>
            <td>${data.isMember ? "Yes" : "No"}</td>
        </tr>`
        )
        .join("");
};

setInterval(fetchData, 2000);
