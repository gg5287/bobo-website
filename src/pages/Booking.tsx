import React from 'react';
import { Heart, AlertTriangle, CheckCircle } from 'lucide-react';

const Booking: React.FC = () => {
  return (
    <div className="p-6 md:p-10 animate-fade-in">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-purple-100 pb-4">
        如何約到優質紅牌？
      </h2>
      <p className="text-lg text-gray-600 mb-8 leading-relaxed">
        好的幹部會帶領你挑選到條件優質的美容師，那到底該怎麼做呢？讓波波細細跟你說明。
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-purple-700 mb-3 flex items-center gap-2">
                <span className="bg-purple-100 p-1 rounded">💡</span> 預約與現場選妃
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
                消費的方式有分為現場選妃及推薦預約。如果你真的想約到紅牌美容師，建議還是<strong>提早跟幹部預約</strong>，因為紅牌不會擺著幹部都不去推薦客人。
            </p>
            <div className="bg-red-50 border-l-4 border-red-400 p-3 rounded">
                <p className="text-sm text-red-700">
                    <strong>重要提醒：</strong>預約是無法到現場看了之後再打槍。請確認好時段後再預約，多次修改或是取消時段，這都是大忌。
                </p>
            </div>
        </section>

        <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-blue-700 mb-3 flex items-center gap-2">
                <span className="bg-blue-100 p-1 rounded">🤝</span> 信任幹部是王道
            </h3>
            <p className="text-gray-600 leading-relaxed">
                通常問完推薦後，幹部會依照你可以預約的時段挑選最優質的紅牌 2-3 張照片。要贏得幹部的心，最好就是完全的相信幹部，<strong>「給你推薦就好」</strong>這種是幹部最喜歡的客人。
            </p>
        </section>
      </div>

      <section className="bg-orange-50 p-6 rounded-xl border border-orange-100 mb-8">
        <h3 className="text-xl font-bold text-orange-800 mb-3 flex items-center gap-2">
            <AlertTriangle className="text-orange-500"/> 避免一直詢問「還有嗎？」
        </h3>
        <p className="text-gray-700 leading-relaxed">
            如果推完之後一直詢問 "還有嗎？"，幹部心理會想：一開始給你紅牌你不要，約到不好的才來怪我。下次你再出現，他也不會認真推薦。
        </p>
      </section>

      <section className="bg-gradient-to-r from-pink-50 to-purple-50 p-8 rounded-xl border border-pink-100 mb-10 text-center">
        <h3 className="text-2xl font-bold text-pink-700 mb-4 flex items-center justify-center gap-2">
            <Heart className="fill-pink-500 text-pink-500" /> 勇敢說出你的需求
        </h3>
        <p className="text-gray-700 max-w-2xl mx-auto mb-4">
            你可以在預約時明確讓他知道你喜歡甚麼類型，例如：
        </p>
        <div className="flex flex-wrap justify-center gap-2">
            {['高顏值', '年輕', '高挑', '長腿', '小隻馬', '微肉', '骨感', '大奶', '小奶', '皮膚白', '尺度大', '服務好', '女友感'].map(tag => (
                <span key={tag} className="bg-white text-pink-600 px-3 py-1 rounded-full text-sm shadow-sm border border-pink-100 font-medium">
                    #{tag}
                </span>
            ))}
        </div>
      </section>

      <section className="bg-gray-800 text-white p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <CheckCircle className="text-green-400" /> 波波整理重點
        </h3>
        <ol className="space-y-3 list-decimal list-inside text-gray-300">
            <li className="pl-2">提早預約 (紅牌不會擺到最後一刻還空著等你，請提早1-2個小時或幾天預約)。</li>
            <li className="pl-2">相信幹部，建立良好默契。</li>
            <li className="pl-2">請確認好時段後再預約，多次修改或是取消時段，這都是大忌。</li>
        </ol>
      </section>
    </div>
  );
};

export default Booking;
