import aws from "aws-sdk";
import xray from "aws-xray-sdk";

const awsWrapped = xray.captureAWS(aws);

export default awsWrapped;
