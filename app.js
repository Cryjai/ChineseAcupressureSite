const DATA = {
  categories: [
    {
      id: 'autonomic',
      name: '自律神經／情緒',
      icon: '◌',
      description: '自律神經失調、腦霧、情緒起伏、疲勞與集中力下滑。',
      symptoms: [
        '自律神經失調', '長期疲勞', '記憶力／集中力下降', '腦霧', '情緒火爆', '情緒 down'
      ]
    },
    {
      id: 'head-eye',
      name: '頭眼腦霧',
      icon: '◐',
      description: '頭暈、頭痛、乾嘔、眼乾眼澀與眼疲勞型不適。',
      symptoms: [
        '頭暈目眩', '乾嘔', '頭痛', '眼乾眼澀', '眼疲勞', '眼不適導致頭痛'
      ]
    },
    {
      id: 'muscle',
      name: '肌肉骨骼',
      icon: '△',
      description: '肩頸腰痛、僵硬感、頸唔舒服到想嘔。',
      symptoms: [
        '肩頸腰痛', '頸唔舒服到想嘔', '長期老化僵硬感'
      ]
    },
    {
      id: 'digestive',
      name: '消化及代謝',
      icon: '◍',
      description: '無胃口、暴飲暴食、便秘、腹瀉與腸胃節律亂。',
      symptoms: [
        '食慾不振', '暴飲暴食', '無胃口', '便秘', '腹瀉'
      ]
    },
    {
      id: 'sleep',
      name: '睡眠問題',
      icon: '☾',
      description: '失眠、淺睡、多夢、半夜醒與生理時鐘崩潰。',
      symptoms: [
        '生理時鐘崩潰', '失眠', '淺睡', '多夢', '半夜醒'
      ]
    }
  ],
  symptomMap: {
    '自律神經失調': ['神門', '內關', '百會', '三陰交', '太衝', '安眠'],
    '長期疲勞': ['足三里', '百會', '三陰交', '合谷'],
    '記憶力／集中力下降': ['百會', '神門', '足三里'],
    '腦霧': ['百會', '內關', '神門', '風池'],
    '情緒火爆': ['神門', '內關', '百會', '太衝', '三陰交'],
    '情緒 down': ['神門', '內關', '百會', '太衝', '三陰交'],
    '頭暈目眩': ['風池', '百會'],
    '乾嘔': ['內關', '足三里'],
    '頭痛': ['風池', '百會', '合谷'],
    '眼乾眼澀': ['攢竹', '睛明', '魚腰', '承泣', '瞳子髎', '風池'],
    '眼疲勞': ['攢竹', '睛明', '魚腰', '承泣', '瞳子髎', '風池'],
    '眼不適導致頭痛': ['攢竹', '睛明', '魚腰', '承泣', '瞳子髎', '風池'],
    '肩頸腰痛': ['風池', '委中', '合谷', '足三里'],
    '頸唔舒服到想嘔': ['風池', '內關', '百會'],
    '長期老化僵硬感': ['風池', '委中', '足三里', '合谷'],
    '食慾不振': ['足三里', '內關'],
    '暴飲暴食': ['足三里', '內關', '三陰交'],
    '無胃口': ['足三里', '內關'],
    '便秘': ['足三里', '三陰交', '合谷', '天樞', '氣海', '關元', '支溝', '曲池'],
    '腹瀉': ['足三里', '內關', '天樞'],
    '生理時鐘崩潰': ['神門', '安眠', '內關', '百會', '三陰交'],
    '失眠': ['神門', '安眠', '內關', '百會', '三陰交'],
    '淺睡': ['神門', '安眠', '內關', '百會', '三陰交'],
    '多夢': ['神門', '安眠', '內關', '百會', '三陰交'],
    '半夜醒': ['神門', '安眠', '內關', '百會', '三陰交']
  },
  points: {
    '百會': {
      code: 'GV20',
      summary: '頭頂核心醒腦穴，常用於腦霧、頭暈、頭痛與情緒調節的日常舒緩參考。',
      category: '頭部',
      relief: ['自律神經失調', '長期疲勞', '記憶力／集中力下降', '腦霧', '情緒火爆', '情緒 down', '頭暈目眩', '頭痛', '頸唔舒服到想嘔', '失眠'],
      location: '頭頂正中線上，約在兩耳尖連線與頭部正中線交會處。可先找兩耳最高點連線，再摸到頭頂中間位置。',
      method: '以指腹垂直按揉 30 至 60 秒，力度以微酸脹但不刺痛為原則，可配合深呼吸 2 至 3 組。',
      note: '適合做醒腦、情緒 reset 與長時間用腦後的暫停點。讀到腦袋變廢鐵時按呢個，起碼比你繼續發呆有建設性。',
      warnings: ['頭皮受傷或局部發炎時避免按壓。', '若頭痛劇烈、突然暈厥或神經症狀明顯，應先求醫。'],
      image: {
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Yintang.svg/640px-Yintang.svg.png',
        fallback: 'https://commons.wikimedia.org/wiki/Special:FilePath/Acupuncture_chart_300px.jpg',
        alt: '百會穴頭頂定位示意圖',
        source: 'External image placeholder for point location; replace with unified licensed atlas later.'
      },
      videos: [
        { id: 'zE-ZaWx1L7k', title: '自律神經失調穴位按摩', desc: '含百會、呼吸法與放鬆流程示範。' },
        { id: 'FfbNykwk_x0', title: '27 個穴位舒緩指南', desc: '長版整理，適合想一次看大局。' }
      ]
    },
    '風池': {
      code: 'GB20',
      summary: '後頸與後腦交界的經典舒緩穴，對頭痛、頭暈、眼疲勞與肩頸緊繃很常見。',
      category: '頭頸',
      relief: ['腦霧', '頭暈目眩', '頭痛', '眼乾眼澀', '眼疲勞', '眼不適導致頭痛', '肩頸腰痛', '頸唔舒服到想嘔', '長期老化僵硬感'],
      location: '後腦枕骨下方、胸鎖乳突肌與斜方肌之間凹陷處，左右各一。',
      method: '雙手拇指由後向前穩定按壓 20 至 30 秒，再小圈按揉 3 至 5 次。',
      note: '長期低頭、肩頸僵到似石膏人，風池通常值得先試。',
      warnings: ['避免用指甲戳壓。', '若有頸椎急性受傷或劇烈眩暈，先停止自行按壓。'],
      image: {
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Channels%20and%20acupoints%20of%20the%20back%20of%20the%20head%20and%20neck%20Wellcome%20L0037860.jpg',
        fallback: 'https://commons.wikimedia.org/wiki/Special:FilePath/Channels%20and%20acupoints%20of%20the%20back%20of%20the%20head%20and%20neck%20Wellcome%20L0037860.jpg',
        alt: '風池穴後頸定位示意圖',
        source: 'Placeholder map, recommended to replace with unified posterior head/neck atlas image.'
      },
      videos: [
        { id: 'I49IlXsvFew', title: '肩頸急救與後頸穴位', desc: '後頸卡死、頭暈想嘔類型可參考。' },
        { id: 'orMKsehvzjs', title: '久坐肩頸僵硬穴位', desc: '適合螢幕黏著患者。' }
      ]
    },
    '神門': {
      code: 'HT7',
      summary: '手腕安神穴，常見於焦躁、睡眠不穩與情緒高低起伏時的舒緩組合。',
      category: '手腕',
      relief: ['自律神經失調', '記憶力／集中力下降', '腦霧', '情緒火爆', '情緒 down', '生理時鐘崩潰', '失眠', '淺睡', '多夢', '半夜醒'],
      location: '手腕掌側橫紋，小指側靠近腕骨凹陷處。',
      method: '以另一手拇指穩定按壓 30 至 60 秒，可左右手交替 2 至 3 回。',
      note: '焦躁到個腦不停 reload 時，神門係你個人 low-budget calm mode。',
      warnings: ['手腕急性扭傷或局部腫脹時先避免重壓。'],
      image: {
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Lokalisation%20des%20Akupunkturpunkte%20Neiguan.gif',
        fallback: 'https://commons.wikimedia.org/wiki/Special:FilePath/Lokalisation%20des%20Akupunkturpunkte%20Neiguan.gif',
        alt: '神門穴手腕定位示意圖',
        source: 'Placeholder hand/wrist atlas slot.'
      },
      videos: [
        { id: 'N4DhyBkyQhI', title: '失眠焦慮穴道按壓', desc: '神門與安神相關穴位示範。' },
        { id: '5phr4QTOaeE', title: '改善失眠按摩 3 招', desc: '睡前流程較實用。' }
      ]
    },
    '內關': {
      code: 'PC6',
      summary: '前臂內側常用穴，常見於噁心、胸悶、情緒壓力與睡眠節律亂。',
      category: '前臂',
      relief: ['自律神經失調', '腦霧', '情緒火爆', '情緒 down', '乾嘔', '頸唔舒服到想嘔', '食慾不振', '暴飲暴食', '無胃口', '腹瀉', '失眠'],
      location: '手腕掌側橫紋向上約三指寬，兩條筋之間。',
      method: '拇指垂直按壓至有酸脹感，維持 30 秒，再放鬆重複 3 次。',
      note: '內關算係你個手上 emergency button，胃反、心煩、想嘔都成日見到佢出場。',
      warnings: ['孕期或特殊病況若不確定，可先詢問專業人士。'],
      image: {
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Lokalisation%20des%20Akupunkturpunkte%20Neiguan.gif',
        fallback: 'https://commons.wikimedia.org/wiki/Special:FilePath/Lokalisation%20des%20Akupunkturpunkte%20Neiguan.gif',
        alt: '內關穴前臂定位示意圖',
        source: 'Placeholder forearm atlas slot.'
      },
      videos: [
        { id: 'zE-ZaWx1L7k', title: '自律神經與內關示範', desc: '內關與百會、神門一組常見。' },
        { id: 'N4DhyBkyQhI', title: '焦慮失眠穴位', desc: '適合放入睡眠與情緒情境。' }
      ]
    },
    '足三里': {
      code: 'ST36',
      summary: '腿部人氣王，常見於疲勞、腸胃節律、恢復力與日常保養。',
      category: '小腿',
      relief: ['長期疲勞', '記憶力／集中力下降', '乾嘔', '肩頸腰痛', '長期老化僵硬感', '食慾不振', '暴飲暴食', '無胃口', '便秘', '腹瀉'],
      location: '膝蓋外側下方凹陷往下約四指寬，脛骨外側一橫指位置。',
      method: '以拇指或指節按揉 1 至 2 分鐘，兩側皆可做。',
      note: '腸胃差、氣力散、坐到人成舊木，足三里通常都唔會缺席。',
      warnings: ['按壓後若有明顯劇痛或局部瘀傷，請減輕力度。'],
      image: {
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Acupuncture%20points%20and%20meridians.%20The%20foot%20Wellcome%20L0043616.jpg',
        fallback: 'https://commons.wikimedia.org/wiki/Special:FilePath/Acupuncture%20points%20and%20meridians.%20The%20foot%20Wellcome%20L0043616.jpg',
        alt: '足三里穴小腿定位示意圖',
        source: 'Placeholder lower-leg atlas slot.'
      },
      videos: [
        { id: 'AgLK8keI4C0', title: '便秘自救穴位', desc: '足三里常與腸胃點一起出現。' },
        { id: 'RI3bxDVsHYI', title: '身體舒緩穴位示範', desc: '可作按摩節奏參考。' }
      ]
    },
    '三陰交': {
      code: 'SP6',
      summary: '內踝上方調節系穴位，常見於疲勞、情緒、睡眠與腸胃節律保養。',
      category: '小腿內側',
      relief: ['自律神經失調', '長期疲勞', '情緒火爆', '情緒 down', '暴飲暴食', '便秘', '生理時鐘崩潰', '失眠', '淺睡', '多夢', '半夜醒'],
      location: '內踝尖上約四指寬，脛骨內側後緣。',
      method: '以指腹向脛骨後方按壓 30 至 60 秒，左右輪流。',
      note: '好多「亂晒龍」型症狀都會見到三陰交，因為佢成日被拉去做後勤總管。',
      warnings: ['孕婦一般避免自行重按此穴。'],
      image: {
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Acupuncture%20points%20and%20meridians.%20The%20foot%20Wellcome%20L0043616.jpg',
        fallback: 'https://commons.wikimedia.org/wiki/Special:FilePath/Acupuncture%20points%20and%20meridians.%20The%20foot%20Wellcome%20L0043616.jpg',
        alt: '三陰交穴內踝上定位示意圖',
        source: 'Placeholder medial lower-leg atlas slot.'
      },
      videos: [
        { id: 'SgPZ6RPQ7fc', title: '遠離失眠穴位按壓', desc: '睡前穴位流程可直接引用。' },
        { id: '5phr4QTOaeE', title: '助眠穴位按摩', desc: '三陰交常放入睡前 routine。' }
      ]
    },
    '合谷': {
      code: 'LI4',
      summary: '手背虎口附近常見穴位，常被拿來做頭痛、肩頸痛與腸胃節律的輔助舒緩。',
      category: '手部',
      relief: ['長期疲勞', '頭痛', '肩頸腰痛', '長期老化僵硬感', '便秘'],
      location: '手背第一、二掌骨之間，約在虎口併攏時肌肉隆起最高點。',
      method: '拇指對著食指骨間縫垂直按壓 20 至 40 秒，再慢慢放鬆。',
      note: '萬能到有啲似中醫界萬用膠紙，但都唔好當佢係作弊碼。',
      warnings: ['孕期不建議自行重按合谷。'],
      image: {
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Acupuncture%20points%20and%20meridians.%20The%20arm.%20Wellcome%20L0043615.jpg',
        fallback: 'https://commons.wikimedia.org/wiki/Special:FilePath/Acupuncture%20points%20and%20meridians.%20The%20arm.%20Wellcome%20L0043615.jpg',
        alt: '合谷穴手背虎口定位示意圖',
        source: 'Placeholder hand dorsum atlas slot.'
      },
      videos: [
        { id: 'eMSePjAQXvA', title: '肩頸痠痛穴位按摩', desc: '合谷常作遠端配穴。' },
        { id: 'AgLK8keI4C0', title: '便秘自救穴位', desc: '便秘對應時可一起看。' }
      ]
    },
    '曲池': {
      code: 'LI11',
      summary: '手肘外側常見穴位，常放入便秘與上肢循環調整類配搭。',
      category: '手肘',
      relief: ['便秘'],
      location: '屈肘時肘橫紋外端凹陷處。',
      method: '彎曲手肘後以拇指按揉 30 秒，可重複 3 組。',
      note: '唔係最明星，但做便秘配方時經常被拉出嚟幫手。',
      warnings: ['手肘發炎或受傷時避免重按。'],
      image: {
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Acupuncture%20points%20and%20meridians.%20The%20arm.%20Wellcome%20L0043615.jpg',
        fallback: 'https://commons.wikimedia.org/wiki/Special:FilePath/Acupuncture%20points%20and%20meridians.%20The%20arm.%20Wellcome%20L0043615.jpg',
        alt: '曲池穴手肘定位示意圖',
        source: 'Placeholder elbow atlas slot.'
      },
      videos: [
        { id: 'AgLK8keI4C0', title: '便秘自救穴位', desc: '配合腸胃組穴位理解。' }
      ]
    },
    '安眠': {
      code: 'EX-HN22',
      summary: '耳後安眠輔助點，常用作睡前放鬆與夜晚情緒降速。',
      category: '耳後',
      relief: ['自律神經失調', '生理時鐘崩潰', '失眠', '淺睡', '多夢', '半夜醒'],
      location: '耳後翳風與風池連線中點附近的安眠穴區域。',
      method: '睡前以指腹輕柔按揉 30 至 60 秒，力度要溫和。',
      note: '呢個位係晚間 calm down 專員，唔係叫你按完即刻滑手機到凌晨四點。',
      warnings: ['若耳後皮膚發炎或不適，先避免使用。'],
      image: {
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Channels%20and%20acupoints%20of%20the%20back%20of%20the%20head%20and%20neck%20Wellcome%20L0037860.jpg',
        fallback: 'https://commons.wikimedia.org/wiki/Special:FilePath/Channels%20and%20acupoints%20of%20the%20back%20of%20the%20head%20and%20neck%20Wellcome%20L0037860.jpg',
        alt: '安眠穴耳後定位示意圖',
        source: 'Placeholder posterior ear atlas slot.'
      },
      videos: [
        { id: 'SgPZ6RPQ7fc', title: '失眠穴位按壓衛教影片', desc: '睡前穴位定位與順序。' },
        { id: '5phr4QTOaeE', title: '中醫助眠按摩', desc: '適合放入晚間流程。' }
      ]
    },
    '委中': {
      code: 'BL40',
      summary: '膝後中央常見穴位，常用於腰背緊繃與下肢筋膜感不適。',
      category: '膝後',
      relief: ['肩頸腰痛', '長期老化僵硬感'],
      location: '膝窩橫紋中央位置。',
      method: '坐姿或俯臥時用拇指輕壓 20 至 30 秒，避免暴力戳膝窩。',
      note: '腰背卡住時做遠端配穴幾好用，唔使成日死搓痛位。',
      warnings: ['靜脈曲張、膝後腫脹或疼痛明顯者避免重壓。'],
      image: {
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Acupuncture%20points%20and%20meridians.%20The%20foot%20Wellcome%20L0043616.jpg',
        fallback: 'https://commons.wikimedia.org/wiki/Special:FilePath/Acupuncture%20points%20and%20meridians.%20The%20foot%20Wellcome%20L0043616.jpg',
        alt: '委中穴膝後定位示意圖',
        source: 'Placeholder posterior knee atlas slot.'
      },
      videos: [
        { id: 'eMSePjAQXvA', title: '肩頸痠痛穴位按摩', desc: '作為肌肉骨骼類配穴參考。' }
      ]
    },
    '攢竹': {
      code: 'BL2',
      summary: '眉頭凹陷處常見眼周舒緩點，適合長時間睇屏幕後做短暫 reset。',
      category: '眼周',
      relief: ['眼乾眼澀', '眼疲勞', '眼不適導致頭痛'],
      location: '眉頭內側端的凹陷處。',
      method: '以雙手拇指或食指輕按 10 至 15 秒，再小圈按揉。',
      note: '讀嘢讀到眼珠乾過鹹魚，攢竹通常係眼周 first aid。',
      warnings: ['眼周皮膚薄，請用柔和力度。'],
      image: {
        url: 'https://via.placeholder.com/900x700/EEE9E1/587A6C?text=BL2+%E6%94%A2%E7%AB%B9+Location',
        fallback: 'https://via.placeholder.com/900x700/EEE9E1/587A6C?text=BL2+%E6%94%A2%E7%AB%B9+Location',
        alt: '攢竹穴眉頭定位示意圖',
        source: 'Placeholder eyebrow atlas slot.'
      },
      videos: [
        { id: 'RI3bxDVsHYI', title: '消除眼睛疲勞與頭痛', desc: '眼周穴位與節奏示範。' }
      ]
    },
    '睛明': {
      code: 'BL1',
      summary: '內眼角附近的眼周穴位，常作眼乾、眼澀、視覺疲勞舒緩參考。',
      category: '眼周',
      relief: ['眼乾眼澀', '眼疲勞', '眼不適導致頭痛'],
      location: '內眼角稍上方靠近鼻根凹陷處。',
      method: '用指腹極輕柔按壓 5 至 10 秒，不宜久按。',
      note: '眼周穴位唔係你喺度玩開寶箱，手勢要輕，否則你只係加速自己後悔。',
      warnings: ['避免直接壓迫眼球。', '有眼疾、紅腫或感染時應先求醫。'],
      image: {
        url: 'https://via.placeholder.com/900x700/F1EDE6/587A6C?text=BL1+%E7%9D%9B%E6%98%8E+Location',
        fallback: 'https://via.placeholder.com/900x700/F1EDE6/587A6C?text=BL1+%E7%9D%9B%E6%98%8E+Location',
        alt: '睛明穴內眼角定位示意圖',
        source: 'Placeholder inner canthus atlas slot.'
      },
      videos: [
        { id: 'RI3bxDVsHYI', title: '眼睛疲勞按摩', desc: '眼周穴位定位較清楚。' }
      ]
    },
    '魚腰': {
      code: 'EX-HN4',
      summary: '眉毛中央上方附近的常見眼周點，適合眼疲勞與眉額緊繃。',
      category: '眼周',
      relief: ['眼乾眼澀', '眼疲勞', '眼不適導致頭痛'],
      location: '眉毛中央正上或正中部位。',
      method: '指腹輕壓 10 秒後放鬆，可左右交替。',
      note: '眼壓感、眉額繃住時，魚腰幾有存在感。名似可愛，實際係打工人專用。',
      warnings: ['眼周按摩避免大力拉扯皮膚。'],
      image: {
        url: 'https://via.placeholder.com/900x700/F0ECE4/587A6C?text=EX-HN4+%E9%AD%9A%E8%85%B0+Location',
        fallback: 'https://via.placeholder.com/900x700/F0ECE4/587A6C?text=EX-HN4+%E9%AD%9A%E8%85%B0+Location',
        alt: '魚腰穴眉中定位示意圖',
        source: 'Placeholder eyebrow midpoint atlas slot.'
      },
      videos: [
        { id: 'RI3bxDVsHYI', title: '眼睛疲勞按摩', desc: '眼周點位實作可參考。' }
      ]
    },
    '承泣': {
      code: 'ST1',
      summary: '下眼眶附近穴位，常作眼周循環舒緩參考。',
      category: '眼周',
      relief: ['眼乾眼澀', '眼疲勞', '眼不適導致頭痛'],
      location: '瞳孔正下方、眼球與眼眶下緣之間。',
      method: '以無名指或食指輕輕點按，切勿重壓眼球。',
      note: '呢個位更要溫柔，唔係俾你當提款機按。',
      warnings: ['眼周不適、眼壓異常或剛做過眼部手術者不宜自行按。'],
      image: {
        url: 'https://via.placeholder.com/900x700/F1EEE7/587A6C?text=ST1+%E6%89%BF%E6%B3%A3+Location',
        fallback: 'https://via.placeholder.com/900x700/F1EEE7/587A6C?text=ST1+%E6%89%BF%E6%B3%A3+Location',
        alt: '承泣穴眼眶下緣定位示意圖',
        source: 'Placeholder infraorbital atlas slot.'
      },
      videos: [
        { id: 'RI3bxDVsHYI', title: '眼睛疲勞按摩', desc: '眼周輕按流程示範。' }
      ]
    },
    '瞳子髎': {
      code: 'GB1',
      summary: '外眼角旁穴位，常用於眼乾、眼疲勞與眼周緊繃。',
      category: '眼周',
      relief: ['眼乾眼澀', '眼疲勞', '眼不適導致頭痛'],
      location: '外眼角外側約 0.5 寸凹陷處。',
      method: '以指腹輕柔打圈 10 至 15 秒。',
      note: '外眼角酸到似成日捱夜，瞳子髎就會有戲份。',
      warnings: ['避免按到眼球或使用尖銳指甲。'],
      image: {
        url: 'https://via.placeholder.com/900x700/F0ECE5/587A6C?text=GB1+%E7%9E%B3%E5%AD%90%E9%AB%8E+Location',
        fallback: 'https://via.placeholder.com/900x700/F0ECE5/587A6C?text=GB1+%E7%9E%B3%E5%AD%90%E9%AB%8E+Location',
        alt: '瞳子髎穴外眼角定位示意圖',
        source: 'Placeholder lateral eye atlas slot.'
      },
      videos: [
        { id: 'RI3bxDVsHYI', title: '眼睛疲勞按摩', desc: '眼周按法參考。' }
      ]
    },
    '天樞': {
      code: 'ST25',
      summary: '腹部腸胃節律常見穴位，便秘、腹瀉與腹部脹悶時常作參考。',
      category: '腹部',
      relief: ['便秘', '腹瀉'],
      location: '肚臍左右旁開約兩寸，左右各一。',
      method: '以掌根或指腹順時針輕柔按揉 30 至 60 秒，避開剛食飽。',
      note: '肚腩位雖然敏感，但做腸胃組穴時天樞好重要，唔好嫌佢尷尬。',
      warnings: ['腹痛劇烈、懷疑急腹症、孕期不適等情況請先求醫。'],
      image: {
        url: 'https://via.placeholder.com/900x700/EEE9E0/587A6C?text=ST25+%E5%A4%A9%E6%A8%9E+Location',
        fallback: 'https://via.placeholder.com/900x700/EEE9E0/587A6C?text=ST25+%E5%A4%A9%E6%A8%9E+Location',
        alt: '天樞穴腹部定位示意圖',
        source: 'Placeholder abdominal atlas slot.'
      },
      videos: [
        { id: 'AgLK8keI4C0', title: '便秘自救穴位', desc: '天樞在腸胃類影片非常常見。' }
      ]
    },
    '氣海': {
      code: 'CV6',
      summary: '腹部中線常見保養穴位，常放進便秘、虛弱與腹部節律調整。',
      category: '腹部',
      relief: ['便秘'],
      location: '肚臍下約 1.5 寸，腹部正中線上。',
      method: '以掌心覆蓋作溫和按揉或熱敷式按壓 30 秒。',
      note: '比起猛攻，氣海更適合溫溫柔柔慢慢做，唔好一副要打 boss 咁。',
      warnings: ['腹部手術後、孕期或不明腹痛時避免自行按壓。'],
      image: {
        url: 'https://via.placeholder.com/900x700/F0ECE5/587A6C?text=CV6+%E6%B0%A3%E6%B5%B7+Location',
        fallback: 'https://via.placeholder.com/900x700/F0ECE5/587A6C?text=CV6+%E6%B0%A3%E6%B5%B7+Location',
        alt: '氣海穴腹部正中定位示意圖',
        source: 'Placeholder lower abdomen atlas slot.'
      },
      videos: [
        { id: 'AgLK8keI4C0', title: '腸胃穴位自救', desc: '可作腸胃按摩節奏參考。' }
      ]
    },
    '關元': {
      code: 'CV4',
      summary: '下腹中線常見穴位，常見於便秘與腹部保暖調整。',
      category: '腹部',
      relief: ['便秘'],
      location: '肚臍下約三寸，腹部正中線上。',
      method: '以掌心溫和覆按 20 至 30 秒，可配合腹式呼吸。',
      note: '關元偏向穩定型保養，唔係速效型爽點，但長期 routine 有價值。',
      warnings: ['孕期與腹部急性疼痛時避免自行重按。'],
      image: {
        url: 'https://via.placeholder.com/900x700/F0ECE6/587A6C?text=CV4+%E9%97%9C%E5%85%83+Location',
        fallback: 'https://via.placeholder.com/900x700/F0ECE6/587A6C?text=CV4+%E9%97%9C%E5%85%83+Location',
        alt: '關元穴下腹定位示意圖',
        source: 'Placeholder lower abdomen atlas slot.'
      },
      videos: [
        { id: 'AgLK8keI4C0', title: '腸胃穴位自救', desc: '搭配腹部穴位一起理解。' }
      ]
    },
    '支溝': {
      code: 'SJ6',
      summary: '前臂背側常見穴位，壓力型便秘與胸悶不順時常被提及。',
      category: '前臂',
      relief: ['便秘'],
      location: '手背腕橫紋上約三寸，尺橈骨之間。',
      method: '沿骨縫間用拇指按壓 20 至 30 秒，可左右交替。',
      note: '便秘唔一定係腸道懶，有時你個生活節奏先係元兇，支溝就成日喺壓力型便秘套餐度出現。',
      warnings: ['前臂有拉傷或腫脹時避免重壓。'],
      image: {
        url: 'https://via.placeholder.com/900x700/F1EEE7/587A6C?text=SJ6+%E6%94%AF%E6%BA%9D+Location',
        fallback: 'https://via.placeholder.com/900x700/F1EEE7/587A6C?text=SJ6+%E6%94%AF%E6%BA%9D+Location',
        alt: '支溝穴前臂背側定位示意圖',
        source: 'Placeholder dorsal forearm atlas slot.'
      },
      videos: [
        { id: 'AgLK8keI4C0', title: '便秘自救穴位', desc: '支溝示範較直接。' }
      ]
    },
    '太衝': {
      code: 'LR3',
      summary: '足背常見舒壓穴位，情緒火大、悶住、睡前難靜下來時很常見。',
      category: '足部',
      relief: ['自律神經失調', '情緒火爆', '情緒 down'],
      location: '足背第一、二趾骨之間往上推，至骨縫前方凹陷處。',
      method: '以拇指沿趾骨間縫向上推至凹陷處，按壓 20 至 30 秒。',
      note: '情緒燥、腦內小劇場無限連播時，太衝係常見降火角色。',
      warnings: ['足部受傷或發炎時避免重按。'],
      image: {
        url: 'https://via.placeholder.com/900x700/EEE9E1/587A6C?text=LR3+%E5%A4%AA%E8%A1%9D+Location',
        fallback: 'https://via.placeholder.com/900x700/EEE9E1/587A6C?text=LR3+%E5%A4%AA%E8%A1%9D+Location',
        alt: '太衝穴足背定位示意圖',
        source: 'Placeholder dorsum foot atlas slot.'
      },
      videos: [
        { id: 'N4DhyBkyQhI', title: '焦慮失眠穴道按壓', desc: '情緒與睡眠組可搭配理解。' }
      ]
    }
  }
};

