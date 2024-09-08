"use client";

import { useCallback, useRef, useState } from "react";

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
	Tim: string;
	Nomor: string;
	Foto: any;
	[key: string]: any;
}

const InputSection = ({
	title,
	name,
	type,
	value,
	onChange,
}: {
	title: string;
	name: string;
	type: string;
	value: string | "";
	onChange: (e: any) => void;
}) => {
	if (type === "file") {
		return (
			<div className="bg-night px-12 py-6 rounded-lg">
				<h2 className="text-xl mb-2 font-bold">{title}</h2>
				<input
					type="file"
					name={name}
					className="file-input file-input-secondary file-input-bordered file-input-md w-full text-bcyan"
					required
				/>
			</div>
		);
	}
	return (
		<div className="bg-night px-12 py-6 rounded-lg">
			<h2 className="text-xl mb-2 font-bold">{title}</h2>
			<input
				name={name}
				type="text"
				className="w-full text-black px-2 font-bold"
				value={value}
				onChange={onChange}
				required
			/>
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
		Tim: "",
		Nomor: "",
		Foto: null,
	});

	const onSubmit = (e: any) => {
		setLoading(true);
		e.preventDefault();

		const HEADERS = ["Nama", "Tim", "Nomor"];
		const form = e.currentTarget;
		var formData: FormDataType = { Nama: "", Tim: "", Nomor: "", Foto: "" };

		readfile(form["Foto"].files[0]).then((upload_obj) => {
			formData["Foto"] = upload_obj;

			HEADERS.forEach((header) => {
				formData[header] = formState[header];
			});

			console.log(formData);

			const URL =
				"https://script.google.com/macros/s/AKfycbx_Zeez_fvMEViRbIbvUPxNfIwJ8Bnd9x1BIh2dES3cZMa7OQ-yQlUvsZ9jKvtYwNw/exec";

			fetch(URL, {
				method: "POST",
				// headers: {
				// 	"Content-Type": "multipart/form-data",
				// },
				body: JSON.stringify(formData),
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
		});
	};

	const handleTextInput = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const { name, value } = e.target;

			// Use the function form to ensure you are updating the latest state
			setFormState((prevState) => ({
				...prevState,
				[name]: value,
			}));
		},
		[]
	);

	return (
		<section className="py-32 px-4 xl:px-96">
			<div
				className={`${
					loading ? "grid" : "hidden"
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
			<form method="POST" onSubmit={onSubmit} className="space-y-6 mt-12 ">
				<InputSection
					title="Nama"
					name="Nama"
					type="text"
					value={formState["Nama"]}
					onChange={handleTextInput}
				/>
				<InputSection
					title="Tim"
					name="Tim"
					type="text"
					value={formState["Tim"]}
					onChange={handleTextInput}
				/>
				<InputSection
					title="Nomor"
					name="Nomor"
					type="text"
					value={formState["Nomor"]}
					onChange={handleTextInput}
				/>
				<InputSection
					title="Bukti Transfer"
					name="Foto"
					type="file"
					value=""
					onChange={() => {}}
				/>

				<button
					type="submit"
					className="rounded-sm p-4 bg-flamingo w-full text-3xl font-bold text-white">
					Submit
				</button>
			</form>
		</section>
	);
}
