import recipes from './recipes';

const findAllRecipes = (event, context, cb) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify(recipes)
    };

    cb(null, response);
};

const findOneRecipes = (event, context, cb) => {
    console.log('context :', context);
    console.log('event :', event);
    const response = {
        statusCode: 200,
        body: JSON.stringify(recipes.filter(recipe => recipe.uid === event.pathParameters.uid))
    };

    cb(null, response);
};

export {findAllRecipes, findOneRecipes};
