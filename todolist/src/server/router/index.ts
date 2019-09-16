import * as express from 'express'
import { Request, Response } from 'express'
var router =  express.Router()

router.get('/api/list', (req: Request, res: Response) => {
  res.send({
    message: 'hello world'
  })
})

export default router