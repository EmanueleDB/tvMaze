### Setup usage:

#### npm install

#### npm run serve

### Logic

#### The app is made in vue and typescript and vuex for the store. 
#### The css is managed in sass and bootstrap and the global style (src/assets/scss) manage everything about colors, fonts, media queries, etc...
#### The app is fully responsive

For what was requested for the assignment I didn't need a navigation, there is only one route which is Home (/)
and I decided that the detail page when I click a tv show would be in a modal and not in a route.
Vuex has been used just for a mutation, I fecthed the tv shows in Home and I commit them to the store because also the component Search will need to use them.

####There are some components that I made to build the UI:
Home: it's the container component; it contains the Search and the Collections components, based on the typing the Collections component won't be shown anymore and there will be a slider with the result of the search;
Collections: its the component in which I show the list of the tv shows filtered and grouped by genre and sorted by rating (the most rated are the first one shown on the left of the sliders)
Slider: is a re-usable component, it accepts a 'group' prop and it renders the tv shows. It has been used in the Collections and in the Search components;
Search: is the component to search for a specific tv show. I applied a slider also in there because there could be more tv shows shown while typing and it looked good to have a slider to see the found tv shows;
Logo: is a small component just to display the TVMAZE logo, I wanted to have something up on the screen not having the navigation;
