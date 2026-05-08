import { User, Lock, Users, Store, ChevronRight, LogOut } from 'lucide-react';

export default function Profile() {
  return (
    <div className="pt-20 px-6 space-y-6 pb-32">
      <header className="fixed top-0 left-0 w-full z-50 flex items-center px-6 h-16 bg-[#f8f9fa]/80 backdrop-blur-xl">
        <h1 className="text-xl font-extrabold tracking-tight text-[#2b3437]">我的</h1>
      </header>

      <section className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-[#e3e9ec] flex items-center justify-center overflow-hidden">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDws9G4fSvH4t-6d61odxe4P8M52L2uV08F2x82X1BaAhwFCQ5QHCpPftM_B0aXSTcA8z79ofQxyquE8jyovb7YBi4bam_478kz5MjlUgBtJ0XPT3LocFcal3y4YFMIAdJ4S0lGKWQKTMDdLKuqil6b-jYVuisd9vT2v6UJOwz83rrCdE1A02fUiCtHxe8YqjrvH1Q2AAw6OO_9Nv6H4kdA5riaabfYd9emuM1Phg8kitsw8_Ud7xDup0bXFLoGCqbA6FzXVWv3L94" alt="Avatar" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col">
          <h2 className="font-bold text-xl text-[#2b3437]">精品店长</h2>
          <p className="text-sm text-[#8b959a] mt-1">ID: 8902144</p>
        </div>
      </section>

      <section className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="flex items-center justify-between p-5 border-b border-gray-50 active:bg-gray-50 transition-colors cursor-pointer">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#f0f1ff] flex items-center justify-center">
              <User size={16} className="text-[#5157a7]" />
            </div>
            <span className="font-bold text-[15px] text-[#2b3437]">个人资料</span>
          </div>
          <ChevronRight size={18} className="text-gray-400" />
        </div>
        <div className="flex items-center justify-between p-5 border-b border-gray-50 active:bg-gray-50 transition-colors cursor-pointer">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#f0f1ff] flex items-center justify-center">
              <Lock size={16} className="text-[#5157a7]" />
            </div>
            <span className="font-bold text-[15px] text-[#2b3437]">修改密码</span>
          </div>
          <ChevronRight size={18} className="text-gray-400" />
        </div>
        <div className="flex items-center justify-between p-5 border-b border-gray-50 active:bg-gray-50 transition-colors cursor-pointer">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#f0f1ff] flex items-center justify-center">
              <Users size={16} className="text-[#5157a7]" />
            </div>
            <span className="font-bold text-[15px] text-[#2b3437]">员工管理</span>
          </div>
          <ChevronRight size={18} className="text-gray-400" />
        </div>
        <div className="flex items-center justify-between p-5 active:bg-gray-50 transition-colors cursor-pointer">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#f0f1ff] flex items-center justify-center">
              <Store size={16} className="text-[#5157a7]" />
            </div>
            <span className="font-bold text-[15px] text-[#2b3437]">商家画像</span>
          </div>
          <ChevronRight size={18} className="text-gray-400" />
        </div>
      </section>

      <button className="w-full bg-white rounded-3xl p-5 shadow-sm border border-gray-100 flex items-center justify-center gap-2 text-[#9e3f4e] font-bold active:scale-[0.98] transition-transform mt-4">
        <LogOut size={18} />
        退出登录
      </button>
    </div>
  );
}
