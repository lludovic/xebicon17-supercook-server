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
        headers: {
            "Access-Control-Allow-Origin" : "*", // Required for CORS support to work
            "Access-Control-Allow-Credentials" : true // Required for cookies, authorization headers with HTTPS
        },
        body: JSON.stringify(recipes.filter(recipe => recipe.uid === event.pathParameters.uid))
    };

    cb(null, response);
};

export {findAllRecipes, findOneRecipes};
