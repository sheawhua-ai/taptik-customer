import { X, Grid, Sun, Sparkles, CheckCircle2, Camera } from 'lucide-react';

export default function Scoring({ onNavigate }: { onNavigate: (s: string) => void }) {
  return (
    <div className="bg-[#f8f9fa] text-[#2b3437] antialiased min-h-screen pb-24">
      <header className="fixed top-0 w-full z-50 bg-slate-50/80 backdrop-blur-xl flex justify-between items-center px-6 h-16">
        <div className="flex items-center gap-3">
          <button onClick={() => onNavigate('tasks')} className="text-[#2b3437] active:scale-95 transition-transform">
            <X size={24} />
          </button>
          <span className="text-lg font-bold text-slate-900">评分详情</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#e3e9ec] overflow-hidden">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgSys75lrxxA608_rF17yPg-Ny8YQUOI6EakLYBx3LiBIUQSi_rTBo1V_sJ2likEFbXTtkJrPcPsYnverfE0X-lqRUzJJtpVtvc3H5owwcs7y-PyTQBk5JjAX9Sa-K9FJCC72z68iU0xJZMQN2gWSq6bZyUfKZv0_el51qoeM1b2WeTanUCjSXGg87ZyI5SuNCEx8wB_PyQ5PQWuEim96pJ4GYMfADd9wdXJsk1gU62qxuLuWHBchZqlH-mMJAPJWYPjQmnkdMmuw" className="w-full h-full object-cover" />
          </div>
        </div>
      </header>

      <main className="pt-20 px-6 max-w-2xl mx-auto">
        <div className="flex flex-col items-center mb-8">
          <div className="relative w-32 h-32 flex items-center justify-center mb-4">
            <svg className="absolute inset-0 w-full h-full -rotate-90">
              <circle className="text-[#e3e9ec]" cx="64" cy="64" fill="transparent" r="58" stroke="currentColor" strokeWidth="8"></circle>
              <circle className="text-[#5157a7] transition-all duration-1000" cx="64" cy="64" fill="transparent" r="58" stroke="currentColor" strokeDasharray="364.4" strokeDashoffset="91.1" strokeWidth="8"></circle>
            </svg>
            <div className="text-center">
              <span className="text-4xl font-extrabold text-[#5157a7]">75</span>
              <p className="text-[10px] font-bold tracking-widest text-[#5157a7]/60 uppercase">AI 评分</p>
            </div>
          </div>
          <h1 className="text-2xl font-bold tracking-tight mb-1">素材审核未通过</h1>
          <p className="text-[#586064] text-sm">建议根据AI提示重新拍摄以获得最佳展示效果</p>
        </div>

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 bg-white rounded-[1.5rem] overflow-hidden shadow-sm">
            <div className="relative aspect-video">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDefXL3MVV1TJzKSoAuSxA6G7uJsMFYR22Rhzjkr_zcfc2ZCuorWX0JCPqVZVMaZxufm2cf1V6gtar0gqofIUtu5KwFz7fQbyfXFf02q0UuuTOo9uBYFN9vFULFYRf79K8hbDEy4PQKj8bL8SYgM5-fCLRcXzLvTFiys49khXekETSM_2vkBohl52KaWMyLRTjEP02nTGfNKaHvfRSfPu5R2UbCj2O48LJGXXoVVnL7iZ5vHsZS7iAZhZGt7J6BTPkn82m7AuSXMUk" className="w-full h-full object-cover" />
              <div className="absolute inset-0 border-[3px] border-dashed border-[#9e3f4e]/40 m-8 rounded-lg">
                <div className="absolute -top-3 -left-3 bg-[#9e3f4e] text-white text-[10px] px-2 py-1 rounded font-bold">构图偏差</div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#9e3f4e]"></span>
                <h2 className="text-lg font-bold">检测到的问题</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-[#f1f4f6] rounded-xl">
                  <Grid className="text-[#9e3f4e]" size={24} />
                  <div>
                    <p className="font-bold text-sm">构图偏移</p>
                    <p className="text-xs text-[#586064] mt-1">商品主体不在黄金分割线上，未能突出品牌 Logo 或核心细节。</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-[#f1f4f6] rounded-xl">
                  <Sun className="text-[#9e3f4e]" size={24} />
                  <div>
                    <p className="font-bold text-sm">光线过暗</p>
                    <p className="text-xs text-[#586064] mt-1">皮具/金属件反光处理不佳，暗部细节丢失严重。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12 bg-[#e0e0ff]/30 rounded-[1.5rem] p-6 border border-[#5157a7]/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-[#5157a7] rounded-lg">
                <Sparkles className="text-white" size={16} />
              </div>
              <h2 className="text-lg font-bold text-[#444a99]">AI 改进建议</h2>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-[#444a99]">
                <CheckCircle2 className="text-[#5157a7] flex-shrink-0" size={20} />
                <span>开启相机参考线，确保主体位于画面中心或交叉点。</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#444a99]">
                <CheckCircle2 className="text-[#5157a7] flex-shrink-0" size={20} />
                <span>靠近光源或点击屏幕暗部进行手动补光对焦。</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#444a99]">
                <CheckCircle2 className="text-[#5157a7] flex-shrink-0" size={20} />
                <span>尝试平视角度拍摄，避开杂乱的门店背景干扰。</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3">
          <button 
            onClick={() => onNavigate('camera')}
            className="w-full h-14 bg-[#5157a7] text-white rounded-xl font-bold text-lg active:scale-95 duration-150 transition-all flex items-center justify-center gap-2"
          >
            <Camera size={24} />
            立即重拍
          </button>
          <button 
            onClick={() => onNavigate('tasks')}
            className="w-full h-14 bg-[#e3e9ec] text-[#2b3437] rounded-xl font-bold text-lg active:scale-95 duration-150 transition-all"
          >
            暂不处理，直接上传
          </button>
        </div>
      </main>
    </div>
  );
}
