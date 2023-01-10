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
import PlotsGroup from "./components/PlotsGroup";
import PlotsSingle from "./components/PlotsSingle";

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
	const [personSelected, setPersonSelected] = useState("GA");

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
				{personSelected === "GA" ? (
					<PlotsGroup windowSize={windowSize} data={data} />
				) : (
					<PlotsSingle personSelected={personSelected} />
				)}
			</div>
			<SideMenu
				setIsMenuOpen={setIsMenuOpen}
				isMenuOpen={isMenuOpen}
				nomi={data.getNomi()}
				setPersonSelected={setPersonSelected}
			/>
		</>
	);
}

export default App;
