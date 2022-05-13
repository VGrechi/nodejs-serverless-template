import { APIGatewayEvent } from 'aws-lambda';
import { handler } from '../src/handler';

describe('Handler Test Suite', () => {

    test('should respond successfully', async () => {
        // Given
        const event: any = {
            body: '',
            headers: {},
            multiValueHeaders: {},
            httpMethod: 'GET',
            isBase64Encoded: false,
            pathParameters: {},
            queryStringParameters: {},
            path: '/',
            multiValueQueryStringParameters: {},
            stageVariables: {},
            resource: '/'
        }

        // When
        const response = await handler(event);

        // Then
        expect(response.statusCode).toBe(200);
    })
})