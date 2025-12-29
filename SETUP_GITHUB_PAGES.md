# 🚀 Hướng Dẫn Tạo GitHub Pages - Từng Bước Chi Tiết

## Bước 1: Tạo Tài Khoản GitHub (Nếu chưa có)

1. Vào trang: https://github.com
2. Nhấn nút **"Sign up"** (góc trên bên phải)
3. Điền thông tin:
   - Username (tên đăng nhập)
   - Email
   - Password
4. Xác minh email nếu được yêu cầu

✅ **Hoàn thành Bước 1!**

---

## Bước 2: Tạo Repository Mới

### Cách A: Tạo qua Web Interface (Dễ nhất - Khuyến nghị)

1. Đăng nhập vào GitHub
2. Nhấn nút **"+"** (góc trên bên phải) → Chọn **"New repository"**
3. Điền thông tin:
   - **Repository name**: `wedding-invitation` (hoặc tên bạn muốn)
   - **Description**: "Thiệp cưới Tạ Hoàng Quang & Nguyễn Thị Thoa" (tùy chọn)
   - Chọn **Public** ⚠️ (PHẢI chọn Public để dùng miễn phí GitHub Pages)
   - **KHÔNG** tích vào "Add a README file"
   - **KHÔNG** tích vào "Add .gitignore"
   - **KHÔNG** tích vào "Choose a license"
4. Nhấn nút **"Create repository"** (màu xanh)

✅ **Repository đã được tạo!**

---

## Bước 3: Upload Files lên GitHub

### Cách A: Upload qua Web (Không cần Git) - Dễ nhất ⭐

1. Trong repository vừa tạo, bạn sẽ thấy trang với tiêu đề "Quick setup"
2. Tìm dòng **"uploading an existing file"** (màu xanh, ở giữa trang)
3. Nhấn vào đó
4. Bạn sẽ thấy giao diện upload:
   - Nhấn **"choose your files"** hoặc **kéo thả** các file
   - Upload từng file một, hoặc kéo thả cả thư mục

**Các file và thư mục cần upload:**
```
✅ index.html
✅ style.css
✅ script.js
✅ README.md (tùy chọn)
✅ HUONG_DAN_CHIA_SE.md (tùy chọn)
✅ .gitignore
✅ Thư mục image/ (với tất cả ảnh bên trong)
   - Image.jfif
   - Image (1).jfif
   - Image (2).jfif
   - ... (tất cả ảnh)
✅ Thư mục music/ (nếu có file nhạc)
   - background-music.mp3 (nếu có)
   - README.txt
```

5. Sau khi upload xong, cuộn xuống dưới:
   - **Commit message**: "Initial commit - Wedding invitation website"
   - Nhấn nút **"Commit changes"** (màu xanh)

✅ **Files đã được upload!**

---

### Cách B: Sử dụng Git (Nếu đã cài Git)

Nếu bạn đã cài Git và muốn dùng command line:

```bash
# 1. Mở Terminal/Command Prompt trong thư mục marry
cd "c:\THUONG\416 Nguyen Thi Thuong\marry"

# 2. Khởi tạo git repository
git init

# 3. Thêm tất cả files
git add .

# 4. Commit
git commit -m "Initial commit - Wedding invitation"

# 5. Kết nối với GitHub (thay YOUR_USERNAME bằng username GitHub của bạn)
git remote add origin https://github.com/YOUR_USERNAME/wedding-invitation.git

# 6. Đổi tên branch thành main (nếu cần)
git branch -M main

# 7. Push lên GitHub
git push -u origin main
```

---

## Bước 4: Bật GitHub Pages

1. Trong repository của bạn, nhấn vào tab **"Settings"** (ở trên cùng)
2. Cuộn xuống phần **"Pages"** (ở menu bên trái)
3. Ở phần **"Source"**:
   - Chọn branch: **"main"** (hoặc "master" nếu có)
   - Chọn folder: **"/ (root)"**
4. Nhấn nút **"Save"** (màu xanh)
5. Đợi vài giây đến 1 phút
6. Bạn sẽ thấy link: `https://YOUR_USERNAME.github.io/wedding-invitation`

✅ **GitHub Pages đã được bật!**

---

## Bước 5: Kiểm Tra và Chia Sẻ

1. Copy link: `https://YOUR_USERNAME.github.io/wedding-invitation`
2. Mở link trong trình duyệt để kiểm tra
3. Đợi 1-2 phút nếu trang chưa hiển thị (cần thời gian deploy)
4. Chia sẻ link này với mọi người!

---

## 🎯 Checklist

Trước khi chia sẻ, hãy kiểm tra:

- [ ] Đã upload tất cả files (index.html, style.css, script.js)
- [ ] Đã upload thư mục image/ với tất cả ảnh
- [ ] Đã bật GitHub Pages trong Settings
- [ ] Đã kiểm tra link hoạt động trên máy tính
- [ ] Đã kiểm tra link hoạt động trên điện thoại
- [ ] Tất cả ảnh hiển thị đúng
- [ ] Nhạc nền hoạt động (nếu có)

---

## ❓ Xử Lý Lỗi Thường Gặp

### Lỗi 1: Link không hoạt động
- **Giải pháp**: Đợi 5-10 phút rồi thử lại
- Kiểm tra Settings → Pages xem đã bật chưa

### Lỗi 2: Ảnh không hiển thị
- **Giải pháp**: Kiểm tra đã upload thư mục image/ chưa
- Kiểm tra tên file ảnh có đúng không

### Lỗi 3: CSS không áp dụng
- **Giải pháp**: Kiểm tra đã upload file style.css chưa
- Refresh lại trang (Ctrl + F5)

### Lỗi 4: Nhạc không phát
- **Giải pháp**: Kiểm tra đã upload file nhạc vào thư mục music/ chưa
- Kiểm tra tên file là `background-music.mp3`

---

## 🔄 Cập Nhật Website Sau Này

Nếu muốn chỉnh sửa website sau này:

1. Sửa file trên máy tính
2. Vào repository trên GitHub
3. Nhấn vào file cần sửa
4. Nhấn nút **"Edit"** (icon bút chì)
5. Sửa nội dung
6. Cuộn xuống, nhấn **"Commit changes"**
7. GitHub Pages sẽ tự động cập nhật (đợi 1-2 phút)

---

## 💡 Mẹo Hay

1. **Đổi tên Repository**: Vào Settings → General → Repository name → Đổi tên mới

2. **Custom Domain**: Có thể dùng domain riêng (Settings → Pages → Custom domain)

3. **Tạo QR Code**: Dùng link GitHub Pages để tạo QR code in lên thiệp

4. **Backup**: Luôn giữ bản sao trên máy tính

---

## 📞 Cần Trợ Giúp?

Nếu gặp khó khăn:
1. Kiểm tra lại từng bước trong hướng dẫn này
2. Xem video hướng dẫn trên YouTube: "GitHub Pages tutorial"
3. Đọc documentation: https://docs.github.com/en/pages

---

**Chúc bạn thành công! 🎉**

Sau khi hoàn thành, bạn sẽ có một link như:
`https://YOUR_USERNAME.github.io/wedding-invitation`

Chia sẻ link này với mọi người để họ xem thiệp cưới của bạn! 💕

