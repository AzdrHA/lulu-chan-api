`
sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout ./ssl/certs/fullchain.key -out ./ssl/certs/privkey.crt
`

`sudo openssl dhparam -out ./ssl/certs/ssl-dhparams.pem 2048`