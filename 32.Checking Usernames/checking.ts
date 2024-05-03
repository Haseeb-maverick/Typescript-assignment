// Make a list of current users
let current_users: string[] = ['john', 'alice', 'bob', 'charlie', 'david'];

// Make another list of new users
let new_users: string[] = ['eric', 'bob', 'johnny', 'DaviD', 'frank'];

// Loop through the new_users list
for (let new_user of new_users) {
    // Convert both the new username and current usernames to lowercase for case-insensitive comparison
    let lowercase_new_user = new_user.toLowerCase();

    // Check if the new username is already in use
    if (current_users.map(user => user.toLowerCase()).includes(lowercase_new_user)) {
        console.log(`Sorry, ${new_user} is already taken. Please enter a new username.`);
    } else {
        console.log(`${new_user} is available.`);
    }
}
