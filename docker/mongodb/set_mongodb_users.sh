#!/bin/bash

sleep 5

mongo admin << EOF
        use admin
        db.createUser({user: 'dbadmin', pwd: 'db', roles:[{role:'dbOwner',db:'admin'}]})
EOF

mongo admin -u dbadmin -p 'db' << EOF
        db.createUser({ user: 'db', pwd: 'db', roles: [ { role: "userAdminAnyDatabase", db: "admin" } ] })
EOF

mongo admin -u db -p 'db' << EOF
use admin

use db
        db.createUser({
        user: "db",
        pwd: "db",
        roles: [ "readWrite", "dbAdmin" ]
})

EOF

echo "=> Done!"
touch /data/db/.mongodb_password_set