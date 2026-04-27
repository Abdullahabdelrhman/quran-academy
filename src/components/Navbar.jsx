import { useState, useEffect } from 'react';
import { LogIn, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // مراقبة السكرول لتغيير شكل النافبار
  useEffect(() => {
    const handleScroll = () => {
      // لو نزل أكتر من 50 بيكسل يقلب أخضر غامق
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // دالة الانتقال السلس للأقسام
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false); // إغلاق القائمة في الموبايل بعد الضغط
    }
  };

  const navLinks = [
    { name: 'الرئيسية', id: 'hero' },
    { name: 'عن الأكاديمية', id: 'about' },
    { name: 'المعلمون', id: 'teachers' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
      isScrolled 
        ? 'bg-emerald-900 shadow-2xl py-3 border-b border-emerald-800/50 backdrop-blur-md' 
        : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* اللوجو التفاعلي */}
        <div 
          onClick={() => scrollToSection('hero')}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-black text-xl transition-all duration-500 shadow-lg ${
            isScrolled ? 'bg-white text-emerald-900 rotate-0' : 'bg-emerald-600 text-white group-hover:rotate-12'
          }`}>
            ن
          </div>
          <h1 className="text-2xl font-black text-white tracking-tight">أكاديمية <span className="text-emerald-400">النور</span></h1>
        </div>

        {/* روابط التنقل - Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button 
              key={link.id} 
              onClick={() => scrollToSection(link.id)}
              className="text-white/90 hover:text-emerald-400 font-bold transition-all relative group cursor-pointer text-lg"
            >
              {link.name}
              <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-emerald-400 transition-all group-hover:w-full"></span>
            </button>
          ))}
        </div>

        {/* أزرار الإجراءات */}
        <div className="flex items-center gap-4">
          <button className={`hidden md:flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold transition-all active:scale-95 shadow-xl ${
            isScrolled 
              ? 'bg-white text-emerald-900 hover:bg-emerald-50 shadow-white/10' 
              : 'bg-emerald-600 text-white hover:bg-emerald-500 shadow-emerald-900/40'
          }`}>
            <LogIn size={20} />
            تسجيل الدخول
          </button>
          
          {/* زر الموبايل التفاعلي */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-all"
          >
            {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* قائمة الموبايل (تظهر عند السحب أو الضغط) */}
      <div className={`absolute top-full left-0 w-full bg-emerald-950/95 backdrop-blur-xl border-t border-emerald-800 transition-all duration-300 overflow-hidden md:hidden ${
        isMobileMenuOpen ? 'max-h-96 py-8 shadow-2xl opacity-100' : 'max-h-0 py-0 opacity-0'
      }`}>
        <div className="flex flex-col items-center gap-6">
          {navLinks.map((link) => (
            <button 
              key={link.id} 
              onClick={() => scrollToSection(link.id)}
              className="text-white text-xl font-bold hover:text-emerald-400 transition-colors"
            >
              {link.name}
            </button>
          ))}
          <button className="bg-emerald-600 text-white px-10 py-3 rounded-xl font-black w-[80%] shadow-lg active:scale-95 transition-transform">
            دخول الأكاديمية
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;