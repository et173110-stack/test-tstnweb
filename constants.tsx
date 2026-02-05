
import React from 'react';
import { 
  ChevronRight, 
  Download, 
  MapPin, 
  Video, 
  Check,
  UserPlus,
  LogIn
} from 'lucide-react';

export const NEWS_DATA = [
  {
    id: 1,
    category: '協會消息',
    date: '2024.01.25',
    title: '2024 桃園智慧城市發展論壇圓滿成功',
    description: '本次論壇吸引超過 200 位產官學研代表參加，深入探討 AIOT 在城市治理中的實際應用...',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800',
    type: 'association'
  },
  {
    id: 2,
    category: '產業要聞',
    date: '2024.01.20',
    title: '桃園航空城智慧基建設施進度更新',
    description: '隨著 5G 基礎建設的布建，航空城將成為全台最大的智慧物流與科技研發基地...',
    image: 'https://www.csatc.com/tstn/image1.png',
    type: 'industry'
  },
  {
    id: 3,
    category: '協會消息',
    date: '2024.01.15',
    title: '第二屆第二次理監事會議紀錄公告',
    description: '詳細討論 2024 年度計畫預算及年度大會舉辦事宜，相關紀錄已上傳至會員專區...',
    image: 'https://www.csatc.com/tstn/image2.png',
    type: 'association'
  }
];

// 輔助組件：用於建立符合截圖風格的成員區塊
const MemberGrid = ({ title, members, cols }: { title: string, members: string[], cols: number }) => {
  const gridClass = {
    1: 'grid-cols-1',
    4: 'grid-cols-2 md:grid-cols-4',
    5: 'grid-cols-2 md:grid-cols-5'
  }[cols as 1 | 4 | 5] || 'grid-cols-1';

  return (
    <div className="w-full">
      {/* 職稱標題 */}
      <div className="bg-[#eef2f7] border-x border-t border-slate-300 py-3 text-center text-slate-600 font-bold text-base md:text-lg tracking-wider">
        {title}
      </div>
      {/* 成員清單 - 加大姓名文字 (text-lg md:text-xl) */}
      <div className={`grid ${gridClass} border-l border-t border-slate-300 bg-white`}>
        {members.map((name, i) => (
          <div key={i} className="border-r border-b border-slate-300 py-4 text-center text-slate-800 font-bold text-lg md:text-xl tracking-wide">
            {name}
          </div>
        ))}
      </div>
    </div>
  );
};

