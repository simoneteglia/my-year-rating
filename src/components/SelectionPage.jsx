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
					textTransform: "uppercase",
				}}
			>
				<h2>Filtra i risultati</h2>
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
							<img
								className="profile-image"
								src={`/images/${nome}.jpeg`}
								style={{ maxWidth: "50px", maxHeight: "60px" }}
							></img>
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
