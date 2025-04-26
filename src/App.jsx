import { useEffect } from "react";
import { useState } from "react";

const images = [
  "/banner01.jpg",
  "/banner02.jpg",
  "/banner03.jpg",
];

function App() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // 3 giây đổi ảnh
    return () => clearInterval(interval);
  }, []);

  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menuName) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Top bar */}
      <div className="bg-blue-900 text-white text-sm py-2 px-4 flex justify-between">
        <div className="flex gap-4">
          <a href="#">E-OFFICE</a>
          <a href="#">EMAIL</a>
          <a href="#">THƯ VIỆN - THÔNG TIN</a>
        </div>
        <div className="flex gap-2">
          <a href="#">KẾT NỐI</a>
          <a href="#">LIÊN HỆ</a>
          <span className="flex gap-1">
            🇻🇳 🇬🇧
          </span>
        </div>
      </div>
      {/* 2. Logo + Title */}
      <div className="flex flex-row bg-gray-400 items-start justify-center py-4 h-80">
        <img src="/Logo_IUH.png" alt="IUH Logo" className="h-16" />
        <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold text-center uppercase">Bộ công thương</h1>
        <h1 className="text-2xl font-bold text-center">ĐẠI HỌC CÔNG NGHIỆP TP. HỒ CHÍ MINH</h1>
        <p className="text-red-600 text-sm">Đổi mới tư duy, làm giàu thêm tri thức - đời sống</p>
        </div>
      </div>
      <div className="relative -top-50  flex justify-center flex-col ml-20">
        {/* 3. Menu chính */}
        <div className="bg-blue-800 text-white flex justify-center space-x-6 py-2 relative w-[90%]">
          {/* GIỚI THIỆU */}
          <div className="group relative">
            <button className="hover:underline">GIỚI THIỆU <span className="text-xs">▼</span></button>
            <div className="absolute hidden group-hover:block bg-white text-black shadow-md rounded-md mt-2 w-40">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Tổng quan</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Lịch sử</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Sứ mệnh - Tầm nhìn</a>
            </div>
          </div>

          {/* ĐÀO TẠO */}
          <div className="group relative">
            <button className="hover:underline">ĐÀO TẠO <span className="text-xs">▼</span></button>
            <div className="absolute hidden group-hover:block bg-white text-black shadow-md rounded-md mt-2 w-40">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Chương trình Đại học</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Chương trình Sau đại học</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Đào tạo quốc tế</a>
            </div>
          </div>

          {/* TUYỂN SINH */}
          <div className="group relative">
            <button className="hover:underline">TUYỂN SINH <span className="text-xs">▼</span></button>
            <div className="absolute hidden group-hover:block bg-white text-black shadow-md rounded-md mt-2 w-40">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Đại học chính quy</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Liên thông - Văn bằng 2</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Tuyển sinh Quốc tế</a>
            </div>
          </div>

          {/* Các menu còn lại giữ nguyên */}
          <a href="#" className="hover:underline">NGHIÊN CỨU</a>
          <a href="#" className="hover:underline">SINH VIÊN</a>
          <a href="#" className="hover:underline">GIẢNG VIÊN</a>
          <a href="#" className="hover:underline">VĂN BẰNG</a>
        </div>
              {/* 4. Banner chính */}
              <div className="bg-gray-200 p-4 flex justify-center items-center w-[90%]">
          <div className="relative w-[80%] max-w-5xl overflow-hidden rounded-lg shadow-md">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Banner ${index + 1}`}
                className={`w-full transition-opacity duration-700 ${
                  index === current ? "opacity-100" : "opacity-0 absolute top-0 left-0"
                }`}
              />
            ))}
          </div>
    </div>
      <div className="flex flex-1 gap-6 w-[90%]">
          {/* Sidebar trái */}
          <div className="w-1/4 space-y-4">
              <div className="bg-white p-4 shadow-md rounded-lg">
                <h2 className="font-semibold text-lg mb-2">CƠ CẤU TỔ CHỨC</h2>
                <ul className="space-y-1 text-blue-700">
                  {/* Lãnh đạo */}
                  <li>
                    <button
                      onClick={() => toggleMenu("lanhdao")}
                      className="flex justify-between w-full hover:underline"
                    >
                      LÃNH ĐẠO
                      <span>{openMenu === "lanhdao" ? "▲" : "▼"}</span>
                    </button>
                    {openMenu === "lanhdao" && (
                      <ul className="pl-4 text-sm text-blue-500">
                        <li><a href="#">Hiệu trưởng</a></li>
                        <li><a href="#">Phó hiệu trưởng</a></li>
                      </ul>
                    )}
                  </li>

                  {/* Các phòng ban */}
                  <li>
                    <button
                      onClick={() => toggleMenu("phongban")}
                      className="flex justify-between w-full hover:underline"
                    >
                      CÁC PHÒNG BAN
                      <span>{openMenu === "phongban" ? "▲" : "▼"}</span>
                    </button>
                    {openMenu === "phongban" && (
                      <ul className="pl-4 text-sm text-blue-500">
                        <li><a href="#">Phòng Đào tạo</a></li>
                        <li><a href="#">Phòng Công tác sinh viên</a></li>
                      </ul>
                    )}
                  </li>

                  {/* Các khoa */}
                  <li>
                    <button
                      onClick={() => toggleMenu("khoa")}
                      className="flex justify-between w-full hover:underline"
                    >
                      CÁC KHOA
                      <span>{openMenu === "khoa" ? "▲" : "▼"}</span>
                    </button>
                    {openMenu === "khoa" && (
                      <ul className="pl-4 text-sm text-blue-500">
                        <li><a href="#">Khoa Công nghệ thông tin</a></li>
                        <li><a href="#">Khoa Kỹ thuật cơ khí</a></li>
                      </ul>
                    )}
                  </li>

                  {/* Các viện */}
                  <li><a href="#" className="hover:underline">CÁC VIỆN</a></li>

                  {/* Các trung tâm */}
                  <li><a href="#" className="hover:underline">CÁC TRUNG TÂM</a></li>

                  {/* Các phân hiệu */}
                  <li><a href="#" className="hover:underline">CÁC PHÂN HIỆU</a></li>

                  {/* Đoàn thể */}
                  <li><a href="#" className="hover:underline">ĐOÀN THỂ</a></li>
                </ul>
              </div>
              
            </div>
            {/* Nội dung chính */}
              
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8 w-3/4">
        {/* Box 1 */}
        <div className="bg-white p-4 rounded-lg shadow-md relative">
          <h2 className="font-semibold text-blue-900 border-b pb-2 mb-3">THÔNG BÁO</h2>
          <a href="#" className="absolute top-4 right-4 text-xs text-gray-500 hover:underline">xem tất cả</a>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
            <li>
              Thông báo v/v kế hoạch nghỉ hè đối với sinh viên năm 2025 <span className="text-red-500 text-xs ml-2">new</span>
            </li>
            <li>
              Thông báo tuyển chọn nam sinh tốt nghiệp đại học cho các trường quân đội… 
            </li>
          </ul>
        </div>

        {/* Box 2 */}
        <div className="bg-white p-4 rounded-lg shadow-md relative">
          <h2 className="font-semibold text-blue-900 border-b pb-2 mb-3">TUYỂN SINH</h2>
          <a href="#" className="absolute top-4 right-4 text-xs text-gray-500 hover:underline">xem tất cả</a>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
            <li>
              Thông báo tuyển sinh đào tạo liên thông từ trình độ cao đẳng lên trình…
            </li>
            <li>
              Thông báo v/v tuyển sinh đại học văn bằng hai, đợt 1 năm 2025
            </li>
          </ul>
        </div>

        {/* Box 3 */}
        <div className="bg-white p-4 rounded-lg shadow-md relative">
          <h2 className="font-semibold text-blue-900 border-b pb-2 mb-3">TIN TỨC - SỰ KIỆN</h2>
          <a href="#" className="absolute top-4 right-4 text-xs text-gray-500 hover:underline">xem tất cả</a>
          <div className="space-y-2 text-sm text-gray-700">
            <img src="/avena.jpg" alt="Event" className="rounded-md w-full h-36 object-cover" />
            <ul className="list-disc list-inside">
              <li>AVEVA tài trợ gói phần mềm trị giá 180.000 đô Mỹ cho Đại học Công nghiệp…</li>
              <li>Hội nghị khoa học quốc tế BAIC 2025 lần 2 tại IUH - Sức mạnh AI trong… <span className="text-red-500 text-xs ml-2">new</span></li>
            </ul>
          </div>
        </div>

        {/* Box 4 */}
        <div className="bg-white p-4 rounded-lg shadow-md relative">
          <h2 className="font-semibold text-blue-900 border-b pb-2 mb-3">HỢP TÁC QUỐC TẾ</h2>
          <a href="#" className="absolute top-4 right-4 text-xs text-gray-500 hover:underline">xem tất cả</a>
          <div className="space-y-2 text-sm text-gray-700">
            <img src="/giaoluu.jpg" alt="Cooperation" className="rounded-md w-full h-36 object-cover" />
            <ul className="list-disc list-inside">
              <li>Sôi nổi hoạt động Tuần lễ giao lưu văn hóa, khoa học sinh viên quốc tế…</li>
              <li>Đại học Công nghiệp TP. HCM tham gia dự án Green Edu Seeds của quỹ Erasmus</li>
            </ul>
          </div>
        </div>
      </div>
            
        </div>
        <div className="my-10 space-y-6">
      
      {/* Khu vực hình ảnh */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-[90%] bg-blue-500 p-5">
        {/* Phân hiệu Quảng Ngãi */}
        <div className="bg-blue-900 rounded-lg overflow-hidden">
          <h2 className="text-white font-semibold p-2 text-sm">PHÂN HIỆU QUẢNG NGÃI</h2>
          <img src="/QN03.jpg" alt="Quảng Ngãi" className="w-full h-40 object-cover" />
        </div>

        {/* Cơ sở Thanh Hóa */}
        <div className="bg-blue-900 rounded-lg overflow-hidden">
          <h2 className="text-white font-semibold p-2 text-sm">CƠ SỞ THANH HÓA</h2>
          <img src="/TH03.jpg" alt="Thanh Hóa" className="w-full h-40 object-cover" />
        </div>

        {/* Video và hình ảnh */}
        <div className="bg-blue-900 rounded-lg overflow-hidden relative">
          <h2 className="text-white font-semibold p-2 text-sm flex justify-between items-center">
            VIDEO VÀ HÌNH ẢNH
            <a href="#" className="text-xs underline text-gray-300 ml-2">xem tất cả</a>
          </h2>
          <img src="/video.jpg" alt="Video" className="w-full h-40 object-cover" />
          {/* Icon play overlay */}
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="bg-black bg-opacity-50 rounded-full p-2">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6 4l10 6-10 6V4z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      
      {/* Khu vực text dưới */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-sm w-[90%]">
        {/* Liên hệ */}
        <div>
          <h3 className="font-bold text-red-700 mb-2">LIÊN HỆ</h3>
          <p>ĐẠI HỌC CÔNG NGHIỆP TP. HỒ CHÍ MINH</p>
          <p>Địa chỉ: Số 12 Nguyễn Văn Bảo, P.1, Q.Gò Vấp, TP.HCM</p>
          <p>Điện thoại: <span className="text-blue-700">028 38940 390 - 100</span></p>
          <p>Tuyển sinh: <span className="text-blue-700">028 3985 1932 - 028 3985 5858</span></p>
          <p>Email: <span className="text-blue-700">dhcn@iuh.edu.vn</span></p>
        </div>

        {/* Hoạt động khác */}
        <div>
          <h3 className="font-bold text-orange-600 mb-2">HOẠT ĐỘNG KHÁC</h3>
          <ul className="space-y-1">
            <li>Hoạt động phục vụ cộng đồng</li>
            <li>Sinh viên tình nguyện</li>
            <li>CLB/Đội/Nhóm sinh viên</li>
            <li>Kết nối doanh nghiệp</li>
          </ul>
        </div>

        {/* Thông tin mở rộng */}
        <div>
          <h3 className="font-bold text-red-700 mb-2">THÔNG TIN MỞ RỘNG</h3>
          <ul className="space-y-1">
            <li>Báo chí viết về IUH</li>
            <li>Khám phá IUH</li>
            <li>Kỹ năng mềm</li>
            <li>Bộ sưu tập</li>
            <li>Dịch vụ sinh viên</li>
          </ul>
        </div>

        {/* Văn bản tiện ích */}
        <div>
          <h3 className="font-bold text-red-700 mb-2">VĂN BẢN TIỆN ÍCH</h3>
          <ul className="space-y-1">
            <li>Quy chế - Quy định - Quy trình</li>
            <li>Bao công khai</li>
            <li>Biểu mẫu đào tạo</li>
            <li>Quản lý khoa học</li>
            <li>Phản hồi</li>
          </ul>
        </div>
      </div>
      
    </div>

    <div className="bg-gray-100 py-4 text-sm text-gray-700 border-t w-[90%]">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 space-y-4 md:space-y-0">

        {/* Logo + Thống kê */}
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
          {/* Logo */}
          <img src="/Logo_IUH.png" alt="IUH Logo" className="h-12" />

          {/* Thống kê */}
          <div className="text-xs text-gray-600 space-y-1">
            <div className="flex items-center space-x-2">
              <span>👥 Số lượt truy cập:</span> 
              <span className="font-semibold">288,835,637</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>📅 Hôm nay:</span> 
              <span className="font-semibold">21,987</span>
              <span>🔵 Đang xem:</span> 
              <span className="font-semibold">91</span>
            </div>
          </div>
        </div>

        {/* Chia sẻ mạng xã hội */}
        <div className="flex items-center space-x-2">
          <span>Chia sẻ</span>
          <a href="#" className="text-blue-600 hover:scale-110 transform transition">
            <img src="/facebook.webp" alt="Facebook" className="h-6" />
          </a>
          <a href="#" className="text-blue-400 hover:scale-110 transform transition">
            <img src="/tw.png" alt="Twitter" className="h-6" />
          </a>
          <a href="#" className="text-blue-500 hover:scale-110 transform transition">
            <img src="/lk.webp" alt="LinkedIn" className="h-6" />
          </a>
        </div>
      </div>

      {/* Dòng bản quyền */}
      <div className="mt-4 border-t pt-2 text-center text-xs text-gray-500">
        <p>© Bản quyền 2015 - Đại học Công nghiệp Thành phố Hồ Chí Minh</p>
        <p><em>Mọi hành động sử dụng nội dung đăng tải trên Website iuh.edu.vn phải có sự đồng ý bằng văn bản của Đại học Công nghiệp Thành phố Hồ Chí Minh.</em></p>
      </div>
    </div>









      </div>
      

    </div>
  )
}

export default App
