export type SectionProps = {
	className: string;
};

export type BlogItemsProps = {
	id?: number;
	key?: number;
	url: string;
	imgSrc: string;
	title: string;
	description: string;
};

export type EventProps = {
	id?: number;
	url: string;
	play: string;
	imgSrc: string;
};

export type ClassesProps = {
	id?: number;
	url: string;
	imgSrc: string;
	title: string;
	author: string;
	date: string;
	timing: string;
};
