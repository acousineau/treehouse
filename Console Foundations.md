## Getting Started with the Console

Console is just a way to interact with your computer via text
	* Liberating
	* More flexibility than using graphic user interface
	* More powerful commands

Reasons to learn:
* Web Development / Servers do NOT have graphical interfaces
* Use Command Line to a Remote Server via SSH Access

Understanding the Console - Means you understand your operating system better

POSIX - Portable Operating System Interface
Standard that brings all these together
* Unix:
    * GNU/Linux
    * Darwin -MAC OSX
    * BSD
    * Solaris

MAC OSX 
	- provides full POSIX compatible environment
	- Rich Graphical User Interface

### Running Commands

Blinking Rectangle - Text Cursor
Text to left of Cursor - PROMPT

	ex: treehouse ~ $ 

ls
	* list
	* lists files

ls -l
	* ls -l (long form)
	* Lists the files in a longer form

	output:
	drwxrwxr-x 2 treehouse treehouse 4069 Jan 30 17:26 documents
		1st Columen: D for directory
		3 sets of Triplets:
			r = read
			w = write
			x = execute
				1st Triplet: The User who created it
				2nd Triplet: The Group associated with it (the treehouse group)
				3rd Triplet: Everyone else (public)

		2 Treehouses? - <user> <group> <size>
			<size> for Directories doesn't make sense 4096 is just the number associated with directories

ls -a 
	-list all
	-Lists all files including dot files
		Any File with a dot (.) in the beginning of the file name, they are generally hidden

ls /etc/
	The "/etc/" is an example of an argument - so it will list the files of a directory inside of the current directory	

clear
	brings prompt to the top

### Moving Around the Filesystem

Folder = Directory

pwd
	Print Working Directory
	Displays your current location in the filesystem

Most OS's have a HOME directory where Desktop, Documents, Pictures...

Linux
	/home/<username>/

Mac
	/Users/<username>/

Home Directory is represented by a "~"

cd 
	Change Directory
	Changes the current directory

	ex. cd documents

	"/" represent further levels of directories

-bash - program that represents what we are using to take our input

Absolute Path:
	cd /home/treehouse - represented with a beginning slash - the root
	cd ~/ - represents to absolutely start at our home directory

	cd ~ - moves to home directory regardless of location

Move Up a Directory
	cd .. - moves up 1 directory

### Reading Files

Pagers

less
	A program that displays the content of a file

	Prompt and History goes away - the program less takes up entire window
		viewing the context of file you are viewing

	Arrow Keys - Move 1 line at a time
	Spacebar - Moves entire pages

	q - quits out of less program

more
	program less is based from, not as many features

cat
	Prints the contents of one or more files to the console
	Concatenates files togethewr

	cat hello.txt documents/how_to_go_home.txt


### Editing Files

nano
	A simple text editor

	another version - pico

	How to save Files
		Ctrl + X - Exit
		Y - Save Changes
		Press Enter to confirm

### Moving and Deleting Files

Renaming Files
	-moving from 1 location to the other
		move hello.txt to hi.txt

mv
	move
	Moves, or renames, a file or directory

	mv hello.txt hi.txt --Renaming
	mv hi.txt documents/ --Moving into a new directory

	Move to current directory
	mv documents/hi.txt .

	Move and rename
	mv hi.txt documents/hello.txt

cp
	Copy
	Copies a file or directory

	cp hello.txt hi.txt --copying a file

	cp -r documents docs --copying a directory

rm
	Remove
	Removes a file or directory

	Does not add to recycle bin - it completely removes it!!

	rm hello.txt --removes a file
	rm -r docs --remove a directory

mkdir
	Make Directory
	Create a new directory

	Creating nested directories

	mkdir -p documents/notes/console

## Users and Permissions

### Creating Users

whoami
	Displays the user you are currently logged in as

sudo adduser
	Adds a user

When prompted with [Y/n]
	Yes or No
	The CAPITAL means it's the default

su 
	Switch User
	Allows you to log in as a different user

