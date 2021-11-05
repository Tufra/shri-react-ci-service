#!/usr/bin/env bash

TAG=$(git describe --tags --abbrev=0)

echo "$TAG"
echo ticket.txt

docker build . -t tufra/ci-service-"$TAG"

KEY=$1
DESC=$2

TASK=$(curl -H "Content-Type: application/json" \
     -H "Authorization: OAuth AQAAAAAc1G31AAd4vp4Ts7KVD0dTnFyQ5N3VliU" \
     -H "X-Org-ID: 6461097" \
     -X POST \
     https://api.tracker.yandex.net/v2/issues/"$KEY" \
     -d "{\"queue\": \"TMP\",\"summary\": \"Release $TAG\",\"description\": \"$DESC + docker build = ok\"}" )\
     > ticket.txt

./.github/test.sh "$(echo "$TASK" | jq -r '.id')" "$(echo "$TASK" | jq -r '.description')"
