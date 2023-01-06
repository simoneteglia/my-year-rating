import global from "./global.json";

const nomi = [
	"Pier",
	"Clara",
	"SdG",
	"Belmy",
	"Sofia",
	"Valeria",
	"Clarke",
	"Simo",
	"Dudu",
	"Jacopo",
	"Ludona",
	"Luisa",
	"Sere",
	"Michele",
	"Gaia",
];

const voti = {
	Pier: [8, 4],
	Clara: [5, 7],
	SdG: [4, 6.75],
	Belmy: [2, 5],
	Sofia: [6.5, 7.75],
	Valeria: [7.5, 7.5],
	Clarke: [7, 8.5],
	Simo: [7, 8.5],
	Dudu: [3.5, 5.5],
	Jacopo: [5, 6.5],
	Ludona: [2, 6],
	Luisa: [8, 8],
	Sere: [7, 8],
	Michele: [8, 7.25],
	Gaia: [8, 9],
};

const borderWidth = 2;
const mobileBorderWidth = 1;
const numeroAnni = 2;
const slicePoint = 7;

export default class Data {
	constructor() {}

	getVotiAnno(anno) {
		let values = [];
		for (const persona in voti) {
			values.push(voti[persona][anno - 2021]);
		}
		return values;
	}

	getRadarData(anno) {
		let values = this.getVotiAnno(anno);
		console.log(values);
		const dataObject = {
			labels: nomi,
			datasets: [
				{
					label: `Voto ${anno}`,
					borderWidth: borderWidth,
					data: values,
				},
			],
		};
		return dataObject;
	}

	getRadarDataComplete(windowSize) {
		let myDatasets = [];
		for (let i = 0; i < numeroAnni; i++) {
			myDatasets.push({
				label: `Voto ${2021 + i}`,
				borderWidth:
					windowSize > global.UTILS.MOBILE_WIDTH
						? borderWidth
						: mobileBorderWidth,
				data: this.getVotiAnno(2021 + i),
			});
		}
		return {
			labels: nomi,
			datasets: myDatasets.reverse(),
		};
	}

	getBarDataComplete(windowSize) {
		let myDatasets = [];
		for (let i = 0; i < numeroAnni; i++) {
			myDatasets.push({
				label: `Voto ${2021 + i}`,
				borderWidth:
					windowSize > global.UTILS.MOBILE_WIDTH
						? borderWidth
						: mobileBorderWidth,
				data: this.getVotiAnno(2021 + i),
			});
		}
		return {
			labels: nomi,
			datasets: myDatasets,
		};
	}

	getBarDataCompleteMobile1() {
		let myDatasets1 = [];
		for (let i = 0; i < numeroAnni; i++) {
			myDatasets1.push({
				label: `Voto ${2021 + i}`,
				borderWidth: mobileBorderWidth,
				data: this.getVotiAnno(2021 + i).slice(0, slicePoint),
			});
		}
		return {
			labels: nomi.slice(0, slicePoint),
			datasets: myDatasets1,
		};
	}

	getBarDataCompleteMobile2() {
		let myDatasets1 = [];
		for (let i = 0; i < numeroAnni; i++) {
			myDatasets1.push({
				label: `Voto ${2021 + i}`,
				borderWidth: mobileBorderWidth,
				data: this.getVotiAnno(2021 + i).slice(
					slicePoint,
					nomi.length - 1
				),
			});
		}
		return {
			labels: nomi.slice(slicePoint, nomi.length - 1),
			datasets: myDatasets1,
		};
	}

	getLineDataComplete() {
		let myDatasets = [];
		let i = 0;
		for (const persona in voti) {
			myDatasets.push({
				label: nomi[i++],
				borderWidth: borderWidth,
				data: voti[persona],
			});
		}
		return {
			labels: [2021, 2022],
			datasets: myDatasets,
		};
	}
}
