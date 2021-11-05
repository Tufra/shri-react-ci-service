#!/usr/bin/env bash

TAG=$(git tag --list | sort -V -r | awk 'NR==1')
PREV_TAG=$(git tag --list | sort -V -r | awk 'NR==2')

echo "commits: $(git tag)"

echo "$TAG"
echo "$PREV_TAG"
COMMITS="$(git log "$PREV_TAG".."$TAG" --oneline --pretty=format:"%h - %s (%an, %ar)" | tr -s "\n" " ")"

echo "commits: $COMMITS"

#curl -H "Authorization: OAuth AQAAAAAc1G31AAd4vp4Ts7KVD0dTnFyQ5N3VliU" \
#     -H "X-Org-ID: 6461097" \
#     "https://api.tracker.yandex.net/v2/myself"
#
#echo aaa
#curl -H "Content-Type: application/json" \
#     -H "Authorization: OAuth AQAAAAAc1G31AAd4vp4Ts7KVD0dTnFyQ5N3VliU" \
#     -H "X-Org-ID: 6461097" \
#     https://api.tracker.yandex.net/v2/issues/ \
#     -d "{\"queue\": \"TMP\",\"summary\": \"Release $TAG\",\"description\": \"${COMMITS}\"}" \
#     > ticket.txt
