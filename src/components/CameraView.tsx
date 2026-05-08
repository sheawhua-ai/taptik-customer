import { FlashlightOff, Hdr, Settings, RefreshCw, X, Sun } from 'lucide-react';

export default function CameraView({ onNavigate }: { onNavigate: (s: string) => void }) {
  return (
    <div className="fixed inset-0 bg-black font-sans text-white overflow-hidden z-50 flex flex-col items-center justify-center">
      <header className="absolute top-0 w-full z-50 flex justify-between items-center px-6 h-16 bg-slate-950/20 backdrop-blur-md">
        <button onClick={() => onNavigate('tasks')} className="text-white hover:opacity-80 transition-opacity active:scale-95 duration-150">
          <X size={24} />
        </button>
        <div className="flex items-center space-x-4">
          <FlashlightOff size={24} className="text-white" />
          <span className="text-white font-bold text-sm tracking-wider">HDR</span>
        </div>
        <div className="flex items-center gap-3">
          <button className="text-white hover:opacity-80 transition-opacity active:scale-95 duration-150">
            <Settings size={24} />
          </button>
        </div>
      </header>

      <main className="relative w-full h-full max-w-md bg-slate-900 overflow-hidden shadow-2xl flex-1 flex flex-col justify-center">
        <div className="relative aspect-[3/4] w-full">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdGYzSKdIvZ9nUczlDrXtbDM7yoJImINSrvPhpMCurK3Fn0ggghhjh_ELSgF_Hh2M5azKwZypzd2Xw0HZ30nvL3Y_ntmCpLTsZbywXZXgpowhQ0cMb-HL5G9r-1c3npAHo3HU9MEKuNwLfuxBr5GNDZhKkDAVMJfS5sDQErhI7-j9m3Vfn8a2dfIRicLbi7QCtxVCbTjitG4EvGgmxUbxIFQqJRppcKfLyZ7mqSd1BOew3eRz2Cg6DYX9nxAcJ1j8D99ggqIJ583U" className="w-full h-full object-cover opacity-90" />
          
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute left-1/3 w-[1px] h-full bg-white/30"></div>
            <div className="absolute left-2/3 w-[1px] h-full bg-white/30"></div>
            <div className="absolute top-1/3 h-[1px] w-full bg-white/30"></div>
            <div className="absolute top-2/3 h-[1px] w-full bg-white/30"></div>
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-[2px] bg-white/20 flex items-center justify-center">
            <div className="w-1 h-4 bg-[#5157a7] rounded-full"></div>
          </div>

          <div className="absolute top-8 left-1/2 -translate-x-1/2 w-4/5 text-center">
            <div className="bg-black/40 backdrop-blur-xl border border-white/10 px-4 py-3 rounded-xl">
              <p className="text-white text-sm font-medium tracking-wide">
                请保持光线充足，正对橱窗陈列中心
              </p>
              <div className="mt-2 flex items-center justify-center space-x-2">
                <Sun size={12} className="text-[#5157a7] fill-current" />
                <div className="h-1 w-24 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-[#5157a7] w-3/4"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 border border-[#5157a7]/60 rounded-sm">
            <div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-[#5157a7]"></div>
            <div className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-[#5157a7]"></div>
            <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-[#5157a7]"></div>
            <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-[#5157a7]"></div>
          </div>
        </div>
      </main>

      <section className="absolute bottom-0 left-0 w-full z-50 bg-slate-950/40 backdrop-blur-2xl px-8 pt-6 pb-12 flex flex-col items-center">
        <div className="flex space-x-8 mb-8 text-white/50 text-xs font-bold tracking-widest uppercase">
          <span>延时</span>
          <span>视频</span>
          <span className="text-[#5157a7]">照片</span>
          <span>人像</span>
          <span>全景</span>
        </div>

        <div className="w-full max-w-sm flex items-center justify-between">
          <div className="w-12 h-12 rounded-lg overflow-hidden border border-white/20 bg-slate-800">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0iHY06_vP_gd4gIxRbKDDzAzkAgQr4FYW-X4qxf-2tomarZr0E3d7JLn_r2dGH2eWJQC-F5z6bPMq-y3vN4av8uSOH5cbGPOqfGDOW9HJHQJKxnxmvwPLlHrsOWl7YuolW4Hh74CXcYLR89nwqN_t90tGIVuplE6_JYst2VdqlBKf-A6fyKfjepi75gyHrcSPKxnxnqQl1jcJerqrHk1W6iC8IkPLmPk_kudO8eD2eZ1I42vxdFjmn7inm2ADsCRmJPDrl2bPR3o" className="w-full h-full object-cover" />
          </div>
          
          <button 
            onClick={() => onNavigate('scoring')}
            className="border-4 border-white rounded-full p-1 active:scale-90 transition-transform duration-200"
          >
            <div className="bg-white rounded-full w-16 h-16"></div>
          </button>
          
          <button className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white active:scale-95 transition-transform">
            <RefreshCw size={24} />
          </button>
        </div>
      </section>
    </div>
  );
}
