import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Bar, Line, Radar, Scatter } from "react-chartjs-2";

export default function PlotsSingle({ data }) {
	const { persona } = useParams();

	useEffect(() => {
		console.log(data.getBarDataSingle(persona));
	}, [persona]);

	if (persona)
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
}
