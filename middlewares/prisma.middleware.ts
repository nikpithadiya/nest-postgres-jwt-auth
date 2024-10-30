import { PrismaClient } from '@prisma/client';

const prismaObj = new PrismaClient({ errorFormat: 'minimal', log: ['info']});

export default prismaObj;