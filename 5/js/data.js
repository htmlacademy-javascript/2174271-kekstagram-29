import { getRandomPositiveInteger, getRandomArrayElement, createIdGenerator } from './util';

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

const POSTED_PICTURES = 25;
const LIKES_MIN = 15;
const LIKES_MAX = 200;
const COMMENTS = 15;
const AVATAR = 6;

const generateCommentId = createIdGenerator();

const createMessage = () =>
  Array.from({ length: getRandomPositiveInteger(1, 2) }, () =>
    getRandomArrayElement(MESSAGES)
  ).join(' ');

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomPositiveInteger(1, AVATAR)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES),
});

const createPicture = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomPositiveInteger(LIKES_MIN, LIKES_MAX),
  comments: Array.from(
    { length: getRandomPositiveInteger(0, COMMENTS) },
    createComment
  ),
});

const getPictures = () =>
  Array.from({ length: POSTED_PICTURES }, (_, pictureIndex) =>
    createPicture(pictureIndex + 1)
  );

export { getPictures };
