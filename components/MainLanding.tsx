import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { 
  Compass, 
  BookOpen, 
  MessageSquare, 
  School, 
  Bell, 
  ArrowRight,
  CheckCircle,
  Star,
  Gift,
  Smartphone,
  Mail,
  Heart,
  Sparkles,
  HelpCircle
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";

export default function MainLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-white">
      {/* 히어로 섹션 */}
      <section className="relative overflow-hidden">
        {/* 배경 그라디언트 */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50/30 to-white" />
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-violet-400/10 to-blue-400/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-6 py-24 lg:py-32 relative">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100/50">
                    <Sparkles className="w-4 h-4 text-blue-600" />
                    <span className="text-sm text-blue-700">AI 기반 맞춤 추천</span>
                  </div>
                  <h1 className="text-5xl lg:text-6xl text-gray-900 tracking-tight leading-[1.1]">
                    당신을 위해 <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">투자</span>하세요.
                    <br />
                    국비 지원, 복잡하고<br />어려우셨나요?
                  </h1>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    이제 쉽게, 한 번에, 제대로 찾으세요.<br />
                    <span className="text-gray-500">수백 개 국비 과정 중, 당신에게 딱 맞는 프로그램을 추천해드립니다.</span>
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-start gap-4 pt-4">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 h-12 rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 group"
                  >
                    사전등록하기
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-gray-200 hover:bg-gray-50 hover:border-gray-300 px-8 h-12 rounded-xl transition-all duration-300 group backdrop-blur-sm"
                  >
                    <Heart className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                    후원하기
                  </Button>
                  <Button 
                    size="lg" 
                    variant="ghost"
                    className="text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 rounded-xl transition-all duration-300"
                  >
                    문의하기
                  </Button>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 bg-white ring-1 ring-gray-200/50">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1694878981905-b742a32f8121?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBtb2NrdXB8ZW58MXx8fHwxNzYyMTU5MDcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="KUBION 앱 미리보기"
                    className="w-full"
                  />
                </div>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-xl px-6 py-4 rounded-2xl shadow-2xl shadow-blue-900/10 ring-1 ring-gray-200/50"
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-br from-blue-500 to-indigo-500 p-2.5 rounded-xl shadow-lg">
                      <Smartphone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-gray-900">모바일 앱 출시 예정</div>
                      <div className="text-sm text-gray-500">iOS & Android</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 서비스 설명 섹션 */}
      <section id="services" className="py-32 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20 max-w-3xl"
            >
              <h2 className="text-4xl lg:text-5xl text-gray-900 tracking-tight mb-6">
                KUBION은 무엇인가요?
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  <strong className="text-gray-900">국비 지원 프로그램</strong>은 정부가 지원하는 무료 또는 저비용 교육 과정으로, 
                  취업과 진로 개발을 위한 중요한 기회입니다.
                </p>
                <p>
                  하지만 현실은 어떨까요? 많은 예비 수강생들이 정보 부족으로 기회를 놓치고, 
                  불투명한 후기와 검증되지 않은 교육 기관 때문에 어려움을 겪습니다.
                </p>
                <p className="text-gray-900">
                  <strong>KUBION</strong>은 이러한 문제를 해결하기 위해 탄생했습니다.
                </p>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Compass,
                  title: "맞춤형 추천",
                  description: "나의 관심사와 목표에 맞는 프로그램을 AI가 추천",
                  gradient: "from-blue-500 to-cyan-500"
                },
                {
                  icon: BookOpen,
                  title: "실제 후기",
                  description: "수료생들의 생생한 경험과 진솔한 평가",
                  gradient: "from-violet-500 to-purple-500"
                },
                {
                  icon: MessageSquare,
                  title: "커뮤니티",
                  description: "같은 과정 수강생들과 정보 공유 및 네트워킹",
                  gradient: "from-pink-500 to-rose-500"
                },
                {
                  icon: School,
                  title: "교육기관 입점",
                  description: "신뢰할 수 있는 기관 정보와 상세한 커리큘럼",
                  gradient: "from-amber-500 to-orange-500"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="group bg-white rounded-2xl border border-gray-200/50 p-8 hover:shadow-xl hover:shadow-gray-900/5 transition-all duration-300 hover:border-gray-300 h-full">
                    <div className="space-y-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} p-2.5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <feature.icon className="w-full h-full text-white" />
                      </div>
                      <h3 className="text-xl text-gray-900">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 후기 섹션 */}
      <section id="reviews" className="py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-br from-blue-100/20 to-indigo-100/20 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16 space-y-3 text-center"
            >
              <h2 className="text-4xl lg:text-5xl text-gray-900 tracking-tight">고객의 목소리</h2>
              <p className="text-xl text-gray-500">실제 사용자들의 경험을 들어보세요</p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "김민지",
                  role: "프론트엔드 과정 수료",
                  initial: "김",
                  color: "blue",
                  review: "지인 추천 없이 국비 찾기 어려웠는데, 여기서 필터 한 번으로 원하는 과정을 찾았어요! 시간 절약하고 정말 만족스러운 선택이었습니다."
                },
                {
                  name: "이준호",
                  role: "데이터 분석 과정 수료",
                  initial: "이",
                  color: "green",
                  review: "수료 이후 다른 사람들의 후기 보면서 다음 진로도 도움됐습니다. 커뮤니티 기능이 있어서 궁금한 것도 바로바로 물어볼 수 있어요."
                },
                {
                  name: "박서연",
                  role: "UI/UX 과정 수료",
                  initial: "박",
                  color: "purple",
                  review: "알림 기능 덕분에 마감 임박한 좋은 프로그램을 놓치지 않았어요. 정말 유용한 서비스입니다. 주변 친구들에게도 추천했습니다!"
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 p-8 hover:shadow-xl hover:shadow-gray-900/5 transition-all duration-300 h-full">
                    <div className="space-y-6">
                      <div className="flex gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        "{testimonial.review}"
                      </p>
                      <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-br from-${testimonial.color}-500 to-${testimonial.color}-600 flex items-center justify-center text-white shadow-lg`}>
                          {testimonial.initial}
                        </div>
                        <div>
                          <div className="text-gray-900">{testimonial.name} 님</div>
                          <div className="text-sm text-gray-500">{testimonial.role}</div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 이벤트 안내 섹션 */}
      <section id="event" className="py-32 bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 text-white relative overflow-hidden">
        {/* 배경 패턴 */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                  <Gift className="w-4 h-4" />
                  <span className="text-sm">사전 등록 이벤트</span>
                </div>
                <h2 className="text-4xl lg:text-5xl tracking-tight leading-tight">
                  지금 사전 등록하고<br />
                  <span className="text-blue-200">특별한 선물</span> 받으세요
                </h2>
                <p className="text-lg text-blue-100 leading-relaxed">
                  사전 등록만 해도 추첨을 통해 스타벅스 기프티콘, 문화상품권 등 다양한 혜택을 드립니다. 
                  선착순 신청자에게는 프리미엄 기능 1개월 무료!
                </p>
                <Button 
                  size="lg" 
                  className="bg-white text-blue-600 hover:bg-blue-50 px-8 h-12 rounded-xl shadow-2xl hover:shadow-white/20 transition-all duration-300 group"
                >
                  사전 등록하기
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid grid-cols-2 gap-4"
              >
                {[
                  { icon: Gift, label: "50명", sublabel: "추첨 경품" },
                  { icon: Star, label: "1개월", sublabel: "프리미엄 무료" },
                  { icon: CheckCircle, label: "11.30", sublabel: "신청 마감" },
                  { icon: Bell, label: "12.5", sublabel: "당첨자 발표" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    <Card className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 hover:bg-white/15 transition-all duration-300 rounded-2xl">
                      <item.icon className="w-8 h-8 text-white mb-3" />
                      <div className="text-2xl mb-1">{item.label}</div>
                      <div className="text-sm text-blue-100">{item.sublabel}</div>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 디바이스 미리보기 섹션 */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl text-gray-900 tracking-tight">
                  언제 어디서나 편리하게
                </h2>
                <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                  모바일, 태블릿, 데스크톱 모든 기기에서 동일한 경험을 제공합니다
                </p>
              </div>
              <div className="relative max-w-4xl mx-auto mt-16">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-gray-900/10 bg-gradient-to-br from-gray-50 to-white ring-1 ring-gray-200/50 p-1">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBkZXNpZ258ZW58MXx8fHwxNzYyMTU5MDcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="KUBION 플랫폼 미리보기"
                    className="w-full rounded-2xl"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ 섹션 */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-4 mb-16"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 mb-4">
                <HelpCircle className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl lg:text-5xl text-gray-900 tracking-tight">
                자주 묻는 질문
              </h2>
              <p className="text-xl text-gray-500">
                궁금한 점이 있으신가요?<br />아래에서 답변을 찾아보세요.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="bg-white border border-gray-200 rounded-2xl px-6 hover:shadow-lg transition-shadow">
                  <AccordionTrigger className="text-lg text-gray-900 hover:no-underline py-6">
                    KUBION은 무료로 사용할 수 있나요?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                    네, KUBION의 기본 서비스는 무료로 이용하실 수 있습니다. 
                    프로그램 검색, 기본 후기 열람, 커뮤니티 참여 등 핵심 기능은 모두 무료입니다. 
                    다만, 프리미엄 기능(상세한 통계 분석, 우선 알림 등)은 유료 구독으로 제공될 예정입니다.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="bg-white border border-gray-200 rounded-2xl px-6 hover:shadow-lg transition-shadow">
                  <AccordionTrigger className="text-lg text-gray-900 hover:no-underline py-6">
                    국비지원 프로그램은 누구나 신청할 수 있나요?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                    대부분의 국비지원 프로그램은 만 15세 이상의 국민이면 신청 가능하지만, 
                    프로그램마다 세부 조건이 다를 수 있습니다. 
                    나이, 학력, 취업 여부, 소득 수준 등에 따라 지원 자격이 달라질 수 있으니, 
                    KUBION에서 각 프로그램의 상세 정보를 확인하시기 바랍니다.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="bg-white border border-gray-200 rounded-2xl px-6 hover:shadow-lg transition-shadow">
                  <AccordionTrigger className="text-lg text-gray-900 hover:no-underline py-6">
                    AI 추천은 어떻게 작동하나요?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                    KUBION의 AI는 회원님의 관심 분야, 목표, 학습 이력, 선호도 등을 분석하여 
                    가장 적합한 프로그램을 추천합니다. 
                    더 많은 정보를 입력하고 플랫폼을 사용할수록 추천의 정확도가 높아집니다. 
                    또한 다른 사용자들의 수강 후기와 취업 데이터도 함께 고려하여 최적의 선택을 도와드립니다.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="bg-white border border-gray-200 rounded-2xl px-6 hover:shadow-lg transition-shadow">
                  <AccordionTrigger className="text-lg text-gray-900 hover:no-underline py-6">
                    교육기관도 입점할 수 있나요?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                    네, 국비지원 프로그램을 운영하는 교육기관이라면 누구나 입점 신청이 가능합니다. 
                    입점 시 교육 과정 정보를 상세히 등록하고, 수강생들과 직접 소통할 수 있으��, 
                    데이터 기반의 인사이트를 받아볼 수 있습니다. 
                    자세한 내용은 '교육기관 입점' 메뉴를 참고하시거나 문의하기를 통해 연락주세요.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="bg-white border border-gray-200 rounded-2xl px-6 hover:shadow-lg transition-shadow">
                  <AccordionTrigger className="text-lg text-gray-900 hover:no-underline py-6">
                    정식 출시는 언제인가요?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                    KUBION은 현재 베타 테스트 준비 단계에 있으며, 2025년 상반기 정식 출시를 목표로 하고 있습니다. 
                    사전 등록을 하시면 정식 출시 소식과 함께 다양한 혜택을 가장 먼저 받아보실 수 있습니다. 
                    출시 일정에 대한 업데이트는 이메일과 커뮤니티를 통해 안내드릴 예정입니다.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="bg-white border border-gray-200 rounded-2xl px-6 hover:shadow-lg transition-shadow">
                  <AccordionTrigger className="text-lg text-gray-900 hover:no-underline py-6">
                    모바일 앱도 제공되나요?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                    네, 정식 출시와 함께 iOS와 Android 모바일 앱도 동시에 제공될 예정입니다. 
                    모바일 앱에서도 웹과 동일한 모든 기능을 사용하실 수 있으며, 
                    푸시 알림을 통해 새로운 프로그램이나 중요한 마감일을 실시간으로 받아볼 수 있습니다.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 text-center"
            >
              <p className="text-gray-600 mb-4">답변을 찾지 못하셨나요?</p>
              <Button variant="outline" className="border-gray-300 hover:bg-gray-50 rounded-xl">
                문의하기
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 사전알림 신청 섹션 */}
      <section className="py-32 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-8"
            >
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl text-gray-900 tracking-tight">
                  출시 소식을 가장 먼저 받아보세요
                </h2>
                <p className="text-xl text-gray-500">
                  이메일을 남겨주시면 정식 출시 시 가장 먼저 알려드립니다
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <Input 
                  type="email" 
                  placeholder="이메일 주소를 입력하세요"
                  className="h-12 bg-white border-gray-200 rounded-xl shadow-sm focus:shadow-md transition-shadow"
                />
                <Button 
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 h-12 px-8 rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 group whitespace-nowrap"
                >
                  <Mail className="mr-2 w-4 h-4" />
                  알림 신청
                </Button>
              </div>
              <p className="text-sm text-gray-400">
                * 이메일은 출시 안내 목적으로만 사용되며, 별도 동의 없이 마케팅에 활용되지 않습니다.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="bg-gray-900 text-gray-300 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-12 mb-12">
              <div className="space-y-4">
                <div className="text-2xl text-white">KUBION</div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  청년을 위한 국비지원<br />프로그램 연계 플랫폼
                </p>
              </div>
              <div>
                <h4 className="text-white mb-4">서비스</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-white transition-colors">프로그램 찾기</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">후기 보기</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">커뮤니티</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">교육기관 입점</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white mb-4">회사</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-white transition-colors">소개</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">채용</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">블로그</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">문의하기</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white mb-4">법적 고지</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-white transition-colors">이용약관</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">개인정보처리방침</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">쿠키 정책</a></li>
                </ul>
              </div>
            </div>
            <div className="pt-8 border-t border-gray-800 text-sm text-gray-500">
              <p>&copy; 2025 KUBION. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
