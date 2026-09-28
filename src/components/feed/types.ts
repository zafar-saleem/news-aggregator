export type ArticleListCardProps = {
  title: string;
  published_at: string;
  publisher: string;
}

export type ArticleListMetaProps = Omit<ArticleListCardProps, "title">;

export type ArticleListMetaAvatarProps = Pick<ArticleListCardProps, "publisher">;

export type ArticleListDataProps = ArticleListCardProps & {
  uuid: string;
}

export type ArticleListProps = {
  data: ArticleListProp[];
}

export type ArticleListProp = ArticleListDataProps;
