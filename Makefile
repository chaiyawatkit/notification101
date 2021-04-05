dev:
	docker build -t firbaseauthen:lastest .
	docker run -d -p 8082:80 --name rotor-google-login firbaseauthen:lastest

down:
	docker stop rotor-google-login
	docker rm rotor-google-login
