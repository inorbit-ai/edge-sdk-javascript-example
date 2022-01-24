# Edge-SDK Javascript example
A step by step guide for getting your Javascript programs to communicate with the InOrbit platform 

### Requirements
- Node version 16.13.0 or higher - [Node installation instructions](https://nodejs.org/en/)
- NPM version 8.2.0 or higher - [NPM installation instructions](https://www.npmjs.com/)
- InOrbit account [(it's free to sign up!)](https://control.inorbit.ai/ "InOrbit")


### Steps
1. Clone this repo
2. Run `npm install` in the repo directory
3. Go to your [InOrbit Console](console.inorbit.ai) and get your API Key
4. Set an environment variable `INORBIT_API_KEY=<YOUR API KEY>`
5. Update your RobotID to a unique identifier - *(line 15)*
6. Update your robot name *(optional)* - *(line 29)*
7. Run `node index.js`
8. Log in to the [InOrbit Control Panel](control.inorbit.ai) to see your robot InOrbit

### FAQ
>How do I set an environment variable?

Within the terminal, enter `export INORBIT_API_KEY=your_API_key`

>Where do I get my RobotID?

This value is determined by the user and must be unique. 
