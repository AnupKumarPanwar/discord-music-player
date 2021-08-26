import {AudioPlayerError, AudioResource } from "@discordjs/voice";
import {User} from "discord.js";
import { Song, Queue, Playlist } from "..";

/**
 * Player options
 * @typedef {object} PlayerOptions
 * @param {boolean} [leaveOnEnd=true] If it should leave on end
 * @param {boolean} [leaveOnStop=true] If it should leave on stop
 * @param {boolean} [leaveOnEmpty=true] If it should leave on empty voice channel
 * @param {boolean} [deafenOnJoin=false] If it should defean on join
 * @param {number} [timeout=0] Voice channel leave timeout
 * @param {number} [volume=100] Player volume
 * @param {string} [quality=high] Player quality
 * @param {string} [localAddress] Custom ipv4/ipv6 address
 */
export interface PlayerOptions {
    leaveOnEnd?: boolean,
    leaveOnStop?: boolean,
    leaveOnEmpty?: boolean,
    deafenOnJoin?: boolean,
    timeout?: number,
    volume?: number,
    quality?: 'low'|'high',
    localAddress?: string
}

/**
 * Play options
 * @typedef {object} PlayOptions
 * @param {string} [uploadDate] Search sort by Upload date
 * @param {string} [duration] Search sort by Duration
 * @param {string} [sortBy=relevance] Search sort by Sort by
 * @param {User} [requestedBy] The User who requested the Song
 * @param {string} [localAddress] Custom ipv4/ipv6 address
 */
export interface PlayOptions {
    uploadDate?: 'hour'|'today'|'week'|'month'|'year',
    duration?: 'short'|'long',
    sortBy?: 'relevance'|'date'|'view count'|'rating',
    requestedBy?: User,
    localAddress?: string
};

/**
 * Playlist options
 * @typedef {object} PlaylistOptions
 * @param {number} [maxSongs=-1] Max songs
 * @param {User} [requestedBy] The User who requested the Song
 * @param {boolean} [shuffle=false] If it should shuffle the Songs
 * @param {string} [localAddress] Custom ipv4/ipv6 address
 */
export interface PlaylistOptions {
    maxSongs?: number,
    requestedBy?: User,
    shuffle?: boolean,
    localAddress?: string
};

/**
 * Default player options object
 * @typedef {PlayerOptions}
 * @param {boolean} [leaveOnEnd=true] If it should leave on end
 * @param {boolean} [leaveOnStop=true] If it should leave on stop
 * @param {boolean} [leaveOnEmpty=true] If it should leave on empty voice channel
 * @param {boolean} [deafenOnJoin=false] If it should defean on join
 * @param {number} [timeout=0] Voice channel leave timeout
 * @param {number} [volume=100] Player volume
 * @param {string} [quality=high] Player quality
 */
export const DefaultPlayerOptions: PlayerOptions = {
    leaveOnEnd: true,
    leaveOnStop: true,
    leaveOnEmpty: true,
    deafenOnJoin: false,
    timeout: 0,
    volume: 100,
    quality: 'high',
};

/**
 * Default play options object
 * @typedef {PlayOptions}
 * @param {string} [sortBy=relevance] Search sort by Sort by
 */
export const DefaultPlayOptions: PlayOptions = {
    sortBy: 'relevance',
};

/**
 * Default playlist options object
 * @typedef {PlaylistOptions}
 * @param {number} [maxSongs=-1] Max songs
 * @param {boolean} [shuffle=false] If it should shuffle the Songs
 */
export const DefaultPlaylistOptions: PlaylistOptions = {
    maxSongs: -1,
    shuffle: false,
};

/**
 * Raw Song object
 * @typedef {object} RawSong
 * @property {string} name
 * @property {string} author
 * @property {string} url
 * @property {string} thumbnail
 * @property {string} duration
 * @property {boolean} isLive
 */
export interface RawSong {
    name: string,
    author: string,
    url: string,
    thumbnail: string,
    duration: string,
    isLive: boolean
}

/**
 * Raw Playlist object
 * @typedef {object} PlayerOptions
 * @property {string} name
 * @property {string} author
 * @property {string} url
 * @property {Song[]} songs
 * @property {string} type
 */
export interface RawPlaylist {
    name: string,
    author: string,
    url: string,
    songs: Song[],
    type: 'playlist'|'album'
}

/**
 * The queue repeat mode.
 * Following modes exists:
 * - OFF (0)
 * - SONG (1)
 * - QUEUE (2)
 * @typedef {number} RepeatMode
 */
export enum RepeatMode {
    DISABLED,
    SONG,
    QUEUE ,
}

/**
 * Emitted when channel was empty
 * @event Player#channelEmpty
 * @param {Queue} queue Queue
 */

/**
 * Emitted when a song was added to the queue
 * @event Player#songAdd
 * @param {Queue} queue Queue
 * @param {Song} song Song
 */

/**
 * Emitted when a playlist was added to the queue
 * @event Player#playlistAdd
 * @param {Queue} queue Queue
 * @param {Playlist} playlist Playlist
 */

/**
 * Emitted when there was no more music to play
 * @event Player#queueEnd
 * @param {Queue} queue Queue
 */

/**
 * Emitted when a song changed
 * @event Player#songChanged
 * @param {Queue} queue Queue
 * @param {Song} newSong Song
 * @param {Song} oldSong Song
 */

/**
 * Emitted when a first song in the queue started playing
 * @event Player#songFirst
 * @param {Queue} queue Queue
 * @param {Song} song Song
 */

/**
 * Emitted when someone disconnected the bot from the channel
 * @event Player#clientDisconnect
 * @param {Queue} queue Queue
 */

/**
 * Emitted when deafenOnJoin is true and the bot was undeafened
 * @event Player#clientUndeafen
 * @param {Queue} queue Queue
 */

/**
 * Emitted when there was an error with the Player
 * @event Player#error
 * @param {string} error Error string
 * @param {queue} Queue Queue
 */

export interface PlayerEvents {
    channelEmpty: [queue: Queue];
    songAdd: [queue: Queue, song: Song];
    playlistAdd: [queue: Queue, playlist: Playlist];
    queueEnd: [queue: Queue];
    songChanged: [queue: Queue, newSong: Song, oldSong: Song];
    songFirst: [queue: Queue, song: Song];
    clientDisconnect: [queue: Queue];
    clientUndeafen: [queue: Queue];
    error: [error: string, queue: Queue];
}

/**
 * Emitted when StreamConnection started
 * @event StreamConnection#start
 * @param {AudioResource<Song>} AudioResource AudioResource
 */

/**
 * Emitted when StreamConnection ended
 * @event StreamConnection#end
 * @param {AudioResource<Song>} AudioResource AudioResource
 */

/**
 * Emitted when there was an error with the StreamConnection
 * @event StreamConnection#error
 * @param {AudioPlayerError} error AudioPlayerError
 */

export interface StreamConnectionEvents {
    start: [AudioResource<Song>];
    end: [AudioResource<Song>];
    error: [AudioPlayerError];
}