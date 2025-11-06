import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Separator } from "./ui/separator";
import { Checkbox } from "./ui/checkbox";
import { Mail, Lock, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export default function LoginPage() {
  const handleBack = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 flex items-center justify-center px-6 py-12 relative overflow-hidden">
      {/* 배경 그라디언트 */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-violet-400/10 to-blue-400/10 rounded-full blur-3xl" />
      </div>
      
      <div className="w-full max-w-md relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
          </div>
          <h1 className="text-3xl text-gray-900 mb-2 cursor-pointer hover:text-blue-600 transition-colors" onClick={handleBack}>
            KUBION
          </h1>
          <p className="text-gray-500">국비온에 오신 것을 환영합니다</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Card className="bg-white/80 backdrop-blur-xl rounded-2xl border border-gray-200/50 p-8 shadow-2xl shadow-gray-900/5">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-2xl text-gray-900">로그인</h2>
                <p className="text-gray-500">계정에 로그인하여 서비스를 이용하세요</p>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700">이메일</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="example@email.com"
                      className="pl-10 h-12 bg-white border-gray-200 rounded-xl focus:border-blue-500 focus:ring-blue-500 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-gray-700">비밀번호</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="비밀번호를 입력하세요"
                      className="pl-10 h-12 bg-white border-gray-200 rounded-xl focus:border-blue-500 focus:ring-blue-500 transition-all"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Checkbox id="remember" />
                    <label htmlFor="remember" className="text-sm text-gray-600 cursor-pointer">
                      로그인 상태 유지
                    </label>
                  </div>
                  <a href="#" className="text-sm text-blue-600 hover:text-blue-700 transition-colors">
                    비밀번호 찾기
                  </a>
                </div>

                <Button 
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 h-12 rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 group"
                >
                  로그인
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              <div className="relative">
                <Separator />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="bg-white px-4 text-sm text-gray-500">또는</span>
                </div>
              </div>

              <div className="space-y-3">
                <Button 
                  variant="outline"
                  className="w-full h-12 border-gray-200 hover:bg-gray-50 hover:border-gray-300 rounded-xl transition-all duration-300"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    <path fill="#EA4335" d="M5.26620003,9.76452941 C6.19878754,6.93863203 8.85444915,4.90909091 12,4.90909091 C13.6909091,4.90909091 15.2181818,5.50909091 16.4181818,6.49090909 L19.9090909,3 C17.7818182,1.14545455 15.0545455,0 12,0 C7.27006974,0 3.1977497,2.69829785 1.23999023,6.65002441 L5.26620003,9.76452941 Z"/>
                    <path fill="#34A853" d="M16.0407269,18.0125889 C14.9509167,18.7163016 13.5660892,19.0909091 12,19.0909091 C8.86648613,19.0909091 6.21911939,17.076871 5.27698177,14.2678769 L1.23746264,17.3349879 C3.19279051,21.2936293 7.26500293,24 12,24 C14.9328362,24 17.7353462,22.9573905 19.834192,20.9995801 L16.0407269,18.0125889 Z"/>
                    <path fill="#4A90E2" d="M19.834192,20.9995801 C22.0291676,18.9520994 23.4545455,15.903663 23.4545455,12 C23.4545455,11.2909091 23.3454545,10.5272727 23.1818182,9.81818182 L12,9.81818182 L12,14.4545455 L18.4363636,14.4545455 C18.1187732,16.013626 17.2662994,17.2212117 16.0407269,18.0125889 L19.834192,20.9995801 Z"/>
                    <path fill="#FBBC05" d="M5.27698177,14.2678769 C5.03832634,13.556323 4.90909091,12.7937589 4.90909091,12 C4.90909091,11.2182781 5.03443647,10.4668121 5.26620003,9.76452941 L1.23999023,6.65002441 C0.43658717,8.26043162 0,10.0753848 0,12 C0,13.9195484 0.444780743,15.7301709 1.23746264,17.3349879 L5.27698177,14.2678769 Z"/>
                  </svg>
                  Google로 계속하기
                </Button>
                
                <Button 
                  variant="outline"
                  className="w-full h-12 border-gray-200 hover:bg-gray-50 hover:border-gray-300 rounded-xl transition-all duration-300"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="#FEE500">
                    <rect width="24" height="24" rx="4" fill="#FEE500"/>
                    <path d="M12 3.5C7.313 3.5 3.5 7.088 3.5 11.5C3.5 14.336 5.164 16.813 7.625 18.188C7.75 18.25 7.875 18.188 7.875 18.063V16.5C7.875 16.5 7.625 16.563 7.313 16.563C6.5 16.563 6.188 15.875 6.125 15.5C6.063 15.313 6 15.125 5.875 15C5.75 14.875 5.625 14.875 5.625 14.813C5.625 14.688 5.813 14.688 5.875 14.688C6.25 14.688 6.5 15.063 6.625 15.25C6.938 15.75 7.25 15.875 7.5 15.875C7.75 15.875 7.875 15.813 8 15.75C8.063 15.25 8.25 14.813 8.563 14.5C6.75 14.25 5.75 13.313 5.75 12C5.75 11.188 6.125 10.438 6.75 9.875C6.688 9.75 6.5 9.188 6.813 8.438C6.813 8.438 7.438 8.313 8.5 9C9 8.875 9.5 8.813 10 8.813C10.5 8.813 11 8.875 11.5 9C12.563 8.25 13.188 8.438 13.188 8.438C13.5 9.188 13.313 9.75 13.25 9.875C13.875 10.438 14.25 11.188 14.25 12C14.25 13.313 13.25 14.25 11.438 14.5C11.813 14.875 12 15.375 12 15.938V18.063C12 18.188 12.125 18.25 12.25 18.188C14.875 16.875 16.5 14.375 16.5 11.5C16.5 7.088 12.688 3.5 8 3.5H12Z" fill="#000000" fillOpacity="0.9"/>
                  </svg>
                  카카오로 계속하기
                </Button>

                <Button 
                  variant="outline"
                  className="w-full h-12 border-gray-200 hover:bg-gray-50 hover:border-gray-300 rounded-xl transition-all duration-300"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="#03C75A">
                    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2"/>
                  </svg>
                  네이버로 계속하기
                </Button>
              </div>

              <div className="text-center pt-4">
                <p className="text-sm text-gray-500">
                  아직 계정이 없으신가요?{" "}
                  <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors">
                    회원가입
                  </a>
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xs text-gray-400 text-center mt-8 leading-relaxed"
        >
          로그인 시 KUBION의{" "}
          <a href="#" className="text-gray-500 hover:text-gray-700 underline transition-colors">이용약관</a>
          {" "}및{" "}
          <a href="#" className="text-gray-500 hover:text-gray-700 underline transition-colors">개인정보처리방침</a>
          에 동의하는 것으로 간주됩니다.
        </motion.p>
      </div>
    </div>
  );
}
