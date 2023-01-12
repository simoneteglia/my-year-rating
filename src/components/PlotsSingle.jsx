import { useParams } from "react-router-dom";

export default function PlotsSingle() {
	const { persona } = useParams();
	return (
		<div style={{ width: "100%", height: "100%", backgroundColor: "red" }}>
			<h1>Gli anni di {persona}</h1>
		</div>
	);
}
