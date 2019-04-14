module.exports = {
    css: {
        loaderOptions: {
            sass: {
                data: `
                    @import "@/styles/_reset.scss";
                    @import "@/styles/_text.scss";
                    @import "@/styles/_variables.scss";
                    @import "@/styles/_utilities.scss";
                    @import "@/styles/_media-queries.scss";
                    @import "@/styles/_vue-transitions.scss";
                `
            }
        }
    }
};
