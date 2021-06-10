bash:
	docker-compose exec app bash
up:
	docker-compose stop
	docker-compose build
	docker-compose up
up_daemon:
	docker-compose stop
	docker-compose build
	docker-compose up -d
build:
	docker-compose stop
	docker-compose build
	docker-compose run app /bin/bash -c "ng analytics off && npm install --force"
