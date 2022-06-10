const fakeMovieList = [
  {
    id: 1,
    image: {
      url: "https://upload.wikimedia.org/wikipedia/en/1/1c/Free_Guy_2021_Poster.jpg",
    },
    movieName: "Free Guy",
    releaseYear: 2021,
    rate: 7.1,
  },
  {
    id: 2,
    image: {
      url: "https://upload.wikimedia.org/wikipedia/en/8/8e/Dune_%282021_film%29.jpg",
    },
    movieName: "Dune",
    releaseYear: 2021,
    rate: 8.2,
  },
  {
    id: 3,
    image: {
      url: "https://upload.wikimedia.org/wikipedia/en/7/74/Shang-Chi_and_the_Legend_of_the_Ten_Rings_poster.jpeg",
    },
    movieName: "Shang Chi",
    releaseYear: 2021,
    rate: 7.8,
  },
  {
    id: 4,
    image: {
      url: "https://upload.wikimedia.org/wikipedia/en/f/f6/Cruella_2021_film_poster.jpg",
    },
    movieName: "Cruella",
    releaseYear: 2021,
    rate: 7.3,
  },
  {
    id: 5,
    image: {
      url: "https://upload.wikimedia.org/wikipedia/en/1/19/Minions_%282015_film%29.jpg",
    },
    movieName: "Minions",
    releaseYear: 2015,
    rate: 6.4,
  },
];

const fakeGenres = [
  {
    image: {
      url: "https://m.media-amazon.com/images/M/MV5BMjE4NjY2MzU3Nl5BMl5BanBnXkFtZTgwOTU1NDYwNjE@._V1_.jpg",
    },
    name: "History",
  },
  {
    image: {
      url: "https://www.gannett-cdn.com/-mm-/b056fc522ffd018041f93c8eed9e3f26e040292a/c=5-0-2122-1196/local/-/media/2016/09/16/USATODAY/USATODAY/636096390938383380-XXX-IMG-CONJURING-2-1-1-OCEKAJT1-82468166.JPG?width=660&height=373&fit=crop&format=pjpg&auto=webp",
    },
    name: "Horror",
  },
  {
    image: {
      url: "https://www.moving-stories.net/wp-content/uploads/2021/06/80saction1.jpg",
    },
    name: "Action",
  },
  {
    image: {
      url: "https://i.guim.co.uk/img/media/28e8d6f6407232ecf5a056afb064c35f225b2419/0_102_1760_1056/master/1760.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=153b5e448e81119ebdb2a39b01030b6c",
    },
    name: "Drama",
  },
  {
    image: {
      url: "https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQVEvxt_DCAAap_OLq6_6mKLItc6ptoVNE50ymq5hbu9nK69nhu8m6TluuvYsnkroQyJ6AMi09BCNxGzSIMoKVzoKgBSuKZ__gPYY5CEg5ZBrABzaya5_nwLE0-C6z5kMbKgirB2ROmXxpRyY2Zw8PuLI.jpg?r=3cf",
    },
    name: "Fantasy",
  },
];

const fakeCast = [
  {
    image: {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Jim_Carrey_2008.jpg/440px-Jim_Carrey_2008.jpg",
    },
    name: "Jim Carry",
  },
  {
    image: {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Emma_Watson_2013.jpg/440px-Emma_Watson_2013.jpg",
    },
    name: "Emma Watson",
  },
  {
    image: {
      url: "https://prod-images.tcm.com/Master-Profile-Images/LeonardoDiCaprio.jpg",
    },
    name: "Leonardo DiCaprio",
  },
  {
    image: {
      url: "https://images.mubicdn.net/images/cast_member/3071/cache-3195-1568084972/image-w856.jpg?size=800x",
    },
    name: "Jake Gyllenhaal",
  },
  {
    image: {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Charlize_Theron_in_2017.jpg/1200px-Charlize_Theron_in_2017.jpg",
    },
    name: "Charlize Theron",
  },
];

const banners = [
  {
    image: {
      url: "https://zayzay.com/wp-content/uploads/2021/05/Cruella-pics-1.jpg",
    },
  },
];

const profileActivity = [
  {
    image: {
      url: "https://zayzay.com/wp-content/uploads/2021/05/Cruella-pics-1.jpg",
    },
    text: "Ratings",
    activity: 10,
  },
  {
    image: {
      url: "https://upload.wikimedia.org/wikipedia/en/8/8e/Dune_%282021_film%29.jpg",
    },
    text: "Lists",
    activity: 3,
  },
  {
    image: {
      url: "https://upload.wikimedia.org/wikipedia/en/1/1c/Free_Guy_2021_Poster.jpg",
    },
    text: "Reviews",
    activity: 23,
  },
];

export { fakeMovieList, fakeGenres, fakeCast, banners, profileActivity };
