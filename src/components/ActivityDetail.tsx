import { X, QrCode, Send, Share, Copy, CheckCircle2, Eye, Heart, Activity } from 'lucide-react';
import { useState } from 'react';

export default function ActivityDetail({ onNavigate }: { onNavigate: (s: string) => void }) {
  const [showQR, setShowQR] = useState(false);

  return (
    <div className="bg-[#f8f9fa] text-[#2b3437] antialiased min-h-screen pb-24">
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl flex justify-between items-center px-6 h-16">
        <div className="flex items-center gap-3">
          <button onClick={() => onNavigate('dashboard')} className="text-[#2b3437] active:scale-95 transition-transform">
            <X size={24} />
          </button>
          <span className="text-lg font-bold text-slate-900">活动详情</span>
        </div>
      </header>

      <main className="pt-16">
        <div className="px-6 pt-6 pb-4 bg-white border-b border-gray-100">
          <h1 className="font-bold text-2xl text-[#2b3437] mb-1">中环旗舰店 - 春夏新品</h1>
          <p className="text-xs text-[#586064] uppercase tracking-wider">SS24 Collection Preview</p>
        </div>

        <div className="px-5 mt-6 space-y-6">
          <div className="bg-white p-5 rounded-2xl shadow-sm space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-base text-[#2b3437]">笔记发布进度</h3>
              <span className="text-xs font-bold text-[#5157a7] bg-[#e0e0ff] px-2 py-1 rounded-full">目标: 50 篇</span>
            </div>
            <div className="flex gap-4">
              <div className="flex-1 bg-[#f1f4f6] p-4 rounded-xl flex flex-col items-center justify-center border border-transparent">
                <span className="text-xs text-[#586064] mb-1">已发布</span>
                <span className="font-bold text-2xl text-[#2b3437]">32</span>
              </div>
              <div className="flex-1 bg-[#e0e0ff]/50 p-4 rounded-xl flex flex-col items-center justify-center border border-transparent">
                <span className="text-xs text-[#5157a7] mb-1">待发布</span>
                <span className="font-bold text-2xl text-[#5157a7]">18</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button 
              onClick={() => {}} 
              className="flex flex-col items-center justify-center gap-2 bg-[#5157a7] text-white p-4 rounded-2xl active:scale-95 transition-transform shadow-lg shadow-[#5157a7]/20"
            >
              <Send size={24} />
              <span className="font-bold text-sm">一键发笔记</span>
              <span className="text-[10px] opacity-80">使用kos账号发布</span>
            </button>
            
            <button 
              onClick={() => setShowQR(true)} 
              className="flex flex-col items-center justify-center gap-2 bg-white border-2 border-[#5157a7] text-[#5157a7] p-4 rounded-2xl active:scale-95 transition-transform"
            >
              <QrCode size={24} />
              <span className="font-bold text-sm">展示邀请码</span>
              <span className="text-[10px] opacity-80">客户扫码发布</span>
            </button>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-base text-[#2b3437]">最新发布记录</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between bg-white p-4 rounded-2xl shadow-sm">
                <div className="flex items-center gap-3">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9OoBnWTT8MOfKiMoIBp0mMJn05jphvcwLuBf5upmnipdDZ_aJjf5Tf4_UU3aTBPyo5lHlYohm-wrRSOIYGg8HTEPxogv4t-N_6hrzgYTLbQw-fI_pwhrmudJnDQlftiA2sWKEq-sDsusRAMlVvKhDDcLBXzPzjmWEy6726a5Mle1w5jS4_lpJFhWmx_geq0PD-Rzl_KvyXYrafKHlNeINE-thKZ4FuLSSop67RwSrvTQRR12wTHMfqBC7fdHXzgvEtXQk-6ZXSj4" className="w-10 h-10 rounded-full object-cover" />
                  <div className="flex flex-col">
                    <span className="font-bold text-sm text-[#2b3437]">Kiki_奢品买手</span>
                    <span className="text-xs text-[#586064]">10分钟前</span>
                  </div>
                </div>
                <CheckCircle2 size={18} className="text-green-500" />
              </div>
              <div className="flex items-center justify-between bg-white p-4 rounded-2xl shadow-sm">
                <div className="flex items-center gap-3">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfFMotTbNgrV5QGOeLpmL8cPXl49_jbT7uL68I_gYucV0zT2gM6DuW-Zt_pg75HtTaqxLq_TacCmTPkVXwnhLBrFmSd22GdGobWBEu_J5NT9nAQyP6DTKVT6oTomx0SrzkQby-qZPgCr26CF8EvcEpD_PtHA9C9uDXeVv6xdQckwbxCW5HTKnKHWa4zeRlFuII775puNKQLyp9vevXFJmTMahlFC-AifGuwVyaXodxRqNXSuxTYSp_pfyXZVlbM5L4NCjKiwunRQk" className="w-10 h-10 rounded-full object-cover" />
                  <div className="flex flex-col">
                    <span className="font-bold text-sm text-[#2b3437]">香港旅游攻略_Mandy</span>
                    <span className="text-xs text-[#586064]">2小时前</span>
                  </div>
                </div>
                <CheckCircle2 size={18} className="text-green-500" />
              </div>
              <div className="flex items-center justify-between bg-white p-4 rounded-2xl shadow-sm">
                <div className="flex items-center gap-3">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDws9G4fSvH4t-6d61odxe4P8M52L2uV08F2x82X1BaAhwFCQ5QHCpPftM_B0aXSTcA8z79ofQxyquE8jyovb7YBi4bam_478kz5MjlUgBtJ0XPT3LocFcal3y4YFMIAdJ4S0lGKWQKTMDdLKuqil6b-jYVuisd9vT2v6UJOwz83rrCdE1A02fUiCtHxe8YqjrvH1Q2AAw6OO_9Nv6H4kdA5riaabfYd9emuM1Phg8kitsw8_Ud7xDup0bXFLoGCqbA6FzXVWv3L94" className="w-10 h-10 rounded-full object-cover" />
                  <div className="flex flex-col">
                    <span className="font-bold text-sm text-[#2b3437]">VIP_陈女士</span>
                    <span className="text-xs text-[#586064]">昨天 15:30</span>
                  </div>
                </div>
                <CheckCircle2 size={18} className="text-green-500" />
              </div>
            </div>
          </div>
        </div>
      </main>

      {showQR && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm px-6">
          <div className="bg-white rounded-3xl w-full max-w-sm overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="p-6 text-center space-y-4">
              <h3 className="font-bold text-xl text-[#2b3437]">邀请客户发布</h3>
              <p className="text-sm text-[#586064]">让客户使用小红书扫描下方二维码，将自动带入活动话题与门店定位。</p>
              
              <div className="bg-[#f8f9fa] p-4 rounded-2xl inline-block mx-auto">
                <div className="w-48 h-48 bg-white rounded-xl flex items-center justify-center border-2 border-dashed border-gray-200">
                  <QrCode size={64} className="text-[#5157a7]/40" />
                </div>
              </div>
              
              <div className="flex justify-center gap-4 pt-2">
                <button className="flex items-center gap-1.5 text-sm font-bold text-[#5157a7] bg-[#e0e0ff] px-4 py-2 rounded-full active:scale-95 transition-transform">
                  <Share size={16} /> 分享
                </button>
                <button className="flex items-center gap-1.5 text-sm font-bold text-[#586064] bg-gray-100 px-4 py-2 rounded-full active:scale-95 transition-transform">
                  <Copy size={16} /> 复制链接
                </button>
              </div>
            </div>
            <button 
              onClick={() => setShowQR(false)}
              className="w-full py-4 border-t border-gray-100 font-bold text-[#2b3437] hover:bg-gray-50 active:bg-gray-100 transition-colors"
            >
              关闭
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
