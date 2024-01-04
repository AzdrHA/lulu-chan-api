source .env

YEAR="$(date +%Y)"
MONTH="$(date +%m)"
DAY="$(date +%d)"

DATE="$(date +%Y-%m-%d-%H.%M.%S)"

mkdir -p dump_db/$YEAR
mkdir -p dump_db/$YEAR/$MONTH
mkdir -p dump_db/$YEAR/$MONTH/$DAY

docker compose exec -T db mysqldump -u "${MYSQL_USER}" -p"${MYSQL_PASSWORD}" "${MYSQL_DATABASE}" > dump_db/$YEAR/$MONTH/$DAY/$DATE.sql