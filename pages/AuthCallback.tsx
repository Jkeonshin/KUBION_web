import { useEffect } from "react";
import { supabase } from "../supabaseClient";

export default function AuthCallback() {
  useEffect(() => {
    supabase.auth.getSession().then(() => {
      window.location.href = "/KUBION_web"; // 로그인 후 메인으로 이동
    });
  }, []);

  return <div className="p-6 text-center">로그인 처리중...</div>;
}