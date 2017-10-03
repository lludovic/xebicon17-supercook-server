import recipes from './recipes';

const findAllRecipes = (event, context, cb) => {
    const response = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*", // Required for CORS support to work
            "Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS
        },
        body: JSON.stringify(recipes)
    };

    cb(null, response);
};

const findOneRecipes = (event, context, cb) => {
    const filtredRecipes = recipes.filter(recipe => recipe.uid === event.pathParameters.uid)

    if (filtredRecipes.length === 0) {
        const response = {
            statusCode: 404,
            body: 'Not Found'
        };

        cb(null, response);
    } else {
        const response = {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*", // Required for CORS support to work
                "Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS
            },
            body: JSON.stringify(filtredRecipes[0])
        };

        cb(null, response);
    }
};

export {findAllRecipes, findOneRecipes};
