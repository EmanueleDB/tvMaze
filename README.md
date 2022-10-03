### Setup usage:

#### npm install
#### npm run serve

### Logic

#### The app is made in vue/vuex and typescript.
#### The css is in sass and bootstrap. The global style files are located in src/assets/scss.
#### The app is fully responsive

#### Important: The first loading of the page can take a while because the API is slow. (The spinner will disappear when all the images are rendered)

Navigation wasn't needed, I have just one route (/) and I use a modal to show the details of the tv shows.
Vuex has been used just for few mutations: to store all the tv shows after fetching them from the API; to enable the functionalities for the spinner.

Due to the fact that I'm not able to PATCH, DELETE or ADD more tv shows I just used the main endpoint from the provided API to get all the tv shows.

#### There are some components that I made to build the UI:

Home: it's the container component; it contains the Search and the Collections components, when the spinner disappear, the collections component is shown;
Collections: its the component in which I show the list of the tv shows filtered and grouped by genre and sorted by rating (left to right)
Slider: is a re-usable component, it accepts a 'group' prop and it renders the tv shows. It has been used in the Collections component and in the Search component;
Search: is the component to search for a specific tv show. I applied a slider also in there because there could be more tv shows shown while typing and it looked good to have a slider to see the found tv shows;
Logo: is a small component just to display the TVMAZE logo, I wanted to have something up on the screen not having the navigation;

As I said to Maria Kostryukova during the first interview I dont have experience with tests (jest), that's why they are non implemented in this app, but I'm looking forward to learn everything about testing asap.

#### Additional things

I have implemented a filter for the search so the user is now able to search the show by name or by network name (HBO, FOX, etc..)
I also made a different call to the API to fetch the seasons per show; the seasons are shown with their images in the details modal (my idea was to also add a tooltip to show the season title when hovering the image, but unfortunately the property 'name' of the season object in the API is always an empty string)
