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

const borderWidth = 3;
const numeroAnni = 2;

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

	getRadarDataComplete() {
		let myDatasets = [];
		for (let i = 0; i < numeroAnni; i++) {
			myDatasets.push({
				label: `Voto ${2021 + i}`,
				borderWidth: borderWidth,
				data: this.getVotiAnno(2021 + i),
			});
		}
		return {
			labels: nomi,
			datasets: myDatasets.reverse(),
		};
	}

	getBarDataComplete() {
		let myDatasets = [];
		for (let i = 0; i < numeroAnni; i++) {
			myDatasets.push({
				label: `Voto ${2021 + i}`,
				borderWidth: borderWidth,
				data: this.getVotiAnno(2021 + i),
			});
		}
		return {
			labels: nomi,
			datasets: myDatasets,
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

	getScatterDataComplete() {
		let myDatasets = [];
		let values = this.getVotiAnno(2021);
		console.log(values);
		return {
			labels: ["Pier"],
			datasets: [
				{
					label: "Voto 2021",
					borderWidth: borderWidth,
					data: values,
				},
			],
		};
	}
}
