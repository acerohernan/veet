import { useMemo } from "react";
import { useParams, useSearchParams } from "react-router-dom";

import { getAccessToken, setAccessToken } from "@/lib/auth/accessToken";

import { UnathorizedRoom } from "./unauthorized";
import { RoomMeeting } from "./meeting";

const RoomPage = () => {
  const { roomId } = useParams();
  const [query] = useSearchParams();

  const accessToken = useMemo<string | undefined>(() => {
    const queryToken = query.get("accessToken");

    if (queryToken) {
      // clean url state
      window.history.replaceState("", "", `/${roomId}`);
      // save token
      setAccessToken(queryToken);

      return queryToken;
    }

    return getAccessToken();
  }, [query, roomId]);

  if (!accessToken) return <UnathorizedRoom />;

  return <RoomMeeting />;
};

export default RoomPage;