export const PAGE_CONTENT: Record<string, { title: string; content: (navigateTo: (p: any) => void) => React.ReactNode }> = {
  mission: {
    title: '宗旨與任務',
    content: () => (
      <div className="prose max-w-none text-slate-700 leading-relaxed">
        <h2 className="text-3xl font-bold mb-6 text-blue-900 border-b pb-4">宗旨與任務</h2>
        <h4 className="text-xl font-bold mb-4">本會宗旨</h4>
        <p className="mb-6">桃園市智慧科技發展協會為依法設立、非以營利為目的之社會團體，其宗旨致力於促進智慧科技的發展，並積極推動相關領域的研究、交流與合作；期能透過提升智慧科技在社會、經濟及科技領域的實際應用，達成邁向永續發展之最終目標。</p>
        <h4 className="text-xl font-bold mb-4">主要任務</h4>
        <ul className="list-disc pl-5 space-y-3">
          <li><b>推動研發與創新：</b>致力於相關領域的研究，推動科技進步及技術應用，並鼓勵會員參與研究開發，提供專業支持與協助。</li>
          <li><b>建立產官合作平台：</b>建立智慧科技發展的合作平台，促進產業界與政府部門之間的合作、交流與推廣。</li>
          <li><b>參與政策制定：</b>積極參與政府相關政策的制定與實施，並提供專業的意見與建議。</li>
          <li><b>辦理教育與人才培訓：</b>舉辦各類研習、講座、論壇及技能訓練，以促進智慧科技交流與技術創新。</li>
          <li><b>倡導倫理與永續：</b>在追求科技發展的同時，倡導關注倫理、安全、隱私等議題，並舉辦社會公益活動以關懷弱勢。</li>
          <li><b>促進跨業交流與推廣：</b>辦理跨業交流活動以擴散智慧科技應用，並協助相關研發產品的推廣展覽。</li>
        </ul>
      </div>
    )
  },
  charter: {
    title: '協會章程',
    content: () => (
      <div className="space-y-6 text-slate-700">
        <h2 className="text-3xl font-bold mb-6 text-blue-900 border-b pb-4">協會章程</h2>
        <nav><p className="italic text-slate-500">本章程業經桃園市政府社政字第 1120000000 號函准予備查</p></nav>
        <div className="p-6 bg-slate-50 rounded-xl">
          <h4 className="font-bold text-lg mb-2">第一章 總則</h4>
          <p>第一條：本會名稱為「桃園市智慧科技發展協會」。</p>
          <p>第二條：本會為依法設立、非以營利為目的之社會團體。</p>
          <p>第三條：本會以桃園市行政區域為組織區域。</p>
        </div>
        <div className="p-6 bg-slate-50 rounded-xl">
          <h4 className="font-bold text-lg mb-2">第二章 任務</h4>
          <p>第六條 本會之任務如下：</p>
            <ul>
              <li>　一、推動研發創新：關於相關領域的研究和創新，推動科技進步和技術應用的發展事項。</li>
              <li>　二、建立產官平台：關於建立智慧科技發展的合作平台，推動產業界和政府部門之間的合作與交流推廣事項</li>
              <li>　三、積極參與政府相關政策的制定和實施，提供專業意見與建議。</li>
              <li>　四、辦理本會相關業務領域之研習、研討、講座、論壇、展演、考察、技能訓練等促進知識交流和技術創新。</li>
            </ul> 
        </div>
        <p className="text-center py-8 text-blue-600 underline cursor-pointer flex items-center justify-center gap-2">
          <Download className="w-4 h-4" /> <a href="https://www.csatc.com/tstn/association.pdf" target="_blank">下載完整章程檔案 (PDF)</a>
        </p>
      </div>
    )
  },
  structure: {
    title: '組織架構',
    content: () => (
      <div className="flex flex-col items-center py-6">
        <h2 className="text-3xl font-bold mb-10 text-blue-900 border-b pb-4 text-center w-full">組織架構圖</h2>
        <div className="w-full max-w-5xl bg-white p-4 md:p-8 rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1600" 
            alt="桃園市智慧科技發展協會 組織架構" 
            className="w-full h-auto object-contain rounded-xl"
          />
        </div>
        <div className="mt-8 text-slate-400 text-sm italic">
          * 圖示僅供參考，最新架構請以大會公告為準
        </div>
      </div>
    )
  },
  board: {
    title: '理監事名錄',
    content: () => (
      <div className="space-y-12">
            
        {/* 理事會區塊 */}
        <div className="bg-slate-50 p-1 md:p-6 rounded-2xl shadow-md border border-slate-200">
          <div className="bg-[#f8fafc] border border-slate-300 rounded-lg overflow-hidden">
            <div className="bg-white py-3 text-center border-b border-slate-300">
              <h3 className="text-blue-800 font-bold text-lg md:text-xl">理事會 (Board of Directors)</h3>
            </div>
            
            <MemberGrid title="理事長" members={['高智峯']} cols={1} />
            <MemberGrid title="常務理事" members={['楊連興', '莊馥維', '邱文冠', '王時朋']} cols={4} />
            <MemberGrid title="理事" members={[
              '高信揚', '柯慶章', '張智詠', '王建曄', '劉鎮毅',
              '溫正椿', '吳佳飛', '陳明宏', '蔡踵源', '薛安庭'
            ]} cols={5} />
          </div>
        </div>

        {/* 監事會區塊 */}
        <div className="bg-slate-50 p-1 md:p-6 rounded-2xl shadow-md border border-slate-200">
          <div className="bg-[#f8fafc] border border-slate-300 rounded-lg overflow-hidden">
            <div className="bg-white py-3 text-center border-b border-slate-300">
              <h3 className="text-blue-800 font-bold text-lg md:text-xl">監事會 (Board of Supervisors)</h3>
            </div>
            
            <MemberGrid title="常務監事" members={['張金萬']} cols={1} />
            <MemberGrid title="監事" members={['陳國龍', '陳逸宇', '溫進德', '王勝介']} cols={4} />
          </div>
        </div>        
      </div>
    )
  },
  announcement: {
    title: '會務公告',
    content: () => (
      <div className="space-y-4">
        <h2 className="text-3xl font-bold mb-6 text-blue-900 border-b pb-4">會務公告</h2>
        {[
          { date: '2024-01-10', title: '關於 113 年度常年會費繳納通知' },
          { date: '2023-12-15', title: '第二屆第二次會員大會召開會議通知' }
        ].map((item, idx) => (
          <div key={idx} className="flex justify-between items-center p-4 hover:bg-slate-50 rounded-lg border-b border-slate-100">
            <div>
              <span className="text-xs text-slate-400">{item.date}</span>
              <h4 className="font-medium text-slate-800">{item.title}</h4>
            </div>
            <button className="text-blue-600 p-2 hover:bg-blue-50 rounded-full transition"><Download className="w-4 h-4" /></button>
          </div>
        ))}
      </div>
    )
  },
  join: {
    title: '加入會員',
    content: () => (
      <div className="space-y-10">
        <h2 className="text-3xl font-bold mb-6 text-blue-900 border-b pb-4">加入我們</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="p-8 border rounded-2xl border-slate-200 hover:border-blue-600 transition shadow-sm bg-white">
            <h3 className="text-2xl font-bold mb-4">個人會員</h3>
            <p className="text-slate-600 mb-6">適合學者、專家、學生 或 對智慧科技有興趣之一般社會大眾。</p>
            <ul className="space-y-3 text-sm text-slate-700 mb-8">
              <li className="flex items-center gap-2"><Check className="text-blue-600 w-4 h-4" /> 免費參加協會舉辦之定期講座</li>
              <li className="flex items-center gap-2"><Check className="text-blue-600 w-4 h-4" /> 享有研討會報名費 8 折優惠</li>
              <li className="flex items-center gap-2"><Check className="text-blue-600 w-4 h-4" /> 接收協會電子報與產業要聞</li>
            </ul>
            <div className="text-2xl font-bold text-blue-900 mb-6">NT$ 1,000 <span className="text-sm font-normal text-slate-500">/ 年</span></div>
            <button className="w-full border-2 border-blue-600 text-blue-600 py-3 rounded-lg font-bold hover:bg-blue-50 transition">申請個人會員</button>
          </div>
          <div className="p-8 bg-blue-900 text-white rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-4">團體會員</h3>
            <p className="opacity-80 mb-6">適合公司企業、法人單位，尋求產業媒合與資源連結。</p>
            <ul className="space-y-3 text-sm mb-8">
              <li className="flex items-center gap-2"><Check className="text-blue-300 w-4 h-4" /> 指定 3 名專屬會員名單</li>
              <li className="flex items-center gap-2"><Check className="text-blue-300 w-4 h-4" /> 官方網站廣告欄位刊登權</li>
              <li className="flex items-center gap-2"><Check className="text-blue-300 w-4 h-4" /> 優先參加企業媒合會與產學專案</li>
            </ul>
            <div className="text-2xl font-bold mb-6">NT$ 10,000 <span className="text-sm font-normal opacity-60">/ 年</span></div>
            <button className="w-full bg-blue-600 py-3 rounded-lg font-bold hover:bg-blue-700 transition">申請團體會員</button>
          </div>
        </div>
      </div>
    )
  },
  login: {
    title: '會員登入',
    content: (navigateTo) => (
      <div className="max-w-md mx-auto py-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-blue-900">會員登入</h2>
          <p className="text-slate-500 mt-2">請輸入您的帳號密碼以繼續</p>
        </div>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">帳號 / 電子郵件</label>
            <input type="text" placeholder="yourname@email.com" className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none transition" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">密碼</label>
            <input type="password" placeholder="••••••••" className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none transition" />
          </div>
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer text-slate-600">
              <input type="checkbox" className="rounded border-slate-300 text-blue-600" /> 記住我
            </label>
            <a href="#" className="text-blue-600 hover:underline">忘記密碼？</a>
          </div>
          <button type="button" className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition shadow-lg">登入系統</button>
        </form>
        <div className="mt-8 pt-8 border-t border-slate-100 text-center text-sm text-slate-600">
          尚未成為會員？ <button onClick={() => navigateTo('join')} className="text-blue-600 font-bold hover:underline">立即加入</button>
        </div>
      </div>
    )
  },
  seminar: {
    title: '研討會資訊',
    content: () => (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold mb-6 text-blue-900 border-b pb-4">近期研討會</h2>
        <div className="bg-slate-50 rounded-2xl p-6 border-l-4 border-blue-600 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">報名中</span>
                <span className="text-slate-500 text-sm font-medium">活動日期：2024-03-20</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">AI 時代下的智慧城市與永續發展論壇</h3>
              <p className="text-slate-600 text-sm mb-4"><MapPin className="inline w-3 h-3 mr-1" /> 桃園市立圖書館總館 1 樓演講廳</p>
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition">立即報名</button>
          </div>
        </div>
      </div>
    )
  },
  events: {
    title: '活動花絮',
    content: () => (
      <div className="space-y-16">
        {/* 精選影片區塊 */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-blue-900 border-b pb-4">精選活動影音</h2>
          <div className="bg-slate-50 p-4 md:p-8 rounded-3xl border border-slate-200 shadow-inner">
            <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-2xl bg-black relative group">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/WK9T2pW7Y0o" 
                title="精選活動回顧影片"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <p className="text-slate-600 font-medium">2024 智慧科技產業高峰會 - 精彩精華回顧</p>
              <div className="flex items-center gap-3">
                <span className="text-[10px] md:text-xs bg-red-100 text-red-600 px-3 py-1 rounded-full font-bold flex items-center gap-1.5 border border-red-200">
                  <Video className="w-3 h-3" /> YouTube 直播存檔
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 照片區塊 */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-blue-900 border-b pb-4">活動照片回顧</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { img: 'https://www.csatc.com/tstn/i5.jpg', title: '成立大會理事長致詞' },
              { img: 'https://www.csatc.com/tstn/i3.jpg', title: '桃園經發局長致詞' },
              { img: 'https://www.csatc.com/tstn/i2.jpg', title: '成立大會來賓合影' },
              { img: 'https://www.csatc.com/tstn/i1.jpg', title: '成立大會來賓合影' },
              { img: 'https://www.csatc.com/tstn/i7.jpg', title: '114 年度智慧展活動合影' },
              { img: 'https://www.csatc.com/tstn/i8.jpg', title: '智域前瞻研討高峰會' }
            ].map((item, idx) => (
              <div key={idx} className="relative aspect-square bg-slate-100 rounded-2xl overflow-hidden group cursor-pointer shadow-sm border border-slate-100">
                <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" alt={item.title} />
                <div className="absolute inset-0 bg-blue-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-white text-sm font-bold">{item.title}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    )
  },
  news: {
    title: '最新消息 - 協會消息',
    content: () => (
      <div className="space-y-8">
        <h2 className="text-3xl font-bold mb-6 text-blue-900 border-b pb-4">協會消息</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {NEWS_DATA.filter(n => n.type === 'association').map(item => (
            <div key={item.id} className="group cursor-pointer">
              <div className="overflow-hidden rounded-xl mb-4 h-48 border border-slate-100">
                <img src={item.image} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <span className="text-xs text-slate-400">{item.date}</span>
              <h4 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-blue-600 transition">{item.title}</h4>
              <p className="text-slate-600 text-sm line-clamp-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    )
  },
  industry: {
    title: '最新消息 - 產業要聞',
    content: () => (
      <div className="space-y-8">
        <h2 className="text-3xl font-bold mb-6 text-blue-900 border-b pb-4">產業要聞</h2>
        {NEWS_DATA.filter(n => n.type === 'industry').map(item => (
          <div key={item.id} className="flex flex-col md:flex-row gap-6 border-b pb-8 border-slate-100 group">
            <div className="md:w-1/3 h-40 overflow-hidden rounded-lg border border-slate-100">
              <img src={item.image} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
            </div>
            <div className="md:w-2/3">
              <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded font-medium">{item.category}</span>
              <span className="text-slate-400 text-xs ml-2">{item.date}</span>
              <h3 className="text-xl font-bold mt-2 mb-3 group-hover:text-blue-600 transition">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">{item.description}</p>
              <button className="text-blue-600 font-medium text-sm flex items-center gap-1 hover:underline">閱讀詳情 <ChevronRight className="w-4 h-4" /></button>
            </div>
          </div>
        ))}
      </div>
    )
  }
};