const state = {
  activeCategory: 'all',
  selectedSymptom: '',
  selectedPoint: '',
  search: ''
};

const els = {
  categoryCount: document.getElementById('categoryCount'),
  pointCount: document.getElementById('pointCount'),
  symptomGrid: document.getElementById('symptom-grid'),
  pointGrid: document.getElementById('point-grid'),
  featuredGrid: document.getElementById('featured-grid'),
  filterChips: document.getElementById('filterChips'),
  searchInput: document.getElementById('searchInput'),
  resultsHint: document.getElementById('resultsHint'),
  selectedSymptomTrail: document.getElementById('selectedSymptomTrail'),
  jumpFeatured: document.getElementById('jumpFeatured'),
  modal: document.getElementById('detailModal'),
  modalBackdrop: document.getElementById('modalBackdrop'),
  modalClose: document.getElementById('modalClose'),
  modalCode: document.getElementById('modalCode'),
  modalTitle: document.getElementById('modalTitle'),
  modalSummary: document.getElementById('modalSummary'),
  modalTags: document.getElementById('modalTags'),
  modalReliefTags: document.getElementById('modalReliefTags'),
  modalLocation: document.getElementById('modalLocation'),
  modalWarnings: document.getElementById('modalWarnings'),
  modalMethod: document.getElementById('modalMethod'),
  modalNote: document.getElementById('modalNote'),
  modalImage: document.getElementById('modalImage'),
  modalImageCaption: document.getElementById('modalImageCaption'),
  modalVideos: document.getElementById('modalVideos'),
  videoTemplate: document.getElementById('videoTemplate'),
  referenceList: document.getElementById('referenceList')
};


