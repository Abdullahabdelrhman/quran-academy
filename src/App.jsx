import { useState, useEffect } from 'react';
import { X, CheckCircle, ChevronDown, MessageCircle, Star, ShieldCheck } from 'lucide-react';
import Navbar from './components/Navbar';

function App() {
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // مراقبة السكرول لتحديث حالة النافبار
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const teachers = [
    { id: 1, name: "الشيخ أحمد محمد", bio: "إجازة في القراءات العشر - متخصص في تحبيب القرآن للأطفال", price: 50, rating: 5 },
    { id: 2, name: "المعلمة سارة علي", bio: "خبيرة القاعدة النورانية والتجويد بأساليب اللعب والترفيه", price: 45, rating: 5 },
    { id: 3, name: "الشيخ محمود حسن", bio: "خبرة 10 سنوات في التحفيظ أونلاين وبناء جيل حافظ ومثقف", price: 60, rating: 4.9 }
  ];

  const handleSelect = (teacher) => {
    setSelectedTeacher(teacher);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-['Cairo']" dir="rtl">
      
      {/* النافبار التفاعلي */}
      <Navbar scrolled={scrolled} />

      {/* 1. قسم البانر (Hero) */}
      <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-emerald-950/50 z-10"></div>
        
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover scale-105">
          <source src="/video.mp4" type="video/mp4" />
        </video>

        <div className="relative z-20 text-center px-4 animate-in fade-in slide-in-from-bottom-12 duration-1000">
          <div className="inline-block px-6 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-emerald-300 mb-6 tracking-widest text-sm md:text-base animate-pulse">
            نورٌ على نور.. ابدأ رحلة طفلك الإيمانية
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black text-white mb-6 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
            أكاديمية <span className="text-emerald-400">النور</span> العالمية
          </h1>
          
          <p className="text-xl md:text-3xl text-emerald-50/90 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
            بيئة تعليمية <span className="text-white font-bold underline decoration-emerald-500 underline-offset-8">خيالية</span> تدمج بين وقار المصحف ومتعة التكنولوجيا الحديثة.
          </p>
          
          <button 
            onClick={() => document.getElementById('teachers').scrollIntoView({ behavior: 'smooth' })}
            className="group relative bg-emerald-600 hover:bg-emerald-500 text-white px-12 py-5 rounded-2xl text-2xl font-black transition-all shadow-[0_20px_50px_rgba(5,150,105,0.4)] hover:-translate-y-1 active:scale-95"
          >
            ابدأ الرحلة الآن
          </button>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce cursor-pointer" onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
          <ChevronDown className="text-white/50" size={45} />
        </div>
      </section>

      {/* 2. قسم الآية الكريمة (نبذة) */}
      <section id="about" className="relative py-32 bg-white overflow-hidden">
        <div className="absolute -right-20 top-0 text-emerald-50/30 text-[20rem] font-serif select-none">۞</div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-emerald-900 leading-snug mb-8">
              "وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا"
            </h2>
            <div className="flex items-center justify-center gap-4 text-emerald-600">
              <div className="h-[2px] w-12 bg-emerald-200"></div>
              <p className="text-xl font-serif">سورة المزمل - الآية 4</p>
              <div className="h-[2px] w-12 bg-emerald-200"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. قسم المعلمين */}
      <main id="teachers" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
                <h3 className="text-5xl font-black text-slate-900 mb-4 tracking-tight">نخبة <span className="text-emerald-600">المعلمين</span></h3>
                <p className="text-slate-500 text-xl">اختر المعلم الذي سيرافق طفلك في رحلة الحفظ والإتقان</p>
            </div>
            <div className="bg-emerald-100/50 px-6 py-3 rounded-2xl border border-emerald-200 flex items-center gap-3">
                <ShieldCheck className="text-emerald-600" />
                <span className="font-bold text-emerald-900 text-lg">معلمون معتمدون ومجازون</span>
            </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {teachers.map((t) => (
                <div key={t.id} className="group relative bg-white border border-slate-100 rounded-[3rem] p-8 transition-all duration-500 hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] hover:-translate-y-3">
                <div className="relative z-10">
                    <div className="w-24 h-24 bg-emerald-50 rounded-3xl mb-6 flex items-center justify-center text-4xl group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-500 shadow-inner">👤</div>
                    <div className="flex items-center gap-1 text-amber-400 mb-2">
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                    <span className="text-slate-400 text-sm mr-2">{t.rating}</span>
                    </div>
                    <h4 className="text-2xl font-bold text-slate-900 mb-3">{t.name}</h4>
                    <p className="text-slate-500 mb-8 leading-relaxed h-[72px] overflow-hidden text-ellipsis">{t.bio}</p>
                    
                    <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                    <div>
                        <span className="text-slate-400 text-sm block">الاستثمار للحصة</span>
                        <span className="text-3xl font-black text-emerald-700">{t.price} ج.م</span>
                    </div>
                    <button onClick={() => handleSelect(t)} className="bg-emerald-600 text-white p-4 rounded-2xl hover:bg-emerald-900 transition-all shadow-lg shadow-emerald-100">
                        <MessageCircle size={24} />
                    </button>
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>
      </main>

      {/* المودال الاحترافي */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 backdrop-blur-md">
          <div className="absolute inset-0 bg-emerald-950/60 animate-in fade-in" onClick={() => setIsModalOpen(false)}></div>
          <div className="bg-white rounded-[3.5rem] p-12 max-w-lg w-full relative z-[210] shadow-2xl animate-in zoom-in duration-300 border border-emerald-100">
            <button onClick={() => setIsModalOpen(false)} className="absolute left-8 top-8 p-2 hover:bg-slate-100 rounded-full transition-colors"><X /></button>
            <div className="text-center mb-10">
                <h3 className="text-3xl font-black text-emerald-900 mb-2">انضم إلينا الآن</h3>
                <p className="text-slate-500 font-bold">حجز حصة تجريبية مع: <span className="text-emerald-600 underline">{selectedTeacher?.name}</span></p>
            </div>
            
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('تم استلام طلبك بنجاح! سيتواصل معك المبرمج عبدالله زكي لتأكيد الحجز.'); setIsModalOpen(false); }}>
              <div className="space-y-2">
                <label className="font-bold text-slate-700 block px-2">اسم البطل الصغير</label>
                <input type="text" required className="w-full bg-slate-50 border-2 border-slate-100 rounded-3xl px-6 py-4 focus:border-emerald-500 focus:bg-white transition-all outline-none" placeholder="اكتب اسم طفلك هنا" />
              </div>
              <div className="space-y-2">
                <label className="font-bold text-slate-700 block px-2">رقم ولي الأمر (واتساب)</label>
                <input type="tel" required className="w-full bg-slate-50 border-2 border-slate-100 rounded-3xl px-6 py-4 focus:border-emerald-500 focus:bg-white transition-all outline-none" placeholder="01xxxxxxxxx" />
              </div>
              <button type="submit" className="w-full bg-emerald-600 text-white py-5 rounded-[2.5rem] font-black text-xl shadow-xl shadow-emerald-200 hover:bg-emerald-700 transition-all transform hover:scale-[1.02] active:scale-95">
                تأكيد ومتابعة عبر واتساب
              </button>
            </form>
          </div>
        </div>
      )}

      {/* الفوتر */}
     <footer className="bg-emerald-950 text-white pt-16 pb-8 relative overflow-hidden">
  {/* خط علوي نحيف جداً */}
  <div className="absolute top-0 left-0 w-full h-[1px] bg-emerald-500/30"></div>

  <div className="container mx-auto px-6 relative z-10">
    <div className="flex flex-col items-center text-center">
      
      {/* آية قرآنية مختصرة ومركزة */}
      <div className="mb-10 space-y-2">
        <h3 className="text-xl md:text-2xl font-medium text-emerald-100 italic">
          "وَإِنَّا لَهُ لَحَافِظُونَ"
        </h3>
        <p className="text-emerald-500/50 text-[10px] tracking-widest uppercase">سورة الحجر - الآية 9</p>
      </div>

      {/* اسم الأكاديمية والروابط بشكل أفقي بسيط */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-4xl border-y border-white/5 py-8 mb-10 gap-6">
        <div className="text-right">
          <h4 className="text-xl font-black italic text-white">
            أكاديمية <span className="text-emerald-400">النور</span>
          </h4>
        </div>
        
        <div className="flex gap-8 text-sm font-bold text-emerald-100/40">
          <button onClick={() => document.getElementById('hero').scrollIntoView({ behavior: 'smooth' })} className="hover:text-emerald-400 transition-colors">الرئيسية</button>
          <button onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })} className="hover:text-emerald-400 transition-colors">عن الأكاديمية</button>
          <button onClick={() => document.getElementById('teachers').scrollIntoView({ behavior: 'smooth' })} className="hover:text-emerald-400 transition-colors">المعلمون</button>
        </div>
      </div>

      {/* بصمة المبرمج عبدالله زكي - نسخة مصغرة وأنيقة */}
      <div className="flex flex-col items-center space-y-4">
        <div className="text-center">
          <p className="text-[9px] text-emerald-500/60 font-bold tracking-[0.4em] uppercase mb-1">Developed By</p>
          <h5 className="text-2xl font-black tracking-tight text-white">
            عبدالله عبدالرحمن زكي
          </h5>
        </div>

        <a 
          href="https://wa.me/201098958697" 
          target="_blank" 
          rel="noreferrer" 
          className="group flex items-center gap-3 bg-white/5 px-6 py-3 rounded-2xl hover:bg-emerald-600/20 transition-all border border-white/10 active:scale-95"
        >
          <span className="text-sm font-mono tracking-wider text-emerald-400 group-hover:text-white transition-colors">01098958697</span>
          <MessageCircle size={18} className="text-emerald-500 group-hover:text-white transition-colors" />
        </a>

        {/* سطر الحقوق النهائي */}
        <div className="pt-6 text-white/10 text-[9px] font-bold tracking-widest uppercase flex gap-4">
          <span>© {new Date().getFullYear()}</span>
          <span>•</span>
          <span>AL-SHOROUK CITY</span>
        </div>
      </div>
    </div>
  </div>
</footer>
    </div>
  );
}

export default App;