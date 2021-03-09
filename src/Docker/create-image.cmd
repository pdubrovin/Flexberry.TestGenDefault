docker build --no-cache -f SQL\Dockerfile.PostgreSql -t testgendefault/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t testgendefault/app ../..
