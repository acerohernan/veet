import { useMemo } from "react";
import { useParams, useSearchParams } from "react-router-dom";

import { navigationActions } from "@/store/navigation";
import { useAppDispatch, useAppSelector } from "@/store";

import { UnathorizedRoom } from "./unauthorized";
import { RoomMeeting } from "./meeting";

const RoomPage = () => {
  const { roomId } = useParams();
  const dispatch = useAppDispatch();
  const [query] = useSearchParams();

  const storedToken = useAppSelector((state) => state.navigation.tokens[roomId!]);

  const accessToken = useMemo<string | undefined>(() => {
    const token = query.get("accessToken");

    if (!roomId) return;
    if (!token) return storedToken;

    // clean state
    window.history.replaceState("", "", `/${roomId}`);

    // store in redux and session storage
    dispatch(navigationActions.storeToken({ roomId, token }));
    const tokens = JSON.parse(sessionStorage.getItem("tokens") || "{}");
    tokens[roomId] = token;
    sessionStorage.setItem("tokens", JSON.stringify(tokens));
    return token;
  }, [query, dispatch, roomId, storedToken]);

  if (!accessToken) return <UnathorizedRoom />;

  return <RoomMeeting />;
};

export default RoomPage;
