const AWS = require('aws-sdk');

exports.handler = async (event) => {
    const s3 = new AWS.S3();

    for (const record of event.Records) {
        const bucketName = record.s3.bucket.name;
        const fileName = record.s3.object.key;

        console.log(`File ${fileName} uploaded to ${bucketName}`);
    }

    return {
        statusCode: 200,
        body: 'File processed successfully',
    };
};
