function getAdsByGoogle() {
    return (window.adsbygoogle = window.adsbygoogle || []);
}
const pushAds = (config) => {
    const ads = (window.adsbygoogle ||= []);
    ads.push(config);
};
export { getAdsByGoogle, pushAds };
