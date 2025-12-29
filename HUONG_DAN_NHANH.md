# ⚡ Hướng Dẫn Nhanh - GitHub Pages (5 phút)

## Cách 1: Upload Qua Web (Dễ nhất - Không cần Git) ⭐

### Bước 1: Tạo Repository
1. Vào: https://github.com/new
2. Repository name: `wedding-invitation`
3. Chọn **Public** ⚠️
4. **KHÔNG** tích gì cả
5. Nhấn **Create repository**

### Bước 2: Upload Files
1. Nhấn **"uploading an existing file"**
2. Kéo thả **TẤT CẢ** files và folders:
   - `index.html`
   - `style.css`
   - `script.js`
   - `image/` folder (với tất cả ảnh)
   - `music/` folder (nếu có)
3. Nhấn **Commit changes**

### Bước 3: Bật GitHub Pages
1. Nhấn **Settings** (tab trên cùng)
2. Nhấn **Pages** (menu trái)
3. Source: **main** branch, **/ (root)** folder
4. Nhấn **Save**

### Bước 4: Copy Link
Link sẽ là: `https://YOUR_USERNAME.github.io/wedding-invitation`

✅ **XONG! Chia sẻ link này!**

---

## Cách 2: Dùng Git (Nếu đã cài Git)

Chạy file `setup-github.bat` và làm theo hướng dẫn trên màn hình.

Hoặc chạy lệnh:

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/wedding-invitation.git
git branch -M main
git push -u origin main
```

Sau đó bật GitHub Pages (Bước 3 ở trên).

---

## ❓ Cần Giúp?

Xem file **SETUP_GITHUB_PAGES.md** để có hướng dẫn chi tiết hơn!

