***UPDATE: I have finally fixed the like post. I made a silly typo in the backend route due to which I was not able to do like/unlike per post. 

This project Bloging website is an assessment test for Junior Full Stack Developer role at OiiU.

Dear HR or the representatives from OiiU, Please have a look at the code base. Thank you.

I am still learning and I would love to have the oppurtunity to keep learning.  

Git repository-client: https://github.com/Munir-Hassan/microblog-oiiu-assesment-client-side  
Git repository-server: https://github.com/Munir-Hassan/microblog-oiiu-assesment  
Personality Test: https://www.16personalities.com/profiles/7bdd36d398b11  


Given Task Requirements:  
1) Users can create a new post.    
2) Users can view's other's post.  
3) Users can like a post.  
4) Users can undo like on a post.  
5) Users can see like count on a post.  

Given Preferred Technologies:  
1. Reat (TypeScript preferred)  
2. Node.js (Server) (TypeScript preferred)  
3. Firebase (Preferred)  

Given Technical Requirements:  
1. Use Typescript only if you are familiar with it and
used it before in a project. Otherwise, it might be
time-consuming.  
2. Only allow one like per user.  
3. If you are familiar with GraphQL we encourage you
to use it or make the API.  
4. REST compliant.    

Features I implemented:  
1. Users can signup and signin
2. One can only like a post if user is logged in, and hasn't liked the post.  
    If post is already liked user can undo the like.  
3. I did not implement options for posting image.  
4. I could have improved security by providing secure routes where user can't post unless  
    logged in or cannot go to signin or signup page if logged in.  
5. Currently, I only if the user exists in database by email. I did not provide any validation on password.


==> There are still some issues with the UI which i have yet to fix.  

I have been able to complete all of the reqiurements except saving the number of likes per post
and only single likes per post. I was facing some dificulties with retrieving the database from 
mongoDB Atlas cloud. But I was able to get the number of likes a post has if that is saved in database.

I was facing problems with manipulating the likes count per post.



Thank you, Munir Hassan.