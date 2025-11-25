import React from 'react';
import { MapPin, UserCheck } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="p-6 md:p-10 animate-fade-in">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-indigo-100 pb-4">
        預約指定美容師 & 現場接待流程
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4 text-indigo-600">
                <UserCheck size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
                預約指定美容師
            </h3>
            <p className="text-gray-600 mb-4">
                舒壓會館選妹方式有兩種：<strong>現場選妃</strong>以及<strong>預約指定美容師</strong>。
            </p>
            <ul className="space-y-3">
                <li className="flex gap-3 text-gray-700 bg-gray-50 p-3 rounded-lg">
                    <span className="font-bold text-indigo-500">第一次來</span>
                    建議把需求給我，讓我幫你推薦符合你的妹妹。
                </li>
                <li className="flex gap-3 text-gray-700 bg-gray-50 p-3 rounded-lg">
                    <span className="font-bold text-indigo-500">看現場</span>
                    建議平日下午來，這樣妹妹選擇最多唷。
                </li>
            </ul>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
             <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4 text-pink-600">
                <MapPin size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
                現場接待
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
                抵達後<strong>波波會在現場接待你</strong>，這點跟坊間的同業不同。我會認真的傾聽你的需求，而不是把你丟給店家行政之後就置之不理。
            </p>
            <div className="bg-pink-50 p-4 rounded-lg text-sm text-pink-800 border border-pink-100">
                <p>
                    現場挑選的朋友，如果當下美容師真的很少或是沒有你喜歡的請<strong>勇敢拒絕，我們絕對不會強迫消費</strong>，我希望的是您的消費每次都是滿意的。
                </p>
            </div>
        </div>
      </div>
      
      <div className="mt-10 bg-gray-900 text-white p-8 rounded-2xl shadow-xl text-center">
         <h3 className="text-2xl font-bold mb-6">準備好放鬆了嗎？</h3>
         <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
                href="https://line.me/ti/p/~jokey98" 
                target="_blank" 
                rel="noreferrer"
                className="bg-[#00C300] hover:bg-[#00b300] text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform hover:scale-105 flex items-center justify-center gap-2"
            >
                LINE 預約
            </a>
            <a 
                href="https://t.me/jokey998" 
                target="_blank" 
                rel="noreferrer"
                className="bg-[#2AABEE] hover:bg-[#229ad6] text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform hover:scale-105 flex items-center justify-center gap-2"
            >
                Telegram 預約
            </a>
         </div>
      </div>
    </div>
  );
};

export default Contact;
