start:
	@docker compose up

stop:
	@docker compose down

restart: stop start

enter:
	@docker compose exec app sh

migration-generate:
	@docker compose exec app npm run migration:generate

migration-run:
	@docker compose exec app npm run migration:run

lint:
	@docker compose exec app npm run lint
	@docker compose exec app npm run format