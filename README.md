# aluradocs

```bash
docker pull mongo

docker run
  --name aluradocs
  -p 27017:27017
  -e MONGO_INITDB_ROOT_USERNAME=admin
  -e MONGO_INITDB_ROOT_PASSWORD=password
  -d mongo

docker start aluradocs
```