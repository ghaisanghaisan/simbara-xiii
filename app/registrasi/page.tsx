"use client";
export default function Registrasi() {
	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const formData = new FormData(e.currentTarget);

		fetch(
			"https://script.google.com/macros/s/AKfycbx_I0GEfLm7RUI0rbegMxhR42Ak6f8D21U9SAsltoZVV-5VicMggnxPZu6_XrL_h46q/exec",
			{
				method: "POST",
				body: formData,
				headers: {
					"Content-Type": "multipart/form-data",
					"Access-Control-Allow-Origin": "*",
				},
			}
		);
	};

	return (
		<div className="py-28">
			<h1 className="text-center text-gray-400xl font-bold">Registrasi</h1>
			<form
				method="POST"
				action="https://script.google.com/macros/s/AKfycbx_I0GEfLm7RUI0rbegMxhR42Ak6f8D21U9SAsltoZVV-5VicMggnxPZu6_XrL_h46q/exec">
				<input type="email" name="email" />
				<input type="name" name="name" />
				<input type="file" name="foto" />
				<button type="submit" className="btn">
					Submit
				</button>
			</form>
		</div>
	);
}
