source .env

YEAR="$(date +%Y)"
MONTH="$(date +%m)"
DAY="$(date +%d)"

DATE="$(date +%Y-%m-%d-%H.%M.%S)"

mkdir -p dump_db/$YEAR
mkdir -p dump_db/$YEAR/$MONTH
mkdir -p dump_db/$YEAR/$MONTH/$DAY

docker-compose exec -T mariadb_api mysqldump -u "${DB_USERNAME}" -p"${DB_PASSWORD}" "${DB_DATABASE}" > dump_db/$YEAR/$MONTH/$DAY/$DATE.sql