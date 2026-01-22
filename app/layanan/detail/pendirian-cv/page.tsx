"use client";

import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

function page() {
  const router = useRouter();

  const handlePilihLayanan = () => {
    // Redirect ke halaman layanan dengan query parameter untuk auto-trigger modal
    router.push('/layanan?start=true');
  };
  return (
    <>
    <Header />
    <main className="min-h-screen pb-12">
      <div className="bg-white dark:bg-background-dark border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-[1200px] mx-auto px-6 py-4">
          <nav aria-label="Breadcrumb" className="flex">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link className="inline-flex items-center text-xs font-bold text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-white uppercase tracking-wider" href="/">Home</Link>
                
              </li>
              <li>
                <div className="flex items-center">
                  <span className="material-symbols-outlined text-gray-400 text-sm">chevron_right</span>
                  <Link className="ml-1 text-xs font-bold text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-white uppercase tracking-wider md:ml-2" href="/layanan">Layanan</Link>
                 
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <span className="material-symbols-outlined text-gray-400 text-sm">chevron_right</span>
                  <span className="ml-1 text-xs font-bold text-primary md:ml-2 uppercase tracking-wider">PENDIRIAN-CV</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-1">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-orange-50 text-orange-600 border border-orange-200 dark:bg-orange-900/20 dark:border-orange-900/50 dark:text-orange-400">
                <span className="material-symbols-outlined text-sm">person</span>
                <span className="text-xs font-bold uppercase tracking-wider">Layanan Pendirian</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 dark:text-white mb-6">
                Pendirian CV
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Pendirian CV merupakan sebuah badan usaha berbentuk persekutuan yang dibuat oleh satu orang atau lebih, kemudian memberikan aset dan dananya kepada sebuah perusahaan dan bekerjasama untuk mencapai tujuan yang diinginkan.  
              </p>

            </div>
            <div className="border-t border-gray-200 dark:border-gray-700 my-10"></div>
            <div className="mb-12">
              <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center size-8 rounded-lg bg-blue-50 text-primary dark:bg-primary/20">
                  <span className="material-symbols-outlined text-lg">checklist</span>
                </span>
                Persyaratan Dokumen
              </h2>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-green-500 mt-0.5">check_circle</span>
                    <div>
                      <span className="block font-bold text-gray-900 dark:text-white">KTP Pendiri</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">Scan/Foto KTP Asli pendiri tunggal.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-green-500 mt-0.5">check_circle</span>
                    <div>
                      <span className="block font-bold text-gray-900 dark:text-white">NPWP Pendiri</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">Pastikan NPWP aktif dan valid.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-green-500 mt-0.5">check_circle</span>
                    <div>
                      <span className="block font-bold text-gray-900 dark:text-white">Email &amp; No. HP</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">Untuk pendaftaran akun OSS &amp; AHU.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-green-500 mt-0.5">check_circle</span>
                    <div>
                      <span className="block font-bold text-gray-900 dark:text-white">Alamat Usaha</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">Alamat lengkap domisili usaha.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-green-500 mt-0.5">check_circle</span>
                    <div>
                      <span className="block font-bold text-gray-900 dark:text-white">Nama CV</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">Siapkan 3 opsi nama CV (min. 3 kata).</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-green-500 mt-0.5">check_circle</span>
                    <div>
                      <span className="block font-bold text-gray-900 dark:text-white">Modal Usaha</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">Informasi besaran modal dasar &amp; setor.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mb-8">
              <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                <span className="flex items-center justify-center size-8 rounded-lg bg-blue-50 text-primary dark:bg-primary/20">
                  <span className="material-symbols-outlined text-lg">steps</span>
                </span>
                Tahapan Pengerjaan
              </h2>
              <div className="relative">
                <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gray-200 dark:bg-gray-700 md:hidden"></div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="relative pl-16 md:pl-0 group">
                    <div className="hidden md:block absolute top-6 left-0 right-0 h-0.5 bg-gray-200 dark:bg-gray-700 -z-10 group-last:hidden"></div>
                    <div className="absolute left-0 top-0 md:relative md:mb-4 size-12 rounded-xl bg-white dark:bg-gray-800 border-2 border-primary text-primary flex items-center justify-center font-black text-lg shadow-lg z-10">
                      1
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Konsultasi</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">Diskusi awal mengenai kebutuhan bisnis dan pengecekan nama CV.</p>
                  </div>
                  <div className="relative pl-16 md:pl-0 group">
                    <div className="hidden md:block absolute top-6 left-0 right-0 h-0.5 bg-gray-200 dark:bg-gray-700 -z-10"></div>
                    <div className="absolute left-0 top-0 md:relative md:mb-4 size-12 rounded-xl bg-white dark:bg-gray-800 border-2 border-primary text-primary flex items-center justify-center font-black text-lg shadow-lg z-10">
                      2
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Pengisian Data</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">Melengkapi formulir data diri pendiri dan detail perusahaan.</p>
                  </div>
                  <div className="relative pl-16 md:pl-0 group">
                    <div className="hidden md:block absolute top-6 left-0 right-0 h-0.5 bg-gray-200 dark:bg-gray-700 -z-10"></div>
                    <div className="absolute left-0 top-0 md:relative md:mb-4 size-12 rounded-xl bg-white dark:bg-gray-800 border-2 border-primary text-primary flex items-center justify-center font-black text-lg shadow-lg z-10">
                      3
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Proses Legalitas</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">Pendaftaran ke Kemenkumham, penerbitan NPWP Badan &amp; NIB.</p>
                  </div>
                  <div className="relative pl-16 md:pl-0 group">
                    <div className="absolute left-0 top-0 md:relative md:mb-4 size-12 rounded-xl bg-secondary text-[#101519] flex items-center justify-center font-black text-lg shadow-lg shadow-secondary/20 z-10">
                      <span className="material-symbols-outlined">flag</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Selesai</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">Dokumen digital dikirimkan, perusahaan siap beroperasi resmi.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[380px] shrink-0">
            <div className="sticky top-24 space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-xl shadow-primary/5">
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Harga Paket</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-black text-gray-900 dark:text-white">Rp 500.000</span>
                  <span className="text-sm font-medium text-gray-500">/paket</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 mb-6 border border-blue-100 dark:border-blue-900/30">
                  <span className="material-symbols-outlined text-primary">schedule</span>
                  <div>
                    <span className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase">Estimasi Waktu</span>
                    <span className="font-bold text-gray-900 dark:text-white">1 - 2 Hari Kerja</span>
                  </div>
                </div>
                <button 
                  onClick={handlePilihLayanan}
                  className="w-full py-4 rounded-xl bg-secondary text-[#101519] font-bold text-base hover:bg-secondary/90 shadow-lg shadow-secondary/20 hover:-translate-y-1 transition-all flex items-center justify-center gap-2 mb-4"
                >
                  Pilih Layanan &amp; Mulai
                  <span className="material-symbols-outlined text-xl">arrow_forward</span>
                </button>
                <p className="text-center text-xs text-gray-500 mb-6">Tanpa biaya tersembunyi. Pajak sudah termasuk.</p>
                <div className="border-t border-gray-100 dark:border-gray-700 pt-6">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-3 text-sm">Apa yang Anda dapatkan:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                      <span className="material-symbols-outlined text-green-500 text-lg">check</span>
                      Sertifikat Pendaftaran Pendirian
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                      <span className="material-symbols-outlined text-green-500 text-lg">check</span>
                      NPWP Badan Usaha
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                      <span className="material-symbols-outlined text-green-500 text-lg">check</span>
                      Nomor Induk Berusaha (NIB)
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                      <span className="material-symbols-outlined text-green-500 text-lg">check</span>
                      Surat Pernyataan Pendirian
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-primary rounded-2xl p-6 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                  <span className="material-symbols-outlined text-9xl">support_agent</span>
                </div>
                <h3 className="font-bold text-lg mb-2 relative z-10">Butuh Bantuan?</h3>
                <p className="text-blue-100 text-sm mb-6 relative z-10 leading-relaxed">
                  Tim konsultan kami siap membantu Anda memahami kebutuhan legalitas bisnis Anda secara gratis.
                </p>
                <button className="w-full py-3 rounded-xl bg-white/10 border border-white/20 text-white font-bold text-sm hover:bg-white hover:text-primary transition-all flex items-center justify-center gap-2 relative z-10">
                  <span className="material-symbols-outlined">chat</span>
                  Hubungi Kami via WA
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <section className="bg-white dark:bg-background-dark border-t border-gray-100 dark:border-gray-800 py-16">
      <div className="max-w-[800px] mx-auto px-6">
        <div className="text-center mb-10">
          <span className="text-primary font-bold tracking-widest uppercase text-xs">Informasi Tambahan</span>
          <h2 className="text-3xl font-black text-gray-900 dark:text-white mt-2">Pertanyaan Umum</h2>
        </div>
        <div className="space-y-4">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
            <h3 className="font-bold text-gray-900 dark:text-white flex justify-between items-center">
              Apakah CV bisa dimiliki oleh hanya 1 orang saja?
              <span className="material-symbols-outlined text-gray-400">expand_more</span>
            </h3>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
            <h3 className="font-bold text-gray-900 dark:text-white flex justify-between items-center">
              Berapa minimal modal untuk mendirikan CV?
              <span className="material-symbols-outlined text-gray-400">expand_more</span>
            </h3>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
            <h3 className="font-bold text-gray-900 dark:text-white flex justify-between items-center">
              Apakah CV wajib melaporkan pajak?
              <span className="material-symbols-outlined text-gray-400">expand_more</span>
            </h3>
          </div>
        </div>
      </div>
    </section>
    <a className="fixed bottom-8 right-8 z-50 size-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-xl shadow-green-500/30 hover:scale-110 transition-transform active:scale-95" href="#">
      <span className="material-symbols-outlined text-3xl">chat</span>
    </a>
    <Footer />
    </>
  )
}

export default page