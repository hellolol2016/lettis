import { Client, Entity, Schema, Repository } from "redis-om";
const client = new Client();

async function connect() {
  if (!client.isOpen()) {
    await client.open(process.env.REDIS_URL)
  }
}

class Lettuce extends Entity{
   
}

let schema = new Schema(
  Lettuce,
  {
    name: { type: 'string' },
    type: { type: 'string' },
    image: { type: 'string' },
    description: { type: 'string',textSearch:true },
  },
  {
    dataStructure: 'JSON',
  }
);


export async function createLettuce(data) {
  await connect();

  const repository = new Repository(schema, client);
  const lettuce = repository.createEntity(data);
  const id = await repository.save(lettuce);
  return id;
}


export async function createIndex(){
  await connect();

  const repository = new Repository(schema, client);
  await repository.createIndex() 
}

export async function searchLettuce(q) {
  await connect();
  const repository = new Repository(schema, client);
  const lettuce = await repository.search()
    .where('name').eq(q)
    .or('type').eq(q)
    .or('description').matches(q)
    .return.all();
  
  return lettuce;
}