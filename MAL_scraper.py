import requests
import json

PUBLIC_KEY = "5e1789ae5088a9c86805512f75d7c338"

# Pull full list of anime sorted by popularity
headers = {'X-MAL-CLIENT-ID' : PUBLIC_KEY}
base_url = "https://api.myanimelist.net/v2/anime/ranking"
payload = {'ranking_type': 'bypopularity',
           'limit': '10',
           'fields': 'id,title,alternative_titles,start_date,mean,media_type,num_episodes,studios,genres'}
response = requests.get(base_url, headers = headers, params=payload)
print(response.status_code)
data = response.json()



# For testing out getting recommendations
test_id = 16498
headers = {'X-MAL-CLIENT-ID' : "5e1789ae5088a9c86805512f75d7c338"}
base_url = f"https://api.myanimelist.net/v2/anime/{test_id}"
payload = {#'fields': 'id,title,alternative_titles,start_date,mean,media_type,num_episodes,studios,genres,recommendations,related_anime'
           'fields': 'recommendations'}
response = requests.get(base_url, headers = headers, params=payload)
print(response.status_code)
recs = response.json()

# Write data to out file
with open("data.json", "w") as outfile:
    json.dump(data, outfile)