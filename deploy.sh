#!/bin/bash
set -e

docker compose pull

docker compose build

docker compose down

docker compose up -d

echo "≫ deploy concluído!"
