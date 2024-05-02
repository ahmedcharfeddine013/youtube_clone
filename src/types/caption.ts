interface CaptionSnippet {
    videoId: string;
    lastUpdated: string;
    trackKind: string;
    language: string;
    name: string;
    audioTrackType: string;
    isCC: boolean;
    isLarge: boolean;
    isEasyReader: boolean;
    isDraft: boolean;
    isAutoSynced: boolean;
    status: string;
}

interface YouTubeCaption {
    kind: string;
    id: string;
    snippet: CaptionSnippet;
}

interface YouTubeCaptionListResponse {
    kind: string;
    items: YouTubeCaption[];
}