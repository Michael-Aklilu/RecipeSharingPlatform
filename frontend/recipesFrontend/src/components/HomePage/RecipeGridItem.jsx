export default function RecipeGridItem({ recipes }) {
  
  return (
    <div className="flex flex-col gap-4 p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img
        src={recipes.imageUrl}
        className="w-full h-48 object-cover rounded-xl"
      />
      <div className="flex flex-col space-y-2">
        <a className="font-bold text-lg">{recipes.title}</a>
        <a className="text-secondary-text ">{recipes.description}</a>
      </div>
    </div>
  );
}
