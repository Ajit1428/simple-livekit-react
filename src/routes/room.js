import { LiveKitRoom, VideoConference } from "@livekit/components-react";

import "./room.css";

import "@livekit/components-styles";

import { useNavigate, useParams } from "react-router-dom";

export const RoomPage = () => {
  const { id } = useParams();
  const router = useNavigate();
  const onLeaveDisconnect = () => {
    router("/");
  };

  return (
    <div className="m-4">
      <LiveKitRoom
        data-1k-theme="default"
        video={true}
        connect={true}
        onDisconnected={onLeaveDisconnect}
        token={
          id === "admin"
            ? process.env.REACT_APP_LIVEKIT_TOKEN_FIRST
            : id === "user" && process.env.REACT_APP_LIVEKIT_TOKEN_SECOND
        }
        serverUrl={process.env.REACT_APP_WS_URI}
      >
        <VideoConference />
      </LiveKitRoom>
    </div>
  );
};
