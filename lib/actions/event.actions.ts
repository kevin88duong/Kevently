"use server"

import { CreateEventParams } from "@/types"
import { connectToDatabase } from "../database"
import { handleError } from "../utils"
import User from "../database/models/user.model"
import Events from "../database/models/events.model"

export const createEvent = async({event, userId, path}:CreateEventParams)=>{
    try {
        await connectToDatabase() 
        const organizer = await User.findById(userId)

        if(!organizer){
            throw new Error("")
        }
        const newEvent = await Events.create({...event, category:event.categoryId, organizer:userId})
        return JSON.parse(JSON.stringify(newEvent))
           
     } catch (error) {
         handleError(error)
     }
}