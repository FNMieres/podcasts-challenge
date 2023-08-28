export interface TopPodcastsResponse {
  feed: Feed;
}

interface Feed {
  author: Author;
  entry: Entry[];
  updated: Description;
  rights: Description;
  title: Description;
  icon: Description;
  link: Link[];
  id: Description;
}

interface Author {
  name: Description;
  uri: Description;
}

interface Description {
  label: string;
}

export interface Entry {
  "im:name": Description;
  "im:image": IMImage[];
  summary: Description;
  "im:price": IMPrice;
  "im:contentType": IMContentType;
  rights?: Description;
  title: Description;
  link: Link;
  id: ID;
  "im:artist": IMArtist;
  category: Category;
  "im:releaseDate": IMReleaseDate;
}

interface Category {
  attributes: CategoryAttributes;
}

interface CategoryAttributes {
  "im:id": string;
  term: PurpleLabel;
  scheme: string;
  label: PurpleLabel;
}

enum PurpleLabel {
  Music = "Music",
  MusicCommentary = "Music Commentary",
  MusicHistory = "Music History",
  MusicInterviews = "Music Interviews",
}

interface ID {
  label: string;
  attributes: IDAttributes;
}

interface IDAttributes {
  "im:id": string;
}

interface IMArtist {
  label: string;
  attributes?: IMArtistAttributes;
}

interface IMArtistAttributes {
  href: string;
}

interface IMContentType {
  attributes: IMContentTypeAttributes;
}

interface IMContentTypeAttributes {
  term: FluffyLabel;
  label: FluffyLabel;
}

enum FluffyLabel {
  Podcast = "Podcast",
}

interface IMImage {
  label: string;
  attributes: IMImageAttributes;
}

interface IMImageAttributes {
  height: string;
}

interface IMPrice {
  label: IMPriceLabel;
  attributes: IMPriceAttributes;
}

interface IMPriceAttributes {
  amount: string;
  currency: Currency;
}

enum Currency {
  Usd = "USD",
}

enum IMPriceLabel {
  Get = "Get",
}

interface IMReleaseDate {
  label: Date;
  attributes: Description;
}

interface Link {
  attributes: LinkAttributes;
}

interface LinkAttributes {
  rel: Rel;
  type?: Type;
  href: string;
}

enum Rel {
  Alternate = "alternate",
  Self = "self",
}

enum Type {
  TextHTML = "text/html",
}
