const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const dbclient = new DynamoDBClient({});

module.exports = dbclient;
