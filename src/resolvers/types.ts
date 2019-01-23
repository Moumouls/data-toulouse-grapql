export type Maybe<T> = T | null;

export interface DateRange {
  /** Start date in format: YYYY/mm/dd */
  start: string;
  /** End date in format: YYYY/mm/dd */
  end: string;
}
/** Search in a zone with a radius in meters */
export interface Geofilter {
  latitude: number;

  longitude: number;
  /** Radius for the search zone in meters */
  radius: number;
}

export enum Type {
  Cultural = "CULTURAL",
  Commercial = "COMMERCIAL",
  SportAndLeisur = "SPORT_AND_LEISUR",
  Unusual = "UNUSUAL",
  Music = "MUSIC",
  Danse = "DANSE",
  NatureAndRelaxation = "NATURE_AND_RELAXATION",
  Misc = "MISC"
}

export enum Category {
  Walk = "WALK",
  Animations = "ANIMATIONS",
  GuidedTours = "GUIDED_TOURS",
  Spectacle = "SPECTACLE",
  Festival = "FESTIVAL",
  Concert = "CONCERT",
  Cinema = "CINEMA",
  Recital = "RECITAL",
  Encounters = "ENCOUNTERS",
  OpenHouse = "OPEN_HOUSE",
  Opera = "OPERA",
  Exhibition = "EXHIBITION",
  FairOrExhibition = "FAIR_OR_EXHIBITION",
  Theater = "THEATER",
  FleaMarket = "FLEA_MARKET",
  Market = "MARKET",
  Sport = "SPORT",
  Misc = "MISC"
}

export enum Theme {
  Musee = "MUSEE",
  Danse = "DANSE",
  Video = "VIDEO",
  Vin = "VIN",
  NauticSport = "NAUTIC_SPORT",
  MusicPop = "MUSIC_POP",
  MusicClassic = "MUSIC_CLASSIC",
  MusicVariety = "MUSIC_VARIETY",
  Jazz = "JAZZ",
  Mode = "MODE",
  Literature = "LITERATURE",
  YoungAudience = "YOUNG_AUDIENCE",
  Historic = "HISTORIC",
  Gastronomie = "GASTRONOMIE",
  Plants = "PLANTS",
  Comic = "COMIC",
  Cinema = "CINEMA",
  Bio = "BIO",
  Artisanat = "ARTISANAT",
  ContemporaryArt = "CONTEMPORARY_ART",
  Photo = "PHOTO",
  Misc = "MISC"
}

export enum OrderBy {
  StartDateAsc = "start_date_ASC",
  StartDateDesc = "start_date_DESC",
  EndDateAsc = "end_date_ASC",
  EndDateDesc = "end_date_DESC"
}

// ====================================================
// Types
// ====================================================

export interface Query {
  event: Event;

  events: (Maybe<Event>)[];
}

/** An Event */
export interface Event {
  /** Unique Identifier */
  id: string;
  /** Name */
  name: string;
  /** A short description */
  shortDescription: string;
  /** The full description */
  longDescription: string;
  /** The content */
  type: (Maybe<Type>)[];
  /** The category */
  category: (Maybe<Category>)[];
  /** The main theme */
  theme: (Maybe<Theme>)[];
  /** Name of the place */
  place: string;
  /** When it start (ex: 18-09-2018) */
  startDate: string;
  /** When it end (ex: 19-09-2018) */
  endDate: string;
  /** Schedules (ex: De 18h à 19h) */
  schedules?: Maybe<string>;
  /** If the event is accessible for free */
  isFree?: Maybe<boolean>;
  /** List of prices, there are in € */
  price?: Maybe<(Maybe<number>)[]>;
  /** List of child prices, there are in € */
  childPrice?: Maybe<(Maybe<number>)[]>;
  /** Age group for price group */
  childAgeGroup?: Maybe<string>;
  /** GPS Coordinates */
  position: Geopoint;
  /** The municipality that manage the event (ex: TOULOUSE) */
  municipality: string;
  /** Street address */
  address?: Maybe<string>;
  /** Phone number */
  phone?: Maybe<string>;
  /** Postal code */
  postalCode: number;
  /** URL for reservation */
  websiteResa?: Maybe<string>;
  /** The nearest Tram or Metro station */
  nearestStation?: Maybe<string>;
}

export interface Geopoint {
  latitude: number;

  longitude: number;
}

// ====================================================
// Arguments
// ====================================================

export interface EventQueryArgs {
  id: string;
}
export interface EventsQueryArgs {
  descriptionContain?: Maybe<string>;

  nearestStation?: Maybe<string>;

  orderBy?: Maybe<OrderBy>;

  limit?: Maybe<number>;

  startDateRange?: Maybe<DateRange>;

  endDateRange?: Maybe<DateRange>;
}
