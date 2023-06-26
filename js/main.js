
const NAMES = [
  'Маша Спиридонова',
  'Анна Белых',
  'Иркэ Ковязина',
  'Андрей Струков',
  'Евгений Лимпупу'
];

const DESCRIPTIONS = [
  'Отдых в Дубае',
  'Бомжара у подъезда',
  'Заработал первую сотку',
  'С друзьями отмечаем ДР',
  'Жизнь-сказка',
  'Задолбал дождь в Питере...',
  'Помогите не сдохнуть',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const POSTS_COUNT = 25;

let postId = 1;
let commentId = 1;

const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createComment = () => ({
  id: commentId++,
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES),
});

const createPost = () => ({
  id: postId,
  url: `photos/${postId++}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(15, 200),
  comments: Array.from({length: getRandomInteger(0, 30)}, createComment),
});

const createPosts = () => Array.from({length: POSTS_COUNT}, createPost);

