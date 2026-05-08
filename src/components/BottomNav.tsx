import { LayoutDashboard, Camera, User } from 'lucide-react';

export default function BottomNav({ currentScreen, onNavigate }: { currentScreen: string, onNavigate: (s: string) => void }) {
  return (
    <nav className="fixed bottom-0 left-0 w-full z-40 flex justify-around items-center px-4 pt-2 pb-8 bg-white/90 backdrop-blur-xl border-t border-gray-100">
      <button 
        onClick={() => onNavigate('dashboard')}
        className={`flex flex-col items-center justify-center flex-1 h-12 transition-colors ${currentScreen === 'dashboard' ? 'text-[#5157a7]' : 'text-[#abb3b7]'}`}
      >
        <LayoutDashboard size={24} strokeWidth={currentScreen === 'dashboard' ? 2.5 : 2} />
        <span className={`text-[10px] mt-1 ${currentScreen === 'dashboard' ? 'font-bold' : 'font-medium'}`}>工作台</span>
      </button>
      
      <button 
        onClick={() => onNavigate('tasks')}
        className={`flex flex-col items-center justify-center flex-1 h-12 transition-colors ${currentScreen === 'tasks' ? 'text-[#5157a7]' : 'text-[#abb3b7]'}`}
      >
        <Camera size={24} strokeWidth={currentScreen === 'tasks' ? 2.5 : 2} />
        <span className={`text-[10px] mt-1 ${currentScreen === 'tasks' ? 'font-bold' : 'font-medium'}`}>素材中心</span>
      </button>

      <button 
        onClick={() => onNavigate('profile')}
        className={`flex flex-col items-center justify-center flex-1 h-12 transition-colors ${currentScreen === 'profile' ? 'text-[#5157a7]' : 'text-[#abb3b7]'}`}
      >
        <User size={24} strokeWidth={currentScreen === 'profile' ? 2.5 : 2} />
        <span className={`text-[10px] mt-1 ${currentScreen === 'profile' ? 'font-bold' : 'font-medium'}`}>我的</span>
      </button>
    </nav>
  );
}
