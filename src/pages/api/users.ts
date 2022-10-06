/* eslint-disable import/no-anonymous-default-export */
import q from "faunadb";
import { NextApiRequest, NextApiResponse } from "next";
import { fauna } from "../../libs/fauna";

export default async (req: NextApiRequest, res: NextApiResponse) => {

    try {
       const result = await fauna.query(
        q.Map(
            q.Paginate(
                q.Documents(
                    q.Collection('users')
                )
            ),
            q.Lambda(x => q.Get(x))
        )
       )

       return res.json({ result })
    } catch (error) {
        console.log(error)
    }
    
    return res.send('')
}

