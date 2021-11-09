import serverless from "serverless-http";
import { APIGatewayEvent } from "aws-lambda";

const bootstrapServer = (app, baseBath?: string) => {
  return serverless(app, {
    request(request, event, context) {
      request.apiGateway = { event, context };
    },
    basePath: baseBath
  });
};

const createHandler = (cachedServer, app, basePath: string) => {
  return (event: APIGatewayEvent, context) => {
    console.info(`${event.httpMethod} - ${event.path}`);
    if (!cachedServer) {
      console.info("Bootstraping server with serverless-http");
      cachedServer = bootstrapServer(app, basePath);
    } else {
      console.info("Using cached server");
    }

    return cachedServer(event, context);
  };
};

export { bootstrapServer, createHandler };
