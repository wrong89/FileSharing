import { createClient } from 'redis';

const url = process.env.REDIS_URL || 'redis://redis:6379';

const redisClient = createClient({
    url,
});

redisClient.on('error', (err: Error) => console.log('Redis Client Error', err));
redisClient.on('connect', () => console.log('connected to redis'));

export default redisClient;
