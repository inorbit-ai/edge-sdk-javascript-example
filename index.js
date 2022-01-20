/**
 * InOrbit Edge SDK Example showing how to send data belonging to one robot
 * to the InOrbit Platform.
 *
 * Copyright 2021 InOrbit, Inc.
 */

 import { InOrbit } from '@inorbit/edge-sdk';

 function sleep(ms) {
   return new Promise((resolve) => setTimeout(resolve, ms));
 }
 
 async function main() {
   const robotId = '<Update this value>';
 
   // Initialize the SDK reading the InOrbit API Key from the environment
   const sdk = new InOrbit({
     appKey: process.env.INORBIT_API_KEY,
     // Include logging to the console
     logger: {
       info: console.log,
       error: console.log,
       warn: console.log,
     }
   });
 
   // Initialize the robot connection
   await sdk.connectRobot({ robotId, name: 'Inorbito' });
 
   while (true) {
     // Publish Key-Values for battery and status
     await sdk.publishCustomDataKV(robotId, {
       battery: Math.random() * 100,
       status: Math.random() > 0.5 ? 'Mission' : 'Idle'
     });
 
     // Publish a random pose
     await sdk.publishPose(robotId, {
       ts: new Date().getTime(),
       x: Math.random() * 20 + 20,
       y: Math.random() * 20 + 10,
       yaw: Math.random() * Math.PI * 2,
       frameId: 'map'
     });
 
     // Publish random speed
     await sdk.publishOdometry(robotId, {
       tsStart: new Date().getTime(),
       ts: new Date().getTime(),
       speed: {
         linear: Math.random() * 10,
         angular: Math.random() * Math.PI
       }
     });
     await sleep(1000);
   }
 }
 
 main();