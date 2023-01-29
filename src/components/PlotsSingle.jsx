import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Bar, Line, Radar, Scatter } from "react-chartjs-2";
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

export default function PlotsSingle({ data, windowSize }) {
	const { persona } = useParams();

	if (persona)
		if (windowSize > global.UTILS.MOBILE_WIDTH) {
			/**
			 * DESKTOP
			 */
			return (
				<div style={{ width: "70%", marginLeft: "25%" }}>
					<h1>Gli anni di {persona}</h1>

					<Bar
						style={{ maxHeight: "500px" }}
						data={data.getBarDataSingle(persona)}
						options={{
							indexAxis: "y",
							scales: {
								x: { suggestedMin: 0, suggestedMax: 10 },
							},
						}}
					/>
				</div>
			);
		} else {
			/**
			 * MOBILE
			 */
			return (
				<div
					style={{
						width: "95%",
						margin: "auto",
					}}
				>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							marginLeft: "10px",
						}}
					>
						<h1 style={{ fontSize: "25px" }}>
							Gli anni di {persona}
						</h1>
						<img
							src={getPhoto(persona)}
							alt={persona}
							style={{
								maxWidth: "50px",
								maxHeight: "40px",
								clipPath: "circle(50% at 50% 50%)",
								marginLeft: "20px",
							}}
						/>
					</div>
					<Bar
						style={{ maxHeight: "500px" }}
						data={data.getBarDataSingle(persona)}
						options={{
							indexAxis: "y",
							scales: {
								x: { suggestedMin: 0, suggestedMax: 10 },
							},
						}}
					/>
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
