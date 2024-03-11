'use client'
import { useEffect, useState } from "react";
import { getConversation } from "@/app/lib/data";

export default async function Page({ params }: { params: { conversation: string } }) {
    const [conversation, setConversation] = useState({});
    console.log(params.conversation);
    useEffect(() => {
        getConversation(params.conversation)
    }, []);

    return (
        <div>
            {/* Display conversation details */}
            {params.conversation}
        </div>
    ); 
}