import React, { useState, useRef, useEffect } from "react";
import Data from "./Data";
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

Chart.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	RadialLinearScale,
	Filler
);

function App() {
	const data = new Data();

	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				flexDirection: "column",
			}}
		>
			<h1>🤙🏽MY YEAR RATING🤙🏽</h1>
			<section
				style={{
					width: "80%",
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
					data={data.getRadarDataComplete()}
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
					data={data.getBarDataComplete()}
				/>
				<Line data={data.getLineDataComplete()} />
			</section>
		</div>
	);
}

export default App;
