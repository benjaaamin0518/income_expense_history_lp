import React from "react";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Wallet,
  Users,
  Shield,
  Brain,
  CheckCircle,
  Calendar,
  Download,
  Search,
  Github,
  Coffee,
  Gamepad2,
  Heart,
  Briefcase,
  Star,
  MessageCircle,
  Eye,
  Zap,
  TrendingUp,
  UserPlus,
  Bell,
  BarChart3,
  Sparkles,
  ArrowRight,
  Play,
} from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-xl z-50 border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div 
              className="flex items-center space-x-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl blur opacity-75"></div>
                <div className="relative w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
                  <Wallet className="w-6 h-6 text-white" />
                </div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                借金ダッシュボード
              </span>
            </motion.div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#how-to-use" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:scale-105">
                使い方
              </a>
              <a href="#features" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:scale-105">
                機能
              </a>
              <a href="#scenes" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:scale-105">
                利用シーン
              </a>
              <a href="#advantages" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:scale-105">
                選ばれる理由
              </a>
              <a href="#roadmap" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:scale-105">
                今後の予定
              </a>
              <a href="https://income-expense-history.vercel.app/login">
                <motion.button 
                  className="relative overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2.5 rounded-xl font-medium group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative">無料で始める</span>
                </motion.button>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 text-cyan-300 px-6 py-3 rounded-full text-sm font-medium backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Sparkles className="w-4 h-4" />
                <span>AI予測で安心の貸し借り管理</span>
              </motion.div>
              
              <motion.h1 
                className="text-6xl lg:text-7xl font-bold leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <span className="text-white">友達との</span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  お金のやりとり
                </span>
                <br />
                <span className="text-white">をスマートに</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-300 leading-relaxed max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                「あとで返すね」が曖昧になる前に。<br />
                <span className="text-cyan-400 font-semibold">AIが返済予測</span>をしてくれるから、
                お互い安心してお金の貸し借りができます。
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <a href="https://income-expense-history.vercel.app/login">
                  <motion.button 
                    className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-2xl shadow-cyan-500/25"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative flex items-center">
                      今すぐ無料で試す
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </motion.button>
                </a>
                <motion.button 
                  className="group flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                    <Play className="w-5 h-5 ml-1" />
                  </div>
                  <span className="font-medium">デモを見る</span>
                </motion.button>
              </motion.div>
              
              <motion.div 
                className="flex items-center space-x-8 text-sm text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>30秒で登録完了</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-green-400" />
                  <span>データ完全保護</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-green-400" />
                  <span>永久無料</span>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <div className="absolute -inset-8 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-2xl"></div>
              <motion.div
                className="relative"
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F2235105%2Fc284866f-07c2-4ae5-b4e7-b622786fbe34.png?ixlib=rb-4.0.0&auto=format&gif-q=60&q=75&s=77eaa8739d7a194b3b4eeee72e65785f"
                  alt="借金ダッシュボード Dashboard"
                  className="w-full rounded-3xl shadow-2xl border border-gray-800/50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">30秒</div>
              <div className="text-gray-400">登録完了時間</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">100%</div>
              <div className="text-gray-400">データ保護</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">AI</div>
              <div className="text-gray-400">返済予測</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">無料</div>
              <div className="text-gray-400">永久利用</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How to Use Section */}
      <section id="how-to-use" className="py-24 relative">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center space-y-6 mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                3ステップ
              </span>
              <span className="text-white">で簡単スタート</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              アカウント登録から友達との貸し借り記録まで、<span className="text-cyan-400 font-semibold">たった3分</span>で完了
            </p>
          </motion.div>

          <div className="space-y-24">
            {/* Step 1 */}
            <motion.div 
              className="flex flex-col lg:flex-row items-center gap-16"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="lg:w-1/2 space-y-8">
                <div className="flex items-center space-x-6">
                  <motion.div 
                    className="relative"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur opacity-75"></div>
                    <div className="relative w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      1
                    </div>
                  </motion.div>
                  <h3 className="text-3xl font-bold text-white">
                    アカウント登録
                    <span className="text-cyan-400 ml-2">(30秒)</span>
                  </h3>
                </div>
                <div className="space-y-6 text-gray-300">
                  <p className="text-lg leading-relaxed">
                    「アカウントをお持ちではない方はこちら」ボタンから<span className="text-cyan-400 font-semibold">簡単登録</span>
                  </p>
                  <div className="space-y-4">
                    {[
                      "メールアドレスとパスワードを入力",
                      "登録完了後、同じ情報でログイン",
                      "面倒な認証メールなどは一切なし"
                    ].map((item, index) => (
                      <motion.div 
                        key={index}
                        className="flex items-center space-x-4"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                        <span>{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
              <motion.div 
                className="lg:w-1/2"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-xl"></div>
                  <div className="relative bg-gray-900/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-800/50 shadow-2xl">
                    <div className="space-y-6">
                      <div className="h-8 bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg w-3/4"></div>
                      <div className="space-y-4">
                        <div className="h-12 bg-gray-800 rounded-xl border border-gray-700"></div>
                        <div className="h-12 bg-gray-800 rounded-xl border border-gray-700"></div>
                        <motion.div 
                          className="h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl text-white flex items-center justify-center font-medium shadow-lg shadow-cyan-500/25"
                          whileHover={{ scale: 1.02 }}
                        >
                          アカウント作成
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Step 2 */}
            <motion.div 
              className="flex flex-col lg:flex-row-reverse items-center gap-16"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="lg:w-1/2 space-y-8">
                <div className="flex items-center space-x-6">
                  <motion.div 
                    className="relative"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-75"></div>
                    <div className="relative w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      2
                    </div>
                  </motion.div>
                  <h3 className="text-3xl font-bold text-white">
                    ダッシュボードにアクセス
                  </h3>
                </div>
                <div className="space-y-6 text-gray-300">
                  <p className="text-lg leading-relaxed">
                    ログイン後、すぐに使える<span className="text-blue-400 font-semibold">美しいダッシュボード</span>画面が表示されます
                  </p>
                  <div className="space-y-4">
                    {[
                      "借金・貸付の状況が一目で分かるグラフ",
                      "「＋」ボタンで新しい取引を簡単追加",
                      "直感的で分かりやすいデザイン"
                    ].map((item, index) => (
                      <motion.div 
                        key={index}
                        className="flex items-center space-x-4"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
                        <span>{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
              <motion.div 
                className="lg:w-1/2"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative">
                  <div className="absolute -inset-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl"></div>
                  <img
                    src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F2235105%2Fc284866f-07c2-4ae5-b4e7-b622786fbe34.png?ixlib=rb-4.0.0&auto=format&gif-q=60&q=75&s=77eaa8739d7a194b3b4eeee72e65785f"
                    alt="ダッシュボード画面"
                    className="relative w-full rounded-3xl shadow-2xl border border-gray-800/50"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
                </div>
              </motion.div>
            </motion.div>

            {/* Step 3 */}
            <motion.div 
              className="flex flex-col lg:flex-row items-center gap-16"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="lg:w-1/2 space-y-8">
                <div className="flex items-center space-x-6">
                  <motion.div 
                    className="relative"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full blur opacity-75"></div>
                    <div className="relative w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      3
                    </div>
                  </motion.div>
                  <h3 className="text-3xl font-bold text-white">
                    友達を招待して取引記録
                  </h3>
                </div>
                <div className="space-y-6 text-gray-300">
                  <p className="text-lg leading-relaxed">
                    「＋」ボタンから友達を追加して、<span className="text-purple-400 font-semibold">貸し借りを記録開始</span>
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div 
                      className="p-6 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800/50"
                      whileHover={{ y: -5, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h4 className="font-semibold text-purple-300 mb-3 flex items-center">
                        <UserPlus className="w-4 h-4 mr-2" />
                        新規ユーザーの場合
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li>• 名前だけで仮登録OK</li>
                        <li>• QRコードで本登録完了</li>
                        <li>• データは全て引き継がれる</li>
                      </ul>
                    </motion.div>
                    <motion.div 
                      className="p-6 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800/50"
                      whileHover={{ y: -5, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h4 className="font-semibold text-cyan-300 mb-3 flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        既存ユーザーの場合
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li>• メールアドレスを入力</li>
                        <li>• 招待後、すぐに取引開始</li>
                      </ul>
                    </motion.div>
                  </div>
                </div>
              </div>
              <motion.div 
                className="lg:w-1/2"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl"></div>
                  <div className="relative bg-gray-900/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-800/50 shadow-2xl">
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div className="h-6 bg-gradient-to-r from-gray-700 to-gray-600 rounded w-1/3"></div>
                        <motion.div 
                          className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg shadow-purple-500/25"
                          whileHover={{ scale: 1.1, rotate: 90 }}
                        >
                          +
                        </motion.div>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <div className="h-4 bg-gray-700 rounded w-1/4 mb-2"></div>
                          <div className="h-10 bg-gray-800 rounded-xl border border-gray-700"></div>
                        </div>
                        <div>
                          <div className="h-4 bg-gray-700 rounded w-1/3 mb-2"></div>
                          <div className="h-10 bg-gray-800 rounded-xl border border-gray-700"></div>
                        </div>
                        <motion.div 
                          className="h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl text-white flex items-center justify-center font-medium shadow-lg shadow-purple-500/25"
                          whileHover={{ scale: 1.02 }}
                        >
                          ユーザーを追加
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <motion.div 
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 px-8 py-4 rounded-2xl backdrop-blur-sm">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <span className="text-white font-medium text-lg">
                これで準備完了！お金の貸し借りを安心して記録できます
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="scenes" className="py-24 relative">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center space-y-6 mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold">
              <span className="text-white">こんな時に</span>
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">使えます</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              日常のちょっとした貸し借りから、チームでの金銭管理まで
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Coffee,
                title: "友達との立て替え",
                gradient: "from-orange-500 to-red-500",
                scene: "みんなで旅行に行った時、宿泊費を一人がまとめて支払い。「後で返すね」と言ったものの...",
                solution: [
                  "「〇〇に宿泊費15,000円借りた」と記録",
                  "相手が承認して、お互い納得",
                  "返済したらグラフで清算完了を確認"
                ],
                delay: 0.1
              },
              {
                icon: Briefcase,
                title: "チーム・サークル活動",
                gradient: "from-purple-500 to-pink-500",
                scene: "開発チームで機材を誰かが立て替え購入。売上は後日分配予定だけど、記録が曖昧...",
                solution: [
                  "立て替えた金額をメンバーに貸付として記録",
                  "承認機能でトラブル防止",
                  "AI予測で返済見通しが立つ"
                ],
                delay: 0.2
              },
              {
                icon: Heart,
                title: "家族間の仕送り・援助",
                gradient: "from-green-500 to-emerald-500",
                scene: "親が子に仕送りしたり、一時的に生活費を貸したり。「家族だから」で済ませていたけど...",
                solution: [
                  "家族間でも明確に記録・承認",
                  "月々の返済額がグラフで見える",
                  "複数の子への送金も一括管理"
                ],
                delay: 0.3
              },
              {
                icon: Briefcase,
                title: "副業・フリーランス仲間との立て替え金管理",
                gradient: "from-indigo-500 to-blue-500",
                scene: "共同プロジェクトで会場費や広告費をAさんが立て替え。BさんとCさんは後日、報酬から精算予定...",
                solution: [
                  "立て替え金額をメンバーに貸付として記録",
                  "承認機能でトラブル防止",
                  "AI予測で返済見通しが立つ"
                ],
                delay: 0.4
              }
            ].map((useCase, index) => (
              <motion.div 
                key={index}
                className="group relative overflow-hidden rounded-3xl bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 p-8 hover:border-gray-700/50 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: useCase.delay }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-14 h-14 bg-gradient-to-br ${useCase.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <useCase.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {useCase.title}
                    </h3>
                  </div>
                  <div className="space-y-6 text-gray-300">
                    <div>
                      <p className={`font-medium text-transparent bg-gradient-to-r ${useCase.gradient} bg-clip-text mb-2`}>
                        シーン：
                      </p>
                      <p className="leading-relaxed">{useCase.scene}</p>
                    </div>
                    <div>
                      <p className="font-medium text-cyan-300 mb-3">解決：</p>
                      <ul className="space-y-2 text-sm">
                        {useCase.solution.map((item, idx) => (
                          <li key={idx} className="flex items-center space-x-3">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 relative">
        <div className="absolute inset-0">
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center space-y-6 mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold">
              <span className="text-white">あなたの悩みを</span>
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">解決する機能</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              「忘れちゃった」「言った言わない」のトラブルを防ぐ、安心の機能たち
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Eye,
                title: "一目で分かるグラフ表示",
                description: "誰にいくら借りてる？貸してる？複雑な貸し借りも、グラフで一瞬で把握できます。もう「えーっと...」と計算する必要はありません。",
                gradient: "from-blue-500 to-blue-600",
                delay: 0.1
              },
              {
                icon: Brain,
                title: "AI返済予測で安心",
                description: "「いつ返してもらえるかな...」の不安を解消。AIが過去の履歴から返済スケジュールを予測して、グラフで見せてくれます。",
                gradient: "from-cyan-500 to-cyan-600",
                delay: 0.2
              },
              {
                icon: Users,
                title: "簡単ユーザー招待",
                description: "名前だけで仮登録→QRコードで本登録。面倒な手続きなしで、友達をサクッと招待できます。",
                gradient: "from-orange-500 to-orange-600",
                delay: 0.3
              },
              {
                icon: CheckCircle,
                title: "お互い承認で安心",
                description: "「そんな金額じゃない！」を防止。相手が承認した取引だけが記録されるので、後からトラブルになりません。",
                gradient: "from-green-500 to-green-600",
                delay: 0.4
              },
              {
                icon: Shield,
                title: "データは安全に保護",
                description: "GCPで毎日バックアップ（30日保存）。大切なお金の記録が消えてしまう心配はありません。",
                gradient: "from-purple-500 to-purple-600",
                delay: 0.5
              },
              {
                icon: Zap,
                title: "直感的で使いやすい",
                description: "複雑な操作は一切なし。スマホでサクサク操作できて、ITが苦手な人でも安心して使えます。",
                gradient: "from-indigo-500 to-indigo-600",
                delay: 0.6
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className="group relative overflow-hidden rounded-3xl bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 p-8 hover:border-gray-700/50 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: feature.delay }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-24 relative">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center space-y-6 mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold">
              <span className="text-white">なぜ</span>
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">借金ダッシュボード</span>
              <span className="text-white">が選ばれるのか</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              他のアプリにはない、あなたのための特別な機能
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Brain,
                title: "AI予測は他にない",
                description: "単なる記録だけじゃない。AIが「いつ返してもらえるか」を予測してくれる唯一のアプリ",
                gradient: "from-cyan-500 to-blue-500",
                delay: 0.1
              },
              {
                icon: Star,
                title: "使いやすさNo.1",
                description: "グラフ中心の分かりやすい画面。「見た瞬間に理解できる」を追求した設計",
                gradient: "from-green-500 to-emerald-500",
                delay: 0.2
              },
              {
                icon: MessageCircle,
                title: "トラブル防止機能",
                description: "承認機能で「言った言わない」を完全防止。お互い納得してから記録される安心設計",
                gradient: "from-orange-500 to-red-500",
                delay: 0.3
              },
              {
                icon: Shield,
                title: "信頼できる運用",
                description: "毎日バックアップ、30日保存。お金の記録だからこそ、安全性は妥協しません",
                gradient: "from-purple-500 to-pink-500",
                delay: 0.4
              }
            ].map((advantage, index) => (
              <motion.div 
                key={index}
                className="group relative overflow-hidden rounded-3xl bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 p-8 hover:border-gray-700/50 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: advantage.delay }}
                viewport={{ once: true }}
                whileHover={{ y: -15, scale: 1.08 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative text-center space-y-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${advantage.gradient} rounded-full flex items-center justify-center mx-auto shadow-lg`}>
                    <advantage.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-24 relative">
        <div className="absolute inset-0">
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-green-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center space-y-6 mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold">
              <span className="text-white">もっと</span>
              <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">便利になります</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              あなたの声を聞いて、どんどん機能を追加していきます
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Calendar,
                title: "返済リマインダー",
                description: "「返済日が近いよ」をメールでお知らせ。忘れっぽい人も安心",
                color: "text-blue-400",
                delay: 0.1
              },
              {
                icon: Bell,
                title: "返済状況アラート",
                description: "「最近返済が滞ってるかも...」をAIが察知して自動でお知らせ。早めの対応で関係悪化を防止",
                color: "text-red-400",
                delay: 0.2
              },
              {
                icon: Download,
                title: "CSV出力",
                description: "Excelで管理したい人向け。データの出し入れが自由自在",
                color: "text-green-400",
                delay: 0.3
              },
              {
                icon: Search,
                title: "詳細検索",
                description: "「あの時の取引どこだっけ？」を解決。条件を絞って瞬時に発見",
                color: "text-orange-400",
                delay: 0.4
              },
              {
                icon: BarChart3,
                title: "詳細分析レポート",
                description: "月別・年別の貸し借り傾向をAIが分析。お金の流れが丸わかり",
                color: "text-purple-400",
                delay: 0.5
              },
              {
                icon: Github,
                title: "みんなで改善",
                description: "GitHubで要望受付中。あなたのアイデアが次の機能になるかも",
                color: "text-cyan-400",
                delay: 0.6
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 p-6 hover:border-gray-700/50 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: item.delay }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.05 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <item.icon className={`w-8 h-8 ${item.color} mb-4`} />
                  <h3 className="font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        className="py-24 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 via-blue-600/20 to-purple-600/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              もう「忘れちゃった」で
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                困らない
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              友達との貸し借りを、スマートに、安心に。<br />
              今すぐ無料で始めて、お金のトラブルから解放されましょう。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://income-expense-history.vercel.app/login">
                <motion.button 
                  className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-5 rounded-2xl font-semibold text-lg shadow-2xl shadow-cyan-500/25"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative flex items-center">
                    今すぐ無料で始める
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </motion.button>
              </a>
            </div>
            <div className="flex items-center justify-center space-x-8 text-gray-400 text-sm">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>登録は30秒</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>ずっと無料で使える</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>データ安全保証</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-gray-800/50 text-gray-400 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl blur opacity-75"></div>
                  <div className="relative w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
                    <Wallet className="w-6 h-6 text-white" />
                  </div>
                </div>
                <span className="text-xl font-bold text-white">
                  借金ダッシュボード
                </span>
              </div>
              <p className="text-gray-500 leading-relaxed">
                友達との貸し借りを、スマートに、安心に
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">開発</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="https://github.com/benjaaamin0518/income_expense_history_backend"
                    className="hover:text-cyan-400 transition-colors duration-300 flex items-center space-x-2">
                    <Github className="w-4 h-4" />
                    <span>GitHub(バックエンド)</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/benjaaamin0518/income_expense_history"
                    className="hover:text-cyan-400 transition-colors duration-300 flex items-center space-x-2">
                    <Github className="w-4 h-4" />
                    <span>GitHub(フロントエンド)</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/benjaaamin0518/income_expense_history/issues"
                    className="hover:text-cyan-400 transition-colors duration-300">
                    機能リクエスト
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/benjaaamin0518/income_expense_history/issues"
                    className="hover:text-cyan-400 transition-colors duration-300">
                    バグ報告
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; 2025 借金ダッシュボード. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;