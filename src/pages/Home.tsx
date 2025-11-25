import React, { useState } from 'react';
import { useSchedule } from '../hooks/useSchedule';
import { Clock, Search, User, DollarSign, Calendar } from 'lucide-react';

const Home: React.FC = () => {
  const { todayGirls, currentDayStr, allStaff, filterText, setFilterText } = useSchedule();
  const [activeTab, setActiveTab] = useState<'today' | 'all'>('today');

  return (
    <div className="p-4 md:p-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          ✨ 您的專屬舒壓時光 ✨
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
          深耕林森北路十餘年，專業幹部為您嚴格把關每一位美容師的品質與服務。輕鬆消費，享受頂級的私密舒壓體驗！
        </p>
      </div>

      {/* Tab Switching */}
      <div className="flex justify-center mb-8">
        <div className="bg-gray-100 p-1 rounded-xl inline-flex shadow-inner">
          <button
            onClick={() => setActiveTab('today')}
            className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
              activeTab === 'today'
                ? 'bg-white text-purple-700 shadow-sm transform scale-105'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            今日班表 ({currentDayStr})
          </button>
          <button
            onClick={() => setActiveTab('all')}
            className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
              activeTab === 'all'
                ? 'bg-white text-purple-700 shadow-sm transform scale-105'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            全部名單
          </button>
        </div>
      </div>

      {/* Filter (Only for All view) */}
      {activeTab === 'all' && (
        <div className="mb-6 max-w-md mx-auto relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input 
            type="text" 
            placeholder="搜尋美容師名稱..." 
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
          />
        </div>
      )}

      {/* Staff Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {(activeTab === 'today' ? todayGirls : allStaff).map((girl, index) => (
          <div 
            key={`${girl.name}-${index}`} 
            className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden transform hover:-translate-y-1"
          >
            <div className="h-2 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:h-3 transition-all"></div>
            <div className="p-5">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-2">
                   <div className="bg-purple-100 p-2 rounded-full text-purple-600">
                     <User size={20} />
                   </div>
                   <h3 className="text-xl font-bold text-gray-800">{girl.name}</h3>
                </div>
                {girl.price ? (
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                    <DollarSign size={14} />{girl.price}
                  </span>
                ) : (
                  <span className="bg-gray-100 text-gray-500 px-3 py-1 rounded-full text-sm font-bold">洽詢</span>
                )}
              </div>
              
              <div className="space-y-2">
                <h4 className="text-xs uppercase tracking-wider text-gray-400 font-semibold flex items-center gap-1">
                  <Calendar size={12} /> 值班時間
                </h4>
                {activeTab === 'today' ? (
                   <div className="flex items-center gap-2 text-purple-700 font-medium bg-purple-50 p-2 rounded-lg">
                      <Clock size={16} />
                      <span>今天: {girl.schedule[currentDayStr]}</span>
                   </div>
                ) : (
                  <ul className="text-sm text-gray-600 space-y-1 max-h-32 overflow-y-auto scrollbar-thin">
                    {Object.entries(girl.schedule).map(([day, time]) => (
                      <li key={day} className="flex justify-between border-b border-dashed border-gray-100 pb-1">
                        <span className="font-medium text-gray-500">{day}</span>
                        <span className="text-gray-800">{time}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            {activeTab === 'today' && (
              <div className="bg-gray-50 px-5 py-3 border-t border-gray-100 flex justify-end">
                <button className="text-sm font-medium text-purple-600 hover:text-purple-800 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  立即預約 &rarr;
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {activeTab === 'today' && todayGirls.length === 0 && (
        <div className="text-center py-16 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
          <p className="text-gray-500 text-lg">今日目前尚無排班資料，請查看「全部名單」或直接聯繫幹部。</p>
        </div>
      )}
    </div>
  );
};

export default Home;