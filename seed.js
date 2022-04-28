const {db, Album, Artist} = require('./db');

const albums = [
    {
        title: "Imploding the Mirage",
        artistId: 1
    },
    {
        title: "Rumors",
        artistId: 4
    },
    {
        title: "Day and Age",
        artistId: 1
    },

];

const artists = [
    {
        name: 'The Killers',
    },
    {
        name: 'Maroon 5',
    },
    {
        name: 'Green Day',
    },
    {
        name: 'Fleetwood Mac',
    },
];

const seed = async () => {
    try {
        await db.sync({force: true});
        await Promise.all(artists.map(artist => Artist.create(artist)));
        console.log(`${artists.length} artists have been created!`);
        await Promise.all(albums.map(alb => Album.create(alb)));
        console.log(`${albums.length} albums have been created!`);
        console.log('I am done seeding!');
    } catch (e) {
        console.log('There was an error seeding!');
        console.error(e);
    }
}

seed()
    .then(() => db.close())
    .catch(err => {
        console.error('Problem seeding:', err)
        db.close();
    });
