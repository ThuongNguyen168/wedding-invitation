# Thiệp Cưới Website

Website thiệp cưới đẹp mắt với nhiều hiệu ứng animation.

## Cách sử dụng

### Cách 1: Mở trực tiếp
- Mở file `index.html` trực tiếp trong trình duyệt (double-click vào file)

### Cách 2: Dùng Local Server (Khuyến nghị)
1. Mở terminal/command prompt
2. Di chuyển đến thư mục chứa project
3. Chạy một trong các lệnh sau:

**Python 3:**
```bash
python -m http.server 8000
```

**Python 2:**
```bash
python -m SimpleHTTPServer 8000
```

**Node.js (nếu đã cài):**
```bash
npx http-server
```

4. Mở trình duyệt và truy cập: `http://localhost:8000`

## Cấu trúc thư mục

```
marry/
├── index.html          # File HTML chính
├── style.css           # File CSS với animations
├── script.js           # File JavaScript
├── image/              # Thư mục chứa ảnh
│   ├── Image.jfif
│   ├── Image (1).jfif
│   └── ...
├── music/              # Thư mục chứa nhạc nền
│   ├── background-music.mp3  # File nhạc (cần thêm)
│   └── README.txt      # Hướng dẫn thêm nhạc
└── README.md           # File hướng dẫn này
```

## Tính năng

- ✅ Màn hình loading với animation
- ✅ Hero section với ảnh nền và floating hearts
- ✅ Câu chuyện với timeline animation
- ✅ Thư viện ảnh với lightbox
- ✅ Chi tiết lễ cưới với countdown timer
- ✅ Form xác nhận tham dự (RSVP)
- ✅ **Nhạc nền với nút bật/tắt** 🎵
- ✅ Responsive design (tối ưu cho mobile)
- ✅ Smooth scroll navigation
- ✅ Nhiều hiệu ứng animation đẹp mắt

## Tùy chỉnh

Bạn có thể chỉnh sửa:
- **Tên cặp đôi**: Trong file `index.html`, dòng 35 và 39
- **Ngày cưới**: Trong file `index.html`, dòng 43 và `script.js`, dòng 153
- **Địa điểm**: Trong file `index.html`, dòng 125
- **Ảnh nền hero**: Trong file `style.css`, dòng 148
- **Màu sắc**: Trong file `style.css`, phần `:root` (dòng 7-15)

## Lưu ý

- Đảm bảo tất cả ảnh trong thư mục `image/` được đặt đúng vị trí
- Nếu ảnh không hiển thị, kiểm tra đường dẫn ảnh trong `style.css` và `script.js`
- Nên dùng local server để tránh các vấn đề về CORS

## Thêm nhạc nền

1. Tạo file nhạc với tên `background-music.mp3` (hoặc `.ogg`)
2. Đặt file vào thư mục `music/`
3. Nút điều khiển nhạc sẽ xuất hiện ở góc dưới bên trái
4. Nhấn vào nút để bật/tắt nhạc
5. Nhạc sẽ tự động lặp lại khi phát
6. Trạng thái nhạc (bật/tắt) sẽ được lưu tự động

**Xem thêm:** `music/README.txt` để biết chi tiết

## Chia sẻ với người khác

Để chia sẻ trang web này với mọi người, bạn có thể:

### 💻 GitHub Pages (Miễn phí, Ổn định) ⭐ KHUYẾN NGHỊ
**Xem hướng dẫn chi tiết từng bước:** `SETUP_GITHUB_PAGES.md`
**Hoặc làm theo checklist:** `CHECKLIST_GITHUB.md`

Tóm tắt nhanh:
1. Tạo repository trên GitHub (Public)
2. Upload tất cả files
3. Bật GitHub Pages trong Settings → Pages
4. Copy link và chia sẻ!

### 🌟 Cách nhanh nhất: Netlify Drop
1. Vào: https://app.netlify.com/drop
2. Kéo thả toàn bộ thư mục `marry` vào trang
3. Copy link và chia sẻ!

**Xem tất cả các cách:** `HUONG_DAN_CHIA_SE.md`

## Hỗ trợ

Nếu gặp lỗi, vui lòng kiểm tra:
1. Console của trình duyệt (F12) để xem lỗi cụ thể
2. Đường dẫn file có đúng không
3. Ảnh có tồn tại trong thư mục `image/` không

