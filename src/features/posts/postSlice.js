import { createSlice, nanoid } from '@reduxjs/toolkit';
import { sub } from 'date-fns';

const initialState = [
  {
    id: 1,
    content: 'What was the first thing you remember coding?',
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    userId: 1,
    media: {
      image: 'https://avatars.githubusercontent.com/u/150858220?v=4',
      video: '',
    },
    reactions: {
      reply: 0,
      reposts: {
        repost: 0,
        quote: 0,
      },
      like: 0,
      view: 0,
    },
  },
  {
    id: 2,
    content:
      'This is me after all the holiday feasts. #indiegame #survivalhorror #gamedev This is me after all the holiday feasts. #indiegame #survivalhorror #gamedev This is me after all the holiday feasts. #indiegame #survivalhorror #gamedev This is me after all the holiday feasts. #indiegame #survivalhorror #gamedev',
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    userId: 2,
    media: {
      image:
        'https://i.pinimg.com/736x/b4/0e/dc/b40edc274ad5c3086042adc2ea3e5747.jpg',
      video: '',
    },
    reactions: {
      reply: 0,
      reposts: {
        repost: 1,
        quote: 0,
      },
      like: 0,
      view: 0,
    },
  },
  {
    id: 3,
    content: 'This is my first Post',
    date: sub(new Date(), { minutes: 15 }).toISOString(),
    userId: 3,
    media: {
      image: '',
      video: '',
    },
    reactions: {
      reply: 0,
      reposts: {
        repost: 1,
        quote: 0,
      },
      like: 0,
      view: 0,
    },
  },
  {
    id: 4,
    content: 'This is my second Post',
    date: sub(new Date(), { minutes: 30 }).toISOString(),
    userId: 4,
    media: {
      image: '',
      video: 'https://www.youtube.com/watch?v=8OzOREvLXZ8',
    },
    reactions: {
      reply: 0,
      reposts: {
        repost: 1,
        quote: 0,
      },
      like: 0,
      view: 0,
    },
  },
  {
    id: 5,
    content: 'This is my first Post',
    date: sub(new Date(), { minutes: 62 }).toISOString(),
    userId: 5,
    media: {
      image: '',
      video: '',
    },
    reactions: {
      reply: 0,
      reposts: {
        repost: 1,
        quote: 0,
      },
      like: 0,
      view: 0,
    },
  },
  {
    id: 6,
    content: 'This is my second Post',
    date: sub(new Date(), { minutes: 120 }).toISOString(),
    userId: 6,
    media: {
      image: '',
      video: '',
    },
    reactions: {
      reply: 0,
      reposts: {
        repost: 1,
        quote: 0,
      },
      like: 0,
      view: 0,
    },
  },
];

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    addPost: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(content, userId, media, mediaType) {
        const mediaFile = media
          ? {
              image: mediaType === 'image' ? URL.createObjectURL(media) : '',
              video: mediaType === 'video' ? URL.createObjectURL(media) : '',
            }
          : { image: '', video: '' };
        return {
          payload: {
            id: nanoid(),
            content,
            date: new Date().toISOString(),
            userId,
            media: mediaFile,
            reactions: {
              reply: 0,
              reposts: {
                repost: 0,
                quote: 0,
              },
              like: 0,
              view: 0,
            },
          },
        };
      },
    },
    addReaction(state, action) {
      const { postId, reaction } = action.payload;
      const existingPost = state.find((post) => post.id === postId);

      if (existingPost) {
        // If it's a nested reaction like 'reposts.repost', we need to handle it differently
        if (reaction in existingPost.reactions) {
          existingPost.reactions[reaction]++;
        } else if (reaction in existingPost.reactions.reposts) {
          existingPost.reactions.reposts[reaction]++;
        }
      }
    },
  },
});

export const { addPost, addReaction } = postSlice.actions;

export default postSlice.reducer;
