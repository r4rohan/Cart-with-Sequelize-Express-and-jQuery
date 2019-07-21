# Preparing the database

as a root
# login with root use
mysql -u root -p

``` sql
create database shopdb;
create user shopper identified by 'shoppass';
use shopdb;
grant all privileges on shopdb.* to shopper;
```