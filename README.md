# Anime Wordle

This is a basic Anime Wordle hosted on Github pages. It is mainly made with a mix of typescript and react. 

# Where is the data from?

The data is from the MAL API. To get this data we simply used an API call using the requests library of python. This was called on 3/27/23 so the data might be inaccurate depending on the new popular anime of this season. 

# How does the game work?

Unlike normal wordle anime don't share very similar names so instead there are 6 main categories that we organize the anime by. The first 4 are very self explanatory, the year the anime started airing, the score of the anime on mal, the number of episodes of that season, and the studio/studios who animated that season. The next two are harder. For genres since there are multiple we choose 3 randomly. Then we use these 3 genres to compare it with the other anime the user guesses. Finally the reccomended is similar to the genres where 3 are randomly chosen as options. 

# What are we trying to improve?

There are many things we are trying to improve. Here is a quick list of options. 

* Specific domain name
* Self-updating MAL API colors
* Improved genre system
* Improved reccomendations system
* Animations when showing results
