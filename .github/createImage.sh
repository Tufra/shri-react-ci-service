#!/usr/bin/env bash

TAG=$(git describe --tags --abbrev=0)

echo "$TAG"

docker build . -t tufra/ci-service-"$TAG"

KEY=$(echo ticket.txt | jq -r '.key')
DESC=$(echo ticket.txt | jq -r '.key')

curl -H "Content-Type: application/json" \
     -H "Authorization: OAuth AQAAAAAc1G31AAd4vp4Ts7KVD0dTnFyQ5N3VliU" \
     -H "X-Org-ID: 6461097" \
     -X POST \
     https://api.tracker.yandex.net/v2/issues/"$KEY" \
     -d "{\"queue\": \"TMP\",\"summary\": \"Release $TAG\",\"description\": \"$DESC\ + docker build = ok"
