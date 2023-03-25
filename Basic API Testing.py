import requests
import json



response = requests.get("https://api.myanimelist.net/v2/anime/ranking")
print(response.status_code)
