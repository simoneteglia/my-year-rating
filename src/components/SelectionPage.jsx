import { faUser, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function SelectionPage({ nomi }) {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				width: "100vw",
				height: "85vh",
				// height: "-webkit-fill-available",
				maxHeight: "100vh",
				backgroundColor: "white",
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
			</div>
			<section
				style={{
					height: "-webkit-fill-available",
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
						<Link
							to={`/${nome}`}
							key={i}
							style={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								cursor: "pointer",
								textDecoration: "none",
							}}
						>
							<FontAwesomeIcon
								icon={faUser}
								size="xl"
								style={{ color: "black" }}
							/>
							<p
								style={{
									color: "black",
									fontSize: "16px",
								}}
							>
								{nome}
							</p>
						</Link>
					);
				})}
			</section>
		</div>
	);
}
