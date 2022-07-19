import { User } from "discord.js";
import { Player, Queue, RawPlaylist, Song } from "..";

export class PlaylistFile {
    public player: Player;
    public queue: Queue;
    public name: string;
    public author: string;
    public url: string;
    public songs: Song[];

    /**
     * PlaylistFile constructor
     * @param {RawPlaylist} raw
     * @param {Queue} queue
     * @param {User} [requestedBy]
     */
    constructor(raw: RawPlaylist, queue: Queue, requestedBy?: User) {
        /**
         * PlaylistFile instance
         * @name PlaylistFile#player
         * @type {Player}
         * @readonly
         */

        /**
         * PlaylistFile instance
         * @name PlaylistFile#queue
         * @type {Queue}
         */

        /**
         * PlaylistFile name
         * @name PlaylistFile#name
         * @type {string}
         */

        /**
         * PlaylistFile author
         * @name PlaylistFile#author
         * @type {string}
         */

        /**
         * PlaylistFile url
         * @name PlaylistFile#url
         * @type {string}
         */

        /**
         * PlaylistFile songs
         * @name PlaylistFile#songs
         * @type {string}
         */

        this.player = queue.player;

        this.queue = queue;

        this.name = raw.name;

        this.author = raw.author;

        this.url = raw.url;

        this.songs = raw.songs;
    }

    /**
     * PlaylistFile name and author in string representation
     * @returns {string}
     */
    toString(): string {
        return `${this.name} | ${this.author}`;
    }
}
