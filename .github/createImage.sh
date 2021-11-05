#!/usr/bin/env bash

TAG=$(git describe --tags --abbrev=0)

echo "$TAG"

docker build . -t tufra/ci-service-"$TAG"

echo ticket.txt | \
node -pe "JSON.parse(process.env[1]).key" > "$KEY"
echo ticket.txt | \
node -pe "JSON.parse(process.env[1]).description" > "$DESC"

curl -H "Content-Type: application/json" \
     -H "Authorization: OAuth AQAAAAAc1G31AAd4vp4Ts7KVD0dTnFyQ5N3VliU" \
     -H "X-Org-ID: 6461097" \
     -X PATCH \
     https://api.tracker.yandex.net/v2/issues/"$KEY" \
     -d "{\"queue\": \"TMP\",\"summary\": \"Release $TAG\",\"description\": \"$DESC\ + docker build = ok" \
