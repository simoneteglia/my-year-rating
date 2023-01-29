import { faUser, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const clarkePhoto = "/images/clarke.jpg";
const simoPhoto = "/images/simo.jpeg";
const duduPhoto = "/images/dudu.jpeg";
const gaiaPhoto = "/images/gaia.jpg";
const jacopoPhoto = "/images/jacopo.jpeg";
const ludonaPhoto = "/images/ludona.png";
const claraPhoto = "/images/clara.jpeg";
const luisaPhoto = "/images/luisa.jpg";
const michelePhoto = "/images/michele.jpg";
const pierPhoto = "/images/pier.jpeg";
const sdgPhoto = "/images/sdg.jpg";
const serenaPhoto = "/images/serena.jpg";
const sofiaPhoto = "/images/sofia.jpg";
const alessioPhoto = "/images/alessio.jpg";
const mattePhoto = "/images/matte.jpg";
const valeriaPhoto = "/images/valeria.jpg";

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
								src={getPhoto(nome)}
								style={{
									maxWidth: "40px",
									clipPath: "circle(50% at 50% 50%)",
								}}
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

function getPhoto(nome) {
	switch (nome) {
		case "Simo":
			return simoPhoto;
		case "Clarke":
			return clarkePhoto;
		case "Dudu":
			return duduPhoto;
		case "Jacopo":
			return jacopoPhoto;
		case "Clara":
			return claraPhoto;
		case "Gaia":
			return gaiaPhoto;
		case "Ludona":
			return ludonaPhoto;
		case "Luisa":
			return luisaPhoto;
		case "Michele":
			return michelePhoto;
		case "Pier":
			return pierPhoto;
		case "SdG":
			return sdgPhoto;
		case "Sere":
			return serenaPhoto;
		case "Sofia":
			return sofiaPhoto;
		case "Valeria":
			return valeriaPhoto;
		case "Belmy":
			return mattePhoto;
		default:
			return simoPhoto;
	}
}
