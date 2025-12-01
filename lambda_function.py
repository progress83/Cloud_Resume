import json
import boto3
dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('resume-counter')
def lambda_handler(event,context):
    response = table.get_item(Key={
        'id':'0'
    })
    visit_count = response['Item']['visits']
    visit_count = visit_count + 1
    print(visit_count)
    response = table.put_item(Item={
        'id':'0',
        'visits':visit_count
    })
    return visit_count