from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    'http://localhost:3000',
    'localhost:3000'
]

# in order to make cross-origin requests (protocol, IP address, domain name, port)
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*']
)


# Dummy data
temp_todos = [{
    'id': "1",
    'item': 'Read a book'
}, {
    'id': "2",
    'item': 'Cycle around'
}, {
    'id': "3",
    'item': 'Clean up the room'
}]


@app.get('/', tags=['root'])
async def read_root() -> dict:
    return {"message", "Welcome to your todo list."}

@app.get('/todo', tags=['todos'])
async def get_todos() -> dict:
    return {'data': temp_todos}

# add more todo
@app.post('/todo', tags=['todos'])
async def add_todo(todo: dict) -> dict:
    temp_todos.append(todo)
    return {
        'data': { 'Adding todo complete'}
    }

# update todo
@app.put('/todo/{id}', tags=['todos'])
async def update_todo(id: int, body: dict) -> dict:
    for todo in temp_todos:
        if int(todo['id']) == id:
            todo['item'] = body['item']
            return {
                'data': { 'Update complete' }
            }
    return {
        'data': f'Todo with id {id} not found'
    }


# delete todo
@app.delete('/todo/{id}', tags=['todos'])
async def update_todo(id: int, body: dict) -> dict:
    for todo in temp_todos:
        if int(todo['id']) == id:
            temp_todos.remove(todo)
            return {
                'data': { 'Delete complete' }
            }
    return {
        'data': f'Todo with id {id} not found'
    }