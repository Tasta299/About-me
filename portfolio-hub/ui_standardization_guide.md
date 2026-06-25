# Tài Liệu Chuẩn Hóa Hệ Sinh Thái Portfolio (Hub & Nodes)

> **Mục tiêu:** Đảm bảo tính nhất quán tuyệt đối về mặt thẩm mỹ, trải nghiệm người dùng và kỹ thuật giữa trang chính (Portfolio Hub) và các trang chi tiết dự án (Node Pages), lấy dự án `node-quy-trinh-nghiep-vu` làm hình mẫu tham khảo về phong cách thiết kế.

Tài liệu này không áp đặt một số lượng phần nội dung cố định (không bắt buộc phải có 4 phần hay 5 phần), vì mỗi Case Study dự án sẽ có câu chuyện riêng. Thay vào đó, tài liệu này chuẩn hóa **cách thức thiết kế và định dạng** để bất kỳ phần nội dung nào được tạo ra cũng đều ăn khớp hoàn hảo với hệ sinh thái chung.

---

## 1. Đồng bộ Cấu trúc & Kỹ thuật

Để giữ mọi thứ thống nhất, cấu trúc thư mục và kỹ thuật của một trang Node **bắt buộc** phải tuân thủ:

- **Hệ thống Font chữ:** Mọi trang HTML của Node phải nhúng trực tiếp Google Fonts (Inter & Outfit) và FontAwesome vào thẻ `<head>` để đảm bảo tải an toàn, không bị lỗi hiển thị ở các môi trường khác nhau.
- **Tái sử dụng Core CSS từ Hub:** 
  - `variables.css`: Dùng chung 100% để kế thừa toàn bộ mã màu (Smoked Mocha, Raw Gold), bóng đổ, typography, và cấu trúc kính mờ (glassmorphism).
  - `base.css`: Định dạng reset chuẩn, background body, và hệ thống font chữ cho các thẻ Heading (`h1`, `h2`, `h3`).
  - `components.css`: Tận dụng lại lưới `.grid-2`, nút `.btn`, thẻ `.card`.
- **Node CSS (Đặc tả riêng):** File `node.css` chỉ chứa những thành phần bố cục đặc thù của dự án (ví dụ: Hero banner, padding/margin đặc biệt). Tuyệt đối không ghi đè các thông số cốt lõi từ Core CSS.

---

## 2. Tiêu chuẩn Thiết kế Layout & Bố cục

Dù một Node có bao nhiêu phần nội dung, các khối đó phải được định dạng theo bộ quy tắc sau:

### Header & Footer (Khung trang)
- **Header:** Sử dụng hiệu ứng **Glassmorphism** (`background: var(--glass-bg)`, `backdrop-filter: blur(10px)`). Bao gồm Logo "Thành Tất" (font Outfit) bên trái và nút "Về trang chính" (kèm icon mũi tên `<i class="fa-solid fa-arrow-left"></i>`) bên phải. Giữ cố định (sticky) khi cuộn.
- **Footer:** Đồng bộ với màu nền `var(--primary-light)` và dòng copyright căn giữa để khép lại trang web thống nhất với Hub.

### Hero Section (Phần mở đầu dự án)
- Khoảng không mở đầu phải rộng rãi (ví dụ: `padding: 120px 0 80px`), sử dụng background `radial-gradient` nhạt để tạo chiều sâu tinh tế mà không làm rối mắt.
- Tiêu đề dự án (H1) phải mang font `Outfit` to rõ, căn giữa màn hình, và sử dụng màu `var(--primary-color)`.

### Khối Nội dung (Card Sections)
Nội dung Case Study nên được chia rẽ thành các hoạt động/tiểu mục riêng biệt. Mỗi tiểu mục tuân thủ định dạng:
- **Bọc ngoài (Wrapper):** Bắt buộc dùng class `<div class="card section-block">`. Điều này tự động kích hoạt nền trắng, viền bo tròn `var(--border-radius)` và bóng đổ sâu `var(--shadow-md)`.
- **Tiêu đề khối (Heading):** Dùng class `<h2 class="section-title">`. Class này tự động căn giữa, áp dụng font `Outfit`, đổi sang màu chủ đạo, và tự vẽ một dải gạch ngang (qua lệnh `::after`) mang màu `var(--secondary-color)` bên dưới.
- **Bố cục bên trong (Layout):** Tùy biến linh hoạt. Nếu có những trường dữ liệu mang tính đối lập hoặc so sánh (ví dụ: Vấn đề bên trái, Thách thức bên phải), hãy sử dụng class `<div class="grid-2">` để đặt song song. Nếu là nội dung diễn giải dài, có thể giữ bố cục 1 cột tiêu chuẩn (`flex-direction: column`).

---

## 3. Tác động của sự Đồng bộ

- **Trải nghiệm Premium liền mạch:** Bất kể Node đó nói về chủ đề gì và có bao nhiêu phần, người xem luôn cảm nhận được hình bóng của trang chủ thông qua màu sắc, bóng đổ và font chữ. Điều này tôn lên độ chuyên nghiệp và sự tỉ mỉ của chủ nhân.
- **Tập trung hoàn toàn vào Nội dung:** Với "Design System" đã được thiết lập sẵn thông qua các class như `.card`, `.section-title`, hay `.grid-2`, chủ dự án chỉ việc dồn tâm huyết vào việc kể câu chuyện (Data, Logic, Kết quả) thay vì loay hoay căn chỉnh CSS.
- **Khả năng Nhân bản không giới hạn:** Khi có dự án mới, chỉ cần sao chép y nguyên HTML của Node chuẩn và thay đổi tệp `.json`. Giao diện tự động thích ứng với cấu trúc nội dung mới.
