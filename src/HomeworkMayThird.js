//3 ways to hack into the website:
//1: not sure about this but right click and Inspect, maybe find some information about the website there and 
//be able to hack into it?
//2: found this at https://www.guru99.com/how-to-hack-website.html: SQL Injection:
//goal would be  to pass login algorithms (sp?), hack data, etc.
//3: also at that website: Code Injection: Goal is to inject code such as Python to reveal sensitive information

//3 ways to stop these types of attacks:
//1: encryption of passwords/sensitive information in the server/client side
//2: when I looked on some websites under Inspect there are some yellow warnings. Maybe fixing those?
//3: notifying the people who created the website if someone types in the password so that they can check if they know who it is, 
//and if they dont then they can change the password or something

//you can encrypt in Python by using a process called Symmetric Encryption
//Symmetric Encryption is when a key is used to encypt a message, so only the person
//who encrypted it can decrpyt it, like a password

//to generate a key:
//from cryptography.fernet import Fernet
//  key = Fernet.generate_key()

//to store a key in a file:
//file = open('key.key', 'wb')
//file.write(key) # The key is type bytes still
//file.close()

//to read a previously saved key:
//file = open('key.key', 'rb')
//key = file.read() # The key will be type bytes
//file.close()

//https://nitratine.net/blog/post/encryption-and-decryption-in-python/

