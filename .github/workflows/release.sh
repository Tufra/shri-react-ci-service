#!/usr/bin/env bash

TAG=$(git describe --tags --abbrev=0 @^)
echo "$TAG"
COMMITS="$(git log "$TAG"..@ --oneline --pretty=format:"%h - %s (%an, %ar)" | tr -s "\n" " ")"

#echo "$COMMITS"

#curl -H "Authorization: OAuth AQAAAAAc1G31AAd4vp4Ts7KVD0dTnFyQ5N3VliU" \
#     -H "X-Org-ID: 6461097" \
#     "https://api.tracker.yandex.net/v2/myself"
#
#echo aaa
curl -H "Content-Type: application/json" \
     -H "Authorization: OAuth AQAAAAAc1G31AAd4vp4Ts7KVD0dTnFyQ5N3VliU" \
     -H "X-Org-ID: 6461097" \
     https://api.tracker.yandex.net/v2/issues/ \
     -d "{\"queue\": \"TMP\",\"summary\": \"Release $TAG\",\"description\": \"$COMMITS\"}" \
     > ticket.txt