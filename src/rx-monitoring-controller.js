const dbclient = require("./dynamo-db-client");

const{
    GetItemCommand,
    PutItemCommand,
} = require("@aws-sdk/client-dynamodb");

const { marshall, unmarshall } = require("@aws-sdk/util-dynamodb");

const patientReport = async(event) =>{
    const response = {};
    //var memberId = event.pathParamerters.memberId;
    return event;
};

module.exports = {
    patientReport
};







