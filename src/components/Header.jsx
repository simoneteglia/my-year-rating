import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFilter,
	faMagnifyingGlass,
	faUser,
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
	const handleOnClickIcon = () => {
		console.log("click");
	};

	return (
		<div
			style={{
				width: "100%",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				position: "relative",
			}}
		>
			<h1 style={{ fontSize: "28px" }}>MY YEAR RATING</h1>
			<FontAwesomeIcon
				style={{
					paddingLeft: "50px",
					position: "absolute",
					right: "20px",
				}}
				icon={faUser}
				size="lg"
				onClick={handleOnClickIcon}
			/>
		</div>
	);
}
