export const fetchEncryptedAccountId = async (summonerName) => {


    const response = await fetch(`${process.env.REACT_APP_FETCH_SUMMONER_URL}/${summonerName}?api_key=${process.env.REACT_APP_RIOT_KEY}`, {
        method: "GET"
    })

    return await response.json()

}

export const getMatchesJSON = async (summonerName) => {
    const encryptedInfo = await fetchEncryptedAccountId(summonerName)

    const accountId = encryptedInfo.accountId
    const response = await fetch(`${process.env.REACT_APP_FETCH_MATCHLIST_URL}/${accountId}?api_key=${process.env.REACT_APP_RIOT_KEY}`, {
        method: "GET"
    })

    return await response.json()

}

export const getMatch = async (gameId) => {

    const response = await fetch(`${process.env.REACT_APP_FETCH_MATCH_URL}/${gameId}/?api_key=${process.env.REACT_APP_RIOT_KEY}`, {
        method: "GET"
    })

    return await response.json()
}

export const getFiveMatches = async (matchJSON) => {
    const matchList = await matchJSON.matches;
    const listOfMatches = []

    var  i  = 0
    while (i < 5) {

        const match = await getMatch(matchList[i].gameId)
        listOfMatches.push(match)
        i = i + 1
    }

    console.log(matchJSON)
}
