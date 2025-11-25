import React from 'react';
import { HelpCircle, DollarSign, Target, X } from 'lucide-react';

const Faq: React.FC = () => {
  const faqs = [
    {
      icon: <HelpCircle className="text-purple-500" size={24} />,
      question: "舒壓會館的服務流程有哪些？",
      answer: "不管你是現場挑還是預約，通常你付費用後幹部就會將你帶進包廂，你可以先簡單盥洗。美容師進來後會先開始簡單的按摩，接下來10-15分鐘後妹妹會先幫你前戲輕功，再來就是轉身重點。如果想要加值的朋友可以提前詢問，甚至想要省略前戲直接加值也可以在一開始就進行詢問。結束前10分鐘電話會響起，可以收尾準備離開。"
    },
    {
      icon: <DollarSign className="text-green-500" size={24} />,
      question: "預約舒壓會館如何付費？",
      answer: "基本服務美容師檯費的部分，可以接受現金或刷卡，刷卡的話需要+300額外費用。額外加值的部分則由美容師收取，這個部分只有現金交易無法刷卡。建議消費前身上先準備足夠的現金。"
    },
    {
      icon: <Target className="text-blue-500" size={24} />,
      question: "如何挑選到符合我的美容師？",
      answer: "如果你有重視的部分，例如顏值、身材、配合度、尺度、年紀、皮膚等等，都可以先跟波波溝通，我會在你能夠預約的時間範圍你推薦合適你的美容師。請注意詢問時盡量提供你可以預約的時間。"
    },
    {
      icon: <X className="text-red-500" size={24} />,
      question: "萬一預約後臨時有事需要取消該怎麼做？",
      answer: "請主動提早通知幹部，最少在前1-2個小時就通知，好讓幹部有時間把這一班賣給其他的客人。如果取消太多次或是臨時放鳥，可能會損失你之後預約的權益唷～"
    }
  ];

  return (
    <div className="p-6 md:p-10 animate-fade-in">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b-2 border-purple-100 pb-4">
        常見問題 Q&A
      </h2>
      
      <div className="space-y-6">
        {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="flex items-start gap-4">
                    <div className="bg-gray-50 p-2 rounded-lg flex-shrink-0">
                        {faq.icon}
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-2">
                            {faq.question}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                        </p>
                    </div>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;