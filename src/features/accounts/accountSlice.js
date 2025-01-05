import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentAccount: {
    id: 1,
    username: 'bbelbuken',
    fullname: 'Batuhan',
    avatar:
      'https://pbs.twimg.com/profile_images/1863667711319924737/RrRyq3vD_400x400.jpg',
    header_photo: '',
    verified: false,
  },
  accounts: [
    {
      id: 1,
      username: 'bbelbuken',
      fullname: 'Batuhan',
      avatar:
        'https://pbs.twimg.com/profile_images/1863667711319924737/RrRyq3vD_400x400.jpg',
      header_photo:
        'https://img.freepik.com/free-photo/view-old-tree-lake-with-snow-covered-mountains-cloudy-day_181624-28954.jpg?t=st=1736119124~exp=1736122724~hmac=8a0bece1df53bc75bc7816d6b4cd07799a15c7b1e3d807a6a28844769b77e455&w=740',
      verified: false,
    },
    {
      id: 2,
      username: 'shadowpriest_99',
      fullname: 'ShAd0W_PriEsT',
      avatar:
        'https://imgcdn.stablediffusionweb.com/2024/2/26/8699803e-dc60-48e0-a499-e60bb25764dc.jpg',
      header_photo: '',
      verified: false,
    },
    {
      id: 3,
      username: 'NathieVR',
      fullname: 'Nathie',
      avatar:
        'https://pbs.twimg.com/profile_images/1567608510497652736/TvoiS4g6_200x200.jpg',
      header_photo: '',
      verified: false,
    },
    {
      id: 4,
      username: 'LiveDigitalArt',
      fullname: 'Digital Art',
      avatar:
        'https://pbs.twimg.com/profile_images/857849907624820740/8ewzDDjp_200x200.jpg',
      header_photo: '',
      verified: true,
    },
    {
      id: 5,
      username: 'nodejs',
      fullname: 'Node.js',
      avatar:
        'https://pbs.twimg.com/profile_images/1262824892535373825/BiXDFDDp_normal.jpg',
      header_photo: '',
      verified: true,
    },
    {
      id: 6,
      username: 'drapplebrain',
      fullname: 'Dr.Applebrain',
      avatar:
        'https://pbs.twimg.com/profile_images/1658233760838569985/OsRPTc1Q_200x200.png ',
      header_photo: '',
      verified: false,
    },
  ],
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    addAccount: (state, action) => {
      state.accounts.push(action.payload);
    },
    removeAccount: (state, action) => {
      state.accounts = state.accounts.filter(
        (account) => account.id !== action.payload,
      );
      if (state.currentAccount && action.payload === state.currentAccount.id) {
        state.currentAccount = false;
      }
    },
    setCurrentAccount: (state, action) => {
      state.currentAccount = action.payload;
    },
  },
});

export const { addAccount, removeAccount, setCurrentAccount } =
  accountSlice.actions;

export default accountSlice.reducer;
