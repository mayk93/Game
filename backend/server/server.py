import asyncio
import websockets
import json

async def server(websocket, _):
    try:
        async for message in websocket:
            print("Message: %s" % message)
            await websocket.send(json.dumps({
                "game_data": [json.loads(message)[0], {"user": 1, "x": 350, "y": 175}, {"user": 2, "x": 130, "y": 250}],
                "error": False
            }))
    except:
        print("Exception")
        await websocket.send(json.dumps({
            "game_data": [],
            "error": True
        }))

asyncio.get_event_loop().run_until_complete(
    websockets.serve(server, 'localhost', 8765)
)
asyncio.get_event_loop().run_forever()
