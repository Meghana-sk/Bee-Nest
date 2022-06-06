import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  /** user 1 */
  {
    _id: "758567dc-73d2-48d8-a469-f47f8f7af484",
    firstName: "Guest",
    lastName: "User",
    username: "Guest123",
    password: "Guest@123",
    profilePic:
      "https://res.cloudinary.com/meghanaskcloud/image/upload/v1654450830/Social%20media/profile%20pics/oppo-HA5rQ_XfBD0-unsplash_bqovmv.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      {
        // _id: "758567dc-73d2-48d8-a469-f47f8f7af485",
        _id: uuid(),
        firstName: "Meghana",
        lastName: "SK",
        username: "meghanask",
        profilePic:
          "https://res.cloudinary.com/meghanaskcloud/image/upload/v1654448703/Social%20media/profile%20pics/SK_ehvid9.jpg",
      },
      {
        _id: "1b288c33-ff6d-49c0-a8d3-58b297f1457",
        username: "elonmusk",
        firstName: "Elon",
        lastName: "Musk",
        profilePic:
          "https://res.cloudinary.com/meghanaskcloud/image/upload/v1654444111/Social%20media/profile%20pics/elonmusk_Profile_lro5gn.jpg",
      },
      {
        _id: "1b288c33-ff6d-49c0-a8d3-58b297f1456",
        firstName: "Akanksha",
        lastName: "Choudhary",
        username: "ch_akanksha",
        profilePic:
          "https://res.cloudinary.com/meghanaskcloud/image/upload/v1654447086/Social%20media/profile%20pics/akankshachoudhary_profile_pukemu.jpg",
      },
    ],
    followers: [
      {
        _id: "758567dc-73d2-48d8-a469-f47f8f7af485",
        firstName: "Meghana",
        lastName: "SK",
        username: "meghanask",
        profilePic:
          "https://res.cloudinary.com/meghanaskcloud/image/upload/v1654448703/Social%20media/profile%20pics/SK_ehvid9.jpg",
      },
      {
        _id: "1b288c33-ff6d-49c0-a8d3-58b297f1456",
        firstName: "Akanksha",
        lastName: "Choudhary",
        username: "ch_akanksha",
        profilePic:
          "https://res.cloudinary.com/meghanaskcloud/image/upload/v1654447086/Social%20media/profile%20pics/akankshachoudhary_profile_pukemu.jpg",
      },
      {
        _id: "1b288c33-ff6d-49c0-a8d3-58b297f1457",
        username: "elonmusk",
        firstName: "Elon",
        lastName: "Musk",
        profilePic:
          "https://res.cloudinary.com/meghanaskcloud/image/upload/v1654444111/Social%20media/profile%20pics/elonmusk_Profile_lro5gn.jpg",
      },
    ],
  },
  /** user 2 */
  {
    _id: "758567dc-73d2-48d8-a469-f47f8f7af485",
    firstName: "Meghana",
    lastName: "SK",
    username: "meghanask",
    password: "Msk@123",
    profilePic:
      "https://res.cloudinary.com/meghanaskcloud/image/upload/v1654448703/Social%20media/profile%20pics/SK_ehvid9.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [],
    followers: [],
  },
  /** user 3 */
  {
    _id: "1b288c33-ff6d-49c0-a8d3-58b297f1456",
    firstName: "Akanksha",
    lastName: "Choudhary",
    username: "ch_akanksha",
    profilePic:
      "https://res.cloudinary.com/meghanaskcloud/image/upload/v1654447086/Social%20media/profile%20pics/akankshachoudhary_profile_pukemu.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [],
    followers: [],
  },
  /** user 4 */
  {
    _id: "1b288c33-ff6d-49c0-a8d3-58b297f1457",
    username: "elonmusk",
    firstName: "Elon",
    lastName: "Musk",
    password: "TechIsLove@22",
    profilePic:
      "https://res.cloudinary.com/meghanaskcloud/image/upload/v1654444111/Social%20media/profile%20pics/elonmusk_Profile_lro5gn.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      {
        _id: "758567dc-73d2-48d8-a469-f47f8f7af484",
        firstName: "Guest",
        lastName: "User",
        username: "Guest123",
        profilePic:
          "https://res.cloudinary.com/meghanaskcloud/image/upload/v1654450830/Social%20media/profile%20pics/oppo-HA5rQ_XfBD0-unsplash_bqovmv.jpg",
      },
      {
        _id: "758567dc-73d2-48d8-a469-f47f8f7af488",
        username: "tanaypratap",
        firstName: "Tanay",
        lastName: "Pratap",
        profilePic:
          "https://res.cloudinary.com/meghanaskcloud/image/upload/v1654444873/Social%20media/profile%20pics/tanaypratap_profile_lil10l.jpg",
      },
    ],
    followers: [
      {
        _id: "1b288c33-ff6d-49c0-a8d3-58b297f1456",
        firstName: "Akanksha",
        lastName: "Choudhary",
        username: "ch_akanksha",
        profilePic:
          "https://res.cloudinary.com/meghanaskcloud/image/upload/v1654447086/Social%20media/profile%20pics/akankshachoudhary_profile_pukemu.jpg",
      },
      {
        _id: "758567dc-73d2-48d8-a469-f47f8f7af488",
        username: "tanaypratap",
        firstName: "Tanay",
        lastName: "Pratap",
        profilePic:
          "https://res.cloudinary.com/meghanaskcloud/image/upload/v1654444873/Social%20media/profile%20pics/tanaypratap_profile_lil10l.jpg",
      },
      {
        _id: "758567dc-73d2-48d8-a469-f47f8f7af485",
        firstName: "Meghana",
        lastName: "SK",
        username: "meghanask",
        password: "Msk@123",
        profilePic:
          "https://res.cloudinary.com/meghanaskcloud/image/upload/v1654448703/Social%20media/profile%20pics/SK_ehvid9.jpg",
      },
    ],
  },
  /** user 5 */
  {
    _id: "758567dc-73d2-48d8-a469-f47f8f7af488",
    username: "tanaypratap",
    password: "NeogIsMyHeartBeat@2022",
    firstName: "Tanay",
    lastName: "Pratap",
    profilePic:
      "https://res.cloudinary.com/meghanaskcloud/image/upload/v1654444873/Social%20media/profile%20pics/tanaypratap_profile_lil10l.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      {
        _id: "1b288c33-ff6d-49c0-a8d3-58b297f1456",
        firstName: "Akanksha",
        lastName: "Choudhary",
        username: "ch_akanksha",
        profilePic:
          "https://res.cloudinary.com/meghanaskcloud/image/upload/v1654447086/Social%20media/profile%20pics/akankshachoudhary_profile_pukemu.jpg",
      },
      {
        _id: "758567dc-73d2-48d8-a469-f47f8f7af485",
        firstName: "Meghana",
        lastName: "SK",
        username: "meghanask",
        profilePic:
          "https://res.cloudinary.com/meghanaskcloud/image/upload/v1654448703/Social%20media/profile%20pics/SK_ehvid9.jpg",
      },
      {
        _id: "1b288c33-ff6d-49c0-a8d3-58b297f1457",
        username: "elonmusk",
        firstName: "Elon",
        lastName: "Musk",
        profilePic:
          "https://res.cloudinary.com/meghanaskcloud/image/upload/v1654444111/Social%20media/profile%20pics/elonmusk_Profile_lro5gn.jpg",
      },
      {
        _id: "758567dc-73d2-48d8-a469-f47f8f7af484",
        firstName: "Guest",
        lastName: "User",
        username: "Guest123",
        profilePic:
          "https://res.cloudinary.com/meghanaskcloud/image/upload/v1654450830/Social%20media/profile%20pics/oppo-HA5rQ_XfBD0-unsplash_bqovmv.jpg",
      },
    ],
    followers: [
      {
        _id: "1b288c33-ff6d-49c0-a8d3-58b297f1456",
        firstName: "Akanksha",
        lastName: "Choudhary",
        username: "ch_akanksha",
        profilePic:
          "https://res.cloudinary.com/meghanaskcloud/image/upload/v1654447086/Social%20media/profile%20pics/akankshachoudhary_profile_pukemu.jpg",
      },
      {
        _id: "758567dc-73d2-48d8-a469-f47f8f7af485",
        firstName: "Meghana",
        lastName: "SK",
        username: "meghanask",
        profilePic:
          "https://res.cloudinary.com/meghanaskcloud/image/upload/v1654448703/Social%20media/profile%20pics/SK_ehvid9.jpg",
      },
      {
        _id: "1b288c33-ff6d-49c0-a8d3-58b297f1457",
        username: "elonmusk",
        firstName: "Elon",
        lastName: "Musk",
        profilePic:
          "https://res.cloudinary.com/meghanaskcloud/image/upload/v1654444111/Social%20media/profile%20pics/elonmusk_Profile_lro5gn.jpg",
      },
    ],
  },
];
