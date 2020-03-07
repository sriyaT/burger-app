import * as actionTypes from "./ActionTypes";   
import axios from "../../axios-orders";

export const AddIngredient = (name) =>{
    return{
        type:actionTypes.ADD_INGREDIENT,
        ingredientName : name
    }
};

export const RemoveIngredient = (name) =>{
    return{
        type:actionTypes.REMOVE_INGREDIENT,
        ingredientName : name
    }
};

export const setIngredients = (ingredients) =>{
    return{
        type: actionTypes.SET_INGREDIENTS,
        ingredients:ingredients
    }

}

export const fetchIngredientsFailed = () =>{
    return{
        type: actionTypes.FETCH_INGREDIENT_FAILED
        };
};

export const initIngredients = () =>{
    return dispatch =>{
        axios.get('https://react-my-burger-c7bc9.firebaseio.com/ingredients.json')
        .then(response =>{
            dispatch(setIngredients(response.data));
        })
        .catch(error =>{
            dispatch(fetchIngredientsFailed());
         });

    };
};