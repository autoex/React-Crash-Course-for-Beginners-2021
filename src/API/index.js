export const firebaseApi = {
    getMeets() {
        return fetch(`https://react-meetups-data-default-rtdb.europe-west1.firebasedatabase.app/meetups.json`)
            .then(response => response.json())
            .then(json => {
                const meetUps = [];
                for (const key in json) {
                    const meetUp = {
                        id: key,
                        ...json[key]
                    };
                    meetUps.push(meetUp)
                }
                return meetUps
            })

    },
    favouriteToggle(id, favStatus) {

        return fetch(`https://react-meetups-data-default-rtdb.europe-west1.firebasedatabase.app/meetups/${id}.json`, {
            method: 'PATCH',
            body: JSON.stringify({
                favourite: favStatus
            }),
            headers: {
        'Content-type': 'application / json'
    }
    })

    }
};