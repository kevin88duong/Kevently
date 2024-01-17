import { Document, Schema, model, models } from "mongoose";

export interface IEvents extends Document {
    _id: string
    title: string
    description?: string
    location?: string
    createdAt: Date
    imageUrl: string
    startDateTime: Date
    endDateTime: Date
    price: string
    isFree: boolean
    url?: string
    category: { _id: string, name: string }
    organizer: { _id: string, firstName: string, lastName: string }
  }

const EventsSchema = new Schema({
    title:{type: String, required: true},
    description:{type: String},
    location:{type: String},
    dateCreated:{type:Date, default: Date.now},
    startDate: {type:Date,default: Date.now},
    endDate: {type:Date, default: Date.now},
    imageUrl:{type:String, required: true},
    price:{type: String},
    isFree:{type:Boolean, default:false},
    url:{type:String},
    category:{type:Schema.Types.ObjectId, ref: "Category"},
    organizer:{type:Schema.Types.ObjectId, ref: "User"}

})

const Events = models.Events || model("Events", EventsSchema)

export default Events