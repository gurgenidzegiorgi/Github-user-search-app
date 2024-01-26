import { useContext } from "react";
import styled, { ThemeContext } from "styled-components";

const TogglerDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 1.6rem;
	margin-bottom: 3.5rem;

	& h1 {
		color: ${({ theme }) => theme.headerColor};
		font-family: "Space Mono";
		font-size: 2.6rem;
		font-weight: 700;
	}

	& .svg-div {
		display: flex;
		align-items: center;
		gap: 1.6rem;
	}
	& p {
		color: ${({ theme }) => theme.textColor};
		text-align: right;
		font-family: "Space Mono";
		font-size: 1.3rem;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
		letter-spacing: 0.25rem;
		transition: all 0.3s ease;
		cursor: pointer;
	}

	& p:hover {
		color: ${({ theme }) => theme.toggleHover};
	}

	& svg {
		cursor: pointer;
		transition: fill 0.3s ease;
		fill: ${({ theme }) => theme.SVGcolor};

		&:hover {
			fill: ${({ theme }) => theme.toggleHover};
		}
	}
`;

const Toggler = ({ setIsLightTheme }) => {
	const themeContext = useContext(ThemeContext);
	const themeToggler = () => {
		setIsLightTheme(!themeContext.isLight);
	};

	return (
		<TogglerDiv>
			<h1>devfinder</h1>
			<div className="svg-div">
				<p onClick={themeToggler}>{themeContext.isLight ? "Dark" : "Light"}</p>
				{themeContext.isLight ? (
					<svg
						onClick={themeToggler}
						width="20"
						height="20"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
					>
						<path
							d="M19.513 11.397a.701.701 0 00-.588.128 7.496 7.496 0 01-2.276 1.336 7.101 7.101 0 01-2.583.462 7.505 7.505 0 01-5.32-2.209 7.568 7.568 0 01-2.199-5.342c0-.873.154-1.72.41-2.49a6.904 6.904 0 011.227-2.21.657.657 0 00-.102-.924.701.701 0 00-.589-.128C5.32.61 3.427 1.92 2.072 3.666A10.158 10.158 0 000 9.83c0 2.8 1.125 5.342 2.967 7.19a10.025 10.025 0 007.16 2.98c2.353 0 4.527-.822 6.266-2.183a10.13 10.13 0 003.58-5.624.623.623 0 00-.46-.796z"
							fillRule="nonzero"
						/>
					</svg>
				) : (
					<svg
						onClick={themeToggler}
						width="20"
						height="20"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
					>
						<g fillRule="nonzero">
							<path d="M13.545 6.455c-.9-.9-2.17-1.481-3.545-1.481a4.934 4.934 0 00-3.545 1.481c-.9.9-1.481 2.17-1.481 3.545 0 1.376.582 2.646 1.481 3.545.9.9 2.17 1.481 3.545 1.481a4.934 4.934 0 003.545-1.481c.9-.9 1.481-2.17 1.481-3.545a4.934 4.934 0 00-1.481-3.545zM10 3.413a.7.7 0 00.688-.688V.688A.7.7 0 0010 0a.7.7 0 00-.688.688v2.037a.7.7 0 00.688.688zM15.635 5.344l1.455-1.455a.67.67 0 000-.952.67.67 0 00-.952 0l-1.455 1.455a.67.67 0 000 .952c.238.264.66.264.952 0zM19.312 9.312h-2.037a.7.7 0 00-.688.688.7.7 0 00.688.688h2.037A.7.7 0 0020 10a.7.7 0 00-.688-.688zM15.608 14.656a.67.67 0 00-.952 0 .67.67 0 000 .952l1.455 1.455a.67.67 0 00.952 0 .67.67 0 000-.952l-1.455-1.455zM10 16.587a.7.7 0 00-.688.688v2.037A.7.7 0 0010 20a.7.7 0 00.688-.688v-2.037a.7.7 0 00-.688-.688zM4.365 14.656L2.91 16.111a.67.67 0 000 .952.67.67 0 00.952 0l1.455-1.455a.67.67 0 000-.952c-.238-.264-.66-.264-.952 0zM3.413 10a.7.7 0 00-.688-.688H.688A.7.7 0 000 10a.7.7 0 00.688.688h2.037A.7.7 0 003.413 10zM4.365 5.344a.67.67 0 00.952 0 .67.67 0 000-.952L3.862 2.937a.67.67 0 00-.952 0 .67.67 0 000 .952l1.455 1.455z" />
						</g>
					</svg>
				)}
			</div>
		</TogglerDiv>
	);
};

export default Toggler;

// import React from "react";
// import styled from "styled-components";

// interface TogglerDivProps {
// 	isLight: boolean;
// }

// const TogglerDiv = styled.div<TogglerDivProps>`
// 	display: flex;
// 	align-items: center;
// 	gap: 1.6rem;
// `;

