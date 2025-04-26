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
    <div className="flex flex-1 gap-6 pr-22">
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
      </div>
      

    </div>
  )
}

export default App
