FROM php:7.2-apache
RUN apt-get update && apt-get install -y
WORKDIR /var/www/html
COPY src/ /var/www/html/
COPY ./apache/myConf.conf /etc/apache2/sites-available/myConf.conf
RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf 
RUN a2enmod rewrite && a2dissite 000-default && a2ensite myConf.conf 
RUN service apache2 restart