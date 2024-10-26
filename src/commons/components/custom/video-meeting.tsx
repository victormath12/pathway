"use client"
import { JaaSMeeting } from "@jitsi/react-sdk"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Fragment } from "react"
import { Loading } from "./loading"

export function VideoMeeting(args: {
  username: string
  email: string
  roomName: string
  authorization: string
  sessionId: string
}) {
  const router = useRouter()

  return (
    <Fragment>
      <Link
        href="/my-sessions"
        className="absolute z-10 bg-primary text-white top-6 left-6 rounded-full h-[46px] px-5 items-center text-lg flex gap-x-1"
      >
        <ArrowLeft />
        Voltar
      </Link>
      <JaaSMeeting
        appId={process.env.NEXT_PUBLIC_JITSI_KEY as string}
        jwt={args.authorization}
        roomName={args.roomName}
        spinner={() => <Loading />}
        configOverwrite={{
          hideConferenceSubject: false,
          subject: "Bem vindo",
          startWithAudioMuted: true,
          disableModeratorIndicator: true,
          startScreenSharing: true,
          enableEmailInStats: false,
          enableClosePage: true,
          channelLastN: 3,
          prejoinConfig: {
            enabled: true,
            hideDisplayName: true,
          },
          disableInviteFunctions: true,
        }}
        interfaceConfigOverwrite={{
          DISABLE_JOIN_LEAVE_NOTIFICATIONS: true,
          SHOW_JITSI_WATERMARK: false,
          SHOW_WATERMARK_FOR_GUESTS: false,
          DISPLAY_WELCOME_PAGE_CONTENT: false,
          SHOW_CHROME_EXTENSION_BANNER: false,
          SHOW_POWERED_BY: false,
          TOOLBAR_BUTTONS: [
            "microphone",
            "camera",
            "desktop",
            "fullscreen",
            "hangup",
            "profile",
            "chat",
            "recording",
            "livestreaming",
            "etherpad",
            "settings",
            "raisehand",
            "videoquality",
            "tileview",
            "download",
            "help",
          ],
        }}
        lang="ptBR"
        userInfo={{
          displayName: args.username,
          email: args.email,
        }}
        getIFrameRef={(iframeRef) => {
          iframeRef.style.height = "100vh"
          iframeRef.style.width = "100%"
        }}
        onReadyToClose={() => router.push(`/session/nps/${args.sessionId}`)}
      />
    </Fragment>
  )
}
