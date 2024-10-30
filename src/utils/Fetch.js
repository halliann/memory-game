import BackupVillagers from "./VillagerBackup";

// fetch Animal Crossing villagers from API
async function FetchVillagers() {
    const apiKey = '21923a71-3b43-467a-9eba-c5ba9e0ff62d';
    const baseUrl = 'https://api.nookipedia.com/villager';
    const url = `${baseUrl}&api_key=${apiKey}`;

    try {
        const response = await fetch(url);
        const villagersData = await response.json();
        
        // filter for all May Gemini's
        const selectedVillagers = villagersData.filter(villager => villager.birthday_month === 'May' && villager.sign === 'Gemini');
        return selectedVillagers;

    } catch(error) {
        console.error('Error fetching data: ', error);
        return BackupVillagers; // use backup villagers array if API fails
    }
}

export default FetchVillagers;