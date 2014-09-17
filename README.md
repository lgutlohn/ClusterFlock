Software Engineering readme.md

	1.	Name : Lauren Gutlohn
	    Gatorlink : lgutlohn
	
	2.	Name : Eric Smith
	    Gatorlink : smith1302
	
	3.	Name : Jesse Everett
	    Gatorlink : jesseceverett
	
	4.	Name : Kathleen Lew
	    Gatorlink : katlew3

Project Description
==============

Client: Christan Grant

Project: Data Clustering Service

Description:

We have a stream of "mentions" of people names coming in. We want to cluster the mentions that refer to the same person. For example, "The President" and "Barack Obama" would be clustered together as well as "His Airness" and "Michael Jordan". The twist is as you visualize this data coming in, some clusters would be incorrect --- in this case the user can click to destroy the bad cluster. Or the user can combine two or more clusters to create a new larger cluster.

This is a multi user application and a crowd sourcing game to help organize data. This is a project have on the back burner. But I'll be writing a paper up on this work to publish at a conference.

Below are some points about it:
1) Data is streaming in from an external location (a URL or disk).
2) The data is both displayed to each user logged into the session and saved to the DB
3) Each user is watching each piece of data appear on the screen. When a new user logs in they have to read the current state from the DB and join-in with everybody else.
4) Everyone is trying to cluster the data at the same time. With each action, (i.e cluster combine or cluster destroy) the data is updated dynamically to all users. The current/latest status is always read from the DB.
5) User should be able to zoom in and examine certain clusters.  This is a query to the DB to get the points within a space.
6) Users should be able to edit the documents AND the data. Including adding notes to data to clarify points for other users.
7) Users should be able to link clusters to pictures/data items using the freebase api or a similar service. 

This project is highly concurrent, using the DB to
1) To manage the (complex and transient) state
2) Query the specific portions of the data set
3) Support ad hoc additions from multiple concurrent users


User Stories
==============

**Upon Start**

	- User can login to clustering section
		- May be multiple sections
		- Create new
	- Words (with pictures) come in
	- Directions?
		- Before or after
	- No automatic pictures (suggest pictures?)

Multiple User Simulatneously?

	- Could use Socket.io

**All users equal**

	- One admin
		- Ban users
		- Pause/Stop sessions
		- Add/Remove admins
		- Seal Cluster (cannot be destroyed)
	- Add to Cluster
	- Take away
	- Create New
	- Manipulate Pictures
		- Find/Request Pictures

**Log actions?**
