/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import User from "./User.ts";
import Theme from "./themes.tsx";

import Toggler from "./components/Toggler.tsx";
import SearchBar from "./components/SearchBar.tsx";
import UserInfo from "./components/UserInfo.tsx";

const Container = styled.div`
	padding: 4rem 2.4rem 8rem 2.4rem;

	@media screen and (min-width: 768px) {
		padding: 14rem 9.8rem 23.6rem 9.8rem;
	}
`;

function App() {
	const [user, setUser] = useState<User | null>(null);
	const [isLight, setIsLightTheme] = useState(true);

	useEffect(() => {
		const userData = async () => {
			const res = await axios.get(`https://api.github.com/users/octocat`);
			setUser(res.data);
		};
		userData();
	}, []);

	return (
		<Container>
			<Theme theme={isLight}>
				<Toggler setIsLightTheme={setIsLightTheme} />
				<SearchBar setUser={setUser} />
				<UserInfo user={user} />
			</Theme>
		</Container>
	);
}

export default App;
