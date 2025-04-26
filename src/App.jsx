

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
    </div>
  )
}

export default App
