export type NoUndefinedField<T> = {
	[P in keyof T]-?: NoUndefinedField<NonNullable<T[P]>>;
};

export type SparkleType = {
	id: string;
	createdAt: number;
	color: string;
	size: number;
	style: any;
};

export type TagType = {
	label: string;
	color?: 'primary' | 'secondary';
};

export type SocialLink = {};

export type FeatureType = {
	name: string;
	description: string;
	image: string;
	tags: TagType[];
};

export type SocialProofType = {
	name: string;
	quote: string;
	image: string;
	position: string;
};

export type BlogPostType = {
	tags: string[];
	keywords: string[];
	hidden: boolean;
	slug: string;
	title: string;
	date: string;
	updated: string;
	excerpt: string;
	html: string | undefined;
	readingTime: string;
	relatedPosts: BlogPostType[];
	coverImage: string | undefined;
};
