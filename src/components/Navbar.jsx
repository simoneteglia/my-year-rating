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
					height: "100%",
					backgroundColor: global.COLORS.LIGHT_BLUE,
					display: "flex",
					flexDirection: "column",
					paddingLeft: "20px",
				}}
			>
				<h1>M Y R</h1>
				<section
					style={{
						display: "flex",
						flexDirection: "column",
						height: "700px",
						justifyContent: "space-around",
					}}
				>
					{["GA", ...nomi].map((nome, i) => {
						return (
							<Link
								style={{
									textDecoration: "none",
									color: "black",
									fontSize: "20px",
								}}
								to={nome === "GA" ? "/" : `${nome}`}
							>
								{nome}
							</Link>
						);
					})}
				</section>
			</div>
		);
	}
}
