module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy("style");
	eleventyConfig.addWatchTarget("style");
	eleventyConfig.addPassthroughCopy("admin");
	eleventyConfig.addWatchTarget("admin");
};