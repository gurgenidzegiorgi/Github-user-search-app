/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import axios from "axios";
import styled from "styled-components";

// import searchIcon from '../assets/images/icon'
const Form = styled.form`
	position: relative;

	& input {
		padding: 1.8rem 0 1.8rem 5rem;
		width: 100%;
		outline: none;
		border: none;
		border-radius: 1.5rem;
		background: #fefefe;
		box-shadow: ${({ theme }) => theme.boxShadow};
		background-color: ${({ theme }) => theme.containerBackground};

		&::placeholder {
			color: ${({ theme }) => theme.textColor};
			font-size: 1.3rem;
			font-weight: 400;
			line-height: 2.5rem;
		}
	}

	& p {
		color: #f74646;
		font-size: 1.5rem;
		font-weight: 700;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		left: 40%;
	}

	& svg,
	& Button {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
	}

	& svg {
		left: 1.6rem;
	}

	& button {
		position: absolute;
		right: 0.75rem;
		border: none;
		color: #fff;
		font-family: "Space Mono";
		font-size: 1.4rem;
		font-weight: 700;
		border-radius: 1rem;
		background: #0079ff;
		padding: 1rem 1.4rem;
		transition: all 0.3s ease;
		cursor: pointer;

		&:hover {
			background: #60abff;
		}
	}
`;

const SearchBar = ({ user, setUser }) => {
	const [query, setQuery] = useState("");
	const [isResult, setIsResult] = useState(false);

	const handleSearch = async () => {
		try {
			const res = (await axios.get(`https://api.github.com/users/${query}`))
				.data;
			setUser(res);
			setIsResult(false);
		} catch (err) {
			if (err) {
				setIsResult(true);
				throw new Error(err.message);
			}
		}
	};
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!query) {
			return;
		} else {
			handleSearch();
			console.log(user);
		}
	};
	return (
		<Form onSubmit={handleSubmit}>
			<input
				type="text"
				value={query || ""}
				placeholder="Search GitHub username…"
				onChange={(e) => setQuery(e.target.value)}
			/>
			{isResult ? <p>No results</p> : ""}
			<svg height="24" width="25" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M10.609 0c5.85 0 10.608 4.746 10.608 10.58 0 2.609-.952 5-2.527 6.847l5.112 5.087a.87.87 0 01-1.227 1.233l-5.118-5.093a10.58 10.58 0 01-6.848 2.505C4.759 21.16 0 16.413 0 10.58 0 4.747 4.76 0 10.609 0zm0 1.74c-4.891 0-8.87 3.965-8.87 8.84 0 4.874 3.979 8.84 8.87 8.84a8.855 8.855 0 006.213-2.537l.04-.047a.881.881 0 01.058-.053 8.786 8.786 0 002.558-6.203c0-4.875-3.979-8.84-8.87-8.84z"
					fill="#0079ff"
				/>
			</svg>
			<button>Search </button>
		</Form>
	);
};

export default SearchBar;
