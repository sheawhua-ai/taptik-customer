import { Bell, LayoutDashboard, Camera, ShoppingBag, Video, MessageCircle, X, Copy, CheckCircle2, Sparkles, Eye, Heart, Share, ChevronRight, Zap, Users } from 'lucide-react';
import { useState } from 'react';

export default function Dashboard({ onNavigate, onRestrictedAction }: { onNavigate: (s: string) => void, onRestrictedAction: (action: () => void) => void }) {
  const [replyModalOpen, setReplyModalOpen] = useState(false);
  const [currentComment, setCurrentComment] = useState<any>(null);
  const [replyText, setReplyText] = useState('');
  const [toastMessage, setToastMessage] = useState('');

  const comments = [
    {
      id: 1,
      user: "VIP_陈女士",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuA9OoBnWTT8MOfKiMoIBp0mMJn05jphvcwLuBf5upmnipdDZ_aJjf5Tf4_UU3aTBPyo5lHlYohm-wrRSOIYGg8HTEPxogv4t-N_6hrzgYTLbQw-fI_pwhrmudJnDQlftiA2sWKEq-sDsusRAMlVvKhDDcLBXzPzjmWEy6726a5Mle1w5jS4_lpJFhWmx_geq0PD-Rzl_KvyXYrafKHlNeINE-thKZ4FuLSSop67RwSrvTQRR12wTHMfqBC7fdHXzgvEtXQk-6ZXSj4",
      type: "投诉",
      typeColor: "bg-[#9e3f4e]",
      time: "刚刚",
      content: "昨天在海港城店体验极差，SA态度冷漠，问什么都爱答不理，这就是你们的奢品服务吗？",
      aiSuggestion: "尊贵的陈女士您好🙏，非常抱歉给您带来了不愉快的购物体验😔。我们非常重视您的反馈，已经第一时间向海港城店长核实情况并进行内部整改。为了表达我们的歉意，诚邀您再次光临，我们将安排专属资深顾问为您提供一对一服务，并为您准备了一份精美歉礼🎁。期待能有机会弥补我们的不足✨。",
      buttonText: "紧急安抚并回复",
      buttonColor: "bg-[#9e3f4e]",
      borderColor: "border-[#9e3f4e]/20"
    },
    {
      id: 2,
      user: "香港旅游攻略_Mandy",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfFMotTbNgrV5QGOeLpmL8cPXl49_jbT7uL68I_gYucV0zT2gM6DuW-Zt_pg75HtTaqxLq_TacCmTPkVXwnhLBrFmSd22GdGobWBEu_J5NT9nAQyP6DTKVT6oTomx0SrzkQby-qZPgCr26CF8EvcEpD_PtHA9C9uDXeVv6xdQckwbxCW5HTKnKHWa4zeRlFuII775puNKQLyp9vevXFJmTMahlFC-AifGuwVyaXodxRqNXSuxTYSp_pfyXZVlbM5L4NCjKiwunRQk",
      type: "咨询",
      typeColor: "bg-[#5157a7]",
      tag2: "客资",
      time: "10分钟前",
      content: "请问广东道门店有香奈儿 CF Mini 黑牛皮现货吗？下周去香港旅游顺便去逛逛。",
      aiSuggestion: "Mandy您好👋！感谢您关注我们。目前广东道门店香奈儿 CF Mini 黑牛皮还有少量现货哦👜！由于该款式非常抢手🔥，建议您确定行程后提前与我们联系，我们可以为您预留24小时⏳。祝您香港之旅愉快✈️，期待您的光临✨！",
      buttonText: "跳转笔记回复",
      buttonColor: "bg-[#5157a7]",
      borderColor: "border-transparent"
    }
  ];

  const handleOpenReply = (comment: any) => {
    onRestrictedAction(() => {
      setCurrentComment(comment);
      setReplyText(comment.aiSuggestion);
      setReplyModalOpen(true);
    });
  };

  const handleCopyAndJump = () => {
    navigator.clipboard.writeText(replyText).then(() => {
      setToastMessage('已复制到剪贴板，正在跳转小红书...');
      setTimeout(() => {
        setToastMessage('');
        setReplyModalOpen(false);
      }, 2000);
    }).catch(() => {
      setToastMessage('跳转小红书...');
      setTimeout(() => {
        setToastMessage('');
        setReplyModalOpen(false);
      }, 2000);
    });
  };
  return (
    <div className="pt-20 px-5 space-y-8 pb-32">
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-5 h-16 bg-white/80 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#e3e9ec] flex items-center justify-center overflow-hidden">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDws9G4fSvH4t-6d61odxe4P8M52L2uV08F2x82X1BaAhwFCQ5QHCpPftM_B0aXSTcA8z79ofQxyquE8jyovb7YBi4bam_478kz5MjlUgBtJ0XPT3LocFcal3y4YFMIAdJ4S0lGKWQKTMDdLKuqil6b-jYVuisd9vT2v6UJOwz83rrCdE1A02fUiCtHxe8YqjrvH1Q2AAw6OO_9Nv6H4kdA5riaabfYd9emuM1Phg8kitsw8_Ud7xDup0bXFLoGCqbA6FzXVWv3L94" alt="Avatar" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-[#586064] font-medium">早安，精品店长</span>
            <h1 className="font-bold text-lg text-[#2b3437] leading-tight">商户管理</h1>
          </div>
        </div>
      </header>

      <section className="bg-[#e0e0ff] rounded-3xl p-6 relative overflow-hidden">
        <div className="relative z-10 space-y-1">
          <h2 className="text-[#444a99] text-2xl font-bold">今日工作台</h2>
          <p className="text-[#444a99] opacity-80 text-sm">您有 2 条高意向咨询和 1 条重点客诉待处理。</p>
        </div>
        <div className="absolute -right-4 -bottom-4 opacity-10 text-[#444a99]">
          <LayoutDashboard size={120} />
        </div>
      </section>

      <section>
        <div className="flex justify-between items-end mb-2.5">
          <h2 className="text-xl font-bold tracking-tight text-[#2b3437]">活动全局概览</h2>
          <span className="text-xs font-semibold text-[#4E54A4]">过去7天</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-white p-3 rounded-xl shadow-sm border border-[#abb3b7]/10">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-medium text-[#605e62]">总曝光</span>
              <Eye size={14} className="text-[#4E54A4]" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-extrabold tracking-tight">128.4k</span>
              <span className="text-[9px] font-bold text-green-600">+12.5%</span>
            </div>
          </div>
          <div className="bg-white p-3 rounded-xl shadow-sm border border-[#abb3b7]/10">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-medium text-[#605e62]">互动数</span>
              <Heart size={14} className="text-[#4E54A4] fill-current" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-extrabold tracking-tight">8,932</span>
              <span className="text-[9px] font-bold text-green-600">+5.2%</span>
            </div>
          </div>
          <div className="bg-white p-3 rounded-xl shadow-sm border border-[#abb3b7]/10">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-medium text-[#605e62]">分享数</span>
              <Share size={14} className="text-[#4E54A4]" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-extrabold tracking-tight">452</span>
              <span className="text-[9px] font-bold text-[#9e3f4e]">-1.8%</span>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex justify-between items-end">
          <h3 className="font-bold text-xl text-[#2b3437]">当前活动</h3>
          <span className="text-[#5157a7] text-sm font-semibold">查看全部</span>
        </div>
        <div className="flex overflow-x-auto gap-4 no-scrollbar pb-2">
          {/* Card 1: No Poster with Questionnaire */}
          <div onClick={() => onNavigate('activity_detail')} className="flex-shrink-0 w-36 bg-white rounded-xl overflow-hidden shadow-sm border border-[#abb3b7]/10 cursor-pointer active:scale-95 transition-transform flex flex-col">
            <div className="w-full aspect-[3/4] bg-gradient-to-br from-[#e0e0ff] to-[#f8f9fa] p-4 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute -right-4 -top-4 text-[#5157a7]/10">
                <Sparkles size={80} />
              </div>
              <div className="flex justify-end relative z-10">
                <span className="bg-[#5157a7] text-white text-[9px] px-1.5 py-0.5 rounded font-bold">含问卷</span>
              </div>
              <div className="relative z-10">
                <p className="text-[10px] text-[#5157a7] font-bold mb-1">SS24</p>
                <h4 className="font-extrabold text-lg text-[#2b3437] leading-tight">中环旗舰店<br/>春夏新品</h4>
              </div>
            </div>
            <div className="p-3">
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="text-[9px] text-[#586064]">曝光量</span>
                  <span className="font-bold text-[11px] text-[#2b3437]">12.4k</span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-[9px] text-[#586064]">互动</span>
                  <span className="font-bold text-[11px] text-[#5157a7]">856</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Poster */}
          <div onClick={() => onNavigate('activity_detail')} className="flex-shrink-0 w-36 bg-white rounded-xl overflow-hidden shadow-sm border border-[#abb3b7]/10 cursor-pointer active:scale-95 transition-transform flex flex-col">
            <div className="w-full aspect-[3/4] bg-cover bg-center relative" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuChr4RnXZ157z7oovwYW79i9Oarcfxhpae40ItMTFZeEHLcYWKQZ5r1ZYrZ0z4Oohn4VwiFge0_bpQCQvVUG__AVf1Q9QGF3caUB8aBZbARoESdBcGbHxw29uLBc-PHFJQ1lUSmp3SqgB8QxKeUeSwjWKspRbz57gcwzoy3F7b7PYgB-XuGmFRClix9M16Wh7EJUcUN16b47MqN8HCAF2T6Kgr84W0Z5vV4bceVY5J1QuRa8EGF5sA5qblA19sBFoa3S-GjOrmF-SE')"}}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-3 right-3">
                <h4 className="font-bold text-sm text-white leading-tight">稀有皮具展<br/>海港城</h4>
              </div>
            </div>
            <div className="p-3">
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="text-[9px] text-[#586064]">曝光量</span>
                  <span className="font-bold text-[11px] text-[#2b3437]">8.2k</span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-[9px] text-[#586064]">互动</span>
                  <span className="font-bold text-[11px] text-[#5157a7]">432</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Poster */}
          <div onClick={() => onNavigate('activity_detail')} className="flex-shrink-0 w-36 bg-white rounded-xl overflow-hidden shadow-sm border border-[#abb3b7]/10 cursor-pointer active:scale-95 transition-transform flex flex-col">
            <div className="w-full aspect-[3/4] bg-cover bg-center relative" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB5gvTU1OA36J0mqwjmAKkQjsMshXjKpD8a9J0mqN_Based157uQ4VeBPyG_sX4xDNp432yGocaFcLkmP3EmUo0LEhCVogD0aq-YnPlqv2hYcnim3L7FP-gt-AqcE1gVHGSmYlVPt8z4qjpiV3apoFzrObLkaGmWvoLWWhgOLGi-Sz71vE_6ItiyuRyyy0U7wJkKiH3tjB2CobtrIti4ZGdf62R0LcYAH7MMWUUPusLbcv_MLShTY2_66v8gc6dn5xHhXLLWg-uvEY')"}}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-3 right-3">
                <h4 className="font-bold text-sm text-white leading-tight">K11 Musea<br/>艺术展</h4>
              </div>
            </div>
            <div className="p-3">
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="text-[9px] text-[#586064]">曝光量</span>
                  <span className="font-bold text-[11px] text-[#2b3437]">5.6k</span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-[9px] text-[#586064]">互动</span>
                  <span className="font-bold text-[11px] text-[#5157a7]">218</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex justify-between items-end">
          <h3 className="font-bold text-xl text-[#2b3437]">重点评论回复</h3>
          <span className="text-[#9e3f4e] text-[10px] font-bold bg-[#9e3f4e]/10 px-2 py-1 rounded-full">AI 已优先负面及咨询</span>
        </div>
        <div className="space-y-4">
          {comments.map((comment) => (
            <div key={comment.id} className={`bg-white p-5 rounded-3xl shadow-sm space-y-4 border ${comment.borderColor}`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full overflow-hidden">
                    <img src={comment.avatar} className="w-full h-full object-cover" />
                  </div>
                  <span className="font-bold text-sm text-[#2b3437]">{comment.user}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`${comment.typeColor} text-white text-[10px] px-2 py-0.5 rounded font-bold`}>{comment.type}</span>
                  {comment.tag2 && <span className="bg-[#e0e0ff] text-[#5157a7] text-[10px] px-2 py-0.5 rounded font-bold">{comment.tag2}</span>}
                  <span className="text-[10px] text-[#586064]">{comment.time}</span>
                </div>
              </div>
              <div className="bg-[#f1f4f6] p-4 rounded-2xl">
                <p className="text-sm leading-relaxed text-[#2b3437]">“{comment.content}”</p>
              </div>
              <button 
                onClick={() => handleOpenReply(comment)}
                className={`w-full py-3 ${comment.buttonColor} text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.98] transition-all`}
              >
                <MessageCircle size={16} />
                {comment.buttonText}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Reply Modal */}
      {replyModalOpen && currentComment && (
        <div className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white w-full sm:w-[400px] rounded-t-3xl sm:rounded-3xl p-6 shadow-2xl transform transition-all animate-in slide-in-from-bottom-8 sm:slide-in-from-bottom-0 sm:zoom-in-95">
            <div className="flex justify-between items-center mb-5">
              <h3 className="font-bold text-lg text-[#2b3437]">回复评论</h3>
              <button 
                onClick={() => setReplyModalOpen(false)}
                className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 active:scale-95 transition-transform"
              >
                <X size={18} />
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="bg-[#f8f9fa] p-4 rounded-2xl border border-gray-100">
                <div className="flex items-center gap-2 mb-2">
                  <img src={currentComment.avatar} className="w-5 h-5 rounded-full object-cover" />
                  <span className="text-xs font-bold text-[#586064]">{currentComment.user}</span>
                </div>
                <p className="text-sm text-[#2b3437] leading-relaxed">“{currentComment.content}”</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[#5157a7]">
                    <Sparkles size={14} />
                    <span className="text-xs font-bold">AI 参考回复 (可编辑)</span>
                  </div>
                </div>
                <textarea 
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  className="w-full h-32 bg-white border border-gray-200 rounded-2xl p-4 text-sm text-[#2b3437] focus:outline-none focus:border-[#5157a7] focus:ring-1 focus:ring-[#5157a7] resize-none leading-relaxed"
                  placeholder="输入回复内容..."
                />
              </div>

              <button 
                onClick={handleCopyAndJump}
                className="w-full py-3.5 bg-[#5157a7] text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.98] transition-all shadow-lg shadow-[#5157a7]/20"
              >
                <Copy size={16} />
                确认复制并跳转小红书
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[70] bg-black/80 text-white px-6 py-3 rounded-full text-sm font-medium shadow-xl flex items-center gap-2 animate-in fade-in slide-in-from-top-4">
          <CheckCircle2 size={16} className="text-green-400" />
          {toastMessage}
        </div>
      )}
    </div>
  );
}
