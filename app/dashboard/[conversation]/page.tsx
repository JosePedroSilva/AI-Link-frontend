'use client';
import { getConversation } from "@/app/lib/data";

export default async function Page({ params }: { params: { conversation: string } }) {
    const conversation = await getConversation(params.conversation);

    console.log(conversation);

    return (
        <div>
            {/* Display conversation details */}
            {params.conversation}
        </div>
    ); 
}