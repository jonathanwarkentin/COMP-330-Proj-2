# COMP-330-Proj-2

- An extension of project 1 (tweet parser) from LUC COMP 330, Spring 2019
- Built by Emmanuel Amobi, Luke Dosen, and Jonathan Warkentin
- This is a single page web app that displays sentiment analysis and other relevant information on current Twitter trends .

## Function

- Displays 10 of top trending topics on Twitter
- Does sentiment analysis on each of them
- Shows most recent tweet, tweet volume, and chart of % positive tweets over past 7 days for each of the topics when you click them

## How to Run (as a user

- Go to https://tweettrend.herokuapp.com/
- Done!

## How to Run (for development purposes)

- Install npm (we currently have v8.12.0): https://www.npmjs.com/get-npm
- Run "git clone https://github.com/ldosen/COMP-330-Proj-2.git" in your terminal
- CD into the repo, then into ExpressServer
- Run "npm install" - this ensures proper node modules are installed for server
- CD into front-end
- Run "npm install" again in the front-end folder - this ensures proper node modules are installed for React
- Start the React client by running "npm start" in the front-end folder
- Open a new terminal window and CD back into the repo and into the ExpressServer folder
- Run "node server.js" to start the server
- Go to localhost:3000 in your web browser (React should have already opened a new tab at this address) and reload the page
- Note: structuring the startup process this way is to avoid ELIFECYCLE errors, which can occur when starting the server before the react client on the same computer. Don't worry if at first your React shows an error - it should go away after starting the server and reloading the client.
- Done!

### Outside Modules

- We used Chart.js (https://www.chartjs.org/) for creating the chart of % Positive Tweets/Day for the past 7 days.
- We used npm twit https://www.npmjs.com/package/twit to interact with the Twitter API.
- We used dotenv https://www.npmjs.com/package/dotenv to load environmental variables for the API keys, and tokens.

### Python Machine Learning Modules

`format_csv.py` is a simple script designed to format the training data before it is sent to the training stage. The csv is loaded, unneeded columns are removed, the class labels are changed to 0 and 1, and the encoding of the file is changed to utf-8 (Python default) from cp1252.

`sentiment_analysis.py` is where the machine learning model is trained on the 1.6 million tweets provided in the training file. The most common approach to sentiment analysis of textual data (and the one employed in this project) is the bag of words model. More information about this approach can be found at this link:
https://en.wikipedia.org/wiki/Bag-of-words_model

Since the dataset was so large, we took an out-of-core approach to training the model.

- `streamdocs` defines the file where the samples will be streamed from
- `tokenizer` splits each tweet into its component words and removes characters like '@' , '#' , and any kind of link with a regex
- `get_minibatch` gets X number of samples from the document stream and adds them to a numpy array which can be passed to a machine learning model to train on.

The during training, the model gets a batch of 1,000 samples, tokenizes them, vectorizes them, and then partially fits them to a logistic regression model. A partial fit is necessary when doing out-of-core learning because normal fit methods provided to sklearn classifiers require the entire dataset to be in memory to train. At the end of this training process the classifier is pickled so it can be reused from other scripts without the classifier having to be retrained.

`predict_sentiment.py` uses the pickled classifier created in the above script to predict the class label of any given sample. This function is called form the `server.js` file to get the sentiment of tweets retrieved from the twitter api.

## Material from lecture videos

- We learned a lot about the importance of git and GitHub
- We learned how to avoid merge conflicts by working on separate forks of the same repository and creating pull requests.
- We also had experience with fixing merge conflicts.
- We learned how using git makes working in teams more manageable and effective.

## Design Pattern

- We used the Composite design pattern in the form of the React UI. As a React app is made up of various components in a parent/child format, it perfectly demonstrates the Composite design pattern. In our app, for example, the TopicInfo component displays only info inherited as props from the currently selected topic. Moreover, due to the nature of HTML structure, modifying parent elements such as the ordered list of topics deeply affects how children such as individual topics behave.
