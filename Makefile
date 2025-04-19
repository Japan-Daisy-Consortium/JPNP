####
# Vue.js 3

dummy:

install:
	npm install

run:
	npm run dev

build:
	rm -rf dist
	npm run build

clean:
	rm -rf node_modules dist
	rm -f *~

####
# Docker

docker-build:
	docker compose build

docker-up: dist
	docker compose up -d

docker-down:
	docker compose stop

docker-ps:
	docker compose ps

docker-shell:
	docker compose exec -it nginx /bin/bash

docker-shell-2:
	docker compose run -it --rm nginx /bin/bash

docker-clean:
	docker compose down

# EOF
