const Tracks = require('../models/track');

class TrackService {
    async getAllTracks() {
        try {
            const allTracks = await Tracks.find({visibility: true});
            return allTracks;
        } catch (error) {
            console.error(error);
        }
    }

    async getTrackById(id) {
        try {
            const track = await Tracks.findById(id);
            return track;
        } catch (error) {
            console.error(error);
        }
    }

    async createTrack(data) {
        try {
            const track = new Tracks(data);
             await track.save();
             return track;
        } catch (error) {
            console.error(error);
        }
    }

    async deleteAllTracks() {
        try {
            await Tracks.deleteMany();
            return 'All tracks deleted';
        } catch (error) {
            console.error(error);
        }
    }

    async deleteTrack(id) {
        try {
            console.log(id);
            await Tracks.findByIdAndDelete(id);
            return 'Track deleted';
        } catch (error) {
            console.error(error);
        }
    }
}

module.exports = TrackService;