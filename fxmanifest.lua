fx_version "cerulean"
game "gta5"

description "cnt-mailbox"
author "ChronoTech"
version "1.0.0"
lua54 "yes"

ui_page "web/dist/index.html"

shared_script {
	'config/config.**.lua',
}

client_script {
	'client/functions/*.lua',
	'client/main.lua'
}

server_script {
	'server/functions/*.lua',
	'server/main.lua'
}

files {
	'web/dist/index.html',
	'web/custom.js',
	'web/custom.css',
	'web/dist/assets/*.js',
	'web/dist/assets/*.css',
	'web/src/assets/*.png',
	'web/sounds/*.mp3',
	'web/sounds/*.wav',
}