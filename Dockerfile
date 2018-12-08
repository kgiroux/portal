FROM nginx:alpine

MAINTAINER Kévin Giroux

## Copy our default nginx config
COPY nginx.portal.conf /etc/nginx/conf.d/default.conf

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## From ‘builder’ stage copy over the artifacts in dist folder to default nginx public folder
COPY dist/portail/ /usr/share/nginx/html
