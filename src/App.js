import './App.css';
import MakePost from './component/component';

function App() {
  const posts = [
    {
      id: '001',
      PostAuthor:
        {
          name: "Anakin skywalker",
          photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Timdwilliamson_user_image_007.jpg/717px-Timdwilliamson_user_image_007.jpg?20200102181904',
          nickname: "@dart_vader"
        },
      content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
      image: 'https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale',
      date: "26 лют.",
    },
    {
      id: '002',
      PostAuthor: 
        {
          name: "Jerry",
          photo: 'https://wallpapercave.com/dwp1x/wp2162055.jpg',
          nickname: "@tom_jerry"
        },
      content: "Hi! Who is Skywoker? Why he is Skywalker?",
      image: 'https://media.contentapi.ea.com/content/dam/star-wars-battlefront-2/images/2019/08/swbf2-refresh-hero-large-heroes-page-luke-skywalker-16x9-xl.jpg.adapt.crop1x1.320w.jpg',
      date: "28 лют.",
    }
  ];
  
  return (
    <div className="App">
      {posts.map((post) => <MakePost data = {post} key = {post.id}/>)}
    </div>
  );
}

export default App;
