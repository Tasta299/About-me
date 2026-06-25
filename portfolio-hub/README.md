# Hướng dẫn tùy chỉnh Portfolio Hub

Chào mừng bạn đến với tài liệu hướng dẫn tùy chỉnh cho trang Portfolio của bạn. Dưới đây là các hướng dẫn chi tiết để bạn có thể tự do thay đổi màu sắc và hiểu rõ về bố cục của trang web.

## 1. Tùy chỉnh màu sắc (Color Customization)

Toàn bộ hệ thống màu sắc của trang web được quản lý tập trung bằng CSS Variables. Để thay đổi màu sắc theo ý thích, bạn chỉ cần mở và chỉnh sửa file **`css/variables.css`**.

Dưới đây là ý nghĩa của các biến màu sắc quan trọng trong file này:

### Màu sắc chủ đạo (Primary & Secondary)
*   **`--primary-color`**: Màu sắc chính của trang (thường dùng cho các tiêu đề chính, text quan trọng). Mặc định là `#0f172a` (Slate 900).
*   **`--primary-light`**: Màu nền của Footer và các vùng cần nhấn mạnh nhưng tối. Mặc định: `#1e293b`.
*   **`--secondary-color`**: Màu sắc thứ cấp, dùng để làm nổi bật các nút bấm (buttons), link, biểu tượng (icons) hoặc các đường viền nổi bật. Mặc định: `#2563eb` (Blue 600).
*   **`--secondary-hover`**: Màu khi di chuột (hover) qua các nút hoặc link. Mặc định: `#1d4ed8`.
*   **`--accent-color`**: Màu tạo điểm nhấn thêm nếu cần (hiện tại là `#0ea5e9`).

### Màu văn bản (Text Colors)
*   **`--text-main`**: Màu của văn bản thông thường (đoạn văn). Mặc định: `#1e293b`.
*   **`--text-muted`**: Màu chữ nhạt hơn, dùng cho các chú thích, mốc thời gian hoặc link ở trạng thái bình thường. Mặc định: `#64748b`.
*   **`--text-light`**: Màu chữ sáng, dùng trên nền tối (ví dụ: chữ trong footer). Mặc định: `#f8fafc`.

### Màu nền (Background Colors)
*   **`--bg-main`**: Màu nền chính của toàn bộ trang web (phần nền trắng/sáng). Mặc định: `#f8fafc`.
*   **`--bg-light`**: Màu xám nhạt, dùng để tạo sự phân biệt nền cho một số phần (sections) như "Mục tiêu" hay "Học vấn". Mặc định: `#f1f5f9`.
*   **`--bg-white`**: Nền trắng tinh khiết (`#ffffff`), thường dùng cho các thẻ card.

### Ví dụ cách đổi màu:
Nếu bạn muốn đổi tone màu của trang web từ "Xanh dương" (Blue) sang "Đỏ ngọc" (Ruby), bạn mở file `css/variables.css` và đổi:
```css
--secondary-color: #e11d48; /* Đỏ ngọc */
--secondary-hover: #be123c; /* Đỏ ngọc đậm khi hover */
```

---

## 2. Bố cục trang web (Layout & Structure)

Trang web được chia thành các hàng (sections) từ trên xuống dưới. Bạn có thể tìm thấy chúng trong file **`index.html`**. Mỗi section có một `id` riêng để menu có thể cuộn tới đúng vị trí.

Dưới đây là thứ tự và tên gọi của các khu vực trên trang web:

### 2.1. Header (Thanh điều hướng)
*   **Thẻ HTML:** `<header class="hub-header">`
*   **Nội dung:** Chứa Tên/Logo của bạn ("Thành Tất") và Menu điều hướng (Giới thiệu, Mục tiêu, Kỹ năng,...).
*   **Đặc điểm:** Nó dính (sticky) ở trên cùng khi bạn cuộn trang và có hiệu ứng kính mờ (Glassmorphism).

### 2.2. Hero Section (Phần nổi bật đầu trang)
*   **Thẻ HTML:** `<section id="hero" class="hero-section">`
*   **Nội dung:** Hiển thị hình ảnh Avatar lớn, tên, chức danh (Title), câu châm ngôn (Tagline) và các nút liên hệ (Email, GitHub, LinkedIn, CV).
*   **Ghi chú:** Dữ liệu ở phần này được tự động chèn vào (inject) bằng Javascript.

### 2.3. Lời giới thiệu (About Section)
*   **Thẻ HTML:** `<section id="about" class="about-section">`
*   **Nội dung:** Đoạn văn bản dài giới thiệu về bản thân bạn.

### 2.4. Mục Tiêu Nghề Nghiệp (Career Goals Section)
*   **Thẻ HTML:** `<section id="goals" class="about-section bg-light">`
*   **Nội dung:** Hiển thị các mục tiêu ngắn hạn và dài hạn.
*   **Đặc điểm:** Có class `bg-light` để đổi màu nền thành xám nhạt (`--bg-light`), tạo điểm nhấn phân biệt với phần trên.

### 2.5. Năng Lực Chuyên Môn (Skills Section)
*   **Thẻ HTML:** `<section id="skills" class="skills-section">`
*   **Nội dung:** Liệt kê các Kỹ năng cứng (Hard Skills) và Kỹ năng mềm (Soft Skills) của bạn.

### 2.6. Kinh Nghiệm Làm Việc (Experience Section)
*   **Thẻ HTML:** `<section id="experience" class="experience-section">`
*   **Nội dung:** Hiển thị dạng dòng thời gian (timeline) về các công ty, vị trí bạn đã làm việc, mô tả công việc và thành tựu.

### 2.7. Học Vấn & Chứng Chỉ (Education & Certifications Section)
*   **Thẻ HTML:** `<section id="education" class="education-section bg-light">`
*   **Nội dung:** Hiển thị thông tin trường đại học, ngành học và danh sách các chứng chỉ bạn đã đạt được.

### 2.8. Dự Án Nổi Bật (Projects Section)
*   **Thẻ HTML:** `<section id="projects" class="projects-section">`
*   **Nội dung:** Trưng bày các dự án (Projects) dưới dạng lưới (Grid). Mỗi dự án thường là một khối (Card) chứa tên, mô tả và công nghệ sử dụng.

### 2.9. Footer (Chân trang)
*   **Thẻ HTML:** `<footer class="hub-footer">`
*   **Nội dung:** Hiển thị bản quyền (Copyright) và các thông tin ghi chú cuối trang.

---

## Tóm lại
*   Để **đổi màu**, chỉnh sửa: `css/variables.css`
*   Để **xem cấu trúc** thẻ, chỉnh sửa: `index.html` (Các ID tương ứng với từng section).
*   Nội dung chi tiết bên trong các khu vực (tên, chữ, kỹ năng) được xử lý thông qua Javascript, đọc dữ liệu từ nơi khác (JSON, Sheets).
