'use client'
import React, { Suspense, useEffect, useState } from 'react'
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';

function StartFromQuery({ onStart }: { onStart: () => void }) {
  const searchParams = useSearchParams();

  useEffect(() => {
    const start = searchParams.get('start');
    if (start === 'true') {
      onStart();
      // Hapus query parameter dari URL setelah modal dibuka
      const url = new URL(window.location.href);
      url.searchParams.delete('start');
      window.history.replaceState({}, '', url.pathname + url.search);
    }
  }, [searchParams, onStart]);

  return null;
}

function page() {
  const [activeStep, setActiveStep] = useState<'idle' | 'auth' | 'form' | 'dashboard'>('idle');
  const [formStep, setFormStep] = useState(1);

  // Auto-trigger modal auth jika ada query parameter start=true
  // NOTE: useSearchParams() wajib dibungkus Suspense (Next.js requirement)
  // agar build/prerender tidak error.

  const handlePilihLayanan = () => {
    setActiveStep('auth');
  };

  const handleAuthSuccess = () => {
    setActiveStep('form');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Langsung redirect ke dashboard untuk testing user flow
    window.location.href = '/dashboard';
  };

  const handlePrevStep = () => {
    if (formStep > 1) {
      setFormStep(formStep - 1);
    } else {
      setActiveStep('idle');
    }
  };

  const closeModal = () => {
    setActiveStep('idle');
    setFormStep(1);
  };

  return (
    <>
    <Header />
    <main className="min-h-screen">
        <Suspense fallback={null}>
          <StartFromQuery
            onStart={() => {
              if (activeStep === 'idle') setActiveStep('auth');
            }}
          />
        </Suspense>
        {/* Auth Modal Overlay */}
        {activeStep === 'auth' && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <div className="bg-white dark:bg-gray-900 w-full max-w-md rounded-3xl overflow-hidden shadow-2xl">
              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-black text-gray-900 dark:text-white">Masuk atau Daftar</h2>
                  <button onClick={closeModal} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
                    <span className="material-symbols-outlined text-gray-500">close</span>
                  </button>
                </div>
                <p className="text-gray-500 dark:text-gray-400 mb-8">Silakan masuk atau daftar terlebih dahulu untuk melanjutkan pemesanan layanan Pendirian CV.</p>
                
                <div className="space-y-4">
                  <button 
                    onClick={handleAuthSuccess}
                    className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-3"
                  >
                    <span className="material-symbols-outlined text-base">login</span>
                    Masuk Sekarang (Dummy)
                  </button>
                  <div className="relative py-2">
                    <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-100 dark:border-gray-800"></div></div>
                    <div className="relative flex justify-center text-xs uppercase"><span className="bg-white dark:bg-gray-900 px-2 text-gray-400">Atau</span></div>
                  </div>
                  <button 
                    onClick={handleAuthSuccess}
                    className="w-full py-4 bg-white dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700 text-gray-900 dark:text-white font-bold rounded-xl hover:border-primary/50 transition-all flex items-center justify-center gap-3"
                  >
                    <span className="material-symbols-outlined text-base">person_add</span>
                    Daftar Akun Baru
                  </button>
                </div>
                <p className="mt-8 text-center text-xs text-gray-400">
                  Dengan melanjutkan, Anda menyetujui Syarat & Ketentuan serta Kebijakan Privasi kami.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Dashboard View */}
        {activeStep === 'dashboard' && (
          <div className="fixed inset-0 z-[110] bg-background-light dark:bg-background-dark overflow-y-auto">
            {/* Dashboard Header */}
            <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-[#e9edf1] dark:border-gray-800">
              <div className="max-w-[1200px] mx-auto px-6 h-20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary rounded-lg text-white">
                    <span className="material-symbols-outlined text-2xl">balance</span>
                  </div>
                  <div className="flex flex-col text-left">
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
                  <button onClick={closeModal} className="ml-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors flex items-center gap-2 text-sm font-bold text-gray-500">
                    <span className="material-symbols-outlined">logout</span>
                  </button>
                </div>
              </div>
            </header>

            <main className="min-h-screen py-10">
              <div className="max-w-[1200px] mx-auto px-6">
                <div className="flex items-end justify-between mb-8">
                  <div className="text-left">
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
                    {/* Active Project Card */}
                    <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden text-left">
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

                    {/* Next Task Section */}
                    <div className="text-left">
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

                  {/* Sidebar Info */}
                  <div className="lg:col-span-4 space-y-6 text-left">
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
            
            {/* Footer Copy */}
            <footer className="bg-white dark:bg-background-dark border-t border-gray-200 dark:border-gray-800 py-8 mt-12">
              <div className="max-w-[1200px] mx-auto px-6 text-center">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">© 2024 Akses Legal Indonesia. Hak Cipta Dilindungi.</p>
              </div>
            </footer>
          </div>
        )}

        {/* Form Modal Overlay */}
        {activeStep === 'form' && (
          <div className="fixed inset-0 z-[100] bg-background-light dark:bg-background-dark overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-[#e9edf1] dark:border-gray-800">
              <div className="max-w-[1200px] mx-auto px-6 h-20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary rounded-lg text-white">
                    <span className="material-symbols-outlined text-2xl">balance</span>
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-xl font-black tracking-tight leading-none text-primary uppercase">Akses Legal</span>
                    <span className="text-[10px] font-bold tracking-[0.2em] text-secondary uppercase">Indonesia</span>
                  </div>
                </div>
                <button onClick={closeModal} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors flex items-center gap-2 text-sm font-bold text-gray-500">
                  <span className="material-symbols-outlined">close</span>
                  Tutup
                </button>
              </div>
            </div>

            <div className="max-w-[1200px] mx-auto px-6 py-12">
              {/* Progress Steps - Simplified */}
              <div className="mb-12">
                <div className="relative flex items-center justify-center w-full max-w-md mx-auto">
                  <div className="flex flex-col items-center gap-2">
                    <div className="size-12 rounded-full bg-primary text-white flex items-center justify-center font-bold ring-4 ring-white dark:ring-background-dark shadow-lg shadow-primary/30">
                      <span className="material-symbols-outlined text-xl">check</span>
                    </div>
                    <span className="text-sm font-bold text-primary">Form Pendirian CV</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Form Section */}
                <div className="lg:col-span-8 text-left">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm p-6 md:p-8">
                    <div className="mb-8 border-b border-gray-100 dark:border-gray-700 pb-6">
                      <h1 className="text-2xl font-black text-gray-900 dark:text-white mb-2">
                        Form Pendirian CV
                      </h1>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">
                        Lengkapi data dasar usaha Anda untuk memulai proses pendirian CV. (Mode Testing - Form Dummy)
                      </p>
                    </div>
                    
                    <form className="space-y-8" onSubmit={handleFormSubmit}>
                      {/* Dummy Form - Simplified for Testing */}
                      <div className="space-y-6">
                        <div className="p-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-xl">
                          <div className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-primary mt-0.5">info</span>
                            <div className="text-sm text-blue-800 dark:text-blue-200 text-left">
                              <span className="font-bold">Mode Testing:</span> Form ini disederhanakan untuk testing user flow. Klik tombol "Lanjut" untuk langsung masuk ke dashboard.
                            </div>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <label className="block text-sm font-bold text-gray-900 dark:text-white text-left">
                            Nama CV yang Diajukan <span className="text-red-500">*</span>
                          </label>
                          <div className="flex rounded-xl shadow-sm">
                            <span className="inline-flex items-center px-4 rounded-l-xl border border-r-0 border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-500 dark:text-gray-300 font-bold text-sm">CV.</span>
                            <input className="flex-1 block w-full min-w-0 rounded-none rounded-r-xl border-gray-300 dark:border-gray-600 dark:bg-gray-800 focus:border-primary focus:ring-primary sm:text-sm py-3 px-4 outline-none" placeholder="Contoh: Maju Sejahtera Bersama" type="text" defaultValue="Maju Sejahtera Bersama" />
                          </div>
                        </div>
                      </div>

                      <div className="mt-12 pt-6 border-t border-gray-100 dark:border-gray-700 flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
                        <button type="button" onClick={() => setActiveStep('auth')} className="w-full sm:w-auto px-6 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 font-bold text-sm hover:border-primary hover:text-primary transition-all flex items-center justify-center gap-2 group">
                          <span className="material-symbols-outlined text-lg group-hover:-translate-x-1 transition-transform">arrow_back</span>
                          Kembali
                        </button>
                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                          <button type="button" className="w-full sm:w-auto px-6 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 font-bold text-sm hover:border-primary hover:text-primary transition-all flex items-center justify-center gap-2 group">
                            <span className="material-symbols-outlined text-lg group-hover:scale-110 transition-transform">save</span>
                            Simpan Draft
                          </button>
                          <button type="submit" className="w-full sm:w-auto px-8 py-3 rounded-xl bg-secondary text-[#101519] font-bold text-sm hover:bg-secondary/90 shadow-lg shadow-secondary/20 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2">
                            Lanjut
                            <span className="material-symbols-outlined text-lg">arrow_forward</span>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                {/* Sidebar Summary */}
                <div className="lg:col-span-4 space-y-6 sticky top-24">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
                    <div className="bg-primary/5 p-4 border-b border-gray-100 dark:border-gray-700 flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary">receipt_long</span>
                      <h3 className="font-bold text-gray-900 dark:text-white">Ringkasan Pesanan</h3>
                    </div>
                    <div className="p-6 text-left">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="size-12 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 flex items-center justify-center shrink-0">
                          <span className="material-symbols-outlined text-2xl">handshake</span>
                        </div>
                        <div>
                          <h4 className="font-black text-gray-900 dark:text-white text-lg leading-tight mb-1">Pendirian CV</h4>
                          <p className="text-xs text-gray-500 font-medium">Paket Lengkap All-in</p>
                        </div>
                      </div>
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <span className="material-symbols-outlined text-green-500 text-base">check_circle</span>
                          Pengecekan Nama CV
                        </li>
                        <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <span className="material-symbols-outlined text-green-500 text-base">check_circle</span>
                          Akta Notaris
                        </li>
                        <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <span className="material-symbols-outlined text-green-500 text-base">check_circle</span>
                          SK Kemenkumham
                        </li>
                        <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <span className="material-symbols-outlined text-green-500 text-base">check_circle</span>
                          NIB (Nomor Induk Berusaha)
                        </li>
                        <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <span className="material-symbols-outlined text-green-500 text-base">check_circle</span>
                          NPWP Badan
                        </li>
                      </ul>
                      <div className="border-t border-dashed border-gray-200 dark:border-gray-700 my-4 pt-4 space-y-2">
                        <div className="flex justify-between text-sm text-gray-500">
                          <span>Subtotal</span>
                          <span>Rp 1.500.000</span>
                        </div>
                        <div className="flex justify-between text-sm text-gray-500">
                          <span>Biaya Layanan</span>
                          <span>Rp 0</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-end pt-2">
                        <span className="text-sm font-bold text-gray-900 dark:text-white">Total Bayar</span>
                        <span className="text-2xl font-black text-primary">Rp 1.500.000</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-6 border border-blue-100 dark:border-blue-800 text-left">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="material-symbols-outlined text-primary">support_agent</span>
                      <h4 className="font-bold text-gray-900 dark:text-white text-sm">Butuh Bantuan?</h4>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                      Tim konsultan kami siap membantu Anda mengisi formulir ini jika Anda mengalami kesulitan.
                    </p>
                    <button className="w-full py-2 bg-white dark:bg-gray-800 text-primary border border-primary/20 rounded-lg text-xs font-bold hover:bg-primary hover:text-white transition-colors">
                      Hubungi Konsultan
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <section className="bg-white dark:bg-background-dark pt-16 pb-12 border-b border-gray-100 dark:border-gray-800">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10">
              <div className="space-y-4 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary border border-secondary/20">
                  <span className="material-symbols-outlined text-sm">category</span>
                  <span className="text-xs font-bold uppercase tracking-wider">Katalog Layanan</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 dark:text-white">
                  Semua Layanan Kami
                </h1>
                <p className="text-lg text-gray-500 leading-relaxed">
                  Temukan solusi legalitas dan kebutuhan bisnis yang tepat untuk perusahaan Anda.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              <div className="flex flex-wrap gap-2 w-full lg:w-auto order-2 lg:order-1">
                <button className="px-5 py-2.5 rounded-full bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20 transition-all hover:scale-105">
                  Semua
                </button>
                <button className="px-5 py-2.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-transparent hover:border-gray-200 dark:hover:border-gray-700 text-sm font-bold transition-all hover:bg-white dark:hover:bg-gray-700">
                  Pendirian
                </button>
                <button className="px-5 py-2.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-transparent hover:border-gray-200 dark:hover:border-gray-700 text-sm font-bold transition-all hover:bg-white dark:hover:bg-gray-700">
                  Perizinan
                </button>
                <button className="px-5 py-2.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-transparent hover:border-gray-200 dark:hover:border-gray-700 text-sm font-bold transition-all hover:bg-white dark:hover:bg-gray-700">
                  Legal & Pajak
                </button>
                <button className="px-5 py-2.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-transparent hover:border-gray-200 dark:hover:border-gray-700 text-sm font-bold transition-all hover:bg-white dark:hover:bg-gray-700">
                  Ruang Kerja
                </button>
              </div>
              <div className="relative w-full lg:w-96 order-1 lg:order-2">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-gray-400">search</span>
                </div>
                <input className="block w-full pl-11 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:border-primary focus:ring-primary dark:focus:ring-primary dark:text-white transition-all shadow-sm" placeholder="Cari layanan (contoh: PT, Pajak, HAKI)..." type="text"/>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 bg-background-light dark:bg-background-dark">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <div className="group flex flex-col p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/50 transition-all h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="size-12 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-primary flex items-center justify-center transition-transform group-hover:scale-110">
                    <span className="material-symbols-outlined text-2xl">domain</span>
                  </div>
                </div>
                <h3 className="text-lg font-black text-gray-900 dark:text-white mb-2">Pendirian PT</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-6 flex-1">Paket lengkap pendirian Perseroan Terbatas. Termasuk SK Kemenkumham & NIB.</p>
                <div className="mt-auto pt-6 border-t border-gray-100 dark:border-gray-700">
                  <p className="text-[10px] text-gray-400 font-bold uppercase mb-1 tracking-wider">Mulai dari</p>
                  <p className="text-xl font-black text-gray-900 dark:text-white mb-6">Rp 2.900.000</p>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="px-3 py-2.5 rounded-lg border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 font-bold text-xs hover:border-primary hover:text-primary transition-all">Lihat Detail</button>
                    <button className="px-3 py-2.5 rounded-lg bg-secondary text-[#101519] font-bold text-xs hover:bg-secondary/90 shadow-lg shadow-secondary/20 hover:-translate-y-0.5 transition-all">Pilih Layanan</button>
                  </div>
                </div>
              </div>
              <div className="group flex flex-col p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/50 transition-all h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="size-12 rounded-xl bg-green-50 dark:bg-green-900/30 text-green-600 flex items-center justify-center transition-transform group-hover:scale-110">
                    <span className="material-symbols-outlined text-2xl">medication</span>
                  </div>
                </div>
                <h3 className="text-lg font-black text-gray-900 dark:text-white mb-2">Izin BPOM</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-6 flex-1">Pengurusan izin edar untuk produk makanan, minuman, dan kosmetik.</p>
                <div className="mt-auto pt-6 border-t border-gray-100 dark:border-gray-700">
                  <p className="text-[10px] text-gray-400 font-bold uppercase mb-1 tracking-wider">Mulai dari</p>
                  <p className="text-xl font-black text-gray-900 dark:text-white mb-6">Rp 1.500.000</p>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="px-3 py-2.5 rounded-lg border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 font-bold text-xs hover:border-primary hover:text-primary transition-all">Lihat Detail</button>
                    <button className="px-3 py-2.5 rounded-lg bg-secondary text-[#101519] font-bold text-xs hover:bg-secondary/90 shadow-lg shadow-secondary/20 hover:-translate-y-0.5 transition-all">Pilih Layanan</button>
                  </div>
                </div>
              </div>
              <div className="group flex flex-col p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/50 transition-all h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="size-12 rounded-xl bg-orange-50 dark:bg-orange-900/30 text-orange-600 flex items-center justify-center transition-transform group-hover:scale-110">
                    <span className="material-symbols-outlined text-2xl">person</span>
                  </div>
                </div>
                <h3 className="text-lg font-black text-gray-900 dark:text-white mb-2">PT Perorangan</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-6 flex-1">Badan hukum praktis khusus untuk UMK dengan 1 orang pendiri saja.</p>
                <div className="mt-auto pt-6 border-t border-gray-100 dark:border-gray-700">
                  <p className="text-[10px] text-gray-400 font-bold uppercase mb-1 tracking-wider">Mulai dari</p>
                  <p className="text-xl font-black text-gray-900 dark:text-white mb-6">Rp 500.000</p>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="px-3 py-2.5 rounded-lg border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 font-bold text-xs hover:border-primary hover:text-primary transition-all">Lihat Detail</button>
                    <button className="px-3 py-2.5 rounded-lg bg-secondary text-[#101519] font-bold text-xs hover:bg-secondary/90 shadow-lg shadow-secondary/20 hover:-translate-y-0.5 transition-all">Pilih Layanan</button>
                  </div>
                </div>
              </div>
              <div className="group flex flex-col p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/50 transition-all h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="size-12 rounded-xl bg-teal-50 dark:bg-teal-900/30 text-teal-600 flex items-center justify-center transition-transform group-hover:scale-110">
                    <span className="material-symbols-outlined text-2xl">verified</span>
                  </div>
                </div>
                <h3 className="text-lg font-black text-gray-900 dark:text-white mb-2">Sertifikat Halal</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-6 flex-1">Jaminan kehalalan produk untuk meningkatkan kepercayaan konsumen Anda.</p>
                <div className="mt-auto pt-6 border-t border-gray-100 dark:border-gray-700">
                  <p className="text-[10px] text-gray-400 font-bold uppercase mb-1 tracking-wider">Mulai dari</p>
                  <p className="text-xl font-black text-gray-900 dark:text-white mb-6">Rp 1.200.000</p>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="px-3 py-2.5 rounded-lg border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 font-bold text-xs hover:border-primary hover:text-primary transition-all">Lihat Detail</button>
                    <button className="px-3 py-2.5 rounded-lg bg-secondary text-[#101519] font-bold text-xs hover:bg-secondary/90 shadow-lg shadow-secondary/20 hover:-translate-y-0.5 transition-all">Pilih Layanan</button>
                  </div>
                </div>
              </div>
              <div className="group flex flex-col p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/50 transition-all h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="size-12 rounded-xl bg-purple-50 dark:bg-purple-900/30 text-purple-600 flex items-center justify-center transition-transform group-hover:scale-110">
                    <span className="material-symbols-outlined text-2xl">groups</span>
                  </div>
                </div>
                <h3 className="text-lg font-black text-gray-900 dark:text-white mb-2">RUPS CV</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-6 flex-1">Perubahan data perseroan, masuk/keluar sekutu, atau perubahan modal.</p>
                <div className="mt-auto pt-6 border-t border-gray-100 dark:border-gray-700">
                  <p className="text-[10px] text-gray-400 font-bold uppercase mb-1 tracking-wider">Mulai dari</p>
                  <p className="text-xl font-black text-gray-900 dark:text-white mb-6">Rp 1.000.000</p>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="px-3 py-2.5 rounded-lg border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 font-bold text-xs hover:border-primary hover:text-primary transition-all">Lihat Detail</button>
                    <button className="px-3 py-2.5 rounded-lg bg-secondary text-[#101519] font-bold text-xs hover:bg-secondary/90 shadow-lg shadow-secondary/20 hover:-translate-y-0.5 transition-all">Pilih Layanan</button>
                  </div>
                </div>
              </div>
              <div className="group flex flex-col p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/50 transition-all h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="size-12 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 flex items-center justify-center transition-transform group-hover:scale-110">
                    <span className="material-symbols-outlined text-2xl">handshake</span>
                  </div>
                </div>
                <h3 className="text-lg font-black text-gray-900 dark:text-white mb-2">Pendirian CV</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-6 flex-1">Solusi badan usaha ideal untuk kemitraan bisnis dengan prosedur ringkas.</p>
                <div className="mt-auto pt-6 border-t border-gray-100 dark:border-gray-700">
                  <p className="text-[10px] text-gray-400 font-bold uppercase mb-1 tracking-wider">Mulai dari</p>
                  <p className="text-xl font-black text-gray-900 dark:text-white mb-6">Rp 1.500.000</p>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="px-3 py-2.5 rounded-lg border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 font-bold text-xs hover:border-primary hover:text-primary transition-all"><Link href="/layanan/detail/pendirian-cv">Lihat Detail</Link></button>
                    <button 
                      onClick={handlePilihLayanan}
                      className="px-3 py-2.5 rounded-lg bg-secondary text-[#101519] font-bold text-xs hover:bg-secondary/90 shadow-lg shadow-secondary/20 hover:-translate-y-0.5 transition-all"
                    >
                      Pilih Layanan
                    </button>
                  </div>
                </div>
              </div>
              <div className="group flex flex-col p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/50 transition-all h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="size-12 rounded-xl bg-cyan-50 dark:bg-cyan-900/30 text-cyan-600 flex items-center justify-center transition-transform group-hover:scale-110">
                    <span className="material-symbols-outlined text-2xl">assignment</span>
                  </div>
                </div>
                <h3 className="text-lg font-black text-gray-900 dark:text-white mb-2">Akses Izin</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-6 flex-1">Layanan konsultasi dan pengurusan berbagai izin usaha spesifik daerah.</p>
                <div className="mt-auto pt-6 border-t border-gray-100 dark:border-gray-700">
                  <p className="text-[10px] text-gray-400 font-bold uppercase mb-1 tracking-wider">Mulai dari</p>
                  <p className="text-xl font-black text-gray-900 dark:text-white mb-6">Rp 750.000</p>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="px-3 py-2.5 rounded-lg border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 font-bold text-xs hover:border-primary hover:text-primary transition-all">Lihat Detail</button>
                    <button className="px-3 py-2.5 rounded-lg bg-secondary text-[#101519] font-bold text-xs hover:bg-secondary/90 shadow-lg shadow-secondary/20 hover:-translate-y-0.5 transition-all">Pilih Layanan</button>
                  </div>
                </div>
              </div>
              <div className="group flex flex-col p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/50 transition-all h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="size-12 rounded-xl bg-red-50 dark:bg-red-900/30 text-red-600 flex items-center justify-center transition-transform group-hover:scale-110">
                    <span className="material-symbols-outlined text-2xl">receipt_long</span>
                  </div>
                </div>
                <h3 className="text-lg font-black text-gray-900 dark:text-white mb-2">Pengurusan Pajak</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-6 flex-1">Lapor SPT bulanan/tahunan, pembuatan EFIN, dan administrasi pajak.</p>
                <div className="mt-auto pt-6 border-t border-gray-100 dark:border-gray-700">
                  <p className="text-[10px] text-gray-400 font-bold uppercase mb-1 tracking-wider">Mulai dari</p>
                  <p className="text-xl font-black text-gray-900 dark:text-white mb-6">Rp 500.000</p>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="px-3 py-2.5 rounded-lg border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 font-bold text-xs hover:border-primary hover:text-primary transition-all">Lihat Detail</button>
                    <button className="px-3 py-2.5 rounded-lg bg-secondary text-[#101519] font-bold text-xs hover:bg-secondary/90 shadow-lg shadow-secondary/20 hover:-translate-y-0.5 transition-all">Pilih Layanan</button>
                  </div>
                </div>
              </div>
              <div className="group flex flex-col p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/50 transition-all h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="size-12 rounded-xl bg-yellow-50 dark:bg-yellow-900/30 text-yellow-600 flex items-center justify-center transition-transform group-hover:scale-110">
                    <span className="material-symbols-outlined text-2xl">copyright</span>
                  </div>
                </div>
                <h3 className="text-lg font-black text-gray-900 dark:text-white mb-2">Pendaftaran Merek</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-6 flex-1">Lindungi aset nama brand, logo, dan hak cipta bisnis Anda dari plagiarisme.</p>
                <div className="mt-auto pt-6 border-t border-gray-100 dark:border-gray-700">
                  <p className="text-[10px] text-gray-400 font-bold uppercase mb-1 tracking-wider">Mulai dari</p>
                  <p className="text-xl font-black text-gray-900 dark:text-white mb-6">Rp 2.500.000</p>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="px-3 py-2.5 rounded-lg border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 font-bold text-xs hover:border-primary hover:text-primary transition-all">Lihat Detail</button>
                    <button className="px-3 py-2.5 rounded-lg bg-secondary text-[#101519] font-bold text-xs hover:bg-secondary/90 shadow-lg shadow-secondary/20 hover:-translate-y-0.5 transition-all">Pilih Layanan</button>
                  </div>
                </div>
              </div>
              <div className="group flex flex-col p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/50 transition-all h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="size-12 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 flex items-center justify-center transition-transform group-hover:scale-110">
                    <span className="material-symbols-outlined text-2xl">gavel</span>
                  </div>
                </div>
                <h3 className="text-lg font-black text-gray-900 dark:text-white mb-2">Akses Hukum</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-6 flex-1">Konsultasi hukum bisnis, somasi, dan pendampingan legal perusahaan.</p>
                <div className="mt-auto pt-6 border-t border-gray-100 dark:border-gray-700">
                  <p className="text-[10px] text-gray-400 font-bold uppercase mb-1 tracking-wider">Mulai dari</p>
                  <p className="text-xl font-black text-gray-900 dark:text-white mb-6">Rp 1.000.000</p>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="px-3 py-2.5 rounded-lg border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 font-bold text-xs hover:border-primary hover:text-primary transition-all">Lihat Detail</button>
                    <button className="px-3 py-2.5 rounded-lg bg-secondary text-[#101519] font-bold text-xs hover:bg-secondary/90 shadow-lg shadow-secondary/20 hover:-translate-y-0.5 transition-all">Pilih Layanan</button>
                  </div>
                </div>
              </div>
              <div className="group flex flex-col p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/50 transition-all h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="size-12 rounded-xl bg-sky-50 dark:bg-sky-900/30 text-sky-600 flex items-center justify-center transition-transform group-hover:scale-110">
                    <span className="material-symbols-outlined text-2xl">apartment</span>
                  </div>
                </div>
                <h3 className="text-lg font-black text-gray-900 dark:text-white mb-2">Virtual Office</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-6 flex-1">Alamat bisnis bergengsi di zona perkantoran tanpa sewa fisik mahal.</p>
                <div className="mt-auto pt-6 border-t border-gray-100 dark:border-gray-700">
                  <p className="text-[10px] text-gray-400 font-bold uppercase mb-1 tracking-wider">Mulai dari</p>
                  <p className="text-xl font-black text-gray-900 dark:text-white mb-6">Rp 3.500.000</p>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="px-3 py-2.5 rounded-lg border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 font-bold text-xs hover:border-primary hover:text-primary transition-all">Lihat Detail</button>
                    <button className="px-3 py-2.5 rounded-lg bg-secondary text-[#101519] font-bold text-xs hover:bg-secondary/90 shadow-lg shadow-secondary/20 hover:-translate-y-0.5 transition-all">Pilih Layanan</button>
                  </div>
                </div>
              </div>
              <div className="group flex flex-col p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/50 transition-all h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="size-12 rounded-xl bg-pink-50 dark:bg-pink-900/30 text-pink-600 flex items-center justify-center transition-transform group-hover:scale-110">
                    <span className="material-symbols-outlined text-2xl">badge</span>
                  </div>
                </div>
                <h3 className="text-lg font-black text-gray-900 dark:text-white mb-2">Layanan SBU</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-6 flex-1">Pengurusan Sertifikat Badan Usaha untuk tender konstruksi & non-konstruksi.</p>
                <div className="mt-auto pt-6 border-t border-gray-100 dark:border-gray-700">
                  <p className="text-[10px] text-gray-400 font-bold uppercase mb-1 tracking-wider">Mulai dari</p>
                  <p className="text-xl font-black text-gray-900 dark:text-white mb-6">Rp 4.000.000</p>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="px-3 py-2.5 rounded-lg border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 font-bold text-xs hover:border-primary hover:text-primary transition-all">Lihat Detail</button>
                    <button className="px-3 py-2.5 rounded-lg bg-secondary text-[#101519] font-bold text-xs hover:bg-secondary/90 shadow-lg shadow-secondary/20 hover:-translate-y-0.5 transition-all">Pilih Layanan</button>
                  </div>
                </div>
              </div>
              <div className="group flex flex-col p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/50 transition-all h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="size-12 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 flex items-center justify-center transition-transform group-hover:scale-110">
                    <span className="material-symbols-outlined text-2xl">volunteer_activism</span>
                  </div>
                </div>
                <h3 className="text-lg font-black text-gray-900 dark:text-white mb-2">Pendirian Yayasan</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-6 flex-1">Badan hukum untuk kegiatan sosial, keagamaan, dan kemanusiaan.</p>
                <div className="mt-auto pt-6 border-t border-gray-100 dark:border-gray-700">
                  <p className="text-[10px] text-gray-400 font-bold uppercase mb-1 tracking-wider">Mulai dari</p>
                  <p className="text-xl font-black text-gray-900 dark:text-white mb-6">Rp 3.000.000</p>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="px-3 py-2.5 rounded-lg border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 font-bold text-xs hover:border-primary hover:text-primary transition-all">Lihat Detail</button>
                    <button className="px-3 py-2.5 rounded-lg bg-secondary text-[#101519] font-bold text-xs hover:bg-secondary/90 shadow-lg shadow-secondary/20 hover:-translate-y-0.5 transition-all">Pilih Layanan</button>
                  </div>
                </div>
              </div>
              <div className="group flex flex-col p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/50 transition-all h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="size-12 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-600 flex items-center justify-center transition-transform group-hover:scale-110">
                    <span className="material-symbols-outlined text-2xl">contract</span>
                  </div>
                </div>
                <h3 className="text-lg font-black text-gray-900 dark:text-white mb-2">Akses Perjanjian</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-6 flex-1">Drafting dan review kontrak kerjasama, MoU, dan dokumen legal lainnya.</p>
                <div className="mt-auto pt-6 border-t border-gray-100 dark:border-gray-700">
                  <p className="text-[10px] text-gray-400 font-bold uppercase mb-1 tracking-wider">Mulai dari</p>
                  <p className="text-xl font-black text-gray-900 dark:text-white mb-6">Rp 1.500.000</p>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="px-3 py-2.5 rounded-lg border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 font-bold text-xs hover:border-primary hover:text-primary transition-all">Lihat Detail</button>
                    <button className="px-3 py-2.5 rounded-lg bg-secondary text-[#101519] font-bold text-xs hover:bg-secondary/90 shadow-lg shadow-secondary/20 hover:-translate-y-0.5 transition-all">Pilih Layanan</button>
                  </div>
                </div>
              </div>
              <div className="group flex flex-col p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/50 transition-all h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="size-12 rounded-xl bg-lime-50 dark:bg-lime-900/30 text-lime-600 flex items-center justify-center transition-transform group-hover:scale-110">
                    <span className="material-symbols-outlined text-2xl">desk</span>
                  </div>
                </div>
                <h3 className="text-lg font-black text-gray-900 dark:text-white mb-2">Coworking Space</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-6 flex-1">Ruang kerja fleksibel dan nyaman dengan fasilitas internet cepat.</p>
                <div className="mt-auto pt-6 border-t border-gray-100 dark:border-gray-700">
                  <p className="text-[10px] text-gray-400 font-bold uppercase mb-1 tracking-wider">Mulai dari</p>
                  <p className="text-xl font-black text-gray-900 dark:text-white mb-6">Rp 50.000 <span className="text-sm font-normal text-gray-500">/jam</span></p>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="px-3 py-2.5 rounded-lg border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 font-bold text-xs hover:border-primary hover:text-primary transition-all">Lihat Detail</button>
                    <button className="px-3 py-2.5 rounded-lg bg-secondary text-[#101519] font-bold text-xs hover:bg-secondary/90 shadow-lg shadow-secondary/20 hover:-translate-y-0.5 transition-all">Pilih Layanan</button>
                  </div>
                </div>
              </div>
              <div className="group flex flex-col p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/50 transition-all h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="size-12 rounded-xl bg-fuchsia-50 dark:bg-fuchsia-900/30 text-fuchsia-600 flex items-center justify-center transition-transform group-hover:scale-110">
                    <span className="material-symbols-outlined text-2xl">shopping_cart</span>
                  </div>
                </div>
                <h3 className="text-lg font-black text-gray-900 dark:text-white mb-2">E-Katalog</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-6 flex-1">Penayangan produk barang/jasa di katalog elektronik LKPP pemerintah.</p>
                <div className="mt-auto pt-6 border-t border-gray-100 dark:border-gray-700">
                  <p className="text-[10px] text-gray-400 font-bold uppercase mb-1 tracking-wider">Mulai dari</p>
                  <p className="text-xl font-black text-gray-900 dark:text-white mb-6">Rp 2.000.000</p>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="px-3 py-2.5 rounded-lg border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 font-bold text-xs hover:border-primary hover:text-primary transition-all">Lihat Detail</button>
                    <button className="px-3 py-2.5 rounded-lg bg-secondary text-[#101519] font-bold text-xs hover:bg-secondary/90 shadow-lg shadow-secondary/20 hover:-translate-y-0.5 transition-all">Pilih Layanan</button>
                  </div>
                </div>
              </div>
              <div className="group flex flex-col p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/50 transition-all h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="size-12 rounded-xl bg-violet-50 dark:bg-violet-900/30 text-violet-600 flex items-center justify-center transition-transform group-hover:scale-110">
                    <span className="material-symbols-outlined text-2xl">devices</span>
                  </div>
                </div>
                <h3 className="text-lg font-black text-gray-900 dark:text-white mb-2">Akses Digital</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-6 flex-1">Pembuatan website company profile, email bisnis, dan setup sosial media.</p>
                <div className="mt-auto pt-6 border-t border-gray-100 dark:border-gray-700">
                  <p className="text-[10px] text-gray-400 font-bold uppercase mb-1 tracking-wider">Mulai dari</p>
                  <p className="text-xl font-black text-gray-900 dark:text-white mb-6">Rp 1.500.000</p>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="px-3 py-2.5 rounded-lg border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 font-bold text-xs hover:border-primary hover:text-primary transition-all">Lihat Detail</button>
                    <button className="px-3 py-2.5 rounded-lg bg-secondary text-[#101519] font-bold text-xs hover:bg-secondary/90 shadow-lg shadow-secondary/20 hover:-translate-y-0.5 transition-all">Pilih Layanan</button>
                  </div>
                </div>
              </div>
              <div className="group flex flex-col p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/50 transition-all h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="size-12 rounded-xl bg-amber-50 dark:bg-amber-900/30 text-amber-600 flex items-center justify-center transition-transform group-hover:scale-110">
                    <span className="material-symbols-outlined text-2xl">meeting_room</span>
                  </div>
                </div>
                <h3 className="text-lg font-black text-gray-900 dark:text-white mb-2">RUPS PT</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-6 flex-1">Akta Risalah Rapat Umum Pemegang Saham PT untuk segala perubahan data.</p>
                <div className="mt-auto pt-6 border-t border-gray-100 dark:border-gray-700">
                  <p className="text-[10px] text-gray-400 font-bold uppercase mb-1 tracking-wider">Mulai dari</p>
                  <p className="text-xl font-black text-gray-900 dark:text-white mb-6">Rp 1.500.000</p>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="px-3 py-2.5 rounded-lg border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 font-bold text-xs hover:border-primary hover:text-primary transition-all">Lihat Detail</button>
                    <button className="px-3 py-2.5 rounded-lg bg-secondary text-[#101519] font-bold text-xs hover:bg-secondary/90 shadow-lg shadow-secondary/20 hover:-translate-y-0.5 transition-all">Pilih Layanan</button>
                  </div>
                </div>
              </div>
              <div className="group flex flex-col p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/50 transition-all h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="size-12 rounded-xl bg-rose-50 dark:bg-rose-900/30 text-rose-600 flex items-center justify-center transition-transform group-hover:scale-110">
                    <span className="material-symbols-outlined text-2xl">cloud_upload</span>
                  </div>
                </div>
                <h3 className="text-lg font-black text-gray-900 dark:text-white mb-2">Akun LPSE</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-6 flex-1">Registrasi akun LPSE (Layanan Pengadaan Secara Elektronik) untuk tender.</p>
                <div className="mt-auto pt-6 border-t border-gray-100 dark:border-gray-700">
                  <p className="text-[10px] text-gray-400 font-bold uppercase mb-1 tracking-wider">Mulai dari</p>
                  <p className="text-xl font-black text-gray-900 dark:text-white mb-6">Rp 1.000.000</p>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="px-3 py-2.5 rounded-lg border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 font-bold text-xs hover:border-primary hover:text-primary transition-all">Lihat Detail</button>
                    <button className="px-3 py-2.5 rounded-lg bg-secondary text-[#101519] font-bold text-xs hover:bg-secondary/90 shadow-lg shadow-secondary/20 hover:-translate-y-0.5 transition-all">Pilih Layanan</button>
                  </div>
                </div>
              </div>
              <div className="group flex flex-col p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/50 transition-all h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="size-12 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center transition-transform group-hover:scale-110">
                    <span className="material-symbols-outlined text-2xl">sensor_door</span>
                  </div>
                </div>
                <h3 className="text-lg font-black text-gray-900 dark:text-white mb-2">Penyewaan Ruang</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-6 flex-1">Sewa ruang meeting atau aula acara dengan fasilitas presentasi lengkap.</p>
                <div className="mt-auto pt-6 border-t border-gray-100 dark:border-gray-700">
                  <p className="text-[10px] text-gray-400 font-bold uppercase mb-1 tracking-wider">Mulai dari</p>
                  <p className="text-xl font-black text-gray-900 dark:text-white mb-6">Rp 200.000 <span className="text-sm font-normal text-gray-500">/jam</span></p>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="px-3 py-2.5 rounded-lg border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 font-bold text-xs hover:border-primary hover:text-primary transition-all">Lihat Detail</button>
                    <button className="px-3 py-2.5 rounded-lg bg-secondary text-[#101519] font-bold text-xs hover:bg-secondary/90 shadow-lg shadow-secondary/20 hover:-translate-y-0.5 transition-all">Pilih Layanan</button>
                  </div>
                </div>
              </div>
              <div className="group flex flex-col p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/50 transition-all h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="size-12 rounded-xl bg-orange-50 dark:bg-orange-900/30 text-orange-600 flex items-center justify-center transition-transform group-hover:scale-110">
                    <span className="material-symbols-outlined text-2xl">engineering</span>
                  </div>
                </div>
                <h3 className="text-lg font-black text-gray-900 dark:text-white mb-2">Akses BUJK</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-6 flex-1">Pengurusan Izin Usaha Jasa Konstruksi (IUJK) sesuai klasifikasi bidang.</p>
                <div className="mt-auto pt-6 border-t border-gray-100 dark:border-gray-700">
                  <p className="text-[10px] text-gray-400 font-bold uppercase mb-1 tracking-wider">Mulai dari</p>
                  <p className="text-xl font-black text-gray-900 dark:text-white mb-6">Rp 5.000.000</p>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="px-3 py-2.5 rounded-lg border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 font-bold text-xs hover:border-primary hover:text-primary transition-all">Lihat Detail</button>
                    <button className="px-3 py-2.5 rounded-lg bg-secondary text-[#101519] font-bold text-xs hover:bg-secondary/90 shadow-lg shadow-secondary/20 hover:-translate-y-0.5 transition-all">Pilih Layanan</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default page