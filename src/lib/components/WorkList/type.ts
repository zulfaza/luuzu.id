export type WorkCategoryType = {
	name: string;
	border: string;
	background: string;
};

export type WorkType = {
	title: string;
	thumbnail: string;
	id: string;
	categories: WorkCategoryType[];
};