// const TogglerParagraph = styled.p<TogglerDivProps>`
// 	color: ${({ isLight }) => (isLight ? "#4B6A9B" : "#FFFFFF")};
// 	text-align: right;
// 	font-family: "Space Mono";
// 	font-size: 1.3rem;
// 	font-style: normal;
// 	font-weight: 700;
// 	line-height: normal;
// 	letter-spacing: 0.25rem;
// 	transition: all 0.3s ease;
// 	cursor: pointer;

// 	&:hover {
// 		color: ${({ isLight }) => (isLight ? "#222731" : "#90A4D4")};
// 	}
// `;

// const StyledSvg = styled.svg<TogglerDivProps>`
// 	cursor: pointer;
// 	transition: fill 0.3s ease;

// 	&:hover {
// 		fill: ${({ isLight }) => (isLight ? "#90A4D4" : "#222731")};
// 	}
// `;

// const Toggler = (props) => {
// 	const themeToggler = () => {
// 		props.setIsLightTheme(!props.isLight);
// 		console.log(props.isLight);
// 	};

// 	return (
// 		<TogglerDiv isLight={props.isLight}>
// 			<TogglerParagraph onClick={themeToggler} isLight={props.isLight}>
// 				{props.isLight ? "Dark" : "Light"}
// 			</TogglerParagraph>
// 			{props.isLight ? (
// 				<StyledSvg
// 					onClick={themeToggler}
// 					isLight={props.isLight}
// 					width="20"
// 					height="20"
// 					xmlns="http://www.w3.org/2000/svg"
// 					viewBox="0 0 20 20"
// 				>
// 					<path
// 						d="M19.513 11.397a.701.701 0 00-.588.128 7.496 7.496 0 01-2.276 1.336 7.101 7.101 0 01-2.583.462 7.505 7.505 0 01-5.32-2.209 7.568 7.568 0 01-2.199-5.342c0-.873.154-1.72.41-2.49a6.904 6.904 0 011.227-2.21.657.657 0 00-.102-.924.701.701 0 00-.589-.128C5.32.61 3.427 1.92 2.072 3.666A10.158 10.158 0 000 9.83c0 2.8 1.125 5.342 2.967 7.19a10.025 10.025 0 007.16 2.98c2.353 0 4.527-.822 6.266-2.183a10.13 10.13 0 003.58-5.624.623.623 0 00-.46-.796z"
// 						fillRule="nonzero"
// 					/>
// 				</StyledSvg>
// 			) : (
// 				<StyledSvg
// 					onClick={themeToggler}
// 					isLight={props.isLight}
// 					width="20"
// 					height="20"
// 					xmlns="http://www.w3.org/2000/svg"
// 					viewBox="0 0 20 20"
// 				>
// 					<g fillRule="nonzero">
// 						<path d="M13.545 6.455c-.9-.9-2.17-1.481-3.545-1.481a4.934 4.934 0 00-3.545 1.481c-.9.9-1.481 2.17-1.481 3.545 0 1.376.582 2.646 1.481 3.545.9.9 2.17 1.481 3.545 1.481a4.934 4.934 0 003.545-1.481c.9-.9 1.481-2.17 1.481-3.545a4.934 4.934 0 00-1.481-3.545zM10 3.413a.7.7 0 00.688-.688V.688A.7.7 0 0010 0a.7.7 0 00-.688.688v2.037a.7.7 0 00.688.688zM15.635 5.344l1.455-1.455a.67.67 0 000-.952.67.67 0 00-.952 0l-1.455 1.455a.67.67 0 000 .952c.238.264.66.264.952 0zM19.312 9.312h-2.037a.7.7 0 00-.688.688.7.7 0 00.688.688h2.037A.7.7 0 0020 10a.7.7 0 00-.688-.688zM15.608 14.656a.67.67 0 00-.952 0 .67.67 0 000 .952l1.455 1.455a.67.67 0 00.952 0 .67.67 0 000-.952l-1.455-1.455zM10 16.587a.7.7 0 00-.688.688v2.037A.7.7 0 0010 20a.7.7 0 00.688-.688v-2.037a.7.7 0 00-.688-.688zM4.365 14.656L2.91 16.111a.67.67 0 000 .952.67.67 0 00.952 0l1.455-1.455a.67.67 0 000-.952c-.238-.264-.66-.264-.952 0zM3.413 10a.7.7 0 00-.688-.688H.688A.7.7 0 000 10a.7.7 0 00.688.688h2.037A.7.7 0 003.413 10zM4.365 5.344a.67.67 0 00.952 0 .67.67 0 000-.952L3.862 2.937a.67.67 0 00-.952 0 .67.67 0 000 .952l1.455 1.455z" />
// 					</g>
// 				</StyledSvg>
// 			)}
// 		</TogglerDiv>
// 	);
// };

// export default Toggler;