'use client'

export default function DashboardPage() {
  return (
    <>
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-[#e9edf1] dark:border-gray-800">
        <div className="max-w-[1200px] mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary rounded-lg text-white">
              <span className="material-symbols-outlined text-2xl">balance</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight leading-none text-primary uppercase">Akses Legal</span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-secondary uppercase">Indonesia</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-10">
            <a className="text-sm font-bold text-primary relative after:content-[''] after:absolute after:-bottom-8 after:left-0 after:w-full after:h-1 after:bg-primary after:rounded-t-full" href="#">Dashboard</a>
            <a className="text-sm font-semibold text-gray-500 hover:text-primary transition-colors" href="#">Layanan Saya</a>
            <a className="text-sm font-semibold text-gray-500 hover:text-primary transition-colors" href="#">Tagihan</a>
            <a className="text-sm font-semibold text-gray-500 hover:text-primary transition-colors" href="#">Bantuan</a>
          </nav>
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-gray-400 hover:text-primary transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white dark:border-background-dark"></span>
            </button>
            <div className="flex items-center gap-3 pl-4 border-l border-gray-200 dark:border-gray-700">
              <div className="text-right hidden sm:block">
                <p className="text-xs font-bold text-gray-900 dark:text-white">Budi Santoso</p>
                <p className="text-[10px] text-gray-500">UMKM Binaan</p>
              </div>
              <div className="size-10 rounded-full border-2 border-primary/20 bg-cover bg-center overflow-hidden cursor-pointer hover:ring-2 hover:ring-primary hover:ring-offset-2 transition-all" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA3GnmJhs0VfHP9NF5fBEBBXRuY9-NMDq3tHbK_9JxHIS9C8tUnl7q70-gq7cAW_7RZdD994JAAcbmbDm-Oe5-FyKRi73wpCb1sWJN0rBhiOTVWRShAK1q592Y7RfwU8OtPpxH0hrhvNgK2cJgg9Fash90tDRP7vNGsFPizkpU3N1oR2ktGnkynevT1Sa6CZ3zFDHX2HnIMQrpnzB8vQadYRJ-M7LYYj7cjOLNTYQOHGh_28vY693g9aFvWAEJYvqrtU3_nJw6TAlU")' }}></div>
            </div>
          </div>
        </div>
      </header>
      <main className="min-h-screen py-10">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h1 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-2">Dashboard Klien</h1>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Selamat datang kembali, pantau progres legalitas usaha Anda.</p>
            </div>
            <button className="hidden md:flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary text-sm font-bold rounded-lg hover:bg-primary/20 transition-colors">
              <span className="material-symbols-outlined text-lg">add_circle</span>
              Buat Pesanan Baru
            </button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-8">
              <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-100 dark:border-gray-700 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 uppercase tracking-wide">Proyek Aktif</span>
                      <span className="text-xs text-gray-400">Order #CV-2023001</span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">Pendirian CV Maju Sejahtera Bersama</h2>
                  </div>
                  <button className="text-sm font-bold text-primary hover:underline flex items-center gap-1">
                    Detail Layanan
                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </button>
                </div>
                <div className="p-8">
                  <div className="relative">
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-100 dark:bg-gray-700 -translate-y-1/2 rounded-full -z-10"></div>
                    <div className="absolute top-1/2 left-0 w-[35%] h-1 bg-primary -translate-y-1/2 rounded-full -z-10"></div>
                    <div className="flex justify-between w-full">
                      <div className="flex flex-col items-center gap-3">
                        <div className="size-10 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg shadow-green-200 dark:shadow-none ring-4 ring-white dark:ring-gray-800">
                          <span className="material-symbols-outlined text-xl">check</span>
                        </div>
                        <div className="text-center">
                          <p className="text-xs font-bold text-gray-900 dark:text-white">Data Terkirim</p>
                          <p className="text-[10px] text-gray-500">24 Okt 2023</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-center gap-3">
                        <div className="size-10 rounded-full bg-white border-2 border-primary text-primary flex items-center justify-center shadow-lg shadow-blue-100 dark:shadow-none ring-4 ring-white dark:ring-gray-800 relative">
                          <span className="material-symbols-outlined text-xl animate-spin">sync</span>
                        </div>
                        <div className="text-center">
                          <p className="text-xs font-bold text-primary">Verifikasi Admin</p>
                          <p className="text-[10px] text-blue-600 dark:text-blue-400 font-medium">Sedang Berjalan</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-center gap-3 opacity-60">
                        <div className="size-10 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-400 border border-gray-200 dark:border-gray-600 flex items-center justify-center ring-4 ring-white dark:ring-gray-800">
                          <span className="material-symbols-outlined text-xl">gavel</span>
                        </div>
                        <div className="text-center">
                          <p className="text-xs font-bold text-gray-500">Proses Notaris</p>
                          <p className="text-[10px] text-gray-400">Menunggu</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-center gap-3 opacity-60">
                        <div className="size-10 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-400 border border-gray-200 dark:border-gray-600 flex items-center justify-center ring-4 ring-white dark:ring-gray-800">
                          <span className="material-symbols-outlined text-xl">flag</span>
                        </div>
                        <div className="text-center">
                          <p className="text-xs font-bold text-gray-500">Selesai</p>
                          <p className="text-[10px] text-gray-400">Estimasi 3 Nov</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700/30 px-6 py-4 border-t border-gray-100 dark:border-gray-700 flex items-center gap-3">
                  <span className="material-symbols-outlined text-gray-400">info</span>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Tim kami sedang memeriksa kelengkapan data awal yang Anda kirimkan. Proses ini memakan waktu 1x24 jam kerja.</p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary">assignment_late</span>
                  Tugas Anda Berikutnya
                </h3>
                <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                  <div className="size-14 rounded-xl bg-orange-50 dark:bg-orange-900/20 text-orange-600 flex items-center justify-center shrink-0 group-hover:bg-secondary group-hover:text-[#101519] transition-colors">
                    <span className="material-symbols-outlined text-3xl">upload_file</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 dark:text-white text-base mb-1">Upload KTP & NPWP Pengurus</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">Admin memerlukan scan dokumen identitas (Direktur & Komanditer) yang jelas untuk melanjutkan ke tahap Notaris.</p>
                  </div>
                  <button className="w-full sm:w-auto px-6 py-3 rounded-xl bg-secondary text-[#101519] font-bold text-sm hover:bg-secondary/90 shadow-lg shadow-secondary/20 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 shrink-0">
                    Upload Dokumen
                    <span className="material-symbols-outlined text-lg">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
                <div className="bg-gray-50 dark:bg-gray-700/50 p-4 border-b border-gray-100 dark:border-gray-700 flex items-center gap-2">
                  <span className="material-symbols-outlined text-gray-500">folder_shared</span>
                  <h3 className="font-bold text-gray-900 dark:text-white text-sm">Ringkasan Legalitas</h3>
                </div>
                <div className="p-2">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-gray-300">description</span>
                        <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">Akta Pendirian</span>
                      </div>
                      <span className="px-2 py-1 rounded text-[10px] font-bold bg-gray-100 text-gray-500 dark:bg-gray-700">Menunggu</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-gray-300">verified</span>
                        <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">SK Kemenkumham</span>
                      </div>
                      <span className="px-2 py-1 rounded text-[10px] font-bold bg-gray-100 text-gray-500 dark:bg-gray-700">Menunggu</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-gray-300">badge</span>
                        <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">NPWP Badan</span>
                      </div>
                      <span className="px-2 py-1 rounded text-[10px] font-bold bg-gray-100 text-gray-500 dark:bg-gray-700">Menunggu</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-gray-300">domain</span>
                        <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">NIB Berusaha</span>
                      </div>
                      <span className="px-2 py-1 rounded text-[10px] font-bold bg-gray-100 text-gray-500 dark:bg-gray-700">Menunggu</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-6 border border-green-100 dark:border-green-800">
                <div className="flex items-center gap-2 mb-3">
                  <span className="material-symbols-outlined text-green-600">support_agent</span>
                  <h4 className="font-bold text-gray-900 dark:text-white text-sm">Butuh Bantuan Mendesak?</h4>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  Konsultan kami siap menjawab pertanyaan Anda seputar progres layanan secara langsung via WhatsApp.
                </p>
                <button className="w-full py-2.5 bg-green-500 text-white rounded-xl text-sm font-bold hover:bg-green-600 shadow-lg shadow-green-500/20 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-lg">chat</span>
                  Konsultasi WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-white dark:bg-background-dark border-t border-gray-200 dark:border-gray-800 py-12">
        <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary rounded-lg text-white">
                <span className="material-symbols-outlined text-xl">balance</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-black tracking-tight leading-none text-primary uppercase">Akses Legal</span>
              </div>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              Solusi terdepan untuk legalitas bisnis UMK di Indonesia. Cepat, murah, dan transparan.
            </p>
          </div>
          <div>
            <h4 className="font-black mb-6 text-gray-900 dark:text-white uppercase text-xs tracking-widest">Layanan</h4>
            <ul className="space-y-4 text-sm font-semibold text-gray-500">
              <li><a className="hover:text-primary transition-colors" href="#">PT Perorangan</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Pendirian CV</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Pendaftaran HAKI</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Izin Lingkungan</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black mb-6 text-gray-900 dark:text-white uppercase text-xs tracking-widest">Perusahaan</h4>
            <ul className="space-y-4 text-sm font-semibold text-gray-500">
              <li><a className="hover:text-primary transition-colors" href="#">Tentang Kami</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Blog & Edukasi</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Karir</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Kontak</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black mb-6 text-gray-900 dark:text-white uppercase text-xs tracking-widest">Hubungi Kami</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-gray-500 font-semibold">
                <span className="material-symbols-outlined text-primary">mail</span>
                halo@akseslegal.id
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-500 font-semibold">
                <span className="material-symbols-outlined text-primary">call</span>
                +62 812-3456-7890
              </div>
              <div className="pt-4 flex gap-4">
                <a className="size-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all" href="#">
                  <span className="material-symbols-outlined text-lg">public</span>
                </a>
                <a className="size-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all" href="#">
                  <span className="material-symbols-outlined text-lg">share</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[1200px] mx-auto px-6 mt-12 pt-8 border-t border-gray-100 dark:border-gray-800 text-center">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">© 2024 Akses Legal Indonesia. Hak Cipta Dilindungi.</p>
        </div>
      </footer>
      <a className="fixed bottom-8 right-8 z-50 size-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-xl shadow-green-500/30 hover:scale-110 transition-transform active:scale-95" href="#">
        <span className="material-symbols-outlined text-3xl">chat</span>
      </a>
    </>
  );
}

