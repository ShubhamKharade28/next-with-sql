"use client";
import { useEffect, useState } from "react";

const UpdateStudent = ({params}) => {
	const id = params.id;

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');

	useEffect(() => {
		console.log(id);
		const getData = async () => {
			let apiRes = await fetch(`/api/get-student`,{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',	
				},
				body: JSON.stringify({id: id}),
			});
			apiRes = await apiRes.json();
	
			if (apiRes.success) {
				setName(apiRes.student.name);
				setEmail(apiRes.student.email);
			} 
		};
		getData();
	}, []);

	const updateEmail = async (e) => {
		e.preventDefault();
		if(!email) return;

		let apiRes = await fetch('/api/update-email', {
			method: 'POST',
			body: JSON.stringify({id: id, email: email}),
			headers: {
				'Content-Type': 'appliation/json',
			}
		});

		apiRes = await apiRes.json();

		if(apiRes.success){
			alert("Email updated successfully");
		}else{
			alert("Failed to update email");
		}
	}

	const updateName = async (e) => {
		e.preventDefault();
		if(!name) return;

		let apiRes = await fetch('/api/update-name', {
			method: 'POST',
			body: JSON.stringify({id: id, name: name}),
			headers: {
				'Content-Type': 'appliation/json',
			}
		});

		apiRes = await apiRes.json();

		if(apiRes.success){
			alert("Name updated successfully");
		}else{
			alert("Failed to update name");
		}
	}
  
	return (
		<main className="flex flex-col justify-center items-center w-screen h-screen gap-28">
			<h2 className="text-2xl font-bold">Update Student Data</h2>
			<div className="w-1/2 flex flex-col items-center gap-10">
				<div className="flex gap-10">
					<input 
						placeholder="Enter name to update"
						value={name}
						onChange={(e) => setName(e.target.value)}
						className="outline-none border-2 border-black rounded-md py-2 px-5"
					/>
					<button
						className="bg-green-600 hover:bg-green-400 py-2 px-5 rounded-lg text-white font-bold text-sm"
						onClick={updateName}
					>
						UPDATE NAME
					</button>
				</div>
				<div className="flex gap-10">
					<input 
						placeholder="Enter email to update"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className="outline-none border-2 border-black rounded-md py-2 px-5"
					/>
					<button
						onClick={updateEmail}
						className="bg-green-600 hover:bg-green-400 py-2 px-5 rounded-lg text-white font-bold text-sm"
					>
						UPDATE EMAIL
					</button>
				</div>
			</div>
		</main>
	);
}

export default UpdateStudent;