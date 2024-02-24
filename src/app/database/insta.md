Using MySql database in Next.js:

There are few of ways to do that, after exploring some ways, I found simplest way that works correctly with current next.js version as well as any other javascript framework.

Steps:
1. Install 'mysql2' library using command:
    npm i mysql2;
2. Configure database:
    - create a db-config.js file,
    - import 'mysql/promise'
    - use createPool function to create a connection pool by specifying values such database user
    - use getConnection function to get connection from connection pool
3. Specify API routes for addding, removing, or displaying data: 
    - import mysql pool from db-config.js
    - query database by writing sql and using parameters from request
4. Write API calls to these api routes