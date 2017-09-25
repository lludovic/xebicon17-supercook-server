import recipes from './recipes';

const findAllRecipes = (event, context, cb) => {
    const response = {
        statusCode: 200,
        body: recipes
    };

    cb(null, response);
};

const findOneRecipes = (event, context, cb) => {
    console.log('context ', context);
    const response = {
        statusCode: 200,
        body: recipes.filter(recipe => recipe.uid === event.uid)
    };

    cb(null, response);
};

export {findAllRecipes, findOneRecipes};
