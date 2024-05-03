function make_album(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
    let album: { artist: string, title: string, tracks?: number } = {
        artist: artist,
        title: title
    };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}

// Call the function to create three dictionaries representing different albums
let album1 = make_album("Kendrick Lamar", "To pimp a butterfly",16);
let album2 = make_album("Kanye West", "Graduation", 15); // Including number of tracks
let album3 = make_album("Post Malone", "Beerbongs and bentleys");

// Print each return value to show that objects are storing the album information correctly
console.log(album1);
console.log(album2);
console.log(album3);
