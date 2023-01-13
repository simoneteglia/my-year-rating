import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import global from "../global.json";

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
				}}
			>
				<h1 style={{ paddingLeft: "20px" }}>M Y R</h1>
				<section
					style={{
						height: "700px",
					}}
				>
					{["GA", ...nomi].map((nome, i) => {
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
								<FontAwesomeIcon icon={faUser} />
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
					height: "10vh",
					width: "100vw",
					backgroundColor: "red",
					position: "fixed",
					bottom: 0,
					left: 0,
				}}
			>
				<h1>TEST</h1>
			</div>
		);
	}
}
