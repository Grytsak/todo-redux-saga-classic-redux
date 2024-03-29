import express from 'express'

const asyncWrapper = (fn: any) => {
    return async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        try {
            await fn(req, res, next)
        } catch (error) {
            next(error)
        }
    }
}

export default asyncWrapper