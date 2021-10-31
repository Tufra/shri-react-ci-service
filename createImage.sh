#!/usr/bin/env bash

TAG=$(git describe --tags --abbrev=0)

echo "$TAG"

docker build . -t tufra/ci-service-"$TAG"

docker run -p 49160:8080 -d tufra/ci-service-"$TAG"

docker exec tufra/ci-service-"$TAG" < putContainerInfo.sh
docker exec tufra/ci-service-"$TAG" < test.sh