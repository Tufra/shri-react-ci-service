#!/usr/bin/env bash

npm i
RESULT=$(npm run jest)

KEY=$(echo ticket.txt | jq -r '.key')

DESC=$(echo ticket.txt | jq -r '.desc')

curl -H "Content-Type: application/json" \
     -H "Authorization: OAuth AQAAAAAc1G31AAd4vp4Ts7KVD0dTnFyQ5N3VliU" \
     -H "X-Org-ID: 6461097" \
     -X POST \
     https://api.tracker.yandex.net/v2/issues/"${KEY}" \
     -d "{\"queue\": \"TMP\",\"summary\": \"Release ${TAG}\",\"description\": \"${DESC}\ + tests: ${RESULT}}" \
     > ticket.txt
