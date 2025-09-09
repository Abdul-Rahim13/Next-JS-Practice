"use server"
import connectMongo from "@/public/lib/mongoose"
import mongoose from "mongoose"

export const contactAction = async (formData) => {

    const {categoryName, description} = Object.fromEntries(formData.entries())
    //      OR
    // const categoryName = formData.get("categoryName");
    // const description = formData.get("description");

    await connectMongo()
    const db = mongoose.connection.db

    await db.collection("categories").insertOne({
        categoryName, description, 
        createdAt: new Date()
    })

    console.log(categoryName, description)
}