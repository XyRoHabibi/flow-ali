'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from './components/Header';
import Footer from './components/Footer';


export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-[1200px] mx-auto px-6">
        {/* Hero Section */}
        <section className="py-12 md:py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-8 order-2 md:order-1">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary border border-secondary/20">
                  <span className="material-symbols-outlined text-sm">verified</span>
                  <span className="text-xs font-bold uppercase tracking-wider">Terpercaya &amp; Termurah</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-gray-900 dark:text-white">
                  Legalitas Bisnis <span className="text-primary underline decoration-secondary/40">Mudah &amp; Termurah</span> se-Indonesia
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed">
                  Kami memberdayakan UMK Indonesia dengan pengurusan izin usaha yang transparan, cepat, dan terjangkau. Fokus pada bisnis Anda, biar kami yang urus legalitasnya.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <button className="flex items-center gap-2 rounded-xl h-14 px-8 bg-primary text-white text-lg font-bold hover:scale-[1.02] active:scale-95 transition-all">
                  <span className="material-symbols-outlined">forum</span>
                  Konsultasi Gratis
                </button>
                <button className="flex items-center gap-2 rounded-xl h-14 px-8 bg-white border border-gray-200 text-gray-700 text-lg font-bold hover:bg-gray-50 transition-all">
                  Lihat Paket Harga
                </button>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative group">
                <div className="absolute -inset-4 bg-primary/10 rounded-[2rem] blur-2xl transition-all group-hover:bg-primary/20"></div>
                <div className="relative aspect-video md:aspect-square bg-cover bg-center rounded-[2rem] shadow-2xl border-8 border-white dark:border-gray-800" data-alt="Professional legal consultant working with a digital tablet" >
                  
                  <Image src="/irfan.png" alt="Gambar" fill className="object-cover rounded-[2rem]" />
                  
                  <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700">
                    <div className="flex items-center gap-4">
                      <div className="size-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                        <span className="material-symbols-outlined">rocket_launch</span>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Waktu Proses</p>
                        <p className="text-xl font-black text-gray-900 dark:text-white">Hanya 3 Hari!</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Trust Bar */}
        <section className="py-8 border-y border-gray-200 dark:border-gray-800">
          <div className="flex flex-wrap items-center justify-between gap-8 md:gap-4">
            <div className="flex items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-4xl">account_balance</span>
                <span className="font-bold text-lg">OSS RBA</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-4xl">gavel</span>
                <span className="font-bold text-lg leading-tight">Kemenkumham<br/>RI</span>
              </div>
            </div>
            <div className="h-12 w-px bg-gray-200 dark:bg-gray-800 hidden md:block"></div>
            <div className="flex flex-wrap gap-4 flex-1 justify-around">
              <div className="flex flex-col">
                <span className="text-3xl font-black text-primary">1000+</span>
                <span className="text-sm font-bold text-gray-500 uppercase tracking-tighter">UMK Terbantu</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-black text-secondary">100%</span>
                <span className="text-sm font-bold text-gray-500 uppercase tracking-tighter">Izin Terbit</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-black text-primary">4.9/5</span>
                <span className="text-sm font-bold text-gray-500 uppercase tracking-tighter">Rating Google</span>
              </div>
            </div>
          </div>
        </section>
        {/* Services Section Header */}
        <section className="pt-20 pb-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-black text-gray-900 dark:text-white tracking-tight">Layanan Unggulan Kami</h2>
              <p className="text-gray-500 max-w-md">Solusi legalitas terlengkap dengan harga transparan tanpa biaya tambahan tersembunyi.</p>
            </div>
            <a className="text-primary font-bold flex items-center gap-2 group" href="#">
              Lihat Semua Layanan
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
            </a>
          </div>
        </section>
        {/* Services Grid */}
        <section className="pb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* PT Perorangan */}
            <div className="group p-8 rounded-2xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 hover:border-primary hover:shadow-2xl hover:shadow-primary/5 transition-all">
              <div className="size-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 transition-transform group-hover:-rotate-6">
                <span className="material-symbols-outlined text-3xl">corporate_fare</span>
              </div>
              <h3 className="text-xl font-black mb-2 dark:text-black">PT Perorangan</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">Pendirian PT untuk 1 orang pendiri. Proses cepat &amp; legalitas lengkap.</p>
              <div className="pt-6 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase">Mulai Dari</p>
                  <p className="text-lg font-black text-gray-900 dark:text-white">Rp 500rb-an</p>
                </div>
                <button className="size-10 rounded-full bg-gray-50 dark:bg-gray-700 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            </div>
            {/* CV */}
            <div className="group p-8 rounded-2xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 hover:border-primary hover:shadow-2xl hover:shadow-primary/5 transition-all">
              <div className="size-14 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-6 transition-transform group-hover:-rotate-6">
                <span className="material-symbols-outlined text-3xl">groups</span>
              </div>
              <h3 className="text-xl font-black mb-2 dark:text-black">Pendirian CV</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">Ideal untuk kemitraan bisnis dengan prosedur yang ringkas dan aman.</p>
              <div className="pt-6 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase">Mulai Dari</p>
                  <p className="text-lg font-black text-gray-900 dark:text-white">Rp 1.5jt-an</p>
                </div>
                <button className="size-10 rounded-full bg-gray-50 dark:bg-gray-700 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                  <Link href="/layanan/detail/pendirian-cv"><span className="material-symbols-outlined">chevron_right</span></Link>
                  
                </button>
              </div>
            </div>
            {/* HAKI */}
            <div className="group p-8 rounded-2xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 hover:border-primary hover:shadow-2xl hover:shadow-primary/5 transition-all">
              <div className="size-14 rounded-xl bg-green-100 text-green-600 flex items-center justify-center mb-6 transition-transform group-hover:-rotate-6">
                <span className="material-symbols-outlined text-3xl">verified_user</span>
              </div>
              <h3 className="text-xl font-black mb-2 dark:text-black">Pendaftaran HAKI</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">Lindungi nama brand, logo, dan karya cipta bisnis Anda dari plagiarisme.</p>
              <div className="pt-6 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase">Mulai Dari</p>
                  <p className="text-lg font-black text-gray-900 dark:text-white">Rp 2jt-an</p>
                </div>
                <button className="size-10 rounded-full bg-gray-50 dark:bg-gray-700 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* Stats Section */}
        <section className="mb-20">
          <div className="bg-primary rounded-[2rem] p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden relative">
            <div className="absolute right-0 top-0 opacity-10 translate-x-1/4 -translate-y-1/4">
              <span className="material-symbols-outlined text-[300px]">verified</span>
            </div>
            <div className="relative z-10 flex flex-col gap-6 max-w-md text-center md:text-left">
              <h2 className="text-3xl font-black leading-tight">Siap Memulai Legalitas Bisnis Anda Hari Ini?</h2>
              <p className="text-primary-100 opacity-90">Ribuan UMK sudah bertransformasi menjadi bisnis formal. Kini giliran Anda.</p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <button className="h-12 px-8 bg-secondary text-primary font-black rounded-xl shadow-lg shadow-secondary/20 hover:scale-105 transition-all">
                  Hubungi WhatsApp
                </button>
                <button className="h-12 px-8 bg-white/10 backdrop-blur-md border border-white/20 font-bold rounded-xl hover:bg-white/20 transition-all">
                  Pelajari Alur
                </button>
              </div>
            </div>
            <div className="relative z-10 grid grid-cols-2 gap-4 w-full md:w-auto">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-center">
                <p className="text-4xl font-black text-secondary">3 Hari</p>
                <p className="text-xs font-bold uppercase tracking-widest mt-2">Izin Terbit</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-center">
                <p className="text-4xl font-black text-secondary">0%</p>
                <p className="text-xs font-bold uppercase tracking-widest mt-2">Hidden Cost</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-center">
                <p className="text-4xl font-black text-secondary">Expert</p>
                <p className="text-xs font-bold uppercase tracking-widest mt-2">Legal Team</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-center">
                <p className="text-4xl font-black text-secondary">Safe</p>
                <p className="text-xs font-bold uppercase tracking-widest mt-2">Data Privacy</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
