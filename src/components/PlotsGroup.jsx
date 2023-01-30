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
import global from "../global.json";

export default function PlotsGroup({ windowSize, data }) {
	if (windowSize > global.UTILS.MOBILE_WIDTH) {
		return (
			<section
				style={{
					width: "70%",
					marginLeft: "20%",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "column",
					gap: "50px",
					paddingBottom: "100px",
					marginTop: "40px",
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
				<div
					id="sei-stato-alessiato"
					style={{
						marginTop: "100px",
						width: "100%",
						height: "10%",
						display: "flex",
						justifyContent: "flex-end",
					}}
				>
					<p
						onClick={() => (window.location.href = "/alessio")}
						id="patata"
					>
						🥔
					</p>
				</div>
			</section>
		);
	} else {
		return (
			<section
				style={{
					width: "90%",
					display: "flex",
					alignItems: "center",
					flexDirection: "column",
					gap: "50px",
					paddingBottom: "100px",
				}}
			>
				<h1 style={{ marginBottom: "-20px", textAlign: "center" }}>
					COME E' ANDATO L'ANNO?
				</h1>
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
		);
	}
}
