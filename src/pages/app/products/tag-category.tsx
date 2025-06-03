export interface TagCategoryProps {
  category: {
    id: string;
    title: string;
    slug: string;
  };
}

export function TagCategory({ category }: TagCategoryProps) {
  return (
    <span className="label-sm bg-gray-400 px-2 py-1 rounded-full text-white">
      {category.title}
    </span>
  );
}
