# SampleCypressTestAutomationProject

## PreRequisite 

Please follow the instructions in the <a href='https://docs.cypress.io/guides/getting-started/installing-cypress'>cypress installation page</a> by installing nodeJs and Cypress.


## How To Run
1. Clone the project to a proper directory
2. Open the command prompt
3. Go to the project directory from the command line
4. Run any of these commands below
   - ***npx cypress run --config-file hajper_config.json*** - to run desktop and mobile tests for hajper.com 
   - ***npx cypress run --config-file snabbare_config.json*** - to run desktop and mobile tests for snabbare.com 
   - ***npx cypress run --config-file snabbare_config.json --browser chrome*** - to rundesktop and mobile tests for snabbare.com with chrome browser
5. Go to videos sub directory and watch the test scenario

## How to Run with Custom Configuration

1. Go to the project directory
2. Open ***cypress.json*** in an editor
3. Change ***baseUrl*** or ***mobileDevice*** values (mobile devices must be one of <a href='https://docs.cypress.io/api/commands/viewport#Arguments'> in this preset list </a>
4. Open the command prompt
5. Go to the project directory from the command line
6. Run ***npx cypress run*** command
7. Go to videos sub directory and watch the test scenario
