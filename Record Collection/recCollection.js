const recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

function updateRecords(records, id, prop, value) {
    if (value === "") {
        delete records[id][prop];

        return records;
    } else if (records[id].hasOwnProperty(prop) === false) {
        if (!records[id].hasOwnProperty("tracks") && prop === 'tracks') {
            records[id].tracks = [];
            records[id].tracks.push(value);
            console.log(records[id]);
            console.log(typeof records[id][prop]);
        } else {
            records[id][prop] = value;
            console.log(records[id]);
            console.log(typeof records[id][prop]);
        }

        return records;
    } else {
        records[id][prop].push(value);
        console.log(records[id]);
        console.log(typeof records[id][prop]);
        return records;
    }

}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');
updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me");
updateRecords(recordCollection, 2548, "artist", "");
updateRecords(recordCollection, 1245, "tracks", "Addicted to Love");
updateRecords(recordCollection, 2468, "tracks", "Free");
updateRecords(recordCollection, 2548, "tracks", "");
updateRecords(recordCollection, 1245, "albumTitle", "Riptide");