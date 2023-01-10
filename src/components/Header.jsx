import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFilter,
	faMagnifyingGlass,
	faUser,
	faUsers,
} from "@fortawesome/free-solid-svg-icons";

export default function Header({ setIsMenuOpen }) {
	const handleOnClickIcon = () => {
		setIsMenuOpen(true);
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
					padding: "20px",
					cursor: "pointer",
				}}
				icon={faUsers}
				size="xl"
				onClick={handleOnClickIcon}
			/>
		</div>
	);
}
