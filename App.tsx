import { useState } from "react";
import MainLanding from "./components/MainLanding";
import LoginPage from "./components/LoginPage";
import { Button } from "./components/ui/button";
import { LogIn, Sparkles } from "lucide-react";

export default function App() {
  const [currentPage, setCurrentPage] = useState<"main" | "login">("main");

  return (
    <div className="min-h-screen">
      {/* 상단 네비게이션 */}
      {currentPage !== "login" && (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-sm">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center gap-3 cursor-pointer group" onClick={() => setCurrentPage("main")}>
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div className="text-xl text-gray-900">KUBION</div>
                <div className="hidden sm:block text-sm text-gray-500">국비온</div>
              </div>
              <div className="flex items-center gap-6">
                <a href="#services" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">서비스</a>
                <a href="#reviews" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">후기</a>
                <a href="#event" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">이벤트</a>
                <Button
                  onClick={() => setCurrentPage("login")}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-lg shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300"
                >
                  <LogIn className="w-4 h-4 mr-2" />
                  로그인
                </Button>
              </div>
            </div>
          </div>
        </nav>
      )}

      {/* 페이지 콘텐츠 */}
      {currentPage === "main" && <MainLanding />}
      {currentPage === "login" && <LoginPage />}
    </div>
  );
}
