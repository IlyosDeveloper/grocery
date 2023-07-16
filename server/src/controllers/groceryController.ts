import {Request, Response} from 'express'
import GroceryModel from '../models/groceryModel';

export async function getGroceries ( req: Request, res: Response ){
    try {
        const groceries = await GroceryModel.find()
        res.json(groceries)
    } catch (error) {
        console.log(error);
    }
}