const REFERENCES = [
  ['[1] 改善自律神經失調，5個穴位按摩助你放鬆', 'https://qqcare.tw/d/41863-%E6%94%B9%E5%96%84%E8%87%AA%E5%BE%8B%E7%A5%9E%E7%B6%93%E5%A4%B1%E8%AA%BF5%E5%80%8B%E7%A9%B4%E4%BD%8D%E6%8C%89%E6%91%A9%E5%8A%A9%E4%BD%A0%E6%94%BE%E9%AC%86'],
  ['[2] 按摩6穴道，調理自律神經不失調', 'https://heho.com.tw/archives/24458'],
  ['[3] 五大奇穴調全身', 'https://www.soundofhope.org/post/776257?lang=b5'],
  ['[4] 失眠穴位 HK01', 'https://www.hk01.com/%E5%81%A5%E5%BA%B7Easy/510351/%E5%A4%B1%E7%9C%A0%E7%A9%B4%E4%BD%8D-%E5%90%88%E8%B0%B7-%E7%99%BE%E6%9C%83-%E5%A4%AA%E8%A1%9D-%E9%A0%AD%E6%89%8B%E8%85%B39%E5%A4%A7%E5%AE%89%E7%9C%A0%E7%A9%B4%E4%BD%8D%E5%8A%A9%E6%94%BE%E9%AC%86%E8%82%8C%E8%82%89'],
  ['[5] 自律神經失調怎麼辦中醫穴位按摩', 'https://www.youtube.com/watch?v=bEfet_wfcc0'],
  ['[6] 自律神經失調必看！穴位按摩和中藥茶飲', 'https://www.youtube.com/watch?v=zE-ZaWx1L7k'],
  ['[7] 解除自律神經失調 27 個穴位全攻略', 'https://www.youtube.com/watch?v=FfbNykwk_x0'],
  ['[8] 失眠焦慮自律神經失調穴道按壓', 'https://www.youtube.com/watch?v=N4DhyBkyQhI'],
  ['[9] 肩頸急救穴大杼穴', 'https://www.youtube.com/watch?v=I49IlXsvFew'],
  ['[10] 上班族盯電腦 2 穴位解頭痛眼疲勞', 'https://www.uho.com.tw/article-48074.html'],
  ['[11] 眼睛疲勞頭痛怎麼辦', 'https://edh.tw/articles/znIlKSF'],
  ['[12] 舒緩眼部疲勞 5 大穴位', 'https://bookzone.cwgv.com.tw/article/30784'],
  ['[13] 眼睛酸又痛 按摩3穴位可緩解', 'https://news.ifeng.com/a/20150321/43389221_0.shtml'],
  ['[14] 消除眼睛疲勞前額頭痛', 'https://www.youtube.com/watch?v=RI3bxDVsHYI'],
  ['[15] 緩解腸胃不適 試試這五個秘穴按摩', 'https://constipate.healthyrss.com/668'],
  ['[16] 肩頸痠痛 4 穴位按摩', 'https://www.youtube.com/watch?v=eMSePjAQXvA'],
  ['[17] 久坐疲勞肩頸僵硬 3 穴位', 'https://www.youtube.com/watch?v=orMKsehvzjs'],
  ['[18] 消化不良胃脹氣按那個穴', 'https://health.udn.com/health/story/6035/352519'],
  ['[19] 高齡長者便秘穴位按摩', 'https://ihealth.vghtc.gov.tw/media/931'],
  ['[20] 便秘之中醫照護', 'https://www.chimei.org.tw/main/cmh_department/59012/info/7100/A7100201.html'],
  ['[21] 便秘怎麼辦 3 個自救穴位', 'https://www.youtube.com/watch?v=AgLK8keI4C0'],
  ['[22] 刺激放鬆穴位恢復生理節奏', 'https://health.udn.com/health/story/6035/7916564'],
  ['[23] 遠離失眠穴位按壓', 'https://www.youtube.com/watch?v=SgPZ6RPQ7fc'],
  ['[24] 中醫3招按摩改善失眠', 'https://www.youtube.com/watch?v=5phr4QTOaeE'],
  ['[25] 互動版人體穴位圖', 'http://cht.a-hospital.com/w/%E4%BA%92%E5%8A%A8%E7%89%88%E4%BA%BA%E4%BD%93%E7%A9%B4%E4%BD%8D%E5%9B%BE'],
  ['[26] 經穴穴位圖', 'http://cht.a-hospital.com/w/%E7%B6%93%E7%A9%B4%E7%A9%B4%E4%BD%8D%E5%9B%BE'],
  ['[27] 中醫常用穴位介紹 PDF', 'https://department.cych.org.tw/upload/files/620/%E4%B8%AD%E9%86%AB%E5%B8%B8%E7%94%A8%E7%A9%B4%E4%BD%8D%E4%BB%8B%E7%B4%B9.pdf'],
  ['[28] Chinese Acupressure Charts PDF', 'https://www.acusansthan-ald.in/admin/UserFiles/34/file/Chinese%20Acupressure%20Charts.pdf'],
  ['[29] 人體穴位圖解 App', 'https://play.google.com/store/apps/details?id=com.myapp.li.rentixuewei&hl=zh'],
  ['[30] 舒緩痛症穴位按壓 肩頸痛', 'https://www.youtube.com/watch?v=kG4i6GnMAa4'],
  ['[31] 自律神經失調不會好？中醫教你自救', 'https://mingtangclinics.com/17320'],
  ['[32] 80秒手指按摩平衡自律神經', 'https://health.tvbs.com.tw/tcm/350593'],
  ['[33] 頸椎僵硬百病出 穴道健腦操', 'https://www.youtube.com/watch?v=LOxHSkB14jg'],
  ['[34] 不再失眠 3 穴道按摩', 'https://www.youtube.com/watch?v=QtTYTtNeIFU'],
  ['[35] 四點醒來嗎 按這三個穴位', 'https://music.youtube.com/podcast/yTpJ7ZZ0OkY'],
  ['[36] 完整的人体穴位图及功效PDF', 'https://www.scribd.com/document/422842804/%E5%AE%8C%E6%95%B4%E7%9A%84%E4%BA%BA%E4%BD%93%E7%A9%B4%E4%BD%8D%E5%9B%BE%E5%8F%8A%E5%8A%9F%E6%95%88-pdf'],
  ['[37] TCM Acupuncture Index App', 'https://play.google.com/store/apps/details?id=ethanapp.acupointsceng'],
  ['[38] Acupuncture Points Chinese Names PDF', 'https://www.scribd.com/document/128335847/Acpuncture-Points-Cinese-Names'],
  ['[39] 人体全经络穴位图完整版', 'https://m.baidu.com/bh/m/detail/ar_8218553725976438437?frsrcid=rec'],
  ['[40] Chinese Auriculotherapy Chart', 'https://chiro.org/acupuncture/ABSTRACTS/FILES/Chinese_Ear_Points.pdf'],
  ['[41] Chinese meridians Wikimedia Commons', 'https://commons.wikimedia.org/wiki/File:Chinese_meridians.JPG'],
  ['[42] 壓力大到想逃跑？按這穴位就對了', 'https://www.youtube.com/watch?v=qJ0oqmykcHM'],
  ['[43] 穴位全集', 'http://www.iaees.org/publications/software/acudata/acupoints.asp'],
  ['[44] 壓力大又熬夜？中醫教你調回自律神經', 'https://www.youtube.com/watch?v=7Clq64g-Xxc']
];