exit
	Exits from the current session

### File Permissions

Permissions
	Read - Reading a File (Read Contents)			r
	Write - Writing to a File (Update - Delete)		w
	Execute - Only comes into play with programs	x

Who?
	User
	Group
	Other Users - Not owner, or member of group owning file

	u - User
	g - Group
	o - Other

	9 Permissions on File

	rwxrwxrwx

	drwxrwxr-x 3 treehouse ....
	-rw-rw-r-- 1
	drwxrwxr-x 2

	- = False
	"character" = True

 chmod (changing mode of file/directory)
	Changes the permissions (mode) of a file or directory

	chmod u/g/o

	chmod o+w hello.txt //adds write permission to other for hello.txt

	chmod +x hello.txt //adds execute permission for everyone

Permissions are represented with octal numbers
	Octal Notation

	Decimal
	0	1 	2 	3 	4 	5 	6 	7 	8 	9
	10	11 	12 	13	14	15	16	17	18	19

	Octal
	0	1 	2 	3 	4 	5 	6 	7
	10 	11 	12 	13 	14 	15 	16	17

	7 rwx
	6 rw-
	5 r-x
	4 r--
	3 -wx
	2 -w-
	1 --x
	0 ---
		   u  g  o
	742 = rwxr---w-

	r = 4
	w = 2
	x = 1

	chmod 777 -assigns all permissions to users, groups, other

### File Ownership

chown
	Change Owner
	Changes the owner of a file or directory

	sudo chown invisluisdrummer hello.txt //changes owner

	sudo chown invisluisdrummer:invisluisdrummer hello.txt //changes group

### SUDO

Root User overrides every permission on every file and can do anything
	Can be dangerous

Do day to day work as normal user, and only use root when needed

sudo
	Run a command as a super user - with priviledges of root

	Sudo Password
		is user password - not "root" password

Trick...
	!!
		Represents the most recently run command

	sudo !!

## Processes

### What is  Process?

Process - instance of a program - when you run a program it creates an instance
	- multiple instances of the same program can be made at once
	- unique id, who owns it, when and where it started, how many resources consumed (memory/cpu)

top - task manager is windows/activity monitor in apple
    - gives up to date info on processes on our machine

    ? - brings up the help
      - Look up how to sort

    q - quits the program

ps - lists out the processes
   - all the programs you are running - usually when this runs bash and ps will appear by default considering both are running

   Arguments:
   ps aux - view all processes - all users - a LOT more...

   ps aux | grep "top" - filters processes to only lines that have "top" in them

### Pausing and Resuming Jobs

Job - process that belongs to you

Pausing - ability to pause a process while a full window program is running
	Ctrl + Z 
	Gives job number and state "Stopped" then name of process

	fg - foreground - Bring the most recently stopped program to the foreground

	jobs - prints the list of jobs in this session
		if you change directories, (wd: <directory) will appear

	fg <job number> - opens job specified if multiple jobs are running

	+/- signifies what process will start if "fg" is performed

top & - runs a process in the background

### Killing Processes

signal - a message sent to a process by the operating system

kill - sends a signal to a process

signal: TERM - Requests that the process terminates after any cleanup

ctrl + z --actually a signal telling a process to stop
ctrl + c --Sent the TERM signal to the current process



What if process is in a different tab?
	
	//Find process ID
	ps aux | grep "top" //second number from left

	//Then kill command
	kill 1450  <== ID //sends TERM to process

What if the process is in a state where it's NOT looking at the signals coming in...?

//Find process id and kill

kill -STOP 1456 //sends normal STOP signal

kill -KILL 1456 //overrides process - last resort...

## Environment and Redirection

### Environment Variables

env - displays what all the environment variables are

$<name of env variable> - displays value for env variable

PS1="<stuff>" - sets the variable to change the bash prompt

// Any environment variable can be set - example

MESSAGE="hello world"
echo $MESSAGE // hello world

