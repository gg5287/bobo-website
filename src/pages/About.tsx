import React from 'react';
import { ShieldCheck, XCircle, ThumbsUp } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="p-6 md:p-10 animate-fade-in">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-blue-100 pb-4">
        為何要選擇舒壓會館？
      </h2>
      <p className="text-lg text-gray-600 mb-10">
        八大行業的消費模式有很多種，例如酒店、定點、外送等等。為何要選擇舒壓會館？讓波波告訴你真實的內幕。
      </p>

      <div className="space-y-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-500">
            <h3 className="text-xl font-bold text-red-600 mb-3 flex items-center gap-2">
                <XCircle /> 酒店的缺點
            </h3>
            <p className="text-gray-600">
                酒店雖然小姐多，但<strong>消費金額極高</strong>，耗費時間也多。若有加值需求動輒兩三萬起跳，且回家滿身酒味香水味，容易造成家庭不和諧。
            </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-orange-400">
            <h3 className="text-xl font-bold text-orange-600 mb-3 flex items-center gap-2">
                <XCircle /> 定點的隱憂
            </h3>
            <p className="text-gray-600">
                定點CP值雖高，但往往<strong>語言不通</strong>、只能比手畫腳。如果是需要情緒價值的，可能要慎重考慮。
            </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-yellow-500">
            <h3 className="text-xl font-bold text-yellow-700 mb-3 flex items-center gap-2">
                <XCircle /> 外送茶的風險
            </h3>
            <p className="text-gray-600">
                層層剝削導致素質參差不齊。萬一遇到照騙，或是付錢脫衣後才發現滿身痘疤，這時候不僅掃興還難以退費。
            </p>
        </div>

        <div className="mt-12 bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100 shadow-md">
            <div className="flex items-center gap-3 mb-6">
                <div className="bg-green-100 p-3 rounded-full">
                    <ShieldCheck className="text-green-600 w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-green-800">波波推薦舒壓會館的原因</h3>
            </div>
            
            <ul className="grid gap-4 md:grid-cols-1">
                {[
                    "在同一時間地點可以挑選到多位美容師，避免浪費你寶貴的時間。",
                    "提前預約還可以保留條件優質的紅牌。",
                    "不想額外付房費的也可以店內消費，省下來的錢可以玩更多次。",
                    "小姐一個小時即可外出，方便現代人工作忙碌的你。",
                    "玩法多樣性，並且都有公定價可詢問，不用擔心被剝皮或凹加價。"
                ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700 bg-white/60 p-3 rounded-lg">
                        <ThumbsUp className="text-green-500 mt-1 flex-shrink-0" size={18} />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
            <div className="mt-8 text-center font-bold text-xl text-green-700">
                <p>你擔心的，波波替你把關！！</p>
                <p className="mt-2">開心出遊，快樂返家！！</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;