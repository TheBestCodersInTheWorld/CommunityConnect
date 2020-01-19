# CommunityConnect
CommunityConnect is a fullstack web application that allows users to say what foods they are bringing for volunteering.

## Running 

### navigate to the correct directory

`cd Desktop`

`cd CommunityConnect`

`cd src`

you can use cmd + n will get you a new terminal window

### start the client and server (this is a hack to get around browsers blocking message passing between seperate resources)
`npm run start`

** NOTE: make sure to build the client, npm run start simply serves the client that is statically built **

## Collaboration

### How can I work with Anthony?
when you open a new terminal, you'll be at your *root of your project folder*
first thing we want to do is navigtate to the project folder so 
enter these commands into the terminal to get to the root of your project folder.

`cd Desktop`

`cd CommunityConnect`

If you run the ls command:
`ls`
It should show you the contents of the directory (folder) you are in

Now there are a couple things you can do, you can try to push changes or 
receive them.

### Trying to push changes (easy way)
Enter these commands into your terminal when you are at the *root of your project folder*:

`git add .`

`git commit -m "<insert some message here that starts with a capital verb>"`

`git push`

### Try to pull changes (easy way)
Enter these commands into your terminal when you are at your *root of your project folder*:
`git pull`

### Pulling changes didn't really work for some reason, force pull (easy way)
Enter these commands into your terminal when you are at your *root of your project folder*:

`git fetch origin master`

`git reset --hard FETCH_HEAD`

`git clean -df`