// Starting new bash
bash
echo $MESSAGE // returns nothing because the bash that is being
// queried against is not the same bash as before - we are in a child bash

however... one can EXPORT to another program...

export MESSAGE="Hi world" // allows variable's value be visible to programs
// started from your current session

bash
echo $MESSAGE // returns "Hi world" - so it got transferred down

All these variables can be used by programs - whether they are credentials to databases, path, port number, environments

// THE PATH

export PATH=<stuff>:$PATH // this allows you to use existing path while
// setting the path variable

### Find and Grep

Find - allows to locate a file based on the file name

Grep - search within files


// Find

find . -name "<name of file" // find file named within current directory designated
// by the dot (.)

find / -name "<name of file" // searches to find file on the entire system (/)

find documents bin -name "<name of file" // searches multiple starting points for file

// Grep

// global regular expression print

grep "<pattern>" <filename>


grep -n <pattern> <hello.txt> // generates line numbers

grep -i <pattern> <filename> // Ignores capitalization

grep -v <pattern> <filename> // Find lines that DO NOT contain pattern

man grep // Opens grep manual instructions

man find // Opens find manual instructions

### Pipes and Redirection

Standard In(Keyboard) --> Process --> Standard Out(Console)

Standard In(Keyboard) --> Process --> Standard Out(out.txt) // Can change the standard output to a file

Standard In(in.txt) --> Process --> Standard Out(out.txt) // Can change the standard input to a file as well

// Piping

Standard In --> Process -(Pipe)-> Process --> Standard Out

// Grep with no input -- automatically makes the keyboard the standard in

grep <pattern>

// then to exit
Ctrl + d

// Redirection

// Standard Input
<

// example
grep this < hello.txt

// This will reroute a file to standard input for those programs that normally don't take file arguments

// Standard Output
>

// example
grep this hello.txt > hello_grep.txt //hello_grep.txt now contains what hello.txt 

>> <file> // appends to end of given file instead of completely overriding it

// There are TWO main output streams from a process

1) Results
2) How errors are communicated which is STANDARD ERROR

// Redirect errors
2> // directs the standard error to destination because it's the second output 

find / -name "sudoers" 2> error_log.txt  // outputs searched errors to a file

// Special file to get rid of any data we want to disappear

/dev/null - A special file that will delete anything written to it

find / -name "sudoers" 2> /dev/null

// Redirect through individual processes with '|' character

ps aux | grep bash

// Pipe the output of Command A to the input of Command B
// Can also chain them together

sort - sorts the lines of the standard input and sends it to standard output

ps aux | grep bash | sort

ps aux | grep bash | sort > sorted_bash_procs.txt

## Installing Software

### Building Software From Source

1) Compile Source Code
2) Use Package Manager

Ubuntu's Package Manager

sudo apt-get update - updates the computer's database with available packages to install

sudo apt-get install build-essential - install tools requested

which - takes the name of a program and finds out from where it is being sourced

curl -O <url> //used to make requests from internet 
// -O means save to a file on machine

// In the case of a 'tarball' file - for installation

tar -xvf <file> //extract (x), verbose output (v), points to file (f)

// Above action created a directory with same name - ls to look at contents
// Run program inside directory called 'configure'

./configure

// The above action installs and creates a 'make' file that is compatible with our system
// Now simply run 'make'
make - fully installs program

// Now we just need to add program to our path
sudo make install

Installing Software:
1) Download source file
2) Untar file
3) Run ./configure script
4) Run make command
5) Run sudo make install

### Introduction to Package Managers

Ubuntu package manager is 'apt' - all Debian based Linux

Ubuntu belongs to family of Linux distributions that are based on Debian Linux

Mac OSX has HOMEBREW

sudo apt-get update // updates the local db of available packages

// Install GIT

sudo apt-get install git

// How to search for things in the DB
apt-cache search <pattern>

// Update software - new versions of tools
sudo apt-get upgrade

// Generally perform above command AFTER a sudo apt-get update

// Uninstall A Program

sudo apt-get remove <package>