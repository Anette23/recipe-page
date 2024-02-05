import image from "../assets/images/image-omelette.jpeg";
const RecipeCard = () => {
  return (
    <main className="md:grid md:place-items-center md:py-12">
      <div className="md:p-8 bg-white md:rounded-xl max-w-[44rem]">
        <div>
          <img src={image} alt="omelette" className="lg:rounded-xl" />
        </div>
        <section className="pt-6 px-10 md:px-0">
          <article>
            <h1 className="text-4xl text-darkCharcoal mb-6">
              Simple Omelette Recipe
            </h1>
            <p className="mb-6">
              {" "}
              An easy and quick dish, perfect for any meal. This classic
              omelette combines beaten eggs cooked to perfection, optionally
              filled with your choice of cheese, vegetables, or meats.
            </p>
          </article>
          <article className="bg-roseWhite py-6 pl-8">
            <h3 className="mb-4 text-darkRaspberry">Preparation time</h3>
            <ul>
              <li className="unordered-item list-disc">
                <span>Total: </span>
                Approximately 10 minutes
              </li>
              <li className="unordered-item list-disc">
                {" "}
                <span>Preparation:</span> 5 minutes
              </li>
              <li className="unordered-item list-disc">
                <span>Cooking: 5</span> minutes
              </li>
            </ul>
          </article>
          <article>
            <h2 className="heading">Ingredients</h2>
            <ul>
              <li className="unordered-item list-disc">2-3 large eggs</li>
              <li className="unordered-item list-disc">Salt, to taste</li>
              <li className="unordered-item list-disc">Pepper, to taste</li>
              <li className="unordered-item list-disc">
                1 tablespoon of butter or oil
              </li>
              <li className="unordered-item list-disc">
                Optional fillings: cheese, diced vegetables, cooked meats, herbs
              </li>
            </ul>
          </article>
          <article>
            <h2 className="heading">Instructions</h2>
            <ol>
              <li className="ordered-item ">
                <span>Beat the eggs: </span>
                In a bowl, beat the eggs with a pinch of salt and pepper until
                they are well mixed. You can add a tablespoon of water or milk
                for a fluffier texture.
              </li>
              <li className="ordered-item">
                {" "}
                <span>Heat the pan: </span>
                Place a non-stick frying pan over medium heat and add butter or
                oil.
              </li>
              <li className="ordered-item">
                <span>Cook the omelette: </span>
                Once the butter is melted and bubbling, pour in the eggs. Tilt
                the pan to ensure the eggs evenly coat the surface.
              </li>
              <li className="ordered-item">
                {" "}
                <span>Add fillings (optional): </span>
                When the eggs begin to set at the edges but are still slightly
                runny in the middle, sprinkle your chosen fillings over one half
                of the omelette.
              </li>
              <li className="ordered-item">
                <span>Fold and serve: </span>
                As the omelette continues to cook, carefully lift one edge and
                fold it over the fillings. Let it cook for another minute, then
                slide it onto a plate.
              </li>
              <li className="ordered-item">
                {" "}
                <span>Enjoy: </span>
                Serve hot, with additional salt and pepper if needed.
              </li>
            </ol>
          </article>
          <article>
            <h2 className="heading">Nutrition</h2>
            <p>
              The table below shows nutritional values per serving without the
              additional fillings.
            </p>
            <aside className="p-4 nutrition-table">
              <div>
                <p>Calories</p>
                <p>Carbs</p>
                <p>Protein</p>
                <p>Fat</p>
              </div>
              <div>
                <p className="text-darkRaspberry font-bold">277kcal</p>
                <p className="text-darkRaspberry font-bold">0g</p>
                <p className="text-darkRaspberry font-bold">20g</p>
                <p className="text-darkRaspberry font-bold">22g</p>
              </div>
            </aside>
          </article>
        </section>
      </div>
    </main>
  );
};

export default RecipeCard;
