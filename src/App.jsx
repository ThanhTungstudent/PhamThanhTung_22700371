

function App() {
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
      <div className="relative -top-50  flex justify-center">
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
      </div>
    </div>
  )
}

export default App
