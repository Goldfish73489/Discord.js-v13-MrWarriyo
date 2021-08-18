# Discord.js-v13-MrWarriyo
Discord.js v13 Tutorials Code Repository of Mr Warriyo YouTube Channel.

### Important

# Follow these steps to Install Node v16 and Discord.js v13. If you haven't Installed it yet.

## Note: Type the following Commands in your Terminal.

# Step 1:

Type 
```
npm init -y
```
Info: This command will create a package.json for your Project.

After Step 1 is successfully completed, Move on to Next Step.


# Step 2:

Type
```
npm install --save-dev node@16
```
Info: This command will Install node@16 as a dev dependency.

After Step 2 is successfully completed, Move on to Next Step.


# Step 3:

Type
```
npm config set prefix=$(pwd)/node_modules/node
```
Info: This command will set the env prefix as the following path.

After Step 3 is successfully completed, Move on to Next Step.


# Step 4:

Type 
```
export PATH=$(pwd)/node_modules/node/bin:$PATH
```
Info: Not Provided.

After Step 4 is successfully completed, Move on to Next Step.


# Step 5:

Type
```
npm install discord.js
```
Info: This command will Install discord.js latets version(13.1.0 or above).

This was the last step.
Now your node16 and discord.js v13 are Installed successfully.


### In Package.json........

# Step 1:
In package.json in the scripts section add a new script 
```
"npm start": "node index.js"
```
Info: This command will start index.js(main file) whenever npm start is executed

Without this, node 16 won't run and you'll get a error by discord.js module.


Having errors?
Contact us in our official Discord Server - <br>
🔗 Discord Server - https://discord.gg/pnYKx8Ch4F

Mr. Warriyo YouTube Channel - https://youtube.com/c/MrWarriyo
<br>
Discord.js v13 Official Playlist - Coming Soon.










