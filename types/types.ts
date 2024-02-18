export type BlogPost = {
    categories: string[];
    date: string;
    title: string;
    coverImage: string;
    slug: string;
};

export type NewsSectionProps = {
    cobFarmPosts: BlogPost[];
};
