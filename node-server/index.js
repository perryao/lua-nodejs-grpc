const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

const PROTO_PATH = __dirname + '/../protos/service.proto';
const packageDefinition = protoLoader.loadSync(
  PROTO_PATH,
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
  },
);

const serviceProto = grpc.loadPackageDefinition(packageDefinition).service;

function invoke(call, callback) {
  callback(null, { message: `Hello ${call.request.name}` });
}

function main() {
  const server = new grpc.Server();
  server.addService(serviceProto.Service.service, { Invoke: invoke });
  server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
  server.start();
}

main();
