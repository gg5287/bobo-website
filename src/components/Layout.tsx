import React, { useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { CONTACT_INFO } from '../constants';
import { Menu, X, MessageCircle, Send, Share2, Check } from 'lucide-react';

const Layout: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showCopyFeedback, setShowCopyFeedback] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setShowCopyFeedback(true);
      setTimeout(() => setShowCopyFeedback(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const navLinks = [
    { name: '首頁', path: '/' },
    { name: '常見問題', path: '/faq' },
    { name: '如何約到紅牌', path: '/booking' },
    { name: '為何選擇我們', path: '/about' },
    { name: '預約/接待', path: '/contact' },
  ];

  // Determine background based on path to match the original vibe but modernized
  let bgClass = "bg-gray-100";
  if (location.pathname === '/') bgClass = "bg-[url('https://picsum.photos/1920/1080?grayscale&blur=2')] bg-cover bg-fixed";
  else if (location.pathname === '/booking') bgClass = "bg-[url('https://picsum.photos/id/48/1920/1080?blur=4')] bg-cover bg-fixed";
  else if (location.pathname === '/contact') bgClass = "bg-[url('https://picsum.photos/id/20/1920/1080?blur=4')] bg-cover bg-fixed";

  return (
    <div className={`min-h-screen flex flex-col ${bgClass}`}>
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md text-white shadow-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <NavLink to="/" className="flex-shrink-0 flex items-center gap-2 group" onClick={closeMenu}>
                 {/* Replaced local image with placeholder icon style */}
                 <div className="w-10 h-10 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-full flex items-center justify-center font-bold text-xl shadow-inner group-hover:scale-105 transition-transform">
                   波
                 </div>
                 <div className="flex flex-col">
                    <span className="font-bold text-lg leading-tight tracking-wide">波波會館</span>
                    <span className="text-[10px] text-gray-400">台北中山林森五木</span>
                 </div>
              </NavLink>
            </div>
            
            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-purple-600 text-white shadow-md'
                        : 'text-gray-300 hover:bg-white/10 hover:text-white'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              
              {/* Share Button (Desktop) */}
              <button 
                onClick={handleShare}
                className="ml-4 p-2 rounded-full hover:bg-white/10 text-gray-300 hover:text-white transition-colors relative group"
                title="複製此頁連結"
              >
                {showCopyFeedback ? <Check size={20} className="text-green-400" /> : <Share2 size={20} />}
                {showCopyFeedback && (
                  <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-black text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap">
                    已複製連結
                  </span>
                )}
              </button>
            </nav>

            {/* Mobile Actions */}
            <div className="md:hidden flex items-center gap-2">
              <button 
                onClick={handleShare}
                className="p-2 text-gray-300 hover:text-white focus:outline-none active:scale-95 transition-transform"
              >
                 {showCopyFeedback ? <Check size={24} className="text-green-400" /> : <Share2 size={24} />}
              </button>
              <button
                onClick={toggleMenu}
                className="text-gray-300 hover:text-white focus:outline-none p-2"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-gray-800 animate-fadeIn">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block px-3 py-3 rounded-md text-base font-medium text-center ${
                      isActive
                        ? 'bg-purple-900/50 text-white border-l-4 border-purple-500'
                        : 'text-gray-300 hover:bg-white/10 hover:text-white'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow w-full max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 animate-fade-in-up">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden min-h-[500px] border border-white/50">
           <Outlet />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-10 pb-24 md:pb-10 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-xl font-bold mb-4 text-purple-400">波波舒壓會館</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                深耕林森北路10多年，專業舒壓幹部，致力於滿足消費者需求，獨特的店家文化，親自現場接待。
              </p>
            </div>
            
            <div className="flex flex-col items-center md:items-start space-y-3">
              <h4 className="text-lg font-semibold text-gray-200">聯絡資訊</h4>
              <a href={CONTACT_INFO.lineUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-400 hover:text-[#00C300] transition-colors">
                <MessageCircle size={18} />
                <span>Line: {CONTACT_INFO.line}</span>
              </a>
              <a href={CONTACT_INFO.telegramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-400 hover:text-[#2AABEE] transition-colors">
                <Send size={18} />
                <span>TG: {CONTACT_INFO.telegram}</span>
              </a>
            </div>

            <div className="flex flex-col items-center md:items-start">
               <h4 className="text-lg font-semibold text-gray-200 mb-3">看妹頻道</h4>
               <a href={CONTACT_INFO.telegramChannelUrl} target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm transition-colors shadow-lg flex items-center gap-2">
                 <Send size={16} />
                 Telegram 班表頻道
               </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-xs">
            &copy; 2025 波波舒壓會館. 專業舒壓幹部為您把關。
          </div>
        </div>
      </footer>

      {/* Sticky Mobile CTA Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50 flex justify-around p-2 pb-safe">
          <a href={CONTACT_INFO.lineUrl} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-[#00C300] text-white py-3 mx-1 rounded-lg font-bold shadow-sm active:scale-95 transition-transform">
            <MessageCircle className="fill-current" />
            LINE 預約
          </a>
          <a href={CONTACT_INFO.telegramUrl} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-[#2AABEE] text-white py-3 mx-1 rounded-lg font-bold shadow-sm active:scale-95 transition-transform">
            <Send className="fill-current" />
            TG 預約
          </a>
      </div>
    </div>
  );
};

export default Layout;