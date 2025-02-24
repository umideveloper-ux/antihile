import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const features = [
  {
    title: "Reverse Engineering Ekibi",
    description: "Senior seviye uzmanlardan oluşan ekibimiz, hile yazılımlarını derinlemesine analiz ederek güvenlik açıklarını tespit eder.",
    gradient: "from-blue-500 to-purple-500",
    icon: "🔍"
  },
  {
    title: "Kernel Seviye Analiz",
    description: "Ring0 seviyesinde çalışan hile yazılımlarını tespit edip, bellek manipülasyonlarını engelliyoruz.",
    gradient: "from-purple-500 to-pink-500",
    icon: "⚡"
  },
  {
    title: "AI Destekli Tespit",
    description: "Yapay zeka algoritmalarımız, oyuncu davranışlarını ve yazılım kalıplarını analiz ederek şüpheli aktiviteleri belirler.",
    gradient: "from-pink-500 to-red-500",
    icon: "🧠"
  },
  {
    title: "Sızma Testi Uzmanları",
    description: "Profesyonel ekibimiz sürekli olarak sistemimizi test ederek olası güvenlik açıklarını kapatır.",
    gradient: "from-red-500 to-yellow-500",
    icon: "🛡️"
  },
  {
    title: "Gerçek Zamanlı Koruma",
    description: "7/24 aktif koruma sistemimiz, hile girişimlerini anında tespit edip engelleyerek güvenli bir oyun ortamı sağlar.",
    gradient: "from-yellow-500 to-green-500",
    icon: "⚔️"
  },
  {
    title: "Şifreleme ve Güvenlik",
    description: "Military-grade şifreleme algoritmalarımız ile oyun verileriniz maksimum güvenlikle korunur.",
    gradient: "from-green-500 to-blue-500",
    icon: "🔒"
  }
];

const detectedCheats = [
  {
    game: "CS2",
    name: "AimStar Pro",
    type: "Aimbot & ESP",
    status: "Çözüldü",
    date: "24.02.2025"
  },
  {
    game: "Knight Online",
    name: "Anhilator Makro",
    type: "Bot & Otomasyon",
    status: "Çözüldü",
    date: "23.02.2025"
  },
  {
    game: "PUBG",
    name: "BattleAssist",
    type: "Macro & Recoil",
    status: "Çözüldü",
    date: "22.02.2025"
  }
];

const TerminalTypewriter = ({ messages }: { messages: string[] }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const typeSpeed = 150; // Yazma hızı
    const deleteSpeed = 50; // Silme hızı
    const pauseBeforeDelete = 1000; // Silmeden önce bekleme
    
    const type = () => {
      const currentMessage = messages[currentMessageIndex];
      
      if (!isDeleting) {
        if (displayText.length < currentMessage.length) {
          // Yazma
          setDisplayText(currentMessage.slice(0, displayText.length + 1));
        } else {
          // Yazma bitti, silmeye hazırlan
          setTimeout(() => setIsDeleting(true), pauseBeforeDelete);
        }
      } else if (isDeleting) {
        if (displayText.length > 0) {
          // Silme
          setDisplayText(displayText.slice(0, displayText.length - 1));
        } else {
          // Silme bitti, sonraki mesaja geç
          setIsDeleting(false);
          setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
        }
      }
    };

    const timer = setTimeout(
      type,
      isDeleting ? deleteSpeed : typeSpeed
    );

    return () => clearTimeout(timer);
  }, [displayText, currentMessageIndex, messages, isDeleting]);

  return (
    <div className="whitespace-nowrap flex items-center justify-center">
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
        className="inline-block mr-1"
      >
        █
      </motion.span>
      <span className="text-gray-300">
        {displayText}
      </span>
    </div>
  );
};

