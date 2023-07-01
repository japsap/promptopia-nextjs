import { db } from "@utils/db"
import Prompt from "@models/Prompt"

export const POST = async ( req ) => {
    const { userId, prompt, tag} = await req.json()

    try{
        await db()
        const newPrompt = new Prompt({
            creator: userId, 
            tag, 
            prompt
        })

        await newPrompt.save();

        return new Response(JSON.stringify(newPrompt), { status: 201 })
    }catch(err){
        return new Response(`Failed to create new prompt`, { status: 500 })
    }
}
