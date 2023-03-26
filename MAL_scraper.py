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

# For testing out getting recommendations
payload_rec = {'fields': 'recommendations'}

accurate_responses = 0
for i in range(0,TOTAL_ANIME,1):
    anime = data["data"][i]["node"]

    rec_url = f"https://api.myanimelist.net/v2/anime/{anime['id']}"
    rec_response = requests.get(rec_url, headers = headers, params=payload_rec)

    if rec_response.status_code == 200:
        accurate_responses = accurate_responses + 1
        recs = rec_response.json()
        anime["recommendations"] = recs["recommendations"]

    time.sleep(0.1)
print(f"Number of recommendations received: {accurate_responses}")

# Write data to out file
with open("./src/solutions.json", "w") as outfile:
    json.dump(data, outfile)