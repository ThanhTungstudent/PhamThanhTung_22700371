import Cau1 from "./components/Cau1"
import Cau10 from "./components/Cau10"
import Cau2 from "./components/Cau2"
import Cau3 from "./components/Cau3"
import Cau4 from "./components/Cau4"
import Cau5 from "./components/Cau5"
import Cau6 from "./components/Cau6"
import Cau7 from "./components/Cau7"
import Cau8 from "./components/Cau8"
import Cau9 from "./components/Cau9"


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
    </div>
  )
}

export default App
