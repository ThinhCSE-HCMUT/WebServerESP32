async function fetchTable() {
    try {
        // Gửi yêu cầu tới endpoint /table của ESP32
        const response = await fetch("http://10.28.129.143/table");
        const tableContent = await response.text();

        // Chèn nội dung nhận được vào phần tử có id "tableBody"
        document.getElementById("tableBody").innerHTML = tableContent;
    } catch (error) {
        console.error("Error fetching table data:", error);
    }
}

// Gọi hàm fetchTable mỗi 2 giây để tự động cập nhật bảng
setInterval(fetchTable, 2000);
fetchTable(); // Gọi hàm ngay khi trang được tải
