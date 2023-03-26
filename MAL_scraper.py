import requests
import json
import time as time

PUBLIC_KEY = "5e1789ae5088a9c86805512f75d7c338"
TOTAL_ANIME = 200

# Pull full list of anime sorted by popularity
headers = {'X-MAL-CLIENT-ID' : PUBLIC_KEY}
base_url = "https://api.myanimelist.net/v2/anime/ranking"
payload = {'ranking_type': 'bypopularity',
           'limit': {TOTAL_ANIME},
           'fields': 'id,title,alternative_titles,start_date,mean,media_type,num_episodes,studios,genres'}
response = requests.get(base_url, headers = headers, params=payload)
print(response.status_code)
data = response.json()
mutable_data = data.load()


# For testing out getting recommendations
test_id = 16498
headers = {'X-MAL-CLIENT-ID' : "5e1789ae5088a9c86805512f75d7c338"}
base_url = f"https://api.myanimelist.net/v2/anime/{test_id}"
payload = {#'fields': 'id,title,alternative_titles,start_date,mean,media_type,num_episodes,studios,genres,recommendations,related_anime'
           'fields': 'recommendations'}
response = requests.get(base_url, headers = headers, params=payload)
print(response.status_code)
recs = response.json()

"""
MOST RECOMMENDED ANIME COMING SOON
for i in range(0,TOTAL_ANIME,1):
    anime = mutable_data.data.node[]
    time.sleep(0.1)
"""

# Write data to out file
with open("./src/solutions.json", "w") as outfile:
    json.dump(data, outfile)