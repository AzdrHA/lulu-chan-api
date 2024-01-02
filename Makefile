start:
	@docker compose up

stop:
	@docker compose down

restart: stop start

enter:
	@docker compose exec app sh

migration:
	@docker compose exec app bun run migration:generate
	@docker compose exec app bun run migration:run

lint:
	@docker compose exec app bun run lint
	@docker compose exec app bun run format