"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import BGIMG from "../_components/BgIMG";
import { hero_bg } from "@/public/backgrounds";
import { card_orange } from "@/public/elements";

const readfile = (file: any) => {
  const temp_fr = new FileReader();
  return new Promise((resolve, reject) => {
    temp_fr.readAsArrayBuffer(file);
    temp_fr.onload = (f) => {
      const upload_obj = {
        filename: file.name,
        mimeType: file.type,
        value: f.target?.result
          ? [...new Int8Array(f.target.result as ArrayBuffer)]
          : [],
      };

      resolve(upload_obj);
    };
  });
};

interface FormDataType {
  Nama: string;
  Nomor: string;
  Email: string;
  Tim: string;
  Asal: string;
  Jumlah: string;
  Pelatih: string;
  NoPelatih: string;
  Formulir: any;
  Foto: any;
  Bukti: any;
  [key: string]: any;
}

const InputSection = ({
  title,
  desc,
  name,
  type,
  value,
  onChange,
}: {
  title: string;
  desc?: string;
  name: string;
  type: string;
  value: string | "";
  onChange?: (e: any) => void;
}) => {
  return (
    <div className="relative px-6 md:px-12 py-6 rounded-lg">
      <BGIMG src={card_orange} />
      <h2 className="text-xl mb-4 font-bold">{title}</h2>
      {type === "text" ? (
        <input
          name={name}
          type={type}
          className="w-full text-black p-2 font-bold"
          value={value}
          onChange={onChange}
          placeholder={desc}
          required
        />
      ) : (
        ""
      )}
      {type === "select" ? (
        <>
          <select
            name={name}
            className="select w-full max-w-xs bg-white text-black font-bold"
            onChange={onChange}
            value={value}>
            <option disabled selected>Pilih jumlah pasukan mu</option>
            <option>12</option>
            <option>15</option>
          </select>
        </>
      ) : (
        ""
      )}
      {type === "file" ? (
        <>
          <input
            type="file"
            name={name}
            className="file-input file-input-secondary file-input-bordered file-input-md w-full text-bcyan font-bold"
            required
          />
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default function Registrasi() {
  const [loading, setLoading] = useState(false);

  const [submitMsg, setSubmitMsg] = useState({
    title: "",
    body: "",
  });
  const modalRef: any = useRef();

  const [formState, setFormState] = useState<FormDataType>({
    Nama: "",
    Nomor: "",
    Email: "",
    Tim: "",
    Asal: "",
    Jumlah: "12",
    Pelatih: "",
    NoPelatih: "",
    Formulir: null,
    Foto: null,
    Bukti: null,
  });

  const onSubmit = (e: any) => {
    setLoading(true);
    e.preventDefault();

    const HEADERS = [
      "Nama",
      "Nomor",
      "Email",
      "Tim",
      "Asal",
      "Jumlah",
      "Pelatih",
      "NoPelatih",
    ];
    const form = e.currentTarget;
    var formData: FormDataType = {
      Nama: "",
      Nomor: "",
      Email: "",
      Tim: "",
      Asal: "",
      Jumlah: "",
      Pelatih: "",
      NoPelatih: "",
      Formulir: null,
      Foto: null,
      Bukti: null,
    };

    // really bad code

    readfile(form["Formulir"].files[0])
      .then((upload_obj) => {
        formData["Formulir"] = upload_obj;

        return readfile(form["Foto"].files[0]);
      })
      .then((upload_obj) => {
        formData["Foto"] = upload_obj;

        return readfile(form["Bukti"].files[0]);
      })
      .then((upload_obj) => {
        formData["Bukti"] = upload_obj;

        HEADERS.forEach((header) => {
          formData[header] = formState[header];
        });

        console.log(formData);

        const URL =
          "https://script.google.com/macros/s/AKfycbx_Zeez_fvMEViRbIbvUPxNfIwJ8Bnd9x1BIh2dES3cZMa7OQ-yQlUvsZ9jKvtYwNw/exec";

        return fetch(URL, {
          method: "POST",
          // headers: {
          // 	"Content-Type": "multipart/form-data",
          // },
          body: JSON.stringify(formData),
        });
      })
      .then(() => {
        setLoading(false);
        setSubmitMsg({
          title: "Sukses!",
          body: "Anda telah terdaftar sebagai peserta di SIMBARA XIII! Selamat bertanding!",
        });
        modalRef.current.showModal();
      })
      .catch((err) => {
        setLoading(false);
        setSubmitMsg({
          title: "Error!",
          body: "Tolong hubungi Contact Person mengenai masalah ini!",
        });
        modalRef.current.showModal();
      });
  };

  const handleTextInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Use the function form to ensure you are updating the latest state
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    // console.log(name + value);
    // console.log(formState);
  };
  return (
    <section className="relative text-white py-32 px-2 xl:px-96">
      <BGIMG src={hero_bg} />
      <div
        className={`${loading ? "grid" : "hidden"
          } fixed w-screen h-screen bg-black/75 top-0 -left-0 z-50 place-items-center`}>
        <span className="loading loading-lg loading-spinner text-primary"></span>
      </div>
      <dialog
        id="my_modal_5"
        className="modal modal-bottom sm:modal-middle"
        ref={modalRef}>
        <div className="modal-box">
          <h3 className="font-bold text-2xl text-bcyan">{submitMsg.title}</h3>
          <p className="py-4 text-white text-lg">{submitMsg.body}</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-primary">Close</button>
            </form>
          </div>
        </div>
      </dialog>
      <h1 className="text-center text-white font-bold text-3xl ">Registrasi</h1>
      <div className="relative night px-6 md:px-12 py-6 rounded-lg mt-12">
        <BGIMG src={card_orange} />
        <h1 className="text-xl font-bold">Perhatikan sebelum mendaftar!</h1>
        <ol className="list-decimal list-inside text-xl mt-2">
          <li>
            Pastikan sudah membaca{" "}
            <Link href="/peraturan" className="font-bold text-bcyan">
              Peraturan Umum & Juknis Lomba
            </Link>
            .
          </li>
          <li>
            Data yang sudah di-input tidak tersimpan jika keluar dari laman ini
            atau di refresh.
          </li>
          <li>
            Dengan mengisi dan mengirim formulir ini anda setuju dengan{" "}
            <Link href="/peraturan" className="font-bold text-bcyan">
              Syarat & Ketentuan Lomba.
            </Link>
          </li>
          <li>
            Surat surat dan dokumen pendukung diwajibkan dibawa secara fisik saat technical meeting.
          </li>
          <li>
            Setelah klik submit harap menunggu hingga muncul pesan sukses
          </li>
        </ol>
      </div>
      <form method="POST" onSubmit={onSubmit} className="space-y-6 mt-12" encType="multipart/form-data">
        {/*<form method="POST" action="https://www.formbackend.com/f/72a939de54345d67" className="space-y-6 mt-12" encType="multipart/form-data">*/}
        <InputSection
          title="Nama Perwakilan"
          name="Nama"
          type="text"
          desc="Masukkan nama lengkap perwakilan"
          value={formState["Nama"]}
          onChange={handleTextInput}
        />
        <InputSection
          title="Nomor Whatsapp Perwakilan"
          name="Nomor"
          type="text"
          value={formState["Nomor"]}
          desc="Contoh penulisan '08XX-XXXX-XXXX'"
          onChange={handleTextInput}
        />
        <InputSection
          title="Email Perwakilan"
          name="Email"
          type="text"
          value={formState["Email"]}
          desc="Masukkan email aktif perwakilan"
          onChange={handleTextInput}
        />
        <InputSection
          title="Nama Pelatih"
          name="Pelatih"
          type="text"
          desc="Masukkan nama pelatih anda"
          value={formState["Pelatih"]}
          onChange={handleTextInput}
        />
        <InputSection
          title="Nomor Pelatih"
          name="NoPelatih"
          type="text"
          desc="Contoh penulisan '08XX-XXXX-XXXX'"
          value={formState["NoPelatih"]}
          onChange={handleTextInput}
        />
        <InputSection
          title="Nama Tim"
          name="Tim"
          type="text"
          desc="Masukkan nama tim anda"
          value={formState["Tim"]}
          onChange={handleTextInput}
        />
        <InputSection
          title="Asal Sekolah"
          name="Asal"
          type="text"
          desc="Masukkan asal sekolah anda"
          value={formState["Asal"]}
          onChange={handleTextInput}
        />
        <InputSection
          title="Jumlah Pasukan"
          name="Jumlah"
          type="select"
          value={formState["Jumlah"]}
          onChange={handleTextInput}
        />
        <InputSection
          title="Formulir Pendaftaran"
          desc="Loremsdkjflskdjflsdkjflsjflsdjflsjf;aiej"
          name="Formulir"
          type="file"
          value=""
        />
        <InputSection title="Lembar Pas Foto & Kartu Pelajar" name="KartuPelajar" type="file" value="" />
        <InputSection title="Foto Pasukan" name="Foto" type="file" value="" />
        <InputSection
          title="Bukti Transfer"
          name="Bukti"
          type="file"
          value=""
        />

        <button
          type="submit"
          className="bg-flamingo relative rounded-sm p-6 w-full text-3xl font-bold text-white">
          Submit
        </button>
      </form>
    </section>
  );
}
