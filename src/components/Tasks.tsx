import { useState } from 'react';
import { Camera, ShoppingBag, Clock, CheckCircle2, CloudUpload, CheckCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import HeaderCapsule from './HeaderCapsule';

export default function Tasks({ onNavigate, onRestrictedAction }: { onNavigate: (s: string) => void, onRestrictedAction: (action: () => void) => void }) {
  const [isPlanModalOpen, setIsPlanModalOpen] = useState(false);

  const plans = [
    { id: '1', title: 'K11 Musea 探店话题素材收集', tag: '视觉陈列部' },
    { id: '2', title: '劳力士迪通拿新品素材收集', tag: '新媒体部' },
    { id: '3', title: '海港城门店 VIP 答谢晚宴', tag: '市场公关部' }
  ];

  const handleSelectPlan = (planId: string) => {
    setIsPlanModalOpen(false);
    onRestrictedAction(() => onNavigate('camera'));
  };

  return (
    <div className="pt-20 px-6 space-y-8 pb-32">
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-5 h-16 bg-[#f8f9fa]/80 backdrop-blur-xl">
        <div className="flex flex-col">
          <h1 className="text-xl font-extrabold tracking-tight text-[#2b3437]">素材中心</h1>
        </div>
      </header>

      <section className="mb-10 mt-2">
        <div className="grid grid-cols-2 gap-4">
          <div 
             onClick={() => onRestrictedAction(() => onNavigate('camera'))}
             className="bg-white rounded-[20px] p-5 shadow-sm border border-gray-100 flex flex-col items-center justify-center gap-3 active:scale-[0.98] transition-transform cursor-pointer"
          >
            <div className="w-14 h-14 bg-[#5157a7]/10 rounded-full flex items-center justify-center">
              <Camera className="text-[#5157a7]" size={28} />
            </div>
            <div className="text-center">
              <p className="font-bold text-[#2b3437] text-[15px]">随手拍/上传</p>
              <p className="text-[11px] text-[#8b959a] mt-1">入库至全局素材库</p>
            </div>
          </div>
          
          <div 
             onClick={() => setIsPlanModalOpen(true)}
             className="bg-gradient-to-br from-[#5157a7] to-[#404585] rounded-[20px] p-5 shadow-lg shadow-[#5157a7]/20 flex flex-col items-center justify-center gap-3 active:scale-[0.98] transition-transform cursor-pointer"
          >
            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
              <CloudUpload className="text-white" size={28} />
            </div>
            <div className="text-center">
              <p className="font-bold text-white text-[15px]">关联方案</p>
              <p className="text-[11px] text-white/70 mt-1">上传至具体活动方案</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold tracking-tight">进行中素材收集</h2>
          <div className="flex items-center gap-2">
            <span className="bg-[#e0e0ff] text-[#444a99] text-[10px] px-2.5 py-0.5 rounded-full font-bold">3 个待办</span>
          </div>
        </div>
        <div className="space-y-4">
          <div className="bg-white rounded-xl p-5 shadow-sm transition-transform active:scale-[0.98]">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-bold text-[#2b3437] leading-tight">K11 Musea 探店话题素材收集</h3>
                <div className="flex gap-2 mt-2">
                  <span className="bg-[#eaeff1] text-[#586064] text-[11px] px-2 py-0.5 rounded-md font-medium">视觉陈列部</span>
                  <span className="bg-[#eaeff1] text-[#586064] text-[11px] px-2 py-0.5 rounded-md font-medium">执行人：王晓明</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-lg bg-[#e0e0ff]/50 flex items-center justify-center">
                <Camera className="text-[#5157a7]" size={24} />
              </div>
            </div>
            <div className="mt-4 space-y-5">
              
              {/* Note 1 */}
              <div className="space-y-3">
                <p className="text-xs font-bold text-[#2b3437]">📝 搭配笔记 1：周末K11探店打卡</p>
                <div className="bg-[#f8f9fa] p-3 rounded-xl border border-gray-100 flex items-center gap-3">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAANIpx1BibL9UpKYkL5RHU-umlhl7z1_Xk-LDacbmzDPDObIrR9lG42enP6hjb0IrcTyh6tw7Uqw7n7Z6qh4sTBiaRV0m0UjqwO1j3h1A56EnBOmC_2w6YQphPJck6bi8t2ocMUysw-LJKud3Qyp60kWhpIbYmcEl1fksJUFDUwoT5ZOHW8vlQUsWDRQ-ewdzd2RlmWm2aQ11V_5PlP9P7qacwAo2HVTxp0D4_ORJlZrKxVk0qaDPrOowAe4CX3XCJ3YT3WY8nML0" className="w-14 h-14 object-cover rounded-lg flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm font-bold text-[#2b3437]">1. 远景</p>
                    <p className="text-[10px] text-[#586064] mt-0.5">门店、人流、陈列、区域图，体现门店热度</p>
                  </div>
                  <button onClick={() => onRestrictedAction(() => onNavigate('camera'))} className="w-8 h-8 rounded-full bg-[#5157a7] text-white flex items-center justify-center flex-shrink-0 active:scale-95 transition-transform shadow-md shadow-[#5157a7]/20">
                    <Camera size={14} />
                  </button>
                </div>

                <div className="bg-[#f8f9fa] p-3 rounded-xl border border-gray-100 flex items-center gap-3">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlgdchApaO9MqUr4L2gAlW-6E387m0X3Z96DtUHmOkpbUSk7B7xru-r6slr9-9YRNpNzFC74u4iLipxFk7K3d7QN4omLiSy4pl-rD8YpQ6dUDlFA8ErPifQmsF9lPwEPDwK7rIX5kbnbs6qUYct7Da78abctp_UZzdHGAfwfwEwWeQpl9soR_fYk4fU4Dclmxhj8qBMXfxqHPRCIbaFxcsZsQUXh2nThprkmjzUJRVP5sGl7yJuWbmLWxFD-Js06-OQflBub2U6AI" className="w-14 h-14 object-cover rounded-lg flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm font-bold text-[#2b3437]">2. 近景</p>
                    <p className="text-[10px] text-[#586064] mt-0.5">产品陈列、上身试背，突出产品质感</p>
                  </div>
                  <button onClick={() => onRestrictedAction(() => onNavigate('camera'))} className="w-8 h-8 rounded-full bg-[#5157a7] text-white flex items-center justify-center flex-shrink-0 active:scale-95 transition-transform shadow-md shadow-[#5157a7]/20">
                    <Camera size={14} />
                  </button>
                </div>
              </div>

              {/* Note 2 */}
              <div className="space-y-3">
                <p className="text-xs font-bold text-[#2b3437]">📝 搭配笔记 2：K11独家限量款推荐</p>
                <div className="bg-[#f8f9fa] p-3 rounded-xl border border-gray-100 flex items-center gap-3">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC12kATa3fFuLnBzmY-7p7Jja21GVZPe7N23mn58jrTdPNfDMF5Ky2LXlMgsrOeY_OP8kpa3cEcYBIPZ1JdIAokRSWFz9hXfqiU-PAT9KbJf_z701Db7yCDbEKIZN-A0-z52XhQORUxKk2Pk9ofdk1sBrKFPWMgvpnDnyyI-_OG5SMcHZRyAK2RYFYAvH7rpLce8dilMU8LgqXticqK_Rh_srzixm3zcVSZYtAU4c1Un-uID1sZMBnYOPfcn-Bde1MEUYoC9imgpfY" className="w-14 h-14 object-cover rounded-lg flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm font-bold text-[#2b3437]">1. 特写</p>
                    <p className="text-[10px] text-[#586064] mt-0.5">产品展示、门口带包装盒，展现细节</p>
                  </div>
                  <button onClick={() => onRestrictedAction(() => onNavigate('camera'))} className="w-8 h-8 rounded-full bg-[#5157a7] text-white flex items-center justify-center flex-shrink-0 active:scale-95 transition-transform shadow-md shadow-[#5157a7]/20">
                    <Camera size={14} />
                  </button>
                </div>

                <div className="bg-[#f8f9fa] p-3 rounded-xl border border-gray-100 flex items-center gap-3">
                  <div className="w-14 h-14 bg-gray-200 rounded-lg flex-shrink-0 flex items-center justify-center text-gray-400">
                    <Camera size={20} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-[#2b3437]">2. 手指图</p>
                    <p className="text-[10px] text-[#586064] mt-0.5">拍摄手指娱乐小镇和店门口的做指引</p>
                  </div>
                  <button onClick={() => onRestrictedAction(() => onNavigate('camera'))} className="w-8 h-8 rounded-full bg-[#5157a7] text-white flex items-center justify-center flex-shrink-0 active:scale-95 transition-transform shadow-md shadow-[#5157a7]/20">
                    <Camera size={14} />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between pt-4 mt-4 border-t border-[#eaeff1]">
              <div className="flex items-center text-[#9e3f4e] text-xs font-bold">
                <Clock size={14} className="mr-1" />
                <span>剩余 5 小时</span>
              </div>
              <span className="text-xs font-bold text-[#5157a7]">待完成</span>
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-sm transition-transform active:scale-[0.98]">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-bold text-[#2b3437] leading-tight">劳力士迪通拿新品素材收集</h3>
                <div className="flex gap-2 mt-2">
                  <span className="bg-[#eaeff1] text-[#586064] text-[11px] px-2 py-0.5 rounded-md font-medium">新媒体部</span>
                  <span className="bg-[#eaeff1] text-[#586064] text-[11px] px-2 py-0.5 rounded-md font-medium">执行人：李美华</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-lg bg-[#e0e0ff]/50 flex items-center justify-center">
                <ShoppingBag className="text-[#5157a7]" size={24} />
              </div>
            </div>
            <div className="mt-4 space-y-5">
              
              {/* Note 1 */}
              <div className="space-y-3">
                <p className="text-xs font-bold text-[#2b3437]">📝 搭配笔记 1：沉浸式开箱体验</p>
                <div className="bg-[#f8f9fa] p-3 rounded-xl border border-gray-100 flex items-center gap-3">
                  <div className="w-14 h-14 bg-gray-200 rounded-lg flex-shrink-0 flex items-center justify-center text-gray-400">
                    <Camera size={20} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-[#2b3437]">1. 外包装特写</p>
                    <p className="text-[10px] text-[#586064] mt-0.5">展现品牌经典绿色表盒及质感</p>
                  </div>
                  <button onClick={() => onRestrictedAction(() => onNavigate('camera'))} className="w-8 h-8 rounded-full bg-[#5157a7] text-white flex items-center justify-center flex-shrink-0 active:scale-95 transition-transform shadow-md shadow-[#5157a7]/20">
                    <Camera size={14} />
                  </button>
                </div>

                <div className="bg-[#f8f9fa] p-3 rounded-xl border border-gray-100 flex items-center gap-3">
                  <div className="w-14 h-14 bg-gray-200 rounded-lg flex-shrink-0 flex items-center justify-center text-gray-400">
                    <Camera size={20} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-[#2b3437]">2. 开箱瞬间</p>
                    <p className="text-[10px] text-[#586064] mt-0.5">半开盒状态，露出表盘一角</p>
                  </div>
                  <button onClick={() => onRestrictedAction(() => onNavigate('camera'))} className="w-8 h-8 rounded-full bg-[#5157a7] text-white flex items-center justify-center flex-shrink-0 active:scale-95 transition-transform shadow-md shadow-[#5157a7]/20">
                    <Camera size={14} />
                  </button>
                </div>
              </div>

              {/* Note 2 */}
              <div className="space-y-3">
                <p className="text-xs font-bold text-[#2b3437]">📝 搭配笔记 2：细节控必看</p>
                <div className="bg-[#f8f9fa] p-3 rounded-xl border border-gray-100 flex items-center gap-3">
                  <div className="w-14 h-14 bg-gray-200 rounded-lg flex-shrink-0 flex items-center justify-center text-gray-400">
                    <Camera size={20} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-[#2b3437]">1. 表盘细节</p>
                    <p className="text-[10px] text-[#586064] mt-0.5">微距拍摄计时小表盘及指针</p>
                  </div>
                  <button onClick={() => onRestrictedAction(() => onNavigate('camera'))} className="w-8 h-8 rounded-full bg-[#5157a7] text-white flex items-center justify-center flex-shrink-0 active:scale-95 transition-transform shadow-md shadow-[#5157a7]/20">
                    <Camera size={14} />
                  </button>
                </div>

                <div className="bg-[#f8f9fa] p-3 rounded-xl border border-gray-100 flex items-center gap-3">
                  <div className="w-14 h-14 bg-gray-200 rounded-lg flex-shrink-0 flex items-center justify-center text-gray-400">
                    <Camera size={20} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-[#2b3437]">2. 上手试戴</p>
                    <p className="text-[10px] text-[#586064] mt-0.5">自然光下上手效果，搭配正装袖口</p>
                  </div>
                  <button onClick={() => onRestrictedAction(() => onNavigate('camera'))} className="w-8 h-8 rounded-full bg-[#5157a7] text-white flex items-center justify-center flex-shrink-0 active:scale-95 transition-transform shadow-md shadow-[#5157a7]/20">
                    <Camera size={14} />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between pt-4 mt-4 border-t border-[#eaeff1]">
              <div className="flex items-center text-[#5157a7] text-xs font-bold">
                <Clock size={14} className="mr-1" />
                <span>剩余 23 小时</span>
              </div>
              <span className="text-xs font-bold text-[#5157a7]">待完成</span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold tracking-tight">已完成素材收集</h2>
          <button className="text-[#5157a7] text-sm font-semibold">查看全部</button>
        </div>
        <div className="space-y-4">
          <div className="bg-[#f1f4f6]/50 rounded-xl p-5 opacity-80">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-bold text-[#2b3437]/70 leading-tight">海港城门店 VIP 答谢晚宴记录</h3>
                <div className="flex gap-2 mt-2">
                  <span className="bg-[#e3e9ec] text-[#586064] text-[11px] px-2 py-0.5 rounded-md font-medium">市场公关部</span>
                  <span className="bg-[#e3e9ec] text-[#586064] text-[11px] px-2 py-0.5 rounded-md font-medium">执行人：赵敏</span>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <CheckCircle2 className="text-[#586064]/40 fill-current" size={24} />
                <span className="bg-[#ffedcc] text-[#d97706] text-[9px] px-1.5 py-0.5 rounded font-bold">需补素材</span>
              </div>
            </div>
            
            <div className="bg-white/50 p-3 rounded-lg border border-gray-100/50 mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-[#2b3437]/70">素材使用情况</span>
                <span className="text-[10px] text-[#586064]">共产出 12 张</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-[#5157a7]/50 w-full"></div>
                  </div>
                </div>
                <div className="flex gap-3 text-[10px] font-medium">
                  <span className="text-[#5157a7]">已使用 12</span>
                  <span className="text-[#9e3f4e] font-bold">剩余 0</span>
                </div>
              </div>
            </div>

            <div className="bg-[#f8f9fa] p-3 rounded-xl border border-gray-100 flex items-center gap-3 mb-4 opacity-100">
              <div className="w-10 h-10 bg-[#e0e0ff]/50 rounded-lg flex-shrink-0 flex items-center justify-center text-[#5157a7]">
                <Camera size={16} />
              </div>
              <div className="flex-1">
                <p className="text-xs font-bold text-[#2b3437]">新增笔记：晚宴伴手礼揭秘</p>
                <p className="text-[10px] text-[#9e3f4e] mt-0.5 font-medium">急需：伴手礼特写、包装细节</p>
              </div>
              <button onClick={() => onRestrictedAction(() => onNavigate('camera'))} className="px-3 py-1.5 rounded-full bg-[#5157a7] text-white text-[10px] font-bold active:scale-95 transition-transform shadow-md shadow-[#5157a7]/20">
                去补充
              </button>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-[#e3e9ec]">
              <div className="text-[#586064] text-xs font-medium">完成日期：2023.10.24</div>
              <div className="flex items-center text-[#4E54A4] text-xs font-bold bg-[#4E54A4]/10 px-3 py-1 rounded-full">
                <CloudUpload size={14} className="mr-1" />
                已同步
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Select Plan Modal */}
      <AnimatePresence>
        {isPlanModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPlanModalOpen(false)}
              className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
            />
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed bottom-0 left-0 right-0 bg-white rounded-t-[32px] pt-6 px-6 pb-12 z-50 shadow-2xl flex flex-col max-h-[85vh] max-w-md mx-auto"
            >
              <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-6 shrink-0 relative top-[-12px]" />
              
              <div className="mb-6 flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-extrabold text-[#2b3437] leading-tight flex items-center">
                    <CloudUpload className="mr-2 text-[#5157a7]" size={24} />
                    选择关联方案
                  </h3>
                  <p className="text-xs text-[#8b959a] font-medium mt-1">请选择您要上传素材所属的具体活动</p>
                </div>
                <button onClick={() => setIsPlanModalOpen(false)} className="p-2 bg-gray-50 rounded-full text-gray-400">
                  <X size={18} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto space-y-3 pb-6">
                {plans.map((plan) => (
                  <button
                    key={plan.id}
                    onClick={() => handleSelectPlan(plan.id)}
                    className="w-full text-left bg-white border border-gray-200 p-4 rounded-2xl hover:border-[#5157a7]/50 hover:bg-[#f0f1ff] active:scale-[0.98] transition-all flex flex-col"
                  >
                    <span className="font-bold text-[#2b3437]">{plan.title}</span>
                    <span className="text-[10px] text-[#5157a7] bg-[#5157a7]/10 px-2 py-0.5 rounded-md mt-2 w-fit">
                      {plan.tag}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
