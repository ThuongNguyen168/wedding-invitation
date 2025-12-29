@echo off
chcp 65001 >nul
echo ========================================
echo   Setup GitHub Pages - Wedding Invitation
echo ========================================
echo.

echo Bước 1: Kiểm tra Git...
git --version
if errorlevel 1 (
    echo [ERROR] Git chưa được cài đặt!
    echo Vui lòng cài Git từ: https://git-scm.com/download/win
    pause
    exit /b
)
echo [OK] Git đã được cài đặt!
echo.

echo Bước 2: Khởi tạo Git repository...
if exist .git (
    echo [INFO] Git repository đã tồn tại
) else (
    git init
    echo [OK] Đã khởi tạo Git repository
)
echo.

echo Bước 3: Thêm tất cả files...
git add .
echo [OK] Đã thêm files vào staging area
echo.

echo Bước 4: Commit files...
git commit -m "Initial commit - Wedding invitation website"
echo [OK] Đã commit files
echo.

echo ========================================
echo   HƯỚNG DẪN TIẾP THEO
echo ========================================
echo.
echo 1. Tạo repository mới trên GitHub:
echo    - Vào: https://github.com/new
echo    - Đặt tên: wedding-invitation
echo    - Chọn Public
echo    - KHÔNG tích các ô thêm README/gitignore
echo    - Nhấn "Create repository"
echo.
echo 2. Kết nối với GitHub (thay YOUR_USERNAME):
echo    git remote add origin https://github.com/YOUR_USERNAME/wedding-invitation.git
echo    git branch -M main
echo    git push -u origin main
echo.
echo 3. Bật GitHub Pages:
echo    - Vào Settings ^> Pages
echo    - Chọn branch "main", folder "/ (root)"
echo    - Nhấn Save
echo.
echo HOẶC xem file: SETUP_GITHUB_PAGES.md
echo.
pause

