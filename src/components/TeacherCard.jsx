import { Star, MessageCircle, BadgeCheck } from 'lucide-react';

const TeacherCard = ({ name, bio, price, rating = 5, onSelect }) => (
  <div className="group relative bg-white border border-slate-100 rounded-[2.5rem] p-8 transition-all duration-500 hover:shadow-[0_40px_80px_rgba(5,150,105,0.1)] hover:-translate-y-3 overflow-hidden">
    
    {/* خلفية جمالية تظهر عند التمرير بالماوس */}
    <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full -z-0 transition-all group-hover:bg-emerald-600 opacity-20 group-hover:opacity-10"></div>
    
    <div className="relative z-10">
      {/* الصورة الشخصية أو الأيقونة مع تأثير النبض */}
      <div className="relative w-24 h-24 mx-auto mb-6">
        <div className="absolute inset-0 bg-emerald-100 rounded-3xl rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
        <div className="relative w-full h-full bg-emerald-50 rounded-2xl flex items-center justify-center text-4xl shadow-inner group-hover:scale-105 transition-transform duration-500 border border-emerald-100">
          👤
        </div>
        {/* شارة التحقق (Verified) */}
        <div className="absolute -bottom-2 -left-2 bg-white rounded-full p-1 shadow-md">
          <BadgeCheck className="text-emerald-600" size={20} />
        </div>
      </div>

      {/* التقييم */}
      <div className="flex items-center justify-center gap-1 text-amber-400 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={16} 
            fill={i < Math.floor(rating) ? "currentColor" : "none"} 
            className={i < Math.floor(rating) ? "" : "text-slate-200"}
          />
        ))}
        <span className="text-slate-400 text-xs font-bold mr-1">{rating}</span>
      </div>

      {/* الاسم والوصف */}
      <h4 className="text-2xl font-black text-slate-800 mb-3 group-hover:text-emerald-700 transition-colors">
        {name}
      </h4>
      <p className="text-slate-500 text-sm leading-relaxed mb-8 h-[60px] overflow-hidden line-clamp-3 font-medium">
        {bio}
      </p>
      
      {/* السعر والزر التفاعلي */}
      <div className="flex items-center justify-between pt-6 border-t border-slate-50">
        <div className="text-right">
          <span className="text-slate-400 text-[10px] block font-bold uppercase tracking-wider">السعر للحصة</span>
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-black text-emerald-700">{price}</span>
            <span className="text-sm font-bold text-emerald-600/60">ج.م</span>
          </div>
        </div>

        <button 
          onClick={onSelect}
          className="bg-emerald-600 text-white p-4 rounded-2xl hover:bg-emerald-900 transition-all shadow-lg shadow-emerald-100 active:scale-90 group/btn"
        >
          <MessageCircle size={24} className="group-hover/btn:rotate-12 transition-transform" />
        </button>
      </div>
    </div>

    {/* لمسة نهائية: خط سفلي يظهر عند التحويم */}
    <div className="absolute bottom-0 left-0 w-0 h-1 bg-emerald-600 transition-all duration-700 group-hover:w-full"></div>
  </div>
);

export default TeacherCard;