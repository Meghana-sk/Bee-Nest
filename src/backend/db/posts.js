import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content: "Some hate humanity, but I love humanity so much",
    likes: {
      likeCount: 320,
      likedBy: [],
      dislikedBy: [],
    },
    username: "elonmusk",
    firstName: "Elon",
    lastName: "Musk",
    profilePic:
      "https://res.cloudinary.com/meghanaskcloud/image/upload/v1654444111/Social%20media/profile%20pics/elonmusk_Profile_lro5gn.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "shubhamsoni",
        commentData: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "sohamshah",
        commentData: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "In India, everyone is a self taught developer. Fact. Not kidding. The education part of college failed all of us.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "tanaypratap",
    firstName: "Tanay",
    lastName: "Pratap",
    profilePic:
      "https://res.cloudinary.com/meghanaskcloud/image/upload/v1654444873/Social%20media/profile%20pics/tanaypratap_profile_lil10l.jpg",

    comments: [
      {
        _id: uuid(),
        username: "shubhamsoni",
        commentData: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "sohamshah",
        commentData: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "There’s a voice in your head that’s always talking. Especially when talking about itself, it lies.",
    likes: {
      likeCount: 8117,
      likedBy: ["meghana__sk"],
      dislikedBy: [],
    },
    username: "naval",
    firstName: "Naval",
    lastName: "Ravikant",
    profilePic:
      "https://res.cloudinary.com/meghanaskcloud/image/upload/v1654363668/Social%20media/profile%20pics/naval_profile_xmldd5.jpg",

    comments: [
      {
        _id: uuid(),
        username: "_Wisdom_Academy",
        commentData:
          "Writing can help you quiet the voice in your head that is too loud for you to hear.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "omarakhaddaj",
        commentData:
          "In the end, your life will be a reflection of who you really are rather than who you want to be.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Stay calm and Keep Coding",
    img: "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653825329/post-demo_c094ql.png",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: "1b288c33-ff6d-49c0-a8d3-58b297f1455",
          firstName: "Johnson",
          lastName: "Charles",
          username: "johns24",
          profilePic:
            "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718578/userFour_zrkbid.jpg",
        },
        {
          _id: "1b288c33-ff6d-49c0-a8d3-58b297f1457",
          firstName: "Peter",
          lastName: "Watson",
          username: "piet",
          profilePic:
            "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718600/userThree_qat0za.jpg",
        },
        {
          _id: "1b288c33-ff6d-49c0-a8d3-58b297f1458",
          firstName: "Bruce",
          lastName: "Clarke",
          username: "clarky",
          profilePic:
            "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718583/userSix_hjf46y.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "johnDoe",
    firstName: "John",
    lastName: "Doe",
    profilePic:
      "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718256/userTwo_zuhg40.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "Don't hate errors and bugs. They're not your enemies. It's a part of your programming journey. See errors and bugs as a sign that you're pushing your boundaries. It shows growth.",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "1b288c33-ff6d-49c0-a8d3-58b297f1453",
          firstName: "Guest",
          lastName: "User",
          username: "Guest123",
          profilePic:
            "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718247/userOne_xot5gc.jpg",
        },
        {
          _id: "1b288c33-ff6d-49c0-a8d3-58b297f1454",
          firstName: "Akanksha",
          lastName: "Choudhary",
          username: "ch_akanksha",
          profilePic:
            "https://res.cloudinary.com/meghanaskcloud/image/upload/v1654447086/Social%20media/profile%20pics/akankshachoudhary_profile_pukemu.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "clarky",
    firstName: "Bruce",
    lastName: "Clarke",
    profilePic:
      "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718583/userSix_hjf46y.jpg",
    comments: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "I came, I saw, I conquered. – Julius Caesar",
    likes: {
      likeCount: 4,
      likedBy: [
        {
          _id: "1b288c33-ff6d-49c0-a8d3-58b297f1452",
          firstName: "Adarsh",
          lastName: "Balika",
          username: "adarshbalika",
          profilePic:
            "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718283/profile_y24uvb.jpg",
        },
        {
          _id: "1b288c33-ff6d-49c0-a8d3-58b297f1456",
          firstName: "James",
          lastName: "Sheldon",
          username: "jamie",
          profilePic:
            "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718614/userFive_dp8dgl.jpg",
        },
        {
          _id: "1b288c33-ff6d-49c0-a8d3-58b297f1455",
          firstName: "Johnson",
          lastName: "Charles",
          username: "johns24",
          profilePic:
            "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718578/userFour_zrkbid.jpg",
        },
        {
          _id: "1b288c33-ff6d-49c0-a8d3-58b297f1457",
          firstName: "Peter",
          lastName: "Watson",
          username: "piet",
          profilePic:
            "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718600/userThree_qat0za.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "Guest123",
    firstName: "Guest",
    lastName: "User",
    profilePic:
      "https://res.cloudinary.com/meghanaskcloud/image/upload/v1654450830/Social%20media/profile%20pics/oppo-HA5rQ_XfBD0-unsplash_bqovmv.jpg",
    comments: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Fortune favors the bold. – Virgil.",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: "1b288c33-ff6d-49c0-a8d3-58b297f1452",
          firstName: "Adarsh",
          lastName: "Balika",
          username: "adarshbalika",
          profilePic:
            "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718283/profile_y24uvb.jpg",
        },
        {
          _id: "1b288c33-ff6d-49c0-a8d3-58b297f1455",
          firstName: "Johnson",
          lastName: "Charles",
          username: "johns24",
          profilePic:
            "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718578/userFour_zrkbid.jpg",
        },
        {
          _id: "1b288c33-ff6d-49c0-a8d3-58b297f1453",
          firstName: "Guest",
          lastName: "User",
          username: "Guest123",
          profilePic:
            "https://res.cloudinary.com/meghanaskcloud/image/upload/v1654450830/Social%20media/profile%20pics/oppo-HA5rQ_XfBD0-unsplash_bqovmv.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "piet",
    firstName: "Peter",
    lastName: "Watson",
    profilePic:
      "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718600/userThree_qat0za.jpg",
    comments: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "If you want to be happy, be. – Leo Tolstoy.",
    likes: {
      likeCount: 5,
      likedBy: [
        {
          _id: "1b288c33-ff6d-49c0-a8d3-58b297f1452",
          firstName: "Adarsh",
          lastName: "Balika",
          username: "adarshbalika",
          profilePic:
            "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718283/profile_y24uvb.jpg",
        },

        {
          _id: "1b288c33-ff6d-49c0-a8d3-58b297f1458",
          firstName: "Bruce",
          lastName: "Clarke",
          username: "clarky",
          profilePic:
            "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718583/userSix_hjf46y.jpg",
        },
        {
          _id: "1b288c33-ff6d-49c0-a8d3-58b297f1457",
          firstName: "Peter",
          lastName: "Watson",
          username: "piet",
          profilePic:
            "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718600/userThree_qat0za.jpg",
        },
        {
          _id: "1b288c33-ff6d-49c0-a8d3-58b297f1455",
          firstName: "Johnson",
          lastName: "Charles",
          username: "johns24",
          profilePic:
            "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718578/userFour_zrkbid.jpg",
        },
        {
          _id: "1b288c33-ff6d-49c0-a8d3-58b297f1456",
          firstName: "James",
          lastName: "Sheldon",
          username: "jamie",
          profilePic:
            "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718614/userFive_dp8dgl.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "Guest123",
    firstName: "Guest",
    lastName: "User",
    profilePic:
      "https://res.cloudinary.com/meghanaskcloud/image/upload/v1654450830/Social%20media/profile%20pics/oppo-HA5rQ_XfBD0-unsplash_bqovmv.jpg",
    comments: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Time is money. – Benjamin Franklin.",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: "1b288c33-ff6d-49c0-a8d3-58b297f1457",
          firstName: "Peter",
          lastName: "Watson",
          username: "piet",
          profilePic:
            "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718600/userThree_qat0za.jpg",
        },
        {
          _id: "1b288c33-ff6d-49c0-a8d3-58b297f1455",
          firstName: "Johnson",
          lastName: "Charles",
          username: "johns24",
          profilePic:
            "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718578/userFour_zrkbid.jpg",
        },
        {
          _id: "1b288c33-ff6d-49c0-a8d3-58b297f1458",
          firstName: "Bruce",
          lastName: "Clarke",
          username: "clarky",
          profilePic:
            "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718583/userSix_hjf46y.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "jamie",
    firstName: "James",
    lastName: "Sheldon",
    profilePic:
      "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718614/userFive_dp8dgl.jpg",
    comments: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "1b288c33-ff6d-49c0-a8d3-58b297f1458",
          firstName: "Bruce",
          lastName: "Clarke",
          username: "clarky",
          profilePic:
            "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718583/userSix_hjf46y.jpg",
        },
        {
          _id: "1b288c33-ff6d-49c0-a8d3-58b297f1455",
          firstName: "Johnson",
          lastName: "Charles",
          username: "johns24",
          profilePic:
            "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718578/userFour_zrkbid.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "adarshbalika",
    firstName: "Adarsh",
    lastName: "Balika",
    profilePic:
      "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718283/profile_y24uvb.jpg",
    comments: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt",
    likes: {
      likeCount: 5,
      likedBy: [
        {
          _id: "1b288c33-ff6d-49c0-a8d3-58b297f1458",
          firstName: "Bruce",
          lastName: "Clarke",
          username: "clarky",
          profilePic:
            "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718583/userSix_hjf46y.jpg",
        },
        {
          _id: "1b288c33-ff6d-49c0-a8d3-58b297f1455",
          firstName: "Johnson",
          lastName: "Charles",
          username: "johns24",
          profilePic:
            "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718578/userFour_zrkbid.jpg",
        },
        {
          _id: "1b288c33-ff6d-49c0-a8d3-58b297f1452",
          firstName: "Adarsh",
          lastName: "Balika",
          username: "adarshbalika",
          profilePic:
            "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718283/profile_y24uvb.jpg",
        },
        {
          _id: "1b288c33-ff6d-49c0-a8d3-58b297f1453",
          firstName: "Guest",
          lastName: "User",
          username: "Guest123",
          profilePic:
            "https://res.cloudinary.com/meghanaskcloud/image/upload/v1654450830/Social%20media/profile%20pics/oppo-HA5rQ_XfBD0-unsplash_bqovmv.jpg",
        },
        {
          _id: "1b288c33-ff6d-49c0-a8d3-58b297f1454",
          firstName: "John",
          lastName: "Doe",
          username: "johnDoe",

          profilePic:
            "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718256/userTwo_zuhg40.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "johns24",
    firstName: "Johnson",
    lastName: "Charles",
    profilePic:
      "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718578/userFour_zrkbid.jpg",
    comments: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
