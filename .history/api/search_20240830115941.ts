import type { NextApiRequest, NextApiResponse } from 'next';
const users = ['Alice', 'Bob', 'Charlie'];
const messages = ['Hello World', 'React is awesome!', 'Next.js is cool!'];
const content = ['How to use React', 'Next.js vs Nuxt.js', 'JavaScript tips'];
export function handler(req:NextApiRequest,res:NextApiResponse){
    const {query}=req.query;
    if (typeof query!='string'){
        res.status(400).json({ error: 'Invalid query parameter' });
    }
    if (query.trim() === '') {
        return res.status(400).json({ error: 'Query parameter cannot be empty' });
    }
    const lowerQuery = query.
    const results  ={
        users:users.filter(user => user.includes(lowerQuery)),
        messages:messages.filter(message=>message.includes(lowerQuery)),
        content:content.filter(cont=>cont.includes(lowerQuery))
    }
    res.status(200).json(results)
}