const featuredOrder = ['百會', '風池', '神門', '內關', '足三里', '三陰交', '合谷', '曲池', '安眠', '委中', '攢竹', '睛明', '魚腰', '承泣', '瞳子髎', '天樞', '氣海', '關元', '支溝', '太衝'];
let lastFocusedElement = null;

function init() {
  els.categoryCount.textContent = DATA.categories.length;
  els.pointCount.textContent = Object.keys(DATA.points).length;

  bindThemeToggle();
  renderFilters();
  renderSymptoms();
  renderFeatured();
  renderPoints();
  renderReferences();
  bindEvents();
}

function bindThemeToggle() {
  const toggle = document.querySelector('[data-theme-toggle]');
  const root = document.documentElement;
  let currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  root.setAttribute('data-theme', currentTheme);
  updateThemeLabel(toggle, currentTheme);

  toggle.addEventListener('click', () => {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', currentTheme);
    updateThemeLabel(toggle, currentTheme);
  });
}

function updateThemeLabel(toggle, theme) {
  toggle.setAttribute('aria-label', theme === 'dark' ? '切換到淺色模式' : '切換到深色模式');
  toggle.querySelector('.theme-icon').textContent = theme === 'dark' ? '☀' : '◐';
}

function bindEvents() {
  els.searchInput.addEventListener('input', (event) => {
    state.search = event.target.value.trim();
    renderSymptoms();
    renderPoints();
  });

  els.jumpFeatured.addEventListener('click', () => {
    document.getElementById('featuredPoints').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  els.modalClose.addEventListener('click', closeModal);
  els.modalBackdrop.addEventListener('click', closeModal);
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !els.modal.hidden) closeModal();
  });

  document.querySelectorAll('.tab-button').forEach((button) => {
    button.addEventListener('click', () => switchTab(button.dataset.tab));
  });
}

