import json
import boto3
from decimal import Decimal

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table("ResumeViewCount")

def decimal_default(obj):
    if isinstance(obj, Decimal):
        return float(obj)

def lambda_handler(event, context):
    print("Received Event:", json.dumps(event, indent=2))  # Debugging

    try:
        # Check if Function URL sends 'requestContext' differently
        http_method = event.get("httpMethod") or event.get("requestContext", {}).get("http", {}).get("method")

        if http_method == "GET":
            # Update view count directly in DynamoDB
            response = table.update_item(
                Key={'id': 'views'},
                UpdateExpression="SET #c = if_not_exists(#c, :start) + :inc",
                ExpressionAttributeNames={"#c": "count"},  # Avoid reserved keyword
                ExpressionAttributeValues={":inc": 1, ":start": 0},
                ReturnValues="UPDATED_NEW"
            )

            # Get the updated view count from the response
            views_count = response['Attributes']['count']

            return {
                'statusCode': 200,
                'headers': {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Headers": "*",
                    "Access-Control-Allow-Methods": "GET"
                },
                'body': json.dumps({'views': views_count}, default=decimal_default)
            }

        return {'statusCode': 400, 'body': json.dumps({'error': 'Invalid HTTP method'})}

    except Exception as e:
        return {'statusCode': 500, 
                'headers': {
                    "Access-Control-Allow-Origin": "*"
                },
                'body': json.dumps({'error': str(e)})
        }