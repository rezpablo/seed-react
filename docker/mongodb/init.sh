#!/bin/bash

mongodb_cmd="mongod --storageEngine wiredTiger --auth"
cmd="$mongodb_cmd --httpinterface --rest --master"
if "$AUTH" == "yes"; then
    cmd="$cmd --auth"
fi

if [ "$JOURNALING" == "no" ]; then
    cmd="$cmd --nojournal"
fi

if [ "$OPLOG_SIZE" != "" ]; then
    cmd="$cmd --oplogSize $OPLOG_SIZE"
fi

$cmd &

MONGO_PID=$!

if [ ! -f /data/db/.mongodb_password_set ]; then
    /set_mongodb_users.sh
fi

wait $MONGO_PID 2>/dev/null