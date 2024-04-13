import { createSlice, configureStore } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    setUser(_, action) {
      return action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState: {
    username: 'Loading...',
    bio: 'Loading...',
    info: {
      phone: 'Loading...',
      country: 'Loading...',
      city: 'Loading...',
      workplace: 'Loading...',
      school: 'Loading...',
    },
  },
  reducers: {
    setCurrentUser(_, action) {
      return action.payload;
    },
  },
});

export const { setCurrentUser } = currentUserSlice.actions;

const postsSlice = createSlice({
  name: 'posts',
  initialState: [],
  reducers: {
    // to add post you must do req to api (usePosts) and set state using this reducer
    addNewPostToState(state, action) {
      state.unshift(action.payload);
    },
    addNextPosts(state, action) {
      const newPosts = action.payload;
      const filteredPosts = newPosts.filter((newPost) => !state.some((post) => post?._id === newPost?._id));
      state.push(...filteredPosts);
    },
    removePostFromState(state, action) {
      return state.filter((post) => post._id !== action.payload);
    },
    editPostInState(state, action) {
      const index = state.findIndex((post) => post._id === action.payload._id);
      state[index] = action.payload;
    },
    addNewCommentToState(state, action) {
      const { postId, newComment } = action.payload;
      const index = state.findIndex((post) => post._id === postId);
      if (index !== -1) {
        state[index].comments.push(newComment);
      }
    },
    addLikeToState(state, action) {
      const { postId, userId } = action.payload;
      const index = state.findIndex((post) => post._id === postId);
      state[index].likes.push(userId);
    },
    removeLikeFromState(state, action) {
      const { postId, userId } = action.payload;
      const postIndex = state.findIndex((post) => post._id === postId);
      const likeIndex = state[postIndex].likes.findIndex((like) => like === userId);
      state[postIndex].likes.splice(likeIndex, 1);
    },
    replaceAllPosts(_, action) {
      return action.payload;
    },
  },
});

export const {
  addNewPostToState,
  addNextPosts,
  removePostFromState,
  editPostInState,
  addNewCommentToState,
  replaceAllPosts,
  addLikeToState,
  removeLikeFromState,
} = postsSlice.actions;

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isOpen: false,
    task: 'addPost',
    postToEdit: { id: '', content: '', image: null },
  },
  reducers: {
    changeOpenState(state, action) {
      state.isOpen = action.payload;
    },
    changeTask(state, action) {
      state.task = action.payload;
    },
    changePostToEdit(state, action) {
      state.postToEdit = action.payload;
    },
  },
});

export const { changeOpenState, changeTask, changePostToEdit } = modalSlice.actions;

const postsQuerySlice = createSlice({
  name: 'postsQuery',
  initialState: '',
  reducers: {
    setPostsQuery(_, action) {
      return action.payload;
    },
  },
});

export const { setPostsQuery } = postsQuerySlice.actions;

const postIsAddedEditedSlice = createSlice({
  name: 'postIsAddedEdited',
  initialState: false,
  reducers: {
    setPostIsAddedEdited(_, action) {
      return action.payload;
    },
  },
});

export const { setPostIsAddedEdited } = postIsAddedEditedSlice.actions;

const errorSlice = createSlice({
  name: 'error',
  initialState: '',
  reducers: {
    setError(_, action) {
      return action.payload;
    },
  },
});

export const { setError } = errorSlice.actions;

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    currentUser: currentUserSlice.reducer,
    posts: postsSlice.reducer,
    modal: modalSlice.reducer,
    postsQuery: postsQuerySlice.reducer,
    postIsAddedEdited: postIsAddedEditedSlice.reducer,
    error: errorSlice.reducer,
  },
});
