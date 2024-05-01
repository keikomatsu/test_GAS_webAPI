const axios = require('axios')

async function fetchData() {
    try {
        const url =
            'https://script.google.com/macros/s/AKfycbwvnZQqXYNlZnv-qsfhc0O3lItVDJ2kHC6EJ3mwUgVXnkoixMS4kG2wcCey7r9TpiBNQw/exec' // ここにGoogle Apps ScriptのWeb API URLを設定
        const response = await axios.get(url)
        console.log('Data received:', response.data)
    } catch (error) {
        console.error('Error fetching data:', error)
    }
}

fetchData()
