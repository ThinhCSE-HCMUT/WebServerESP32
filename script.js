// Số hàng trên mỗi trang
const rowsPerPage = 10;

// Dữ liệu toàn bộ (giả lập dữ liệu ban đầu)
let allData = []; // Ban đầu không có dữ liệu
let currentPage = 1;

// Hàm hiển thị bảng
const renderTable = () => {
    const tableBody = document.getElementById("tableBody");
    const totalRows = allData.length;
    const totalPages = Math.max(1, Math.ceil(totalRows / rowsPerPage)); // Luôn có ít nhất 1 trang
    const start = (currentPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const pageData = allData.slice(start, end);

    // Hiển thị dữ liệu hoặc thông báo trống
    if (pageData.length > 0) {
        tableBody.innerHTML = pageData
            .map((entry, index) => `
            <tr>
                <td>${start + index + 1}</td>
                <td>${entry.cardID}</td>
                <td>${entry.name}</td>
                <td>${entry.date}</td>
                <td>${entry.time}</td>
                <td>${entry.isMember ? "Yes" : "No"}</td>
            </tr>
        `).join("");
    } else {
        tableBody.innerHTML = `
            <tr>
                <td colspan="6" class="text-center">No data available</td>
            </tr>
        `;
    }

    renderPagination(totalPages); // Cập nhật thanh phân trang
};

// Hàm hiển thị thanh phân trang
const renderPagination = (totalPages) => {
    const pagination = document.getElementById("pagination");
    pagination.innerHTML = "";

    // Tạo nút Previous
    pagination.innerHTML += `
        <li class="page-item ${currentPage === 1 ? "disabled" : ""}">
            <a class="page-link" href="#" onclick="changePage(${currentPage - 1})">Previous</a>
        </li>
    `;

    // Tạo các nút trang
    for (let i = 1; i <= totalPages; i++) {
        pagination.innerHTML += `
            <li class="page-item ${currentPage === i ? "active" : ""}">
                <a class="page-link" href="#" onclick="changePage(${i})">${i}</a>
            </li>
        `;
    }

    // Tạo nút Next
    pagination.innerHTML += `
        <li class="page-item ${currentPage === totalPages ? "disabled" : ""}">
            <a class="page-link" href="#" onclick="changePage(${currentPage + 1})">Next</a>
        </li>
    `;
};

// Hàm thay đổi trang
const changePage = (page) => {
    currentPage = page;
    renderTable();
};

// Hàm giả lập dữ liệu ban đầu
const loadData = () => {
    // Bạn có thể thêm dữ liệu mẫu ở đây nếu cần kiểm tra
    allData = []; // Ban đầu không có dữ liệu
    renderTable(); // Hiển thị bảng
};

// Gọi hàm khi tải trang
loadData();
