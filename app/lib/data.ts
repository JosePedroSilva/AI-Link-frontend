export async function getConversations() {
    const response = await fetch('http://localhost:3001/conversations');
    return response.json();
}

export async function getConversation(id: string) {
    const response = await fetch(`http://localhost:3001/conversations/messages/${id}`);
    const data = await response.json();
    console.log(data);
    return data;
}