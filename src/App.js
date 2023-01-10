import React, { useState, useRef, useEffect } from "react";
import Data from "./Data";
import global from "./global.json";
import "./App.css";

import "chart.js/auto";
import { Bar, Line, Radar, Scatter } from "react-chartjs-2";
import {
	Chart,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	RadialLinearScale,
	Filler,
} from "chart.js";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";

Chart.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	RadialLinearScale,
	Filler
);

function App() {
	const [windowSize, setWindowSize] = useState(window.innerWidth);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		document.body.style.position = isMenuOpen ? "fixed" : "initial";
		document.body.style.width = isMenuOpen ? "100%" : "initial";
	}, [isMenuOpen]);

	useEffect(() => {
		window.addEventListener("resize", handleResize);
	}, []);

	const handleResize = () => {
		setWindowSize(window.innerWidth);
	};

	const data = new Data();

	if (windowSize > global.UTILS.MOBILE_WIDTH) {
		/*
		 * DESKTOP
		 */
		return (
			<>
				<Header setIsMenuOpen={setIsMenuOpen} />
				<div
					style={{
						display: "flex",
						alignItems: "center",
						flexDirection: "column",
					}}
				>
					<section
						style={{
							width: "90%",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							flexDirection: "column",
							gap: "50px",
							paddingBottom: "100px",
						}}
					>
						<Radar
							style={{ maxHeight: "500px" }}
							data={data.getRadarDataComplete(windowSize)}
							options={{
								scales: {
									r: {
										angleLines: {
											display: true,
										},
										suggestedMin: 0,
										suggestedMax: 10,
									},
								},
								backgroundColor: "rgba(255, 99, 132, 0.2)",
								borderColor: "rgba(255, 99, 132, 1)",
								fill: true,
							}}
						/>
						<Bar
							style={{ maxHeight: "500px" }}
							data={data.getBarDataComplete(windowSize)}
						/>
						<Line data={data.getLineDataComplete()} />
						<Line
							data={data.getMedia()}
							options={{
								scales: {
									y: { suggestedMin: 4, suggestedMax: 9 },
								},
							}}
						/>
						<Line
							data={data.getModa()}
							options={{
								scales: {
									y: { suggestedMin: 4, suggestedMax: 9 },
								},
							}}
						/>
					</section>
				</div>
				<SideMenu
					setIsMenuOpen={setIsMenuOpen}
					isMenuOpen={isMenuOpen}
					nomi={data.getNomi()}
				/>
			</>
		);
	} else {
		/*
		 * MOBILE
		 */
		return (
			<>
				<Header setIsMenuOpen={setIsMenuOpen} />
				<div
					style={{
						display: "flex",
						alignItems: "center",
						flexDirection: "column",
					}}
				>
					<section
						style={{
							width: "90%",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							flexDirection: "column",
							gap: "50px",
							paddingBottom: "100px",
						}}
					>
						<Radar
							data={data.getRadarDataComplete(windowSize)}
							options={{
								scales: {
									r: {
										angleLines: {
											display: true,
										},
										suggestedMin: 0,
										suggestedMax: 10,
									},
								},
								backgroundColor: "rgba(255, 99, 132, 0.2)",
								borderColor: "rgba(255, 99, 132, 1)",
								fill: true,
							}}
						/>
						<Bar data={data.getBarDataCompleteMobile1()} />
						<Bar data={data.getBarDataCompleteMobile2()} />
						<Line
							data={data.getMedia()}
							options={{
								scales: {
									y: { suggestedMin: 4, suggestedMax: 9 },
								},
							}}
						/>
						<Line
							data={data.getModa()}
							options={{
								scales: {
									y: { suggestedMin: 4, suggestedMax: 9 },
								},
							}}
						/>
					</section>
				</div>
				<SideMenu
					setIsMenuOpen={setIsMenuOpen}
					isMenuOpen={isMenuOpen}
					nomi={data.getNomi()}
				/>
			</>
		);
	}
}

export default App;