function renderFilters() {
  const chips = [{ id: 'all', label: '全部分類' }, ...DATA.categories.map((cat) => ({ id: cat.id, label: cat.name }))];
  els.filterChips.innerHTML = '';
  chips.forEach((chip) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `filter-chip ${state.activeCategory === chip.id ? 'is-active' : ''}`;
    button.textContent = chip.label;
    button.setAttribute('role', 'tab');
    button.setAttribute('aria-selected', String(state.activeCategory === chip.id));
    button.addEventListener('click', () => {
      state.activeCategory = chip.id;
      state.selectedSymptom = '';
      renderFilters();
      renderSymptoms();
      renderPoints();
    });
    els.filterChips.appendChild(button);
  });
}

function getFilteredCategories() {
  const query = state.search.toLowerCase();
  return DATA.categories.filter((category) => {
    const categoryMatch = state.activeCategory === 'all' || state.activeCategory === category.id;
    if (!categoryMatch) return false;
    if (!query) return true;
    const haystack = [category.name, category.description, ...category.symptoms].join(' ').toLowerCase();
    return haystack.includes(query);
  });
}

function renderSymptoms() {
  const categories = getFilteredCategories();
  els.symptomGrid.innerHTML = '';

  if (!categories.length) {
    els.symptomGrid.innerHTML = `<div class="empty-state">搜尋唔到對應分類。你打字比你個睡眠節律仲混亂，試下換個關鍵字。</div>`;
    return;
  }

  categories.forEach((category) => {
    const card = document.createElement('article');
    card.className = 'symptom-card';
    card.innerHTML = `
      <div class="card-top">
        <div class="card-icon" aria-hidden="true">${category.icon}</div>
        <div>
          <h3>${category.name}</h3>
          <p>${category.description}</p>
        </div>
      </div>
      <div class="card-bottom">
        <div class="inline-tags">
          ${category.symptoms.slice(0, 4).map((symptom) => `<span class="tag">${symptom}</span>`).join('')}
          ${category.symptoms.length > 4 ? `<span class="tag">+${category.symptoms.length - 4} more</span>` : ''}
        </div>
        <div class="inline-tags">
          ${category.symptoms.map((symptom) => `<button type="button" class="tag symptom-tag" data-symptom="${symptom}">${symptom}</button>`).join('')}
        </div>
      </div>
    `;

    card.querySelectorAll('.symptom-tag').forEach((button) => {
      button.addEventListener('click', () => {
        state.selectedSymptom = button.dataset.symptom;
        renderPoints();
        document.querySelector('.results-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });

    els.symptomGrid.appendChild(card);
  });
}

function getVisiblePoints() {
  const query = state.search.toLowerCase();

  if (state.selectedSymptom) {
    return (DATA.symptomMap[state.selectedSymptom] || []).filter((name) => {
      const point = DATA.points[name];
      if (!point) return false;
      if (!query) return true;
      const haystack = [name, point.code, point.summary, point.category, ...point.relief].join(' ').toLowerCase();
      return haystack.includes(query);
    });
  }

  const allPointNames = Object.keys(DATA.points);
  if (!query) return [];
  return allPointNames.filter((name) => {
    const point = DATA.points[name];
    const haystack = [name, point.code, point.summary, point.category, ...point.relief].join(' ').toLowerCase();
    return haystack.includes(query);
  });
}

function renderPoints() {
  const points = getVisiblePoints();
  els.pointGrid.innerHTML = '';

  if (state.selectedSymptom) {
    els.selectedSymptomTrail.textContent = `目前查看：${state.selectedSymptom}`;
    els.resultsHint.textContent = `${state.selectedSymptom} 對應 ${points.length} 個可先查看的穴位。`;
  } else if (state.search) {
    els.selectedSymptomTrail.textContent = `搜尋結果：${state.search}`;
    els.resultsHint.textContent = `你未指定症狀，所以先顯示與搜尋字相關的穴位。`;  
  } else {
    els.selectedSymptomTrail.textContent = '';
    els.resultsHint.textContent = '請先選擇一個不適症狀，系統就會顯示對應穴位卡片。';
  }

  if (!points.length) {
    els.pointGrid.innerHTML = `<div class="empty-state">${state.selectedSymptom ? '呢個症狀暫時無結果。' : '請先選症狀，或者直接搜尋穴位。'} 別再同時開十個分頁期待宇宙自己整理你人生。</div>`;
    return;
  }

  points.forEach((name) => {
    const point = DATA.points[name];
    const card = document.createElement('button');
    card.type = 'button';
    card.className = `point-card ${state.selectedPoint === name ? 'is-selected' : ''}`;
    card.innerHTML = `
      <div class="card-top">
        <div>
          <p class="section-kicker">${point.code}</p>
          <h3>${name}</h3>
        </div>
        <p>${point.summary}</p>
      </div>
      <div class="card-bottom">
        <div class="inline-tags">
          ${point.relief.slice(0, 4).map((item) => `<span class="tag">${item}</span>`).join('')}
          ${point.relief.length > 4 ? `<span class="tag">+${point.relief.length - 4}</span>` : ''}
        </div>
        <div class="point-meta"><span>${point.category}</span><span>查看詳情 →</span></div>
      </div>
    `;

    card.addEventListener('click', () => openModal(name, card));
    els.pointGrid.appendChild(card);
  });
}

function renderFeatured() {
  els.featuredGrid.innerHTML = '';
  featuredOrder.forEach((name) => {
    const point = DATA.points[name];
    if (!point) return;
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'featured-point';
    button.innerHTML = `
      <div class="card-top">
        <p class="section-kicker">${point.code}</p>
        <h3>${name}</h3>
        <p>${point.summary}</p>
      </div>
      <div class="point-meta"><span>${point.category}</span><span>打開 →</span></div>
    `;
    button.addEventListener('click', () => openModal(name, button));
    els.featuredGrid.appendChild(button);
  });
}

function openModal(name, trigger) {
  const point = DATA.points[name];
  if (!point) return;
  lastFocusedElement = trigger;
  state.selectedPoint = name;

  els.modalCode.textContent = point.code || '';
  els.modalTitle.textContent = name;
  els.modalSummary.textContent = point.summary;
  els.modalLocation.textContent = point.location;
  els.modalMethod.textContent = point.method;
  els.modalNote.textContent = point.note;

  els.modalTags.innerHTML = [point.category, point.code].filter(Boolean).map((tag) => `<span>${tag}</span>`).join('');
  els.modalReliefTags.innerHTML = point.relief.map((tag) => `<span>${tag}</span>`).join('');
  els.modalWarnings.innerHTML = point.warnings.map((warning) => `<li>${warning}</li>`).join('');

  els.modalImage.src = point.image.url || point.image.fallback;
  els.modalImage.alt = point.image.alt;
  els.modalImage.onerror = () => { els.modalImage.src = point.image.fallback; };
  els.modalImageCaption.textContent = point.image.source;

  els.modalVideos.innerHTML = '';
  point.videos.slice(0, 2).forEach((video) => {
    const fragment = els.videoTemplate.content.cloneNode(true);
    const article = fragment.querySelector('.video-card');
    const preview = fragment.querySelector('.video-preview');
    const thumb = fragment.querySelector('.video-thumb');
    const title = fragment.querySelector('h4');
    const desc = fragment.querySelector('p');
    thumb.src = `https://img.youtube.com/vi/${video.id}/mqdefault.jpg`;
    thumb.alt = `${name} 相關 YouTube 預覽圖：${video.title}`;
    title.textContent = video.title;
    desc.textContent = video.desc;
    preview.addEventListener('click', () => {
      const iframe = document.createElement('iframe');
      iframe.className = 'video-frame';
      iframe.src = `https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`;
      iframe.title = video.title;
      iframe.loading = 'lazy';
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
      iframe.allowFullscreen = true;
      preview.replaceWith(iframe);
    });
    els.modalVideos.appendChild(fragment);
  });

  switchTab('overview');
  els.modal.hidden = false;
  els.modalBackdrop.hidden = false;
  document.body.style.overflow = 'hidden';
  els.modalClose.focus();
}

function closeModal() {
  els.modal.hidden = true;
  els.modalBackdrop.hidden = true;
  document.body.style.overflow = '';
  state.selectedPoint = '';
  if (lastFocusedElement) lastFocusedElement.focus();
}

function switchTab(tabName) {
  document.querySelectorAll('.tab-button').forEach((button) => {
    const active = button.dataset.tab === tabName;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-selected', String(active));
  });

  document.querySelectorAll('.tab-panel').forEach((panel) => {
    const active = panel.dataset.panel === tabName;
    panel.classList.toggle('is-active', active);
    panel.hidden = !active;
  });
}

init();

function renderReferences() {
  if (!els.referenceList) return;
  els.referenceList.innerHTML = REFERENCES.map(([title, url]) => `
    <article class="reference-item">
      <p><strong>${title}</strong></p>
      <a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>
    </article>
  `).join('');
}
