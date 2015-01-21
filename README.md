#500px grids
- By using the the 500px API - https://github.com/500px/api-documentation I have created a Photo Portfolio Page.
- The website is divided into static content and category pages that are being generated through API calls to 500px.
- The static content is saved in a content.json file. ex:
```
{pages: 
    { title:"About", content:"This is my about page"}, 
    { title:"Contact", content:"<h1>Contact Page</h1><font>Derek Hu <derek.dchu@gmail.com></font>"}
}
```   

- The Category Pages are comprised of a grid of images which you can click on to view them at 500px.
- The Images are queried by searching for a specific tag

See a live [DEMO](https://px500-grid.herokuapp.com/)