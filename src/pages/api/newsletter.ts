/* eslint-disable import/no-anonymous-default-export */
import q from "faunadb";
import { NextApiRequest, NextApiResponse } from "next";
import { fauna } from "../../libs/fauna";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { email } = req.body

    try {
        if (email.trim() !== "") {
            await fauna.query(
                q.If(
                    q.Not(
                        q.Exists(
                            q.Match(
                                q.Index('user_by_email'),
                                q.Casefold(email),
                            )
                        )
                    ),
                    q.Create(
                        q.Collection("newsletter"),
                        {
                            data: { email }
                        }
                    ),
                    q.Get(
                        q.Match(
                            q.Index('user_by_email'),
                            q.Casefold(email)
                        )
                    )
                )
            )
        }
    } catch (error) {
        console.log(error)
    }
    
    return res.send('')
}