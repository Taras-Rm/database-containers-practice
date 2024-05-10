
To run this project follow next steps
1. Clone repo
2. Enter in root directory `cd ./`
3. Install dependencies: `npm install`
3. Add environment files according to examples:
- ./postgresql/.env
- ./pgadmin-cfg.env
- ./postgres-cfg.env

Start databases in containers:

4. Run command: `docker compose up`

Execute postgres queries:

5. Run command: `node postgresql/index.js`
