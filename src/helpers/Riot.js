export const fetchMostPlayed = async (summonerName) => {
    const getRes = await fetch('http://127.0.0.1:8000/most_played', {
      body: JSON.stringify({
        'summonerName': summonerName
      }),
      method: 'POST'
    })
  
    const text = await getRes.json()
  
    return text
  }

export const fetchWinRate = async (summonerName) => {
    const getRes = await fetch('http://127.0.0.1:8000/match_info', {
      body: JSON.stringify({
        'summonerName': summonerName
      }),
      method: 'POST'
    })

    const text = await getRes.json()

    return text

  }
  
export const fetchSummonerInfo = async (summonerName) => {
    const getRes = await fetch('http://127.0.0.1:8000/summoner_info', {
      body: JSON.stringify({
        'summonerName': summonerName
      }),
      method: 'POST'
    })

    const text = await getRes.json()

    return text

  }

export const fetchSummonerRank = async (summonerName) => {
    const getRes = await fetch('http://127.0.0.1:8000/rank', {
      body: JSON.stringify({
        'summonerName': summonerName
      }),
      method: 'POST'
    })

    const text = await getRes.json()

    return text

}


export const lookupSummoner = async (summonerName) => {


  try {

    const responses = await Promise.all([await fetchSummonerInfo(summonerName), await fetchSummonerRank(summonerName), await fetchWinRate(summonerName), await fetchMostPlayed(summonerName)])


    const summoner = {
        summonerName: summonerName,
        summonerInfo: await responses[0],
        summonerRank: await responses[1],
        winRate: await responses[2].winrate,
        averageDamage: await responses[2].average_damage,
        averageDpm: await responses[2].average_dpm,
        mostPlayed: await responses[3]
    }

    return summoner
  }

  catch(err) 
  {
    return {
      error: "Could not find summoner"
    }
  }

}