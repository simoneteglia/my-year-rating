import { faUser, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function SideMenu({ setIsMenuOpen, isMenuOpen, nomi }) {
	useEffect(() => {}, []);
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				width: "100vw",
				height: "100vh",
				height: "-webkit-fill-available",
				maxHeight: "100vh",
				backgroundColor: "white",
				position: "fixed",
				top: 0,
				right: isMenuOpen ? 0 : -400,
				transition: "all 0.5s ease",
			}}
		>
			<div
				style={{
					width: "100%",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					position: "relative",
				}}
			>
				<h1>Filtra i risultati</h1>
				<FontAwesomeIcon
					icon={faXmark}
					size="xl"
					style={{ position: "absolute", right: 20 }}
					onClick={() => setIsMenuOpen(false)}
				/>
			</div>

			<section
				style={{
					display: "grid",
					gridTemplateColumns: "25% 25% 25% 25%",
					placeItems: "center",
					width: "90%",
					height: "100%",
					paddingTop: "30px",
				}}
			>
				{[...nomi].map((nome, i) => {
					return (
						<div
							onClick={() => {
								setIsMenuOpen(false);
								console.log(nome);
							}}
							key={i}
							style={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
							}}
						>
							<FontAwesomeIcon icon={faUser} size="xl" />
							<p
								style={{
									color: "black",
									fontSize: "16px",
								}}
							>
								{nome}
							</p>
						</div>
					);
				})}
			</section>
		</div>
	);
}
