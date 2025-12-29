@echo off
chcp 65001 >nul
echo ========================================
echo   Upload Image và Music folders lên GitHub
echo ========================================
echo.

cd /d "c:\THUONG\416 Nguyen Thi Thuong\marry"

echo Đang kiểm tra Git repository...
if not exist .git (
    echo Khởi tạo Git repository...
    git init
)

echo.
echo Kiểm tra remote repository...
git remote remove origin 2>nul
git remote add origin https://github.com/ThuongNguyen168/wedding-invitation.git
echo [OK] Đã kết nối với GitHub

echo.
echo Đang thêm folder image/ và music/...
git add image/
git add music/
echo [OK] Đã thêm folders vào staging

echo.
echo Kiểm tra files sẽ được commit...
git status --short

echo.
echo Đang commit...
git commit -m "Add image and music folders"
if errorlevel 1 (
    echo [WARNING] Có thể đã commit rồi hoặc không có thay đổi
)

echo.
echo Đang pull từ GitHub (nếu có thay đổi)...
git pull origin main --allow-unrelated-histories --no-edit 2>nul
if errorlevel 1 (
    echo [INFO] Pull không thành công, có thể là lần đầu
)

echo.
echo Đang push lên GitHub...
git push -u origin main
if errorlevel 1 (
    echo.
    echo [ERROR] Push không thành công!
    echo Có thể cần:
    echo 1. Đăng nhập GitHub trên máy tính
    echo 2. Hoặc dùng Personal Access Token
    echo.
    echo Xem hướng dẫn: https://docs.github.com/en/authentication
) else (
    echo.
    echo ========================================
    echo   [SUCCESS] Đã upload thành công!
    echo ========================================
    echo.
    echo Kiểm tra tại: https://github.com/ThuongNguyen168/wedding-invitation
    echo.
)

pause

