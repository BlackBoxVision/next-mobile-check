import Router from 'next/router';

const redirect = (ctx, url, statusCode = 301) => {
    if (ctx && ctx.res) {
        ctx.res.writeHead(statusCode, {
            Location: `${url}`
        });
        ctx.res.end();
        ctx.res.finished = true;
    } else {
        Router.replace(`${url}`);
    }
};

export default redirect;