const TypewriterStatus = () => {
  const [status, setStatus] = useState("HEDEF TARANIYOR");
  
  useEffect(() => {
    const statuses = [
      "HEDEF TARANIYOR",
      "VERİ TOPLANIYOR",
      "ZAAFIYET ARANIYOR",
      "SIZMA BAŞLATILDI",
      "SİSTEM HACKLENİYOR"
    ];
    
    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % statuses.length;
      setStatus(statuses[currentIndex]);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <span className="text-red-500 font-bold">
      {status}
    </span>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-orbitron overflow-x-hidden">
      {/* Background Animation */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-purple-500/20 animate-pulse-slow" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,136,0.1),transparent_50%)]" />
      </div>

      {/* Header Section */}
      <header className="min-h-[50vh] flex flex-col items-center justify-start relative pt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10 px-4"
        >
          <motion.div
            animate={{ 
              textShadow: [
                "0 0 7px #00ff88",
                "0 0 10px #00ff88",
                "0 0 21px #00ff88",
                "0 0 42px #00ff88",
                "0 0 82px #00ff88",
                "0 0 92px #00ff88",
                "0 0 102px #00ff88",
                "0 0 151px #00ff88",
              ]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="flex items-center justify-center gap-4"
          >
            <h1 className="text-7xl md:text-8xl font-bold bg-gradient-to-r from-primary via-blue-500 to-accent bg-clip-text text-transparent">
              ANTİ
            </h1>
            <h1 className="text-7xl md:text-8xl font-bold bg-gradient-to-r from-accent via-purple-500 to-primary bg-clip-text text-transparent">
              HİLE
            </h1>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-2xl mb-8 text-gray-300"
          >
            Hile Tespit ve Analiz Platformu
          </motion.p>

          {/* Emotional Impact Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="max-w-4xl mx-auto text-center mt-16"
          >
            <div className="relative py-8">
              {/* Matrix Code Rain Background */}
              <div className="absolute inset-0 opacity-10">
                {Array.from({ length: 20 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-xs font-mono text-primary"
                    style={{ left: `${i * 5}%` }}
                    animate={{
                      y: [-20, 100],
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.1,
                      ease: "linear"
                    }}
                  >
                    {Math.random() > 0.5 ? '01' : '10'}
                  </motion.div>
                ))}
              </div>

              {/* Impact Statements */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="text-center px-6"
                >
                  <div className="text-primary text-lg mb-2 font-mono">
                    <span className="text-accent">[</span> SYS_INTEGRITY <span className="text-accent">]</span>
                  </div>
                  <p className="text-gray-400 text-sm">Oyun sistemlerinin güvenliğini koruyoruz</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="text-center px-6"
                >
                  <div className="text-primary text-lg mb-2 font-mono">
                    <span className="text-accent">&lt;</span> SECURE_GAMING <span className="text-accent">/&gt;</span>
                  </div>
                  <p className="text-gray-400 text-sm">Hile kodlarını tespit edip analiz ediyoruz</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  className="text-center px-6"
                >
                  <div className="text-primary text-lg mb-2 font-mono">
                    <span className="text-accent">&#123;</span> COMMUNITY_POWER <span className="text-accent">&#125;</span>
                  </div>
                  <p className="text-gray-400 text-sm">Topluluk ile güvenli oyun ekosistemi</p>
                </motion.div>
              </div>

              {/* Terminal Style Quote */}
              <motion.div
                className="mt-12 relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
              >
                <div className="bg-black/50 backdrop-blur-sm p-4 rounded-lg border border-primary/20">
                  <div className="font-mono text-sm text-gray-500 mb-2 text-center">root@antihile:~# echo $MISSION</div>
                  <div className="h-[28px] relative overflow-hidden flex justify-center items-center">
                    <TerminalTypewriter 
                      messages={[
                        "Güvenli oyun deneyimi için çalışıyoruz",
                        "Hile yazılımlarını analiz ediyoruz",
                        "Oyun güvenliğini maksimuma çıkarıyoruz",
                        "Topluluk ile birlikte güçleniyoruz",
                        "Adil oyun ortamı sağlıyoruz"
                      ]}
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </header>

      {/* Cyber Wave Divider */}
      <div className="relative h-auto -mt-16 py-12">
        <div className="absolute inset-0">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10" />
          
          {/* Matrix-like Effect */}
          <div className="absolute inset-0 opacity-20">
            {Array.from({ length: 15 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ y: -20, opacity: 0 }}
                animate={{ 
                  y: ['0%', '100%'],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "linear"
                }}
                className="absolute text-sm font-mono text-primary"
                style={{ left: `${i * 7}%` }}
              >
                {Math.random() > 0.5 ? '01' : '10'}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-20">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="backdrop-blur-sm bg-black/30 p-6 rounded-lg border border-primary/20 hover:border-primary/50 transition-all duration-300"
            >
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-primary mb-3">Vizyonumuz</h3>
              <p className="text-gray-400">
                Oyun dünyasında haksız rekabeti önlemek ve tüm oyuncular için adil bir oyun deneyimi sağlamak.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="backdrop-blur-sm bg-black/30 p-6 rounded-lg border border-primary/20 hover:border-primary/50 transition-all duration-300"
            >
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold text-primary mb-3">Misyonumuz</h3>
              <p className="text-gray-400">
                Hile yazılımlarını analiz ederek oyun geliştiricilerine ve topluluğa şeffaf bilgi sağlamak.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="backdrop-blur-sm bg-black/30 p-6 rounded-lg border border-primary/20 hover:border-primary/50 transition-all duration-300"
            >
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-primary mb-3">Değerlerimiz</h3>
              <p className="text-gray-400">
                Topluluk odaklı, şeffaf ve etik değerlere bağlı kalarak oyun güvenliğini sağlamak.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Son Tespitler Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          <span className="text-primary">Hedefteki</span> 3.Parti Yazılımlar
        </h2>
        <div className="flex justify-center mb-12">
          <motion.div
            animate={{
              opacity: [1, 0.5, 1],
              scale: [1, 1.02, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full"
          >
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            <span className="text-primary font-mono text-sm">DURUM: </span>
            <TypewriterStatus />
          </motion.div>
        </div>
        <div className="grid gap-6">
          {[
            {
              name: "ANHILATOR MAKRO",
              game: "Knight Online",
              type: "HACKLENDİ",
              date: "23.02.2025",
              status: "Veri Sızıntısı: %87"
            },
            {
              name: "KECOON MAKRO",
              game: "Knight Online",
              type: "HACKLENİYOR",
              date: "24.02.2025",
              status: "Şifreleme Kırılıyor: %65"
            },
            {
              name: "MRX MAKRO",
              game: "Knight Online",
              type: "HEDEFTE",
              date: "24.02.2025",
              status: "Analiz Başladı: %23"
            }
          ].map((detection, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-black/40 backdrop-blur border border-primary/20 rounded-lg p-4 hover:border-primary/40 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <motion.span 
                      className="text-2xl"
                      animate={{
                        rotateY: [0, 360]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      🎯
                    </motion.span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary">{detection.name}</h3>
                    <p className="text-sm text-gray-400">{detection.game}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-mono text-primary">{detection.type}</p>
                  <p className="text-xs text-gray-500">{detection.date}</p>
                  <motion.p 
                    className="text-xs text-primary/80 mt-1"
                    animate={{
                      opacity: [1, 0.5, 1]
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity
                    }}
                  >
                    {detection.status}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Latest Detections Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
          >
            Son Tespitler
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {detectedCheats.map((cheat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="p-6 rounded-lg bg-black/30 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-primary">{cheat.name}</h3>
                    <p className="text-sm text-gray-400">{cheat.game}</p>
                  </div>
                  <span className={`text-sm px-2 py-1 rounded ${
                    cheat.status === 'Çözüldü' 
                      ? 'bg-green-500/20 text-green-400'
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {cheat.status}
                  </span>
                </div>
                <p className="text-gray-400 mb-2">{cheat.type}</p>
                <div className="text-sm text-accent">{cheat.date}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
          >
            Çekirdek Teknolojiler
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="p-6 rounded-lg bg-black/30 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-300"
              >
                <div className={`text-4xl mb-4`}>{feature.icon}</div>
                <div className={`h-2 w-20 mb-4 rounded bg-gradient-to-r ${feature.gradient}`} />
                <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Advanced Features Section */}
      <section className="py-20 relative z-10 bg-black/50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
          >
            Gelişmiş Özellikler
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {[
              {
                title: "Reverse Engineering Ekibi",
                description: "Senior seviye uzmanlardan oluşan ekibimiz, hile yazılımlarını derinlemesine analiz ederek güvenlik açıklarını tespit eder.",
                tech: "Computer Vision AI"
              },
              {
                title: "Kernel Seviye Analiz",
                description: "Ring0 seviyesinde çalışan hile yazılımlarını tespit edip, bellek manipülasyonlarını engelliyoruz.",
                tech: "Deep Packet Inspection"
              },
              {
                title: "AI Destekli Tespit",
                description: "Yapay zeka algoritmalarımız, oyuncu davranışlarını ve yazılım kalıplarını analiz ederek şüpheli aktiviteleri belirler.",
                tech: "Machine Learning"
              },
              {
                title: "Sızma Testi Uzmanları",
                description: "Profesyonel ekibimiz sürekli olarak sistemimizi test ederek olası güvenlik açıklarını kapatır.",
                tech: "Runtime Protection"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="p-6 rounded-lg bg-gradient-to-br from-black/50 to-primary/5 backdrop-blur-sm border border-primary/20"
              >
                <h3 className="text-xl font-bold mb-2 text-primary">{feature.title}</h3>
                <p className="text-gray-400 mb-4">{feature.description}</p>
                <div className="text-sm text-accent">Teknoloji: {feature.tech}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Analiz Katmanları */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-primary">Analiz</span> Katmanları
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Çok katmanlı analiz sistemimiz ile hile yazılımlarını derinlemesine inceliyor, 
              her seviyede güvenlik açıklarını tespit ediyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Statik Analiz",
                features: [
                  "Kaynak Kod Analizi",
                  "Tersine Mühendislik",
                  "İmza Tespiti",
                  "API Çağrıları",
                  "Şüpheli Fonksiyonlar"
                ],
                icon: "🔬",
                gradient: "from-blue-500 to-purple-500"
              },
              {
                title: "Dinamik Analiz",
                features: [
                  "Bellek İzleme",
                  "Davranış Analizi",
                  "Sistem Çağrıları",
                  "Network Trafiği",
                  "DLL Enjeksiyonları"
                ],
                icon: "⚡",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                title: "AI Analizi",
                features: [
                  "Makine Öğrenimi",
                  "Patern Tespiti",
                  "Anomali Tespiti",
                  "Davranış Profili",
                  "Risk Skorlaması"
                ],
                icon: "🧠",
                gradient: "from-pink-500 to-red-500"
              }
            ].map((layer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative group"
              >
                <div className="bg-black/40 backdrop-blur p-8 rounded-lg border border-primary/20 hover:border-primary/40 transition-colors">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r flex items-center justify-center text-2xl"
                      style={{
                        backgroundImage: `linear-gradient(to right, ${layer.gradient.split(' ')[1]}, ${layer.gradient.split(' ')[3]})`
                      }}
                    >
                      {layer.icon}
                    </div>
                    <h3 className="text-xl font-bold">{layer.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {layer.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: (index * 0.2) + (featureIndex * 0.1) }}
                        className="flex items-center gap-2 text-gray-300"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity rounded-lg"
                  style={{
                    backgroundImage: `linear-gradient(to right, ${layer.gradient.split(' ')[1]}, ${layer.gradient.split(' ')[3]})`
                  }}
                ></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
