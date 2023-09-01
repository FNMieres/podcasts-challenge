export interface LookupResponse {
  resultCount: number;
  results: Result[];
}

export interface Result {
  wrapperType: string;
  kind: string;
  artistId?: number;
  collectionId: number;
  trackId: number;
  artistName?: string;
  collectionName: string;
  trackName: string;
  collectionCensoredName?: string;
  trackCensoredName?: string;
  artistViewUrl: string;
  collectionViewUrl: string;
  feedUrl: string;
  trackViewUrl: string;
  artworkUrl30?: string;
  artworkUrl60: string;
  artworkUrl100?: string;
  collectionPrice?: number;
  trackPrice?: number;
  collectionHdPrice?: number;
  releaseDate: string;
  collectionExplicitness?: string;
  trackExplicitness?: string;
  trackCount?: number;
  trackTimeMillis: number;
  country: string;
  currency?: string;
  primaryGenreName?: string;
  contentAdvisoryRating: string;
  artworkUrl600: string;
  genreIds?: string[];
  genres: Array<GenreClass | string>;
  artistIds?: number[];
  episodeFileExtension?: string;
  closedCaptioning?: string;
  episodeGuid?: string;
  artworkUrl160?: string;
  description?: string;
  episodeContentType?: string;
  shortDescription?: string;
  previewUrl?: string;
  episodeUrl?: string;
}
