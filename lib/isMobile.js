const isMobile = ctx => {
    const phoneRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i;
    let userAgent = '';

    if (ctx && ctx.hasOwnProperty("req")) {
        userAgent = ctx.req.headers['user-agent'];
    } else {
        userAgent = navigator.userAgent;
    }

    return phoneRegex.test(userAgent);
};

export default isMobile;