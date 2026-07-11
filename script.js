function findRecipe() {

    let ingredients = document
        .getElementById("ingredientInput")
        .value
        .toLowerCase();

    let result = document.getElementById("recipeResult");

    if (ingredients.includes("egg") && ingredients.includes("bread")) {

        result.innerHTML = `
        <div class="recipe">
            <h3>🍳 Cheesy Egg Toast</h3>

            <p><strong>Ingredients:</strong></p>
            <ul>
                <li>Bread</li>
                <li>Eggs</li>
                <li>Cheese (optional)</li>
                <li>Butter</li>
            </ul>

            <p><strong>Instructions:</strong></p>

            <ol>
                <li>Toast the bread.</li>
                <li>Cook the eggs.</li>
                <li>Add cheese if you have it.</li>
                <li>Serve and enjoy!</li>
            </ol>

            <p>⭐ Difficulty: Easy</p>
            <p>⏱ Time: 10 Minutes</p>
        </div>
        `;

    } else if (ingredients.includes("banana")) {

        result.innerHTML = `
        <div class="recipe">
            <h3>🍌 Banana Pancakes</h3>

            <p>Mix banana, eggs, and oats to make simple pancakes.</p>

            <p>⭐ Difficulty: Easy</p>

            <p>⏱ Time: 15 Minutes</p>

        </div>
        `;

    } else if (ingredients.includes("chicken")) {

        result.innerHTML = `
        <div class="recipe">
            <h3>🍗 Grilled Chicken</h3>

            <p>Season chicken with your favorite spices and grill until fully cooked.</p>

            <p>⭐ Difficulty: Medium</p>

            <p>⏱ Time: 30 Minutes</p>

        </div>
        `;

    } else {

        result.innerHTML = `
        <div class="recipe">

            <h3>🤖 Chef AARYB</h3>

            <p>
            I couldn't find a recipe yet.

            Don't worry! In future versions I'll search hundreds of recipes automatically.
            </p>

        </div>
        `;

    }

}

let completedChallenges = 0;

function completeChallenge() {

    completedChallenges++;

    alert("🎉 Great job! Challenges completed: " + completedChallenges);

}
