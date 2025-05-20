// import create from 'zustand'
// import useFetch from '../utility/useFetch'

// export const useUserProfileStore = create((set) => ({
//   userProfile: null, // User Profile Data
//   isLoading: false,   // Loading State
//   error: null,        // Error State

//   // Fetch User Profile (GET Request)
// fetchUserProfile: async (userId) => {
//     set({ isLoading: true, error: null });

//     try {
//       const response = await axios.get(`${BASE_URL}/${userId}`);
//       set({
//         userProfile: response.data,
//         isLoading: false,
//         error: null,
//       });
//     } catch (err) {
//       set({
//         userProfile: null,
//         isLoading: false,
//         error: err.message,
//       });
//     }
//   }

// }));
