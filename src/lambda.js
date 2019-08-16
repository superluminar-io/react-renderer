import { Router } from './router'
import serverless from 'serverless-http'

export const handler = serverless(Router)
