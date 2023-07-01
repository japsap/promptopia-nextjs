import { db } from "@utils/db"
import Prompt from "@models/Prompt"

export const GET = async (req, res) => {
    try{
        await db()

        const prompts = await Prompt.find({}).populate('creator')
        return new Response(JSON.stringify(prompts), { status: 201 })

    } catch(err){
        return new Response("Failed to fetch", { status: 500 })
    }
}