import { APIGatewayEvent } from "aws-lambda";

export const handler = async (event: APIGatewayEvent | any, context?: any) => {
    try {
        const body = {
            message: 'Hello World',
            date: Date.now()
        }
        return { statusCode: 200, body: JSON.stringify(body) };
    } catch (err) {
        throw err;
    }
};