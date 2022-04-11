import { type NextRouter } from 'next/router';

export const getParams = (router: NextRouter) => JSON.parse((router.query['__props__'] as string | undefined) ?? '{}');
