import { ReactNode } from "react";
import BGIMG from "../_components/BgIMG";
import { contact_bg } from "@/public/backgrounds";
import { card_orange } from "@/public/elements";
import Link from "next/link";

function RulesSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="collapse collapse-plus p-4 text-white relative">
      <BGIMG src={card_orange} />
      <input type="checkbox" />
      <div className="collapse-title text-2xl font-bold">{title}</div>
      <div className="collapse-content">
        <ol className="list-decimal list-outside ml-4 text-2xl px-4 text-justify space-y-4">
          {children}
        </ol>
      </div>
    </div>
  );
}

export default function Peraturan() {
  return (
    <div className="relative px-4 lg:px-48 py-36">
      <BGIMG src={contact_bg} />
      <h1 className="text-3xl text-white font-bold text-center">
        Peraturan & Petunjuk SIMBARA XIII
      </h1>

      <div className="mt-12 space-y-4">
        <RulesSection title="Ketentuan Umum">
          <li>
            Perlombaan diikuti oleh 21 sekolah tingkat SMP/MTs dan 21 sekolah
            tingkat SMA/SMK/MA se-DKI Jakarta dan Jawa Barat.
          </li>
          <li>Setiap sekolah diperbolehkan mengikutsertakan maksimal 2 tim.</li>
          <li>
            Peserta menyiapkan kelengkapan administrasi lomba yang diminta dan
            diserahkan paling lambat saat di hari Technical Meeting.
          </li>
          <li>
            Peserta menghadiri Technical Meeting dengan tujuan membahas
            ketentuan dan teknis lomba sekaligus pengundian urutan waktu tampil
            dengan diikuti maksimal 2 perwakilan.
          </li>
          <li>
            Peserta yang tidak hadir saat Technical Meeting berkonsekuensi
            mengikuti kesepakatan forum, untuk pengambilan nomor urut akan
            diwakilkan oleh panitia.
          </li>
          <li>
            Sekolah yang telah mendaftar lalu mengundurkan diri, maka biaya
            pendaftaran tidak dapat dikembalikan.
          </li>
          <li>
            Peserta dilarang membawa barang-barang yang tidak diperkenankan
            dalam aturan, seperti senjata tajam, minuman keras, air mineral
            kemasan (akan disediakan), dan lainnya yang akan dibahas saat
            Technical Meeting.
          </li>
          <li>
            Peserta dilarang merusak fasilitas yang ada di SMA Negeri 55
            Jakarta, dan segala bentuk pelanggaran akan dikenakan sanksi.
          </li>
        </RulesSection>

        <RulesSection title="Ketentuan Khusus Peserta">
          <li>
            Lomba ini diikuti oleh siswa/i SMP/MTs kelas VII/VIII/IX dan
            SMA/SMK/MA kelas X/XI/XII yang terdaftar pada sekolah tersebut.
          </li>
          <li>
            Setiap tim terdiri dari 12 atau 15 anggota pasukan + satu komandan
            serta dengan dua orang cadangan (tidak wajib).
          </li>
          <li>Peserta harus menghadiri technical meeting dengan mengirimkan perwakilannya maksimal 2 orang/tim.</li>
          <li>Peserta tampil berdasarkan nomor urut yang telah ditentukan pada saat technical meeting.</li>
          <li>Peserta dengan nomor urut 11 - 21 (SMP) dan 1-9 (SMA) wajib mengikuti Apel Pembukaan. Apabila terlambat atau tidak mengikuti Apel Pembukaan dikenakan pengurangan poin sebesar 50 poin. </li>
          <li>Setiap tim diwajibkan membawa minimal 10 orang supporter.</li>
          <li>
            Seluruh peserta wajib mengikuti acara hingga apel penutupan dengan
            menyertakan perwakilan minimal 5 orang.
          </li>
          <li>
            Setiap pasukan dapat didampingi oleh seorang Pembina dan seorang
            Pelatih dan hanya dapat masuk ke ruangan persiapan dengan total 20
            orang.
          </li>
          <li>
            Apabila terdapat peserta yang mengundurkan diri atau tidak datang
            pada saat pelaksanaan lomba tanpa sepengetahuan panitia, maka
            peserta dengan nomor undian berikutnya menempati nomor urut tampil
            sebelumnya dengan jeda waktu 3 menit.
          </li>
          <li>
            Ketentuan lain yang belum tercantum dalam ketentuan ini akan dibahas
            pada saat Technical Meeting.
          </li>
        </RulesSection>

        <RulesSection title="Ketentuan Pendaftaran & Daftar Ulang">
          <li>Biaya pendaftaran: Rp. 550.000,00/tim (include uang WO).</li>
          <li>
            Sistem pembayaran dapat dilakukan melalui transfer ke 1280717343
            (BCA) a.n (CIKA DESTRIYANI PUTRI). Setiap pasukan diwajibkan untuk
            DP (apabila tidak bisa langsung lunas) sebesar 50% dari biaya
            pendaftaran.
          </li>
          <li>
            Pendaftaran dapat dilakukan secara langsung di SMA Negeri 55 Jakarta
            (Jl. Minyak Duren Tiga, Pancoran, Jakarta Selatan) dengan
            menghubungi contact person terlebih dahulu.
          </li>
          <li>
            Pelunasan pendaftaran paling lambat dilakukan pada tanggal 3
            November 2024 saat Technical Meeting.
          </li>
          <li>
            Apabila peserta mengundurkan diri maka uang pendaftaran hanya bisa
            dikembalikan sebesar 50% atau Rp. 250.000,00 dan DP tidak dapat
            dikembalikan.
          </li>
          <li>
            Apabila total peserta yang mendaftar sudah mencapai kuota, maka
            pendaftaran akan ditutup.
          </li>
          <li>
            Peserta wajib mendaftar ulang dan apabila peserta tidak mendaftar
            ulang (tanpa keterangan), maka dianggap mengundurkan diri.
          </li>
          <li>
            Pendaftaran ulang saat hari perlombaan dimulai pukul 05.30 s.d 07.00
            WIB.
          </li>
          <li>
            Apabila peserta terlambat mendaftar ulang maka akan dikenakan
            pengurangan poin 50 poin/tim.
          </li>
          <li>
            Kelengkapan administrasi yang harus disiapkan peserta dan paling
            lambat diserahkan pada saat Technical Meeting adalah sebagai
            berikut:
            <ul className="list-disc ml-8">
              <li>
                Melakukan pendaftaran pada website simbara.site
              </li>
              <li>
                Foto serta nama peserta dengan format yang telah disediakan
                (foto diwajibkan background merah dan formal) dan foto kartu pelajar.
              </li>
              <li>Surat Keterangan Sekolah</li>
              <li>Bukti pembayaran tiap masing-masing pasukan</li>
            </ul>
          </li>
        </RulesSection>
        <RulesSection title="Ketentuan Pakaian">
          <li>
            Pakaian lomba diserahkan kepada sekolah masing-masing dengan
            ketentuan sopan, proporsional serta tidak melanggar norma-norma yang
            ada.
          </li>
          <li>
            Pakaian lomba diperbolehkan untuk dimodifikasi sesuai kreatifitas
            masing-masing sekolah, seperti: ditambahkan manik-manik, pita,
            evolet, dan lain-lain.
          </li>
          <li>
            Sepatu lomba tidak diperkenankan menggunakan sandal dalam jenis
            apapun.
          </li>
          <li>
            Tidak diperkenankan menggunakan atribut Purna Paskibraka Indonesia
            (PPI), Tentara Nasional Indonesia (TNI), dan POLRI atau yang
            menyerupai.
          </li>
        </RulesSection>
        <RulesSection title="Dewan Juri">
          <li>
            Dewan juri terdiri dari 3 TNI, 2 orang juri Variasi Formasi
            dan 1 orang juri kostum.
          </li>
          <li>
            Semua penilaian lomba adalah hak dan tanggung jawab dewan juri.
          </li>
          <li>Keputusan dewan juri tidak dapat diganggu gugat.</li>
        </RulesSection>
        <RulesSection title="Ketentuan Perlombaan">
          <li>
            Ketentuan pelaksanaan PBB mengacu pada PERPANG TNI No. 57 tentang
            Penghormatan & No. 58 tentang PBB Tahun 2018.
          </li>
          <li>
            Pemanggilan peserta dilakukan sebanyak 3 kali, apabila peserta belum
            tiba di DP 1 setelah 3 kali pemanggilan maka peserta akan
            dipindahkan di urutan terakhir dan akan dikenakan pengurangan 100
            poin, peserta dengan urut tampil berikutnya langsung bersiap untuk
            tampil.
          </li>
          <li>
            Waktu yang disediakan adalah 10 menit (untuk PBB dan Variasi
            Formasi).
          </li>
          <li>
            Perlombaan dilaksanakan di lapangan dengan garis tepi yang
            disediakan berukuran 22 m × 15 m.
          </li>
          <li>
            Posisi danton harus berada di kotak danton pada saat memberi
            aba-aba.
          </li>
          <li>
            Danton tidak diperbolehkan keluar kotak saat variasi dan formasi.
          </li>
          <li>
            Aba-aba harus dilakukan secara berurutan, apabila ada aba-aba yang
            terlewat, maka poin pada aba-aba tersebut tidak dinilai.
          </li>
          <li>
            Tidak ada laporan kepada dewan juri saat awal tampil maupun selesai
            tampil.
          </li>
          <li>
            Aba-aba tambahan maupun sisipan boleh dilakukan apabila perlu dengan
            catatan bahwa aba-aba tersebut tidak ada pada aba-aba setelahnya,
            tetapi tetap tidak menambah poin apapun.
          </li>
          <li>
            Waktu dimulai saat danton memanggil penjuru dan waktu berhenti saat
            danton keluar kotak.
          </li>
          <li>
            PBB Variasi dan Formasi tidak diperkenankan menggunakan musik.
          </li>
          <li>
            Variasi yang digunakan tidak mengandung unsur SARA ataupun unsur
            negatif lainnya.
          </li>
          <li>
            Apabila saat lomba gerimis, maka lomba tetap berlanjut. Sedangkan,
            apabila hujan lebat, maka lomba dihentikan sementara (waktu juga
            dihentikan), peserta yang telah berada di lapangan dipersilahkan
            membubarkan diri dan jika hujan sudah berhenti danton memasuki
            lapangan lomba dan menempati posisinya lalu memanggil pasukan dan
            lomba dilanjutkan sesuai aba-aba terakhir.
          </li>
        </RulesSection>
        <RulesSection title="Ketentuan Penilaian">
          <li>
            Juara Umum: Akumulasi dari keseluruhan nilai
            (PBB+Vafor+Danton+Kostum) dikurangi pengurangan poin. (Apabila ada
            kesamaan nilai, maka dilihat dari nilai PBB dasar dan atau dilihat
            dari waktu paling terdekat dengan 10 menit).
          </li>
          <li>
            Juara Utama - Madya: Akumulasi penilaian pasukan + nilai PBB + nilai
            Danton + dikurangi pengurangan poin. (Apabila ada kesamaan nilai,
            maka dilihat dari waktu paling terdekat dengan 10 menit).
          </li>
        </RulesSection>

        <div className="w-full overflow-clip rounded-xl relative p-8 text-center text-2xl text-white font-bold">
          <BGIMG src={card_orange} />
          Selebihnya informasi yang lengkap bisa dilihat dengan{" "}
          <Link
            href="/JUKNIS_JUKLAK_SIMBARA_XIII.pdf"
            download="JUKNIS_JUKLAK_SIMBARA_XIII.pdf"
            className="text-bcyan drop-shadow-glow">
            Download PDF!
          </Link>
        </div>
      </div>
    </div>
  );
}
