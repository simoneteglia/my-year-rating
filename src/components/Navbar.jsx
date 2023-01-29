import { faHome, faUser, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import global from "../global.json";

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
const GAPhoto = "/images/GA.jpeg";
const saladPhoto = "/images/insalata.jpg";

export default function Navbar({ windowSize, nomi }) {
	if (windowSize > global.UTILS.MOBILE_WIDTH) {
		/*
		 * DESKTOP
		 */
		return (
			<div
				style={{
					height: "100vh",
					overflow: "scroll",
					backgroundColor: global.COLORS.LIGHT_BLUE,
					width: "20%",
					position: "fixed",
					top: 0,
					left: 0,
					overflowX: "hidden",
				}}
			>
				<h1 style={{ paddingLeft: "20px" }}>My Year Rating</h1>
				<section
					style={{
						height: "700px",
					}}
				>
					{["GA", ...nomi, "Insalata"].map((nome, i) => {
						return (
							<div
								key={i}
								style={{
									height: "42px",
									width: "100%",
									display: "flex",
									alignItems: "center",
									paddingLeft: "20px",
								}}
							>
								<img
									className="profile-image"
									src={getPhoto(nome)}
									style={{
										maxWidth: "50px",
										maxHeight: "40px",
									}}
								></img>
								<Link
									style={{
										textDecoration: "none",
										color: "black",
										fontSize: "19px",
										paddingLeft: "10px",
									}}
									to={nome === "GA" ? "/" : `${nome}`}
								>
									{nome}
								</Link>
							</div>
						);
					})}
				</section>
			</div>
		);
	} else {
		/*
		 * MOBILE
		 */
		return (
			<div
				style={{
					height: "9vh",
					width: "100vw",
					backgroundColor: "white",
					position: "fixed",
					bottom: 0,
					left: 0,
					display: "grid",
					gridTemplateColumns: "50% 50%",
					borderTop: `2px solid ${global.COLORS.NAVBAR_COLOR}`,
					transition: "all 0.3s ease",
				}}
			>
				<Link
					to="/"
					style={{
						display: "grid",
						placeItems: "center",
						borderRight: `1px solid ${global.COLORS.NAVBAR_COLOR}`,
					}}
				>
					<FontAwesomeIcon
						icon={faHome}
						size="xl"
						style={{ color: global.COLORS.NAVBAR_COLOR }}
					/>
				</Link>

				<Link
					to="/selection"
					style={{
						display: "grid",
						placeItems: "center",
						borderLeft: `1px solid ${global.COLORS.NAVBAR_COLOR}`,
					}}
				>
					<FontAwesomeIcon
						icon={faUsers}
						size="xl"
						style={{ color: global.COLORS.NAVBAR_COLOR }}
					/>
				</Link>
			</div>
		);
	}
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
		case "Insalata":
			return saladPhoto;
		default:
			return GAPhoto;
	}
}
