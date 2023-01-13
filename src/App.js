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
import SelectionPage from "./components/SelectionPage";
import PlotsGroup from "./components/PlotsGroup";
import PlotsSingle from "./components/PlotsSingle";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";

Chart.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	RadialLinearScale,
	Filler
);

export default function App() {
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

	const router = createBrowserRouter([
		{
			path: "/",
			element: (
				<div
					style={{
						width: "100vw",
					}}
				>
					<Navbar windowSize={windowSize} nomi={data.getNomi()} />
					<Outlet />
				</div>
			),
			children: [
				{
					path: "/",
					element: (
						<div
							style={{
								display: "flex",
								alignItems: "center",
								flexDirection: "column",
							}}
						>
							<PlotsGroup windowSize={windowSize} data={data} />
						</div>
					),
				},
				{
					path: "/:persona",
					element: (
						<PlotsSingle data={data} windowSize={windowSize} />
					),
				},
				{
					path: "/selection",
					element: <SelectionPage nomi={data.getNomi()} />,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
}
