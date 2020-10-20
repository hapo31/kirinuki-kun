import YoutubePlayerState from "../state/YoutubePlayerState";

const initialState: YoutubePlayerState = {
  playing: false,
  videoId: "",
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};
