import React from "react";
import "./PagePayment.css";

export const PagePayment = () => {
  return (
    <div className="flex justify-center bgc">
      <div className="container mt-8 mx-4 mb-[3500px]">
        <div className="flex flex-grow flex-wrap items-center justify-start gap-x-4 rounded-lg bg-[#27242d] px-4 py-1 shadow-2xl dark:bg-secondary-700 md:justify-center text-white">
          <div className="flex items-center justify-start gap-2 py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              className="h-4 w-4 text-yellow-300"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z"
              ></path>
            </svg>
            <span className="whitespace-nowrap text-xs font-semibold text-text-color">
              Jaminan Layanan
            </span>
          </div>
          <div className="flex items-center justify-start gap-2 py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              className="h-4 w-4 text-yellow-300"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              ></path>
            </svg>
            <span className="whitespace-nowrap text-xs font-semibold text-text-color">
              Jaminan Layanan 24 Jam
            </span>
          </div>
          <div className="flex items-center justify-start gap-2 py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              className="h-4 w-4 text-yellow-300"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
              ></path>
            </svg>
            <span className="whitespace-nowrap text-xs font-semibold text-text-color">
              Pembayaran Aman & Terpercaya
            </span>
          </div>
          <div className="flex items-center justify-start gap-2 py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              className="h-4 w-4 text-yellow-300"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
              ></path>
            </svg>
            <span className="whitespace-nowrap text-xs font-semibold text-text-color">
              Jaminan Layanan
            </span>
          </div>
          <div className="flex items-center justify-start gap-2 py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              className="h-4 w-4 text-yellow-300"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z"
              ></path>
            </svg>
            <span className="whitespace-nowrap text-xs font-semibold text-text-color">
              Proses Cepat & Otomatis
            </span>
          </div>
        </div>
        <div className="container grid grid-cols-3 gap-8 pb-8 pt-8">
          <div className="col-span-3 md:col-span-1 hidden md:block">
            <div className="sticky top-24 flex flex-col space-y-8">
              <div class="rounded-xl bg-white/50 shadow-2xl dark:bg-secondary-700">
                <div class="prose prose-sm appearance-none px-4 py-2 pb-8 text-xs text-text-color sm:px-6">
                  <div>
                    <p dir="ltr">
                      Takapedia mempersembahkan penawaran istimewa untuk para
                      gamers sejati! Kami hadir dengan layanan Top Up resmi dan
                      100% legal untuk{" "}
                      <strong>Mobile Legends : Bang Bang</strong>, yang
                      dirancang khusus untuk meningkatkan pengalaman bermain
                      game Anda. Nikmati kemudahan, keamanan, dan harga yang
                      terjangkau dalam setiap transaksi Top Up Anda.
                    </p>
                    <p dir="ltr">
                      Top Up <strong>Mobile Legends : Bang Bang</strong> Resmi,
                      Murah, Aman, &amp; Terpercaya
                    </p>
                    <p dir="ltr">
                      Berikut adalah langkah-langkah sederhana untuk Top Up{" "}
                      <strong>Mobile Legends : Bang Bang </strong>:
                    </p>
                    <p dir="ltr">
                      1. Masukkan Data Akun{" "}
                      <strong>Mobile Legends : Bang Bang </strong>(Pastikan data
                      yang Anda masukkan sudah benar dan lengkap)
                      <br />
                      2. Pilih Nominal Diamond (Kami menyediakan berbagai
                      pilihan nominal yang bisa Anda sesuaikan dengan kebutuhan)
                      <br />
                      3. Pilih Metode Pembayaran (Kenyamanan Anda adalah
                      prioritas kami. Kami menyediakan berbagai metode
                      pembayaran yang mudah dan aman)
                      <br />
                      4. Masukkan Kode Promo Jika Ada (Gunakan kode promo untuk
                      mendapatkan penawaran spesial dan diskon menarik)
                      <br />
                      5. Masukkan Nomor Whatsapp dan Email yang Valid (Dapatkan
                      konfirmasi dan notifikasi langsung ke kontak Anda)
                      <br />
                      6. Klik Order Now &amp; Lakukan Pembayaran (Proses mudah
                      dan cepat, kini Anda tinggal selangkah lagi untuk
                      meningkatkan pengalaman gaming Anda)
                      <br />
                      7. Diamond Akan Masuk Otomatis ke Akun Anda (Tunggu dan
                      rasakan sensasi permainan yang lebih seru dengan cepat dan
                      aman)
                    </p>
                    <p dir="ltr">Takapedia Sahabat Para Gamers!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-span-3 flex w-full flex-col gap-y-2 md:hidden">
            <div data-headlessui-state="">
              <button
                class="flex w-full justify-between rounded-lg bg-secondary-500 px-4 py-2 text-left text-sm font-medium shadow-2xl focus:outline-none dark:bg-secondary-700"
                id="headlessui-disclosure-button-:r3:"
                type="button"
                aria-expanded="false"
                data-headlessui-state=""
              >
                <span>Lihat Cara Transaksi</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  class=" h-5 w-5 text-secondary-200"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 15.75l7.5-7.5 7.5 7.5"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div class="col-span-3 flex flex-col space-y-8 md:col-span-2">
            <div class="rounded-xl bg-white/50 shadow-2xl dark:bg-secondary-700">
              <div class="flex border-b border-secondary-600">
                <div class="flex items-center justify-center rounded-tl-xl bg-gradient-to-t from-primary-500 to-primary-200 px-4 py-2 text-xl font-semibold text-text-color-foreground">
                  1
                </div>
                <h3 class="flex w-full items-center justify-between rounded-tr-xl bg-secondary-500 px-2 py-2 text-base font-semibold leading-6 text-text-color dark:bg-secondary-700 sm:px-4">
                  Masukkan Data Akun Kamu
                </h3>
              </div>
              <div class="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 sm:px-6 sm:pb-4">
                <div>
                  <label
                    for="id"
                    class="block text-xs font-medium text-text-color pb-2"
                  >
                    ID
                  </label>
                  <div class="flex flex-col items-start">
                    <input
                      class="relative block w-full appearance-none rounded-none border border-primary-500 bg-secondary-700 px-3 py-2 text-xs text-white placeholder-secondary-200 focus:z-10 focus:border-primary-500 focus:outline-none focus:ring-primary-500 disabled:cursor-not-allowed disabled:opacity-75 !rounded-md !border-bg-color !bg-secondary-200 !text-black !placeholder-black/60 accent-secondary-800 !ring-0 placeholder:text-xs focus:!bg-white focus:!ring-transparent dark:!text-secondary-800 dark:!placeholder-secondary-800"
                      type="number"
                      id="id"
                      name="id"
                      min="0"
                      placeholder="Ketikan ID"
                      value=""
                    />
                  </div>
                </div>
                <div>
                  <label
                    for="server"
                    class="block text-xs font-medium text-text-color pb-2"
                  >
                    Server
                  </label>
                  <div class="flex flex-col items-start">
                    <input
                      class="relative block w-full appearance-none rounded-none border border-primary-500 bg-secondary-700 px-3 py-2 text-xs text-white placeholder-secondary-200 focus:z-10 focus:border-primary-500 focus:outline-none focus:ring-primary-500 disabled:cursor-not-allowed disabled:opacity-75 !rounded-md !border-bg-color !bg-secondary-200 !text-black !placeholder-black/60 accent-secondary-800 !ring-0 placeholder:text-xs focus:!bg-white focus:!ring-transparent dark:!text-secondary-800 dark:!placeholder-secondary-800"
                      type="number"
                      id="server"
                      name="server"
                      min="0"
                      placeholder="Ketikan Server"
                      value=""
                    />
                  </div>
                </div>
              </div>
              <div class="px-4 pb-4 text-[10px] text-text-color sm:px-6 sm:pb-6"></div>
            </div>
            <div class="rounded-xl bg-white/50 shadow-2xl dark:bg-secondary-700 mt-20">
              <div>
                <div class="flex border-b border-secondary-600">
                  <div class="flex items-center justify-center rounded-tl-xl bg-gradient-to-t from-primary-500 to-primary-200 px-4 py-2 text-xl font-semibold text-text-color-foreground">
                    2
                  </div>
                  <h3 class="flex w-full items-center justify-between rounded-tr-xl bg-secondary-500 px-2 py-2 text-base font-semibold leading-6 text-text-color dark:bg-secondary-700 sm:px-4">
                    Pilih Nominal yang Ingin Kamu Beli
                  </h3>
                </div>
                <div class="flex flex-col space-y-4 p-4 sm:p-6">
                  <section>
                    <h3 class="font-semibold text-text-color">Special Items</h3>
                    <div class="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3">
                      <div class="bg-secondary-600 dark:bg-secondary-600 relative flex cursor-pointer rounded-xl border border-transparent p-2.5 shadow-sm outline-none duration-300 ease-in-out hover:ring-2 hover:ring-primary-500 hover:ring-offset-2 hover:ring-offset-secondary-600 md:p-4">
                        <span class="flex flex-1">
                          <span class="flex flex-col justify-between">
                            <span
                              class="trunc block text-xs font-semibold text-white dark:text-white"
                              id="headlessui-label-:r8:"
                            >
                              Weekly Diamond Pass
                            </span>
                            <div>
                              <span
                                class="mt-1 flex items-center text-xxs font-medium text-white dark:text-white/75"
                                id="headlessui-description-:r9:"
                              >
                                Rp&nbsp;27.642
                              </span>
                              <span
                                class="flex items-center text-xxs font-semibold italic line-through decoration-[0.9px] text-rose-500 decoration-rose-800 dark:text-secondary-300 dark:decoration-secondary-500"
                                id="headlessui-description-:ra:"
                              >
                                Rp&nbsp;30.000
                              </span>
                              <div class="flex aspect-square w-8 items-center">
                                <img src="diamond.png" alt="" />
                              </div>
                            </div>
                          </span>
                        </span>
                      </div>
                      <div class="bg-secondary-600 dark:bg-secondary-600 relative flex cursor-pointer rounded-xl border border-transparent p-2.5 shadow-sm outline-none duration-300 ease-in-out hover:ring-2 hover:ring-primary-500 hover:ring-offset-2 hover:ring-offset-secondary-600 md:p-4">
                        <span class="flex flex-1">
                          <span class="flex flex-col justify-between">
                            <span
                              class="trunc block text-xs font-semibold text-white dark:text-white"
                              id="headlessui-label-:r8:"
                            >
                              Weekly Diamond Pass
                            </span>
                            <div>
                              <span
                                class="mt-1 flex items-center text-xxs font-medium text-white dark:text-white/75"
                                id="headlessui-description-:r9:"
                              >
                                Rp&nbsp;27.642
                              </span>
                              <span
                                class="flex items-center text-xxs font-semibold italic line-through decoration-[0.9px] text-rose-500 decoration-rose-800 dark:text-secondary-300 dark:decoration-secondary-500"
                                id="headlessui-description-:ra:"
                              >
                                Rp&nbsp;30.000
                              </span>
                              <div class="flex aspect-square w-8 items-center">
                                <img src="diamond.png" alt="" />
                              </div>
                            </div>
                          </span>
                        </span>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
