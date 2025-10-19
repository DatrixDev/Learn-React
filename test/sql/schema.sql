CREATE DATABASE IF NOT EXISTS komer_web
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE komer_web;

-- =========================
-- 1. Bảng Nhóm quyền
-- =========================
CREATE TABLE nhomquyen (
    nhomquyen_id INT AUTO_INCREMENT PRIMARY KEY,
    ten_nhomquyen VARCHAR(100),
    trang_thai TINYINT DEFAULT 1
);

-- =========================
-- 2. Bảng Tài khoản
-- =========================
CREATE TABLE taikhoan (
    taikhoan_id INT AUTO_INCREMENT PRIMARY KEY,
    ma_taikhoan VARCHAR(50) UNIQUE,
    ten_dang_nhap VARCHAR(100) UNIQUE,
    mat_khau VARCHAR(255) NOT NULL,
    nhomquyen_id INT,
    trang_thai TINYINT DEFAULT 1,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (nhomquyen_id) REFERENCES nhomquyen(nhomquyen_id)
);

-- =========================
-- 3. Bảng Quyền
-- =========================
CREATE TABLE quyen (
    quyen_id INT AUTO_INCREMENT PRIMARY KEY,
    nhomquyen_id INT,
    ma_quyen VARCHAR(50),
    hanh_dong VARCHAR(255),
    FOREIGN KEY (nhomquyen_id) REFERENCES nhomquyen(nhomquyen_id)
);

-- =========================
-- 4. Bảng Nhân viên
-- =========================
CREATE TABLE nhanvien (
    nhanvien_id INT AUTO_INCREMENT PRIMARY KEY,
    ma_nhanvien VARCHAR(50) UNIQUE,
    ho_ten VARCHAR(255),
    gioi_tinh VARCHAR(10),
    ngay_sinh DATE,
    sdt VARCHAR(20),
    email VARCHAR(100),
    trang_thai TINYINT DEFAULT 1,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- =========================
-- 5. Bảng Khách hàng
-- =========================
CREATE TABLE khachhang (
    khachhang_id INT AUTO_INCREMENT PRIMARY KEY,
    ma_khachhang VARCHAR(50) UNIQUE,
    ten_khachhang VARCHAR(255) NOT NULL,
    dia_chi VARCHAR(255),
    sdt VARCHAR(20),
    trang_thai TINYINT DEFAULT 1,
    ngay_tham_gia DATE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- =========================
-- 6. Bảng Nhà cung cấp
-- =========================
CREATE TABLE nhacungcap (
    nhacungcap_id INT AUTO_INCREMENT PRIMARY KEY,
    ma_nhacungcap VARCHAR(50) UNIQUE,
    ten_nhacungcap VARCHAR(255) NOT NULL,
    dia_chi VARCHAR(255),
    email VARCHAR(100),
    sdt VARCHAR(20),
    trang_thai TINYINT DEFAULT 1
);

-- =========================
-- 7. Bảng Danh mục sản phẩm
-- =========================
CREATE TABLE danhmucsanpham (
    danhmuc_id INT AUTO_INCREMENT PRIMARY KEY,
    ma_danhmuc VARCHAR(50) UNIQUE,
    ten_danhmuc VARCHAR(255) NOT NULL,
    ghi_chu VARCHAR(255)
);

-- =========================
-- 8. Bảng Thương hiệu
-- =========================
CREATE TABLE thuonghieu (
    thuonghieu_id INT AUTO_INCREMENT PRIMARY KEY,
    ma_thuonghieu VARCHAR(50) UNIQUE,
    ten_thuonghieu VARCHAR(255) NOT NULL,
    trang_thai TINYINT DEFAULT 1
);

-- =========================
-- 9. Bảng Sản phẩm
-- =========================
CREATE TABLE sanpham (
    sanpham_id INT AUTO_INCREMENT PRIMARY KEY,
    ma_sanpham VARCHAR(50) UNIQUE,
    ten_sp VARCHAR(255) NOT NULL,
    hinh_anh VARCHAR(255),
    danhmuc_id INT,
    thuonghieu_id INT,
    trang_thai ENUM('con_hang','het_hang') DEFAULT 'con_hang',
    thoi_gian_bao_hanh INT,
    mo_ta TEXT,
    hien_thi BOOLEAN DEFAULT TRUE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (danhmuc_id) REFERENCES danhmucsanpham(danhmuc_id),
    FOREIGN KEY (thuonghieu_id) REFERENCES thuonghieu(thuonghieu_id)
);

-- =========================
-- 10. Bảng Chi tiết sản phẩm (thuộc tính động)
-- =========================
CREATE TABLE sanpham_thuoctinh (
    thuoctinh_id INT AUTO_INCREMENT PRIMARY KEY,
    sanpham_id INT,
    ten_thuoctinh VARCHAR(100),
    gia_tri VARCHAR(255),
    FOREIGN KEY (sanpham_id) REFERENCES sanpham(sanpham_id)
);

-- =========================
-- 11. Bảng Sản phẩm ảnh
-- =========================
CREATE TABLE sanpham_anh (
    anh_id INT AUTO_INCREMENT PRIMARY KEY,
    sanpham_id INT,
    url VARCHAR(255),
    FOREIGN KEY (sanpham_id) REFERENCES sanpham(sanpham_id)
);

-- =========================
-- 12. Bảng Tồn kho
-- =========================
CREATE TABLE tonkho (
    tonkho_id INT AUTO_INCREMENT PRIMARY KEY,
    sanpham_id INT,
    vi_tri VARCHAR(100),
    so_luong INT DEFAULT 0,
    FOREIGN KEY (sanpham_id) REFERENCES sanpham(sanpham_id)
);

-- =========================
-- 13. Bảng Phiếu nhập
-- =========================
CREATE TABLE phieunhap (
    phieunhap_id INT AUTO_INCREMENT PRIMARY KEY,
    ma_phieunhap VARCHAR(50) UNIQUE,
    nhacungcap_id INT,
    nguoi_tao INT,
    thoi_gian DATETIME,
    tong_tien DOUBLE,
    FOREIGN KEY (nhacungcap_id) REFERENCES nhacungcap(nhacungcap_id)
);

-- =========================
-- 14. Bảng Chi tiết phiếu nhập
-- =========================
CREATE TABLE chitietphieunhap (
    chitietphieunhap_id INT AUTO_INCREMENT PRIMARY KEY,
    phieunhap_id INT,
    sanpham_id INT,
    so_luong INT,
    don_gia DOUBLE,
    FOREIGN KEY (phieunhap_id) REFERENCES phieunhap(phieunhap_id),
    FOREIGN KEY (sanpham_id) REFERENCES sanpham(sanpham_id)
);

-- =========================
-- 15. Bảng Phiếu xuất
-- =========================
CREATE TABLE phieuxuat (
    phieuxuat_id INT AUTO_INCREMENT PRIMARY KEY,
    ma_phieuxuat VARCHAR(50) UNIQUE,
    khachhang_id INT,
    nguoi_tao INT,
    thoi_gian DATETIME,
    tong_tien DOUBLE,
    trang_thai ENUM('cho_xac_nhan','dang_giao','hoan_tat','huy') DEFAULT 'cho_xac_nhan',
    FOREIGN KEY (khachhang_id) REFERENCES khachhang(khachhang_id)
);

-- =========================
-- 16. Bảng Chi tiết phiếu xuất
-- =========================
CREATE TABLE chitietphieuxuat (
    chitietphieuxuat_id INT AUTO_INCREMENT PRIMARY KEY,
    phieuxuat_id INT,
    sanpham_id INT,
    so_luong INT,
    don_gia DOUBLE,
    FOREIGN KEY (phieuxuat_id) REFERENCES phieuxuat(phieuxuat_id),
    FOREIGN KEY (sanpham_id) REFERENCES sanpham(sanpham_id)
);

-- =========================
-- 17. Bảng Đơn hàng
-- =========================
CREATE TABLE donhang (
    donhang_id INT AUTO_INCREMENT PRIMARY KEY,
    ma_donhang VARCHAR(50) UNIQUE,
    khachhang_id INT,
    ngay_dat DATE,
    trang_thai ENUM('pending','confirmed','shipping','done','cancel') DEFAULT 'pending',
    tong_tien DOUBLE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (khachhang_id) REFERENCES khachhang(khachhang_id)
);

-- =========================
-- 18. Chi tiết đơn hàng
-- =========================
CREATE TABLE chitietdonhang (
    chitietdonhang_id INT AUTO_INCREMENT PRIMARY KEY,
    donhang_id INT,
    sanpham_id INT,
    so_luong INT,
    don_gia DOUBLE,
    FOREIGN KEY (donhang_id) REFERENCES donhang(donhang_id),
    FOREIGN KEY (sanpham_id) REFERENCES sanpham(sanpham_id)
);

-- =========================
-- 19. Bảng Thanh toán
-- =========================
CREATE TABLE thanhtoan (
    thanhtoan_id INT AUTO_INCREMENT PRIMARY KEY,
    donhang_id INT,
    so_tien DOUBLE,
    hinh_thuc VARCHAR(50), -- cash, bank, credit
    ngay_thanh_toan DATE,
    trang_thai ENUM('paid','unpaid','partial') DEFAULT 'unpaid',
    FOREIGN KEY (donhang_id) REFERENCES donhang(donhang_id)
);

-- =========================
-- 20. Bảng Dự án
-- =========================
CREATE TABLE duan (
    duan_id INT AUTO_INCREMENT PRIMARY KEY,
    ma_duan VARCHAR(50) UNIQUE,
    tieu_de VARCHAR(255),
    mo_ta TEXT,
    trang_thai TINYINT DEFAULT 1,
    ngay_thi_cong DATE,
    hoan_thanh_ngay DATE
);

-- =========================
-- 21. Bảng Ảnh dự án
-- =========================
CREATE TABLE duan_anh (
    anh_id INT AUTO_INCREMENT PRIMARY KEY,
    duan_id INT,
    url_anh VARCHAR(255),
    mo_ta VARCHAR(255),
    is_main BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (duan_id) REFERENCES duan(duan_id)
);

-- =========================
-- 22. Bảng Tin tức / Blog
-- =========================
CREATE TABLE tintuc (
    tintuc_id INT AUTO_INCREMENT PRIMARY KEY,
    ma_tintuc VARCHAR(50) UNIQUE,
    tieu_de VARCHAR(255),
    noi_dung TEXT,
    hinh_anh VARCHAR(255),
    ngay_tao DATETIME DEFAULT CURRENT_TIMESTAMP,
    tac_gia_id INT,
    trang_thai TINYINT DEFAULT 1,
    FOREIGN KEY (tac_gia_id) REFERENCES taikhoan(taikhoan_id)
);

-- =========================
-- 23. Bảng Banner / Slider
-- =========================
CREATE TABLE banner (
    banner_id INT AUTO_INCREMENT PRIMARY KEY,
    tieu_de VARCHAR(255),
    url_anh VARCHAR(255),
    link VARCHAR(255),
    vi_tri VARCHAR(50),
    trang_thai TINYINT DEFAULT 1
);

-- =========================
-- 24. Bảng Pages / Content (CMS)
-- =========================
CREATE TABLE page (
    page_id INT AUTO_INCREMENT PRIMARY KEY,
    slug VARCHAR(100) UNIQUE,
    tieu_de VARCHAR(255),
    noi_dung TEXT,
    trang_thai TINYINT DEFAULT 1
);

-- =========================
-- 25. Bảng Lịch sử giá sản phẩm
-- =========================
CREATE TABLE gia_sanpham (
    gia_id INT AUTO_INCREMENT PRIMARY KEY,
    sanpham_id INT,
    loai_gia ENUM('import','export','promotion'),
    gia DOUBLE,
    ngay_bat_dau DATE,
    ngay_ket_thuc DATE,
    FOREIGN KEY (sanpham_id) REFERENCES sanpham(sanpham_id